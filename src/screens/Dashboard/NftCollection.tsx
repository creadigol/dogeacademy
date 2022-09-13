import React, { useState } from 'react';
import { Container , Col, Row, Modal } from "react-bootstrap";
import nft from "../../assets/image/nft1.png";
import nft1 from "../../assets/image/nft2.png";
import nft2 from "../../assets/image/nft3.png";
import nft4 from "../../assets/image/nft4.png";
import nft5 from "../../assets/image/nft5.png";
import nft6 from "../../assets/image/nft6.png";

const NftCollection = () =>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const data = [
        {
            id: 1,
            nftimg: nft,
            title: "Hannibal Barca’s Helmet",
            subtitle: <p>Hannibal was a Carthaginian general and statesman who commanded the forces of Carthage in their battle against the Roman Republic during the Second Punic War. </p>,
        },
        {
            id: 2,
            nftimg: nft1,
            title: "Knights Templar Shield",
            subtitle: <p>The Poor Fellow-Soldiers of Christ and of the Temple of Solomon also known as the Order of Solomon's Temple, the Knights Templar, or simply the Templars, was a Catholic <a onClick={handleShow} >Learn More</a> </p>
            //             
        },
        {
            id: 3,
            nftimg: nft2,
            title: "Orthodox patriarch Chestpiece",
            subtitle: <p>The word Patriarch means the father or chief of a clan or family and is used biblically in a number of passages of the Old Testament. <a onClick={handleShow1} >Learn More</a> </p>,
            // 
        },
        {
            id: 4,
            nftimg: nft4,
            title: "Hannibal Barca Chestpiece",
            subtitle: <p>Hannibal Barca was one of the greatest generals of all time and one of Rome’s most feared enemies. After taking command of an army at 25, Hannibal launched <a onClick={handleShow2} >Learn More</a> </p>,
            // an ambitious campaign to cross the Alps and attack Rome itself.
        },
        {
            id: 5,
            nftimg: nft5,
            title: "Qin Shi Huang Chestpiece",
            subtitle: <p>Qin Shi Huang was the founder of the Qin dynasty and the first emperor of a unified China. he ruled as the First Emperor of the Qin dynasty from 221 to 210 BCE. <a onClick={handleShow3} >Learn More</a> </p>,
            //  His self-invented title 'emperor' would continue to be borne by Chinese rulers for the next two millennia. Historically, he was often portrayed as a tyrannical ruler and strict Legalist.
        },
        {
            id: 6,
            nftimg: nft6,
            title: "Charlemagne Chestpiece",
            subtitle: <p>Charlemagne was a skilled military strategist, he spent much of his reign engaged in warfare in order to accomplish his goals. In 800, Pope Leo III crowned <a onClick={handleShow4} >Learn More</a> </p>,
            // Charlemagne Holy Roman Emperor. In this role, he encouraged the Carolingian Renaissance, a cultural and intellectual revival in Europe.
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
                            <Col lg={4} md={6} sm={6} >
                                <div className="nft-list">
                                    <img src={d.nftimg} alt="nft-img" />
                                    <h5>{d.title}</h5>
                                    {d.subtitle}
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

            <Modal show={show} onHide={handleClose} className="collection_content_modal" >
            The Poor Fellow-Soldiers of Christ and of the Temple of Solomon also known as the Order of Solomon's Temple, the Knights Templar, or simply the Templars, was a Catholic 
            military order, one of the most wealthy and popular of the Western Christian military orders. They were founded in 1119, headquartered on the Temple Mount in Jerusalem, and existed for nearly two centuries during the Middle Ages.    
            </Modal>

            <Modal show={show1} onHide={handleClose1} className="collection_content_modal" >
            The word Patriarch means the father or chief of a clan or family and is used biblically in a number of passages of the Old Testament. By the fourth century, the word patriarch began to be used to designate prominent bishops.
            </Modal>

            <Modal show={show2} onHide={handleClose2} className="collection_content_modal" >
            Hannibal Barca was one of the greatest generals of all time and one of Rome’s most feared enemies. After taking command of an army at 25, Hannibal launched an ambitious campaign to cross the Alps and attack Rome itself.
            </Modal>

            <Modal show={show3} onHide={handleClose3} className="collection_content_modal" >
            Qin Shi Huang was the founder of the Qin dynasty and the first emperor of a unified China. he ruled as the First Emperor of the Qin dynasty from 221 to 210 BCE. His self-invented title 'emperor' would continue to be borne by Chinese rulers for the next two millennia. Historically, he was often portrayed as a tyrannical ruler and strict Legalist.
            </Modal>

            <Modal show={show4} onHide={handleClose4} className="collection_content_modal" >
            Charlemagne was a skilled military strategist, he spent much of his reign engaged in warfare in order to accomplish his goals. In 800, Pope Leo III crowned Charlemagne Holy Roman Emperor. In this role, he encouraged the Carolingian Renaissance, a cultural and intellectual revival in Europe.
            </Modal>
        </>
    );
}

export default NftCollection;