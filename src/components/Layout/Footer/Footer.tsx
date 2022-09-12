import "./Footer.css";
import twitter from "../../../assets/image/twitter.svg";
import discord from "../../../assets/image/discord.svg";
import whitepaper from "../../../assets/image/paper.svg";

const Footer = () =>{
    return(
        <>
            <div className="footer-main">
                <p>&copy; copyrights 2022 Doge Academy | All Rights Reserved.</p>
                <ul>
                    <li><a href="https://mobile.twitter.com/thedogeacademy" target="_blank" ><img src={twitter} alt="twitter" /></a></li>
                    <li><a href="https://discord.com/invite/9P63VNTubV" target="_blank" ><img src={discord} alt="twitter" /></a></li>
                    <li><a href="https://mobile.twitter.com/ownthedoge" target="_blank" ><img src={twitter} alt="twitter" /></a></li>
                    <li><a href="https://medium.com/@deanofdogeacademy/the-doge-academy-is-borking-new-ground-3190e7ef337a" target="_blank" ><img src={whitepaper} alt="twitter" /></a></li>
                </ul>
            </div>
        </>
    );
}

export default Footer;