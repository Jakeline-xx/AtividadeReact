import React from "react";
import Semaforo from "./components/semaforo/Semaforo";
import Carros from "./components/carros/Carros";

export default function App() {
  const listaCarros = [
    "Corola",
    "Meriva",
    "Corsa",
    "Fiat Mobi",
    "Civic",
    "Celta",
    "Mustanh",
    "Onix",
    "Fusca",
    "Brasilia",
  ];
  return (
    <>
      <Semaforo />
      <Carros carrosProps={listaCarros} />
    </>
  );
}
