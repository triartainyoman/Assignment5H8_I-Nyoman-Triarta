import "./App.css";

function Header() {
  return (
    <header className="header">
      <h1>Simulasi Antrian</h1>
    </header>
  );
}

function Content() {}

function App() {
  return (
    <div className="container">
      <Header />
      <hr />
      <div className="input_antrian">
        <label>Nama Anda</label>
        <input type="text" name="nama" autoComplete="off" />
        <br />
        <button>Antrikan !</button>
        <button>Majukan !</button>
      </div>
    </div>
  );
}

export default App;
