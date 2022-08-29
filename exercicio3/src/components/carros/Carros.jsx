import React from "react";

export default function Carros(props) {
  return (
    <>
      <h2>Lista de carros:</h2>
      <ul>
        {props.carrosProps.map((carro, iterator) => (
          <li key={iterator}>
            Carro {iterator + 1}: {carro}
          </li>
        ))}
      </ul>
    </>
  );
}
