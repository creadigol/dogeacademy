import { Col, Container, Row } from "react-bootstrap";
import nft1 from "../../assets/image/nft1.png";
import nft2 from "../../assets/image/nft2.png";
import nft3 from "../../assets/image/nft3.png";
import nft4 from "../../assets/image/nft4.png";

const TeamList = () =>{
    return(
        <>
            <div className="teamlist_main common">
                <Container>
                    <Row>
                        <Col xl={8} >
                            <div className="team_content">
                                <div className="collection-header">
                                    <h5 className="title brown" >The Team</h5>
                                    <p className="subtitle" ></p>
                                    <ul>
                                        <li>DogeKing : </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} >
                            <Row>
                                <Col xl={6} >
                                    <img src={nft1} alt="" className="team_image" />
                                </Col>
                                <Col xl={6} >
                                    <img src={nft1} alt="" className="team_image" />
                                </Col>
                                <Col xl={6} >
                                    <img src={nft1} alt="" className="team_image" />
                                </Col>
                                <Col xl={6} >
                                    <img src={nft1} alt="" className="team_image" />  
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default TeamList;