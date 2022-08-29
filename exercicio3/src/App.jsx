import React from "react";
import Semaforo from "./components/semaforo/Semaforo";
import Carros from "./components/carros/Carros";
import Carteirinha from "./components/carteirinha/Carteirinha";
import FotoUm from "./imgs/carteirinhaUm.png";
import FotoDois from "./imgs/carteirinhaDois.png";
import FotoTres from "./imgs/carteirinhaTres.png";

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

  const carteirinhaUm = [
    "Jakeline Santana da Rocha",
    "RM96261",
    "ADS",
    "1TDSR",
  ];

  const carteirinhaDois = [
    "Ana Luiza Santana da Rocha",
    "RM96260",
    "ADS",
    "1TDSR",
  ];

  const carteirinhaTres = ["Lucas Santana da Rocha", "RM96267", "ADS", "1TDSR"];

  return (
    <>
      <Semaforo />
      <Carros carrosProps={listaCarros} />
      <Carteirinha fotoProps={FotoUm} carteirinhaProps={carteirinhaUm} />
      <Carteirinha fotoProps={FotoDois} carteirinhaProps={carteirinhaDois} />
      <Carteirinha fotoProps={FotoTres} carteirinhaProps={carteirinhaTres} />
    </>
  );
}
