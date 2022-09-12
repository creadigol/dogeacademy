import { Container, Row, Col } from "react-bootstrap";
import "./PublicMint.css";

const PublicMint = () =>{
    return(
        <>
            <div className="subsection-main public_mint_main">
                <Container>
                    <Row>
                        <Col lg={12} >
                            <div className="product_detail">
                                <div className="product_title">
                                    <h5>Join the public Mint - 26<sup>th</sup> Oct</h5>
                                    <h6>Mint for full price</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default PublicMint;