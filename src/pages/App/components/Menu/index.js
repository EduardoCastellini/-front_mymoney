import React, { Component } from "react";

class Menu extends Component { 


    render() {
        return(
            <ul>
                <li>
                    <a>CADASTROS</a>
                </li>
                <li>
                    <a>LANÇAMENTOS</a>
                </li>
                <li>
                    <a href="/">SAIR</a>
                </li>
            </ul>
        );
    }

}
export default Menu;