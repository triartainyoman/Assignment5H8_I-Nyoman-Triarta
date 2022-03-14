import { useState } from "react";
import "./App.css";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import NamaAntrian from "./components/NamaAntrian";

function Content() {}

function App() {
  const [antrian, setAntrian] = useState([]);

  function tambahAntrian(nama) {
    setAntrian((prevNama) => {
      return [...prevNama, nama];
    });
  }

  function majukanAntrian() {
    const majukan_antrian = antrian.shift();
    setAntrian((prevNama) => {
      return [...prevNama];
    });
  }

  return (
    <div className="container">
      <Header />
      <hr />
      <CreateArea onAntrikan={tambahAntrian} onMajukan={majukanAntrian} />
      <hr />
      <div className="daftar_antrian">
        {antrian.length !== 0
          ? antrian
              .map((nama, index) => (
                <NamaAntrian
                  key={index}
                  id={index}
                  length={antrian.length}
                  nama={nama}
                />
              ))
              .reverse()
          : "[Antrian Kosong!]"}
      </div>
      <hr />
    </div>
  );
}

export default App;
