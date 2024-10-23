import "./App.css";

//
// Import Fnktionen
import { useState } from "react";

//
// Import Daten
import data from "./data/tableData.json";

//
// Import der components
import { Header } from "./components/header";
import { Tabelle } from "./components/Tabelle";
import { SearchBar } from "./components/Search";

//
function App() {
  //
  // Abfrage Kantone Für KtDropdown
  const ktSort = data.map((element) => element.anbieter).sort();
  const ktList = [];
  for (let i = 0; i < ktSort.length - 1; i++) {
    if (ktSort[i] !== ktSort[i - 1]) {
      ktList.push(ktSort[i]);
    }
  }

  //
  // Abfrage Datentyp für TypDropdown
  const typSort = data.map((element) => element.service).sort();
  const typList = [];
  for (let i = 0; i < typSort.length - 1; i++) {
    if (typSort[i] !== typSort[i - 1]) {
      typList.push(typSort[i]);
    }
  }

  //
  // Ergebnisse der Dropdowns
  const [selectedKt, setSelectedKt] = useState("");
  const [selectedTyp, setSelectedTyp] = useState("");

  const selectedKtFunction = (event) => {
    setSelectedKt(event.target.value);
  };
  const selectedTypFunction = (event) => {
    setSelectedTyp(event.target.value);
  };

  //
  // Ergebnis des Suchfensters
  const [selectedSearch, setSelectedSearch] = useState("");

  const selectedSearchFunction = (event) => {
    setSelectedSearch(event.target.value);
  };

  //
  // Tabellenfilter nach Dropdowns
  const dataFiltered = data
    .filter((e) => (selectedKt ? e["anbieter"] === selectedKt : true))
    .filter((e) => (selectedTyp ? e["service"] === selectedTyp : true))
    .filter((e) => {
      if (selectedSearch) {
        const kleinSelectedSearch = selectedSearch.toLowerCase();
        return (
          e["anbieter"].toLowerCase().includes(kleinSelectedSearch) ||
          e["datensatz"].toLowerCase().includes(kleinSelectedSearch) ||
          e["zusammenfassung"].toLowerCase().includes(kleinSelectedSearch) ||
          e["service"].toLowerCase().includes(kleinSelectedSearch)
        );
      }
      return true;
    });

  //
  return (
    <div className="App">
      {/* 
       / Import der Header.js 
      */}
      <Header
        ktListe={ktList}
        typListe={typList}
        selectedKt={selectedKt}
        selectedTyp={selectedTyp}
        selectedKtFunction={selectedKtFunction}
        selectedTypFunction={selectedTypFunction}
      />

      <SearchBar selectedSearchFunction={selectedSearchFunction} />

      <Tabelle dataFiltered={dataFiltered} />
      {/* <img src={"./mockup.png"} /> */}
    </div>
  );
}

export default App;
