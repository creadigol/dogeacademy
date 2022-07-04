import React, { Component } from 'react';
import "./Main.css";

class Nav extends Component {

    render() {
        return (
            <>
                <div style={{textAlign:"center", background: "#cfcfcf"}}>
                    <div style={{display:"inline-block",textAlign:"center"}}>
                        <div className="row">
                            <a href="/dognft/" style={{padding:"5px",margin:"5px", color:"black"}}><b>HashLips LowerGas</b></a>
                            <a href="/dognft/erc721a" style={{padding:"5px",margin:"5px", color:"black"}}><b>ERC721A</b></a>
                        </div>
                    </div>
                </div>
                <hr style={{marginTop:"0px"}}/>
            </>
        )
    }
}

export default Nav;