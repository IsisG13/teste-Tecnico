import React from "react";
import logo from "../ images/logo_footer.png"

function Footer() {
    return (
        <div className="footer">
            <hr/>
            <p> © 2023 | Todos os direitos reservados | Todos los direchos reservados | All rights reserved</p>
            <div className="logoFooter">
            <img src={logo} alt="logo footer"/>
            </div>
        </div>
    )
}

export default Footer;