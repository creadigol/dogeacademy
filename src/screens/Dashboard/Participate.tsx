import { Container, Row, Col } from "react-bootstrap";
import dog from "../../assets/image/dog.svg";
import dogleft from "../../assets/image/dog_left.svg";

const Participate = () => {
    return (
        <>
            <div className="participate-main common">
                <Container>
                    <div className="collection-header">
                        <h5 className="title brown" >Participate</h5>
                    </div>
                    <div className="preregister_content">
                        <h6>Crypto Pay</h6>
                        <p>Join minting allowlist and mint on Oct. 26th for a 50% discount. This requires a Metamask or Crypto Wallet to Register. Make sure to provide your email address when signing up for updates! (Add Button that links to Pre-mint.xyz)</p>
                    </div>
                    <div className="preregister_content">
                        <h6>Fiat Pay</h6>
                        <p>Pre-register and guarantee your seat at a discounted rate, and pay with with credit card or crypto (Button). <span>Once we start minting the First Semester NFTs, we will host a special class where I teach you how to set up a wallet, and claim the NFT. </span></p>
                        <a href="https://www.thinkific.com/" target="_blank" className="buynow" >PAY</a>
                    </div>
                    <Row>
                        <Col xl={12} >
                            <div className="minting_info">
                                <h6>Public Mint</h6>
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
                    {/* <Row className="align-items-center" >
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
                                        <p>777/200 NFTs Minted</p>
                                    </div>
                                    <form name="mintform" method="post" >
                                        <div className="mintbox-body">
                                            <div className="mintbox-content" >
                                                <Col lg={12} >
                                                    <div className="mintbox-subcontent" >
                                                        <Row>
                                                            <Col xs={4} >
                                                                <p>Price</p>
                                                            </Col>
                                                            <Col xs={8} >
                                                                <h5 className="text-center" >0</h5>
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
                                                                <h5><span>-</span>1<span>+</span></h5>
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
                                                                <h5 className="text-center" >0</h5>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                            </div>
                                        </div>
                                        <>
                                            <button className="buynow"> CONNECT</button>
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
                    </Row> */}
                </Container>
            </div>
        </>
    );
}

export default Participate;