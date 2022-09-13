import Mint from "../Mint/Mint";
import "./Dashboard.css";
import NftCollection from "./NftCollection";
import Team from "./Team";
import Roadmap from "./Roadmap";
import Simulation from "../../components/Simulation/Simulation";
import Footer from "../../components/Layout/Footer/Footer";
import About from "./About";
import TeamList from "./TeamList";
import Participate from "./Participate";
import { Link } from "react-router-dom";

const Dashboard = () =>{
    return(
        <>
            <div className="subsection-main">
                <Simulation />
                <About />
                <NftCollection />
                <Participate />
                <TeamList />
                <Roadmap />
                <Team />
                <Footer />
                {/* <Link to="/mint" className="buy_similar" >Buy This Similar</Link> */}
            </div>
        </>
    );
}

export default Dashboard;