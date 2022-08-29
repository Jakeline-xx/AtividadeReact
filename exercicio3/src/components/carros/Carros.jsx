import React from "react";

export default function Carros(props) {
  return (
    <>
      <h2>Lista de carros:</h2>
      <ul>
        <li>Carro 1: {props.carrosProps[0]}</li>
        <li>Carro 2: {props.carrosProps[1]}</li>
        <li>Carro 3: {props.carrosProps[2]}</li>
        <li>Carro 4: {props.carrosProps[3]}</li>
        <li>Carro 5: {props.carrosProps[4]}</li>
        <li>Carro 6: {props.carrosProps[5]}</li>
        <li>Carro 7: {props.carrosProps[6]}</li>
        <li>Carro 8: {props.carrosProps[7]}</li>
        <li>Carro 9: {props.carrosProps[8]}</li>
        <li>Carro 10: {props.carrosProps[9]}</li>
      </ul>
    </>
  );
}
