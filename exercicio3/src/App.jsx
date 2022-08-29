import React from "react";
import Semaforo from "./components/semaforo/Semaforo";
import Carros from "./components/carros/Carros";
import Carteirinha from "./components/carteirinha/Carteirinha";
import FotoUm from "./imgs/carteirinhaUm.png";
import FotoDois from "./imgs/carteirinhaDois.png";
import FotoTres from "./imgs/carteirinhaTres.png";
import FotoQuatro from "./imgs/carteirinhaQuatro.png";
import { useState } from "react";

export default function App() {
  const listaCarros = [
    "Corola",
    "Meriva",
    "Corsa",
    "Fiat Mobi",
    "Civic",
    "Celta",
    "Mustang",
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

  const [nome, setNome] = useState("");
  const [rm, setRm] = useState("");
  const [curso, setCurso] = useState("");
  const [turma, setTurma] = useState("");

  const carteirinhaQuatro = [nome, rm, curso, turma];

  return (
    <>
      <Semaforo />
      <Carros carrosProps={listaCarros} />
      <Carteirinha fotoProps={FotoUm} carteirinhaProps={carteirinhaUm} />
      <Carteirinha fotoProps={FotoDois} carteirinhaProps={carteirinhaDois} />
      <Carteirinha fotoProps={FotoTres} carteirinhaProps={carteirinhaTres} />
      <Carteirinha
        fotoProps={FotoQuatro}
        carteirinhaProps={carteirinhaQuatro}
      />
      <ul>
        <li>
          {" "}
          <input
            type="text"
            name="nome"
            onChange={(x) => setNome(x.target.value)}
            placeholder="Insira o nome"
          ></input>
        </li>
        <li>
          <input
            type="text"
            name="rm"
            onChange={(x) => setRm(x.target.value)}
            placeholder="Insira o rm"
          ></input>
        </li>
        <li>
          <input
            type="text"
            name="curso"
            onChange={(x) => setCurso(x.target.value)}
            placeholder="Insira o curso"
          ></input>
        </li>
        <li>
          <input
            type="text"
            name="turma"
            onChange={(x) => setTurma(x.target.value)}
            placeholder="Insira a turma"
          ></input>
        </li>
      </ul>
    </>
  );
}
