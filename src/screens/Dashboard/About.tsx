import { Col, Container, Row } from "react-bootstrap";
import about from "../../assets/image/mint-logo.svg";

const About = () =>{
    return(
        <>
            <div className="collection-main about-main common">
                <Container>
                    <div className="collection-content-main">
                        <Row className="align-items-center" >
                            <Col lg={5} >
                                <div className="collection-img">
                                    <img src={about} alt="collection-img" />
                                </div>
                            </Col>
                            <Col lg={7} >
                                <div className="collection-content">
                                    <h5 className="brown title" >What is the Doge Academy?</h5>
                                    <p className="brown" >The Doge Academy is a community driven Web3 educational project focused on providing real world utility ranging from: </p>
                                    <ul>
                                        <li>1. 1 on 1 resume review and professional coaching by an expert</li>
                                        <li>2. Leveraging cutting edge web3 technology to enable community to select high quality token gated courses on subjects like creating a generative NFT Collection, 3d printing, programing, or robotics. </li>
                                        <li>3. Promote open public discourse on subjects like history and technology.</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default About;