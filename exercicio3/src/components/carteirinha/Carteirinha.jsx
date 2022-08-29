import React from "react";

export default function Carteirinha(props) {
  return (
    <>
      <h2>Carteirinha:</h2>
      <div style={{ display: "flex" }}>
        <img src={props.fotoProps} width="200em" alt="imagem de estudante" />
      </div>

      <ul>
        {props.carteirinhaProps.map((carteirinha, iterator) => (
          <li key={iterator}>{carteirinha}</li>
        ))}
      </ul>
    </>
  );
}
