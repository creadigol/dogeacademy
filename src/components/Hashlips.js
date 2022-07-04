import React, { Component } from 'react';
import Web3 from 'web3';
import MarketingContrct from '../abis/Marketing.json';
import Services from './Service';
import keccak256 from "keccak256"
import { MerkleTree } from "merkletreejs"
import "./App.css";

class Hashlips extends Component{
    async componentWillMount() { 
        await this.loadWeb3()
        await this.loadBlockchainData()
    }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        } else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    async loadBlockchainData() {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        const networkId = await web3.eth.net.getId()
        const contractAddr = await MarketingContrct.networks[networkId].address;
        const marketing = web3.eth.Contract(MarketingContrct.abi, contractAddr)   
        const totalSupply = await marketing.methods.maxSupply().call();
        const mintedAmount = await marketing.methods.totalSupply().call();
        const dogWhitelsitSupply = await marketing.methods.maxDogWhitelist().call();
        const whitelistSupply = await marketing.methods.maxWhitelsitAlpha().call();
        const price = await marketing.methods.cost().call();
        const whitelistPrice = await marketing.methods.whitelistCost().call();
        const saleStatus = await marketing.methods.paused().call();

        const totalMintToken = await marketing.methods.totalSupply().call();
        const pendingRevivalFrom = await marketing.methods.pendingRevival().call();
        const pendingRevival = (Number(totalMintToken) - ((Number(pendingRevivalFrom) == 1)?0:(Number(pendingRevivalFrom)-1)));

        const ipfsList = await Services.post("nftList");
        let ipfsCount = 0;
        if(ipfsList.data.status){
            ipfsCount= ipfsList.data.data.length;
        }
        
        this.setState({ marketing })
        this.setState({contractAddr: contractAddr,mintedAmount:Number(mintedAmount),dogWhitelsitSupply:Number(dogWhitelsitSupply), whitelistPrice:web3.utils.fromWei(whitelistPrice.toString()), price:web3.utils.fromWei(price.toString()), totalSupply:Number(totalSupply), whitelistSupply:Number(whitelistSupply), saleStatus:saleStatus, ipfsCount: ipfsCount, pendingRevival:pendingRevival,penRivivalFrom:pendingRevivalFrom, loading:false});

    }

    constructor(props) {
        super(props);
        this.state = {
            marketing:null,
            contractAddr:null,
            account:null,
            whitelistPrice:0,
            price:0,
            totalSupply:0,
            whitelistSupply:0,
            saleStatus:true,
            ipfsCount:0,
            pendingRevival:0,
            loading:true,
            dogWhitelsitSupply:0,
            mintedAmount:0
        };
    }

    setPrice = async(e) => {
        e.preventDefault();
        const web3 = window.web3
        const thisss = this;
        this.setState({ loading: true })

        const price = web3.utils.toWei(e.target.price.value.toString());

        this.state.marketing.methods.setCost(price).send({ from: this.state.account }).once('transactionHash', (transactionHash) => {
            thisss.waitForReceipt(transactionHash, function () {
                alert("Price updated Successfully");
                thisss.setState({ loading: false});
            });
        });
    }

    setWhitelistPrice = async(e) => {
        e.preventDefault();
        const web3 = window.web3
        const thisss = this;
        this.setState({ loading: true })

        const whitelistPrice = web3.utils.toWei(e.target.whitelistPrice.value.toString());

        this.state.marketing.methods.setWhitelistCost(whitelistPrice).send({ from: this.state.account }).once('transactionHash', (transactionHash) => {
            thisss.waitForReceipt(transactionHash, function () {
                alert("Whitelist price updated Successfully");
                thisss.setState({ loading: false});
            });
        });
    }

    setTotalSupply = async(e) => {
        e.preventDefault();
        const web3 = window.web3
        const thisss = this;
        this.setState({ loading: true })

        const totalSupply = e.target.totalSupply.value;

        this.state.marketing.methods.setMaxSupply(totalSupply).send({ from: this.state.account }).once('transactionHash', (transactionHash) => {
            thisss.waitForReceipt(transactionHash, function () {
                alert("Whitelist price updated Successfully");
                thisss.setState({ loading: false});
            });
        });
    }

    setWhitelsitTotalSupply = async(e) => {
        e.preventDefault();
        const web3 = window.web3
        this.setState({ loading: true })
        const thisss = this;

        const totalSupply = e.target.totalWhitelistSupply.value;

        this.state.marketing.methods.setAlphaWhitelistMaxSupply(totalSupply).send({ from: this.state.account }).once('transactionHash', (transactionHash) => {
            thisss.waitForReceipt(transactionHash, function () {
                alert("Alpha Whitelist price updated Successfully");
                thisss.setState({ loading: false});
            });
        });
    }

    setDogWhitelsitTotalSupply = async(e) => {
        e.preventDefault();
        const web3 = window.web3
        const thisss = this;
        this.setState({ loading: true })

        const totalSupply = e.target.totalDogWhitelistSupply.value;

        this.state.marketing.methods.setDogWhitelistMaxSupply(totalSupply).send({ from: this.state.account }).once('transactionHash', (transactionHash) => {
            thisss.waitForReceipt(transactionHash, function () {
                alert("Alpha Whitelist price updated Successfully");
                thisss.setState({ loading: false});
            });
        });
    }

    addMintDogList = async(e) => {
        e.preventDefault();
        const web3 = window.web3
        this.setState({ loading: true })

        const totalSupply = e.target.doglistAddress.value;
        const result = await Services.post("addDoglist", {wallet: totalSupply});
        alert(result.data.msg);
        this.setState({ loading: false});
    }

    updateWhitelistContract = async() => {
        this.setState({loading: true})
        const thisss = this

        const doglistAddr = await Services.post("getAllWhitelist");
        if(doglistAddr.data.status){

                const dogsMarkelleave = doglistAddr.data.data.doglist.map(data => keccak256(String(data.wallet)));
                const alphaMarkelleave = doglistAddr.data.data.whitelist.map(data => keccak256(String(data.wallet)));

                const dogsTree = new MerkleTree(dogsMarkelleave, keccak256, { sort: true })
                const dogsRoot = dogsTree.getHexRoot()

                console.log("dogsRoot")
                console.log(dogsRoot);

                const alphaTree = new MerkleTree(alphaMarkelleave, keccak256, { sort: true })
                const alphaRoot = alphaTree.getHexRoot()

                console.log("alphaRoot")
                console.log(alphaRoot);


                this.state.marketing.methods.updateWhitelists(dogsRoot,alphaRoot).send({ from: this.state.account }).once('transactionHash', (transactionHash) => {
                    thisss.waitForReceipt(transactionHash, async function () {
                        alert("Whitelist updated in contract");
                        thisss.setState({ loading: false});
                    });
                });

        }else{
            alert(doglistAddr.data.msg);
            this.setState({ loading: false});
        }
    }

    mint = async(e) => {
        e.preventDefault();
        const web3 = window.web3
        const thisss = this;
        this.setState({ loading: true })

        let price = 0;

        const amount = e.target.amount.value

        const mintedDogList = await this.state.marketing.methods.DogWhitelsitSupply().call();
        
        let isInDoglist = false;
        if(Number(mintedDogList) < this.state.dogWhitelsitSupply){
            isInDoglist = true;
        }

        const isStartDoglistSale = await this.state.marketing.methods.saleEndtime().call();
        const isWhitelist = await Services.post("isWhitelist", {address:this.state.account, isInDoglist:isInDoglist, doglistSaleStatus:Number(isStartDoglistSale)});
        if(isWhitelist.data.status){

            const whitelistLeave = isWhitelist.data.data.map(data => keccak256(String(data.wallet)));
            const tree = new MerkleTree(whitelistLeave, keccak256, { sort: true })
            
            const merkleProof = tree.getHexProof(keccak256(String(this.state.account)))

            let price = web3.utils.toWei((Number(this.state.price)*amount).toString());

            if(isWhitelist.data.type == 'dogs'){
                price = web3.utils.toWei("0");
            }else if(isWhitelist.data.type == 'alpha'){
                price = web3.utils.toWei((Number(this.state.whitelistPrice)*amount).toString());
            }

            this.state.marketing.methods.mint(amount, merkleProof).send({ from: this.state.account, value:Number(price) }).once('transactionHash', (transactionHash) => {
                thisss.waitForReceipt(transactionHash, function () {
                    alert("NFT mint Successfully");
                    thisss.setState({ loading: false});
                });
            });

        }else{
            alert(isWhitelist.data.msg);
            this.setState({ loading: false});
        }
    }

    updateStatus = async(e) => {
        e.preventDefault();
        const thisss = this
        const web3 = window.web3
        this.setState({ loading: true })
        const saleStatus = !this.state.saleStatus;
        this.state.marketing.methods.setPaused(saleStatus).send({ from: this.state.account }).once('transactionHash', (transactionHash) => {
            thisss.waitForReceipt(transactionHash, function () {
                alert("Sale status updated Successfully");
                thisss.setState({ loading: false});
            });
        });
    }

    addIpfsUrl = async(e) => {
        e.preventDefault();
        const web3 = window.web3;
        this.setState({ loading: true})

        const baseUrl = e.target.baseUrl.value;
        const totalutl = e.target.totalutl.value;

        let ipfsList = [];
        for (let index = 1; index <= totalutl; index++) {
            ipfsList.push((baseUrl+index+'.json'));
            if(index == totalutl){
                const result = Services.post("addNewnft", ipfsList);
                alert(result.data.msg);
                this.setState({ loading: false});
            }
        }
    }

    addWhitelist = async(e) => {
        e.preventDefault();
        const address = (e.target.whitelist.value).toLowerCase();
        const result = await Services.post("addWhitelist", {wallet:address});
        alert(result.data.msg);
    }

    reveal = async() => {

        const web3 = window.web3;
        this.setState({ loading: true})
        const thisss = this

        const limit = this.state.pendingRevival;
        const nfturis =  await Services.post("revivalnftList", {limit: limit});
        

        if(nfturis.data.status){
            if(limit != 0){
                if(this.state.pendingRevival == nfturis.data.data.length){

                    const resultArray = nfturis.data.data;

                    var resultOfRandom = resultArray.map(function (el) { return el.ipfsUri; });
                    var resultOfIds = resultArray.map(function (el) { return el.id; });

                    this.state.marketing.methods.reveal(resultOfRandom).send({ from: this.state.account }).once('transactionHash', (transactionHash) => {
                        thisss.waitForReceipt(transactionHash, function () {
                            //  thisss.setState({ isRevival:true })
                             thisss.updateArrayNft(resultOfIds, thisss.state.penRivivalFrom.toString());
                        });
                    });

                }else{
                    alert("You need to add "+(limit-nfturis.data.data.length)+" More NFT-URI");  
                    this.setState({ loading: false});  
                }
            }else{
                alert("Mint nft for revial");
                this.setState({ loading: false});
            }
        }else{
            alert(nfturis.data.msg);
            this.setState({ loading: false});
        } 


    }

    updateArrayNft = async (resultArray,lastrevivalId) => {
        const updateStatus1 =  await Services.post("updateRivivalNft", {updateArray : resultArray, lastrevivalId: lastrevivalId});
                        
        if(updateStatus1.data.status){
            this.setState({ loading: false })
            window.location.reload();
        }else{
            alert(updateStatus1.data.msg);
            this.setState({ loading: false});
        }
    }
    
    async waitForReceipt(hash, cb) {
        const web3 = window.web3;
        const thiss = this;
        web3.eth.getTransactionReceipt(hash, function (err, receipt) {
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
                thiss.waitForReceipt(hash, cb);
              }, 1000);
            }
        });
    }


    render() { 
        return (
            <> 
                <div className="container">
                    <div className="create_market_form card p-5">
                        <h3 className='text-center'>Admin Use Only</h3>

                        <div className='d-flex justify-content-center'>
                            <div className='card m-3 p-3 text-center'>
                                <h4>Public Minting</h4>
                                <p>Total Supply : {this.state.mintedAmount}/{this.state.totalSupply}</p>
                                <p>Public Cost : {this.state.price}</p>
                            </div>
                            <div className='card m-3 p-3 text-center'>
                                <h4>Dogs Supply</h4>
                                <p>Total Supply : {this.state.dogWhitelsitSupply}</p>
                                <p>Price : 0.00</p>
                            </div>
                            <div className='card m-3 p-3 text-center'>
                                <h4>Alpha Supply</h4>
                                <p>Total Supply : {this.state.whitelistSupply}</p>
                                <p>Price : {this.state.whitelistPrice}</p>
                            </div>
                           
                            <div className='card m-3 p-3 text-center'>
                                <h4>IPFS Links</h4>
                                <p>{this.state.ipfsCount}</p>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <form method='POST' action='#' onSubmit={this.addIpfsUrl}>
                            <h4>Add IPFS URL</h4>

                            <div className="form-group">
                                <input type="text" name="baseUrl" className="form-control" placeholder="Base URL" />
                            </div>
                            <div className="form-group">
                                <input type="number" name="totalutl" className="form-control" placeholder="Link Total" />
                            </div>
                            <div className="form-group">
                                <button type="submit" name="submit" className='btn btn-primary'>Add URL</button>
                            </div>

                        </form>


                        <br/>
                        <br/>
                        {/* {console.log(this.state.saleStatus)} */}
                        <form method='POST' action='#' onSubmit={this.updateStatus}>
                            <h4>Update Sale Status : <b>{(this.state.saleStatus)?"Stop Sale":"Start Sale"}</b></h4>
                            <div className="form-group">
                                <button type="submit" name="submit" className='btn btn-primary'>Update Sale Status</button>
                            </div>
                        </form>

                        <br/>
                        <br/>
                        <form method='POST' action='#' onSubmit={this.setPrice}>
                            <h4>Set Public NFT Price</h4>

                            <div className="form-group">
                                <input type="text" name="types" className="form-control" placeholder="NFT Price 0.01 ETH" />
                            </div>

                            <div className="form-group">
                                <button type="submit" name="submit" className='btn btn-primary'>Update Price</button>
                            </div>

                        </form>

                        <br/>
                        <br/>
                        <form method='POST' action='#' onSubmit={this.setWhitelistPrice}>
                            <h4>Alpha Whitelist Address NFT Price</h4>

                            <div className="form-group">
                                <input type="text" name="whitelistPrice" className="form-control" placeholder="Price 0.001 ETH" />
                            </div>

                            <div className="form-group">
                                <button type="submit" name="submit" className='btn btn-primary'>Update Price</button>
                            </div>

                        </form>

                        <br/>
                        <br/>
                        <form method='POST' action='#' onSubmit={this.setTotalSupply}>
                            <h4>Set Max Supply of NFT</h4>

                            <div className="form-group">
                                <input type="number" name="totalSupply" className="form-control" placeholder="Total Supply" />
                            </div>

                            <div className="form-group">
                                <button type="submit" name="submit" className='btn btn-primary'>Update Total Supply</button>
                            </div>

                        </form>
                        
                        <br/>
                        <br/>
                        <form method='POST' action='#' onSubmit={this.setWhitelsitTotalSupply}>
                            <h4>Set Alpha Whitelist Max Supply of NFT</h4>

                            <div className="form-group">
                                <input type="number" name="totalWhitelistSupply" className="form-control" placeholder="Total Supply" />
                            </div>

                            <div className="form-group">
                                <button type="submit" name="submit" className='btn btn-primary'>Update whitelist Total Supply</button>
                            </div>

                        </form>

                        <br/>
                        <br/>
                        
                        <form method='POST' action='#' onSubmit={this.setDogWhitelsitTotalSupply}>
                            <h4>Set DOGS Whitelist Max Supply of NFT</h4>

                            <div className="form-group">
                                <input type="number" name="totalDogWhitelistSupply" className="form-control" placeholder="Total Supply" />
                            </div>

                            <div className="form-group">
                                <button type="submit" name="submit" className='btn btn-primary'>Update DOGS whitelist Total Supply</button>
                            </div>

                        </form>

                        <br/>
                        <br/>
                        <form method='POST' action='#' onSubmit={this.addMintDogList}>
                            <h4>DOGS whitelist address:</h4>

                            <div className="form-group">
                                <input type="text" name="doglistAddress" className="form-control" placeholder="0X00"/>
                            </div>

                            <div className="form-group">
                                <button type="submit" name="submit" className='btn btn-primary'>Add DOG whitelist</button>
                            </div>

                        </form>

                        <br/>
                        <br/>
                        <form method='POST' action='#' onSubmit={this.addWhitelist}>
                            <h4>Alpha Whitelist Address:</h4>

                            <div className="form-group">
                                <input name="whitelist" className="form-control" placeholder="0X00"/>
                            </div>

                            <div className="form-group">
                                <button type="submit" name="submit" className='btn btn-primary'>Add Alpha Whitelist</button>
                            </div>

                        </form>

                        <br/>
                        <br/>
                            <button type='button' name="whitelistconteact" className='btn btn-primary' onClick={this.updateWhitelistContract}>Update Whitelist to contract</button>

                        <br/>
                        <br/>
                            <button type='button' name="reveal" className='btn btn-danger' onClick={this.reveal}>Reveal NFTS</button>
                        <br/>
                        <br/>
                        

                    </div>

                    <br/>
                    <br/>
                    <br/>

                    <div className="create_market_form card p-5">
                        <h3 className='text-center'>For Public</h3>
                        <br/>
                        <form method='POST' action='#' onSubmit={this.mint} style={{textAlign:'center'}}>
                            
                            <div className="form-group">
                                <input type="number" name="amount" className="form-control" placeholder="NFT Number" />
                            </div>
                            <div className="form-group">
                            Mint NFT : <button type="submit" name="submit" className='btn btn-primary'>Mint NFT</button>
                            </div>

                        </form>
                    </div>
                    
                    
                    {
                    this.state.loading && 
                        <div className='loaderScreen'>
                            <div className="loader"></div>
                        </div>
                    }

                </div>
            </>
        )
    }


}

export default Hashlips;