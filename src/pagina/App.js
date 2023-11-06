import React, { useState, useEffect } from "react";
import dotlibData from "./dotlib.json";
import "../App.css";
import NavBar from "./navBar";
import Footer from "./footer";

function App() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setBooks(dotlibData.books);
    setCategories(dotlibData.categories);
    console.log(dotlibData);
  }, []);

  return (
    <div className="App">
      <div className="menu">
        <NavBar />
        <hr />
      </div>

      <div className="resultados">
        <h5>Mostrando 1 até 25 de 2399 resultados</h5>
      </div>

      <div className="book">
        <div className="book-container">
          {books.map((book, index) => (
            <div className="livro" key={book.id}>
              {index % 5 === 0 && index !== 0 && <hr className="gray-line" />}
              <img src={book.image} alt={book.title} />
              <p>{book.id}</p>
              <h4>{book.title}</h4>
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
            <p>{category.title}</p>
          </div>
        ))}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
