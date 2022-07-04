import Mint from "../Mint/Mint";
import "./Dashboard.css";
import NftCollection from "./NftCollection";
import Team from "./Team";
import Roadmap from "./Roadmap";
import Simulation from "../../components/Simulation/Simulation";
import Footer from "../../components/Layout/Footer/Footer";
import About from "./About";

const Dashboard = () =>{
    return(
        <>
            <div className="subsection-main">
                <Simulation />
                <About />
                <NftCollection />
                <Roadmap />
                <Team />
                <Footer />
            </div>
        </>
    );
}

export default Dashboard;