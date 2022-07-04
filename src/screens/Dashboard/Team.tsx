import { Col, Container, Row } from "react-bootstrap";
import about from "../../assets/image/about.png";

const Team = () =>{
    return(
        <>
            <div className="collection-main common">
                <Container>
                    <div className="collection-content-main">
                        <Row className="align-items-center" >
                            <Col lg={6} >
                                <div className="collection-img">
                                    <img src={about} alt="collection-img" />
                                </div>
                            </Col>
                            <Col lg={6} >
                                <div className="collection-content">
                                    <h5 className="brown" >Previous Team Project: <br /> Doge Generals</h5>
                                    <p className="brown" >Doge Generals brings fascinating historical figures to life by carefully animating beautiful masterpieces, adding super dope audio, with a good dose of meme.</p>
                                    <a href="#" className="buynow" >CLICK HERE</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Team;