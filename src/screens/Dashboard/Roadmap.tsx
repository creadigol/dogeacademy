import { Container, Row, Col } from "react-bootstrap";
import roadmap1 from "../../assets/image/roadmap1.svg";
import roadmap2 from "../../assets/image/roadmap2.svg";
import roadmap3 from "../../assets/image/roadmap3.svg";
import roadmap4 from "../../assets/image/roadmap4.svg";

const Roadmap = () =>{
    return(
        <>
            <div className="roadmap-main common">
                <Container>
                    <div className="collection-header">
                        <h5 className="title brown" >Roadmap</h5>
                        <p className="subtitle" >The Doge Academy art is deeply researched, hand drawn, and is based primarily on real historical figures throughout history and from all over the world. </p>
                    </div>
                    <Row>
                        <Col xl={3} lg={12} >
                            <div className="roadmap-content">
                                <Row className="align-items-center" >
                                    <Col xl={{ order: 'first' , span: 12 }} lg={{ order: 'first' , span: 8 }} md={{ order: 'first' , span: 8 }} sm={{ order: 'last' , span: 12 }} xs={{ order: 'last' , span: 12 }} >
                                        <div className="roadmap-subcontent roadmap-subcontent-top">
                                            <h5>Phase 1</h5>
                                            <ul>
                                                <li>Community Building</li>
                                                <li>Open Weekly Events and Lectures by 
                                                    experts and community members. Please reach out if you have suggestions and ideas!</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xl={{ order: 'first' , span: 12 }} lg={{ order: 'first' , span: 4 }} md={{ order: 'first' , span: 4 }} sm={{ order: 'first' , span: 12 }} xs={{ order: 'first' , span: 12 }} >
                                        <div className="roadmap-img" >
                                            <img src={roadmap1} alt="roadmap" />
                                        </div>
                                    </Col>
                                    <Col xl={{ order: 'first' , span: 12 }} >
                                        <div className="roadmap-subcontent roadmap-subcontent-blank"></div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xl={3} lg={12} >
                            <div className="roadmap-content roadmap-content-odd">
                                <Row className="align-items-center" >
                                    <Col xl={{ order: 'first' , span: 12 }}  >
                                        <div className="roadmap-subcontent roadmap-subcontent-blank"></div>
                                    </Col>
                                    <Col xl={{ order: 'first' , span: 12 }} lg={{ order: 'first' , span: 4 }} md={{ order: 'first' , span: 4 }} >
                                        <div className="roadmap-img" >
                                            <img src={roadmap2} alt="roadmap" />
                                        </div>
                                    </Col>
                                    <Col xl={{ order: 'first' , span: 12 }} lg={{ order: 'first' , span: 8 }} md={{ order: 'first' , span: 8 }} >
                                        <div className="roadmap-subcontent roadmap-subcontent-bottom">
                                            <h5>Phase 2</h5>
                                            <ul>
                                                <li>Expand collaborations with established projects and collect feedback from community on art and traits. </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xl={3} lg={12} >
                            <div className="roadmap-content">
                                <Row className="align-items-center" >
                                    <Col xl={{ order: 'first' , span: 12 }} lg={{ order: 'first' , span: 8 }} md={{ order: 'first' , span: 8 }} sm={{ order: 'last' , span: 12 }} xs={{ order: 'last' , span: 12 }} >
                                        <div className="roadmap-subcontent roadmap-subcontent-top">
                                            <h5>Phase 3</h5>
                                            <ul>
                                                <li>Minting is live! Holders chat established, community voting system published, career support and resume reviews scheduled,  and holder-only drops</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xl={{ order: 'first' , span: 12 }} lg={{ order: 'first' , span: 4 }} md={{ order: 'first' , span: 4 }} sm={{ order: 'first' , span: 12 }} xs={{ order: 'first' , span: 12 }} >
                                        <div className="roadmap-img" >
                                            <img src={roadmap3} alt="roadmap" />
                                        </div>
                                    </Col>
                                    <Col xl={{ order: 'first' , span: 12 }} >
                                        <div className="roadmap-subcontent roadmap-subcontent-blank"></div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xl={3} lg={12} >
                            <div className="roadmap-content roadmap-content-odd">
                                <Row className="align-items-center" >
                                    <Col xl={{ order: 'first' , span: 12 }} >
                                        <div className="roadmap-subcontent roadmap-subcontent-blank"></div>
                                    </Col>
                                    <Col xl={{ order: 'first' , span: 12 }} lg={{ order: 'first' , span: 4 }} md={{ order: 'first' , span: 4 }} >
                                        <div className="roadmap-img last-roadmap-img" >
                                            <img src={roadmap4} alt="roadmap" />
                                        </div>
                                    </Col>
                                    <Col xl={{ order: 'first' , span: 12 }} lg={{ order: 'first' , span: 8 }} md={{ order: 'first' , span: 8 }} >
                                        <div className="roadmap-subcontent roadmap-subcontent-bottom">
                                            <h5>Phase 4</h5>
                                            <ul>
                                                <li>Minted out! Collection revealed, first semester kicks off with a community selected in-depth course! </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Roadmap;