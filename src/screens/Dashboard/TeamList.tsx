import { Col, Container, Row } from "react-bootstrap";
import team1 from "../../assets/image/team1.png";
import team2 from "../../assets/image/team2.png";
import team3 from "../../assets/image/team3.png";
import team4 from "../../assets/image/team4.png";
import team5 from "../../assets/image/team5.png";
import team6 from "../../assets/image/team6.png";
import twitter from "../../assets/image/twitter.svg";

const TeamList = () =>{

    const data = [
        {
            id: 1,
            teamimg: team1,
            link: "https://twitter.com/DogeGenerals",
            teamname: "Doge King",
            position: "Dean",
        },
        {
            id: 2,
            teamimg: team2,
            link: "https://twitter.com/Smoke_theArtist",
            teamname: "Smoke",
            position: "Strategy & Community",
        },
        {
            id: 2,
            teamimg: team3,
            link: "https://twitter.com/jimmybond28",
            teamname: "General WAGMI",
            position: "Marketing",
        },
        {
            id: 2,
            teamimg: team4,
            link: "",
            teamname: "Vera",
            position: "Artist",
        },
        {
            id: 2,
            teamimg: team5,
            link: "https://twitter.com/PHAREBLANCint",
            teamname: "Roger B",
            position: "Strategic Advisor",
        },
        {
            id: 2,
            teamimg: team6,
            link: "",
            teamname: "Kapil",
            position: "Tech",
        },
    ]

    return(
        <>
            <div className="teamlist_main common">
                <Container>
                    <div className="collection-header">
                        <h5 className="title brown" >Meet The Team</h5>
                    </div>
                    <Row>
                        {data.map((d) =>(
                            <Col lg={2} md={3} sm={4} xs={6} >
                                <div className="team_detail">
                                    <div className="team_detail_image">
                                        <img src={d.teamimg} alt="team1" className="team_image" />
                                        <a href={d.link} target="_blank" ><img src={twitter} alt="twitter" /></a>
                                    </div>
                                    <h5>{d.teamname}</h5>
                                    <h6>{d.position}</h6>
                                </div>
                            </Col>
                        ))}
                        {/* <Col lg={2} >
                            <div className="team_detail">
                                <div className="team_detail_image">
                                    <img src={team2} alt="team1" className="team_image" />
                                    <a href="https://twitter.com/DogeGenerals" target="_blank" ><img src={twitter} alt="twitter" /></a>
                                </div>
                                <h5>Smoke</h5>
                                <h6>Strategy & Community</h6>
                            </div>
                        </Col>
                        <Col lg={2} >
                            <div className="team_detail">
                                <div className="team_detail_image">
                                    <img src={team3} alt="team1" className="team_image" />
                                    <a href="https://twitter.com/DogeGenerals" target="_blank" ><img src={twitter} alt="twitter" /></a>
                                </div>
                                <h5>General WAGMI</h5>
                                <h6>Marketing</h6>
                            </div>
                        </Col>
                        <Col lg={2} >
                            <div className="team_detail">
                                <div className="team_detail_image">
                                    <img src={team4} alt="team1" className="team_image" />
                                    <a href="https://twitter.com/DogeGenerals" target="_blank" ><img src={twitter} alt="twitter" /></a>
                                </div>
                                <h5>Vera</h5>
                                <h6>Artist</h6>
                            </div>
                        </Col>
                        <Col lg={2} >
                            <div className="team_detail">
                                <div className="team_detail_image">
                                    <img src={team5} alt="team1" className="team_image" />
                                    <a href="https://twitter.com/DogeGenerals" target="_blank" ><img src={twitter} alt="twitter" /></a>
                                </div>
                                <h5>Roger B</h5>
                                <h6>Strategic Advisor</h6>
                            </div>
                        </Col>
                        <Col lg={2} >
                            <div className="team_detail">
                                <div className="team_detail_image">
                                    <img src={team6} alt="team1" className="team_image" />
                                    <a href="https://twitter.com/DogeGenerals" target="_blank" ><img src={twitter} alt="twitter" /></a>
                                </div>
                                <h5>Kapil</h5>
                                <h6>Tech</h6>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default TeamList;