import React, { useState, useEffect } from "react";
import dotlibData from "./dotlib.json";
import "../App.css";
import logo from "../ images/logo_dotlib.png";
import Footer from "./footer";
import { FaSearch, FaSquare } from "react-icons/fa"

function App() {
  const [menu, setMenu] = useState([]);
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [busca, setBusca] = useState([]);
  console.log(busca);

  const lowerBusca = typeof busca === "string" ? busca.toLowerCase() : "";

  const booksFiltrados = books.filter((book) =>
    book.title.toLowerCase().includes(lowerBusca)
  );

  useEffect(() => {
    setBooks(dotlibData.books);
    setMenu(dotlibData.menu);
    setCategories(dotlibData.categories);
    console.log(dotlibData);
  }, []);

  return (
    <div className="App">
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
            <input
              className="pesquisa"
              type="text"
              value={busca}
              onChange={(ev) => setBusca(ev.target.value)}
            />
            <button>
              <FaSearch
                style={{
                  color: "#ffffff",
                  backgroundColor: "#9EBC4C",
                  padding: "3%",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="resultados">
        <h5>Mostrando 1 até 25 de 2399 resultados</h5>
      </div>

      <div className="book">
        <div className="book-container">
          {booksFiltrados.map((book, index) => (
            <div className="livro" key={book.id}>
              {index % 5 === 0 && index !== 0 && <hr className="gray-line" />}
              <img src={book.image} alt={book.title} />
              <p><FaSquare style={{ color: "#DEDEDE", padding: "1%"}}/>{book.id}.</p>
              <a href={book.url} target="_blank">
                <h4>{book.title}</h4>
              </a>
              <h5>{book.editor}</h5>
              <p>{book.year}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="categorias">
        <h2>Assunto</h2>
        {categories.map((category) => (
          <div key={category.id}>
            <a href={category.url} target="_blank">
              <p>
              <FaSquare style={{ color: "#DEDEDE", padding: "0 2px 0 0"}}/>
                {category.title}</p>
            </a>
          </div>
        ))}
      </div>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
