import { Col, Container, Row } from "react-bootstrap";
import about from "../../assets/image/mint-logo.svg";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <>
            <div className="collection-main about-main common">
                <Container>
                    <div className="collection-content-main">
                        <Row>
                            <Col lg={5} >
                                <div className="collection-img">
                                    <img src={about} alt="collection-img" className="about-img" />
                                </div>
                            </Col>
                            <Col lg={7} >
                                <div className="collection-content">
                                    <h5 className="brown title" >Welcome to the Peoples Academy, The Doge Academy!</h5>
                                    <p className="brown" >The Doge Academy is a community driven Web3 educational project focused on providing real world utility ranging from: </p>
                                    <ul>
                                        <li>The Doge Academy is an Web3 school where you will be able to learn about NFTs and Web3 from experts. The first semester will be half price to encourage early adoption.We host weekly classes for free, so make sure to see our schedule on twitter!
                                        </li>
                                        <li>If you pre-register or purchase Doge Academy 1st Semester Pass you will receive a hand drawn Profile Picture NFT with deeply researched traits based on historical figures and you will also have the opportunity to attend a live 8 week course which will teach you how to create and deploy your own NFT collection.</li>
                                        <li>At the conclusion of the course, you will receive a certificate for completion as well as a survey to share feedback about your experience and learning.</li>
                                        <li>The Doge Academy would not exist without the support of the @ownthedoge community, please check out their discord and twitter below!</li>
                                        <li>If you have any questions, please pop into our discord and open a support ticket or shoot me an e-mail at DogeKing@DogeGenerals.com</li>
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