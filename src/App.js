import "./App.css";
import Nav from "./components/Navbar2";

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="header-container">
        <div className="header-container__titles">
          <h1>CREA Planeta</h1>
          <h2>Centro de Realidades Alternativas</h2>
          <p>
            "Cambiamos la relación de las personas con el planeta con
            experiencias inmersivas, innovadoras y de base científica."
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
