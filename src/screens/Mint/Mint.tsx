import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import dog from "../../assets/image/dog.svg";
import dogleft from "../../assets/image/dog_left.svg";
import Footer from "../../components/Layout/Footer/Footer";
import { ReducerStateIF } from "../../redux/reducers";
import "./Mint.css";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from 'react-device-detect';
import { connect, intContract } from "../../redux/actions/BlockchainActions";
import Services from "../../components/Helper/Services";
import keccak256 from "keccak256";
import { MerkleTree } from "merkletreejs";
import Simulation from "../../components/Simulation/Simulation";

declare let window: any;

const Mint = () =>{

    const dispatch = useDispatch();
    const blockchain = useSelector((state:ReducerStateIF) => state.blockchain);
    const [loding, setLoding] = useState(true);
    const [price, setPrice] = useState(0);
    const [maxDogwhitelist, setMaxDogWhitelist] = useState(0);
    const [whitelistPrice, setWhitelistPrice] = useState(0);
    const [totalNft, setTotalNft] = useState({
        total:0,
        minted:0 
    });

    useEffect(() => {
        async function getNftPrice(){
            const getPrice = await blockchain.TestContract.methods.cost().call();
            setPrice(getPrice/10**18);

            const getWhitelistprice = await blockchain.TestContract.methods.whitelistCost().call();
            setWhitelistPrice(Number(getWhitelistprice));

            const dogWhitelsitSupply = await blockchain.TestContract.methods.maxDogWhitelist().call();
            setMaxDogWhitelist(Number(dogWhitelsitSupply));

            setLoding(false);

        }

        if(!isMobile){
            if(blockchain.TestContract === null){
                dispatch(intContract());
            }else{
                getTotalMintedNft();
                getNftPrice();
            }
        }else{
            if (window.ethereum) {
                if(blockchain.TestContract === null){
                    dispatch(intContract());
                }else{
                    getTotalMintedNft();
                    getNftPrice();
                }   
            }
        }

    },[blockchain]);

    const [number, setNumber] = useState(1);
    const increamentNum = () =>{
        setNumber(number + 1);
    }
    const decreamentNum = () =>{
        if(number > 1){
            setNumber(number - 1);
        }
    }

    const getTotalMintedNft = async() =>{
        const maxSupplay = await blockchain.TestContract.methods.maxSupply().call();    
        const totalMintToken = await blockchain.TestContract.methods.totalSupply().call();    

        setTotalNft({
            total:Number(maxSupplay),
            minted: Number(totalMintToken)
        })
    }

    const mintNft = async(e:any) => {
        e.preventDefault();
        setLoding(true);

        const mintedDogList = await blockchain.TestContract.methods.DogWhitelsitSupply().call();
        
        let isInDoglist = false;
        if(Number(mintedDogList) < maxDogwhitelist){
            isInDoglist = true;
        }
        const isStartDoglistSale = await blockchain.TestContract.methods.saleEndtime().call();
        const isWhitelist = await Services.post("isWhitelist", {address:blockchain.account, isInDoglist:isInDoglist, doglistSaleStatus:Number(isStartDoglistSale)});
        if(isWhitelist.data.status){

            const whitelistLeave = isWhitelist.data.data.map((data:any) => keccak256(String(data.wallet)));
            const tree = new MerkleTree(whitelistLeave, keccak256, { sort: true })
            const merkleProof = tree.getHexProof(keccak256(String(blockchain.account)))
            let mintprice = blockchain.web3.utils.toWei((Number(price)*number).toString());

            if(isWhitelist.data.type == 'dogs'){
                mintprice = blockchain.web3.utils.toWei("0");
            }else if(isWhitelist.data.type == 'alpha'){
                mintprice = blockchain.web3.utils.toWei((Number(whitelistPrice)*number).toString());
            }

            blockchain.TestContract.methods.mint(number, merkleProof).send({ from: blockchain.account, value:Number(mintprice) }).on('transactionHash', function(hash:any){
                waitForReceipt(hash, async function(response:any) {
                    if(response.status){
                        
                        setNumber(1);
                        alert("Nft Mint successfully");
                        setLoding(false);
                        
                    }else{
                        alert(response.msg);
                        setLoding(false);
                    } 
                    
                });
            }).on('error', function(error:any, receipt:any) {
                alert(error.message);
                setLoding(false);
            });

        }else{
            alert(isWhitelist.data.msg);
            setLoding(false);
        }
    }

    const waitForReceipt = async (hash:any, cb:any) => {
            blockchain.web3.eth.getTransactionReceipt(hash, function (err:any, receipt :any) {
            if (err) {
                console.log(err);
            }  
        
            if (receipt !== null) {
                if (cb) {
                    if(receipt.status == '0x0') {
                        cb({status:false, msg: "The contract execution was not successful, check your transaction !"});
                    } else {
                        cb({status:true, msg:"Execution worked fine!"});
                    }
                }
            } else {
                window.setTimeout(function () {
                    waitForReceipt(hash, cb);
                }, 1000);
            }
            });
    } 

    return(
        <>
            <div className="subsection-main">
                <Simulation />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className="mint-main">
                        <Container>
                            <Row>
                                <Col xl={12} >
                                    <div className="mint_option" >
                                        <Nav variant="pills">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Join Minting</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Pre Register</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Public Mint</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </Col>
                                <Col xl={{ order: 1 , span: 12 }} lg={{ order: 2 , span: 6 }} md={{ order: 1 , span: 12 }} sm={{ order: 1 , span: 12 }} xs={{ order: 1 , span: 12 }} >
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="preregister_content">
                                                <h6>Join Minting</h6>
                                                <p>Join minting allowlist and mint on Oct. 26th for a 50% discount. This requires a Metamask or Crypto Wallet to Register. Make sure to provide your email address when signing up for updates! (Add Button that links to Pre-mint.xyz)</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="preregister_content">
                                                <h6>Pre Register</h6>
                                                <p>Pre-register and guarantee your seat at a discounted rate, and pay with with credit card or crypto (Button). <span>Once we start minting the First Semester NFTs, we will host a special class where I teach you how to set up a wallet, and claim the NFT. </span></p>
                                                <a href="https://www.moonpay.com/" target="_blank" className="buynow" >PAY</a>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <Row>
                                                <Col xl={12} >
                                                    <div className="minting_info">
                                                        <h6>Minting Information</h6>
                                                        <ul>
                                                            <li>Allow List Mint Cost : <span>.05 ETH</span></li>
                                                            <li>Pre-registration Cost : <span>$ 100.00</span></li>
                                                            <li>Public Sale Mint Cost : <span>1 ETH</span></li>
                                                            <li>Mint Date : <span>Oct 26th-Oct 31st</span></li>
                                                            <li>Mint # : <span>Open Mint</span></li>
                                                        </ul>
                                                    </div>                
                                                </Col>
                                            </Row>
                                            <Row className="align-items-center" >
                                                <Col xl={3} >
                                                    <div className="doge_logo">
                                                        <img src={dog} alt="doge" />
                                                    </div>
                                                </Col>
                                                <Col xl={6} >
                                                    <div className="mintbox-main" >
                                                        <div className="mintbox-main-content">
                                                            <div className="mintbox-header">
                                                                <h5 className="brown" >PreSale Mint NFTs</h5>
                                                                <p>{totalNft.minted}/{totalNft.total} NFTs Minted</p>
                                                            </div>
                                                            <form name="mintform" method="post" onSubmit={mintNft}>
                                                                <div className="mintbox-body">
                                                                    <div className="mintbox-content" >
                                                                        <Col lg={12} >
                                                                            <div className="mintbox-subcontent" >
                                                                                <Row>
                                                                                    <Col xs={4} >
                                                                                        <p>Price</p>
                                                                                    </Col>
                                                                                    <Col xs={8} >
                                                                                        <h5 className="text-center" >{price}</h5>
                                                                                    </Col>
                                                                                </Row>
                                                                            </div>
                                                                        </Col>
                                                                    </div>
                                                                    <div className="mintbox-content" >
                                                                        <Col lg={12} >
                                                                            <div className="mintbox-subcontent" >
                                                                                <Row className="align-items-center" >
                                                                                    <Col xs={4} >
                                                                                        <p>Amount</p>
                                                                                    </Col>
                                                                                    <Col xs={8} className="text-center" >
                                                                                        <h5><span onClick={decreamentNum}>-</span>{number}<span onClick={increamentNum}>+</span></h5>
                                                                                    </Col>
                                                                                </Row>
                                                                            </div>
                                                                        </Col>
                                                                    </div>
                                                                    <div className="mintbox-content" >
                                                                        <Col lg={12} >
                                                                            <div className="mintbox-subcontent" >
                                                                                <Row>
                                                                                    <Col xs={4} >
                                                                                        <p>Total</p>
                                                                                    </Col>
                                                                                    <Col xs={8} >
                                                                                        <h5 className="text-center" >{price*number}</h5>
                                                                                    </Col>
                                                                                </Row>
                                                                            </div>
                                                                        </Col>
                                                                    </div>
                                                                </div>
                                                                <>
                                                                    {
                                                                        (blockchain.account == null)?(
                                                                            <button onClick={(e) => {
                                                                                e.preventDefault();
                                                                                dispatch(connect());
                                                                            }}  className="buynow"> CONNECT</button>
                                                                        ):(
                                                                            <>
                                                                                { !loding?(                                            
                                                                                    <>
                                                                                        <button type="submit" className="buynow">CLAIM NFT</button>
                                                                                        <h6>Wallet Id : {blockchain.account.substring(0, 5)+'...'+blockchain.account.slice(-5)}</h6>
                                                                                    </>
                                                                                ):(
                                                                                    <button type="button" className="buynow" disabled>Wait...</button>
                                                                                )}
                                                                            </>
                                                                        )
                                                                    }
                                                                </>
                                                            </form>
                                                        </div>
                                                        <div className="backgroundcolor-mint" ></div>
                                                    </div>
                                                </Col>
                                                <Col xl={3} >
                                                    <div className="doge_logo">
                                                        <img src={dogleft} alt="doge" />
                                                    </div>               
                                                </Col>
                                            </Row>
                                            
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Tab.Container>
                <Footer />
            </div>
        </>
    );
}

export default Mint