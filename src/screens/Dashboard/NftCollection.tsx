import { Container , Col, Row } from "react-bootstrap";
import nft from "../../assets/image/nft1.png";
import nft1 from "../../assets/image/nft2.png";
import nft2 from "../../assets/image/nft3.png";
import nft4 from "../../assets/image/nft4.png";
import nft5 from "../../assets/image/nft5.png";
import nft6 from "../../assets/image/nft6.png";

const NftCollection = () =>{
    const data = [
        {
            id: 1,
            nftimg: nft,
            title: "Dog Academy",
            subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
        },
        {
            id: 2,
            nftimg: nft1,
            title: "Dog Academy",
            subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
        },
        {
            id: 3,
            nftimg: nft2,
            title: "Dog Academy",
            subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
        },
        {
            id: 4,
            nftimg: nft4,
            title: "Dog Academy",
            subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
        },
        {
            id: 5,
            nftimg: nft5,
            title: "Dog Academy",
            subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
        },
        {
            id: 6,
            nftimg: nft6,
            title: "Dog Academy",
            subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
        },
    ]
    return(
        <>
            <div className="common nftcollection-main " >
                <Container>
                    <div className="collection-header">
                        <h5 className="title brown" >The Doge Academy Collection</h5>
                        <p className="subtitle" >The Doge Academy art is deeply researched, hand drawn, and is based primarily on real historical figures throughout history and from all over the world.</p>
                    </div>
                    <Row>
                        {data.map((d) =>(
                            <Col lg={4} md={6} >
                                <div className="nft-list">
                                    <img src={d.nftimg} alt="nft-img" />
                                    <h5>{d.title}</h5>
                                    <p>{d.subtitle}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <hr />
                    <div className="collection-footer" >
                        <h5 className="title brown" >Collect your NFTs now.</h5>
                        <p className="subtitle" >Doge watching in VR wearing mask. Yellow Doge with green Sun Glasses. Yellow Doge with green Sun Glasses.Yellow Doge with.</p>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default NftCollection;