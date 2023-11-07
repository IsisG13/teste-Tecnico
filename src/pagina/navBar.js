import React, { useEffect, useState } from "react";
import dotlibData from "./dotlib.json";
import "../App.css";
import logo from "../images/logo_dotlib.png";

function NavBar() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(dotlibData.menu);
    console.log(dotlibData);
  }, []);

  return (
    <div className="navBar">
      <div className="menu">
        <div className="logo">
          <img src={logo} alt="logo dotlib" />
        </div>
        <div className="menu-container">
          {menu &&
            menu.map((menu) => (
              <div key={menu.id}>
                <p>{menu.title}</p>
              </div>
            ))}
            <input className="pesquisa" type="text" placeholder="busque livros" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
