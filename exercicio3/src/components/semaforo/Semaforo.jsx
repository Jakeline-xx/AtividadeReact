import React, { useEffect } from "react";
import { useState } from "react";

export default function Semaforo() {
  const [corSemaforo, setCorSemaforo] = useState(0);

  return (
    <div>
      <h2 style={corSemaforo == 0 ? { color: "red" } : { color: "white" }}>
        PARE!
      </h2>
      <h2 style={corSemaforo == 1 ? { color: "yellow" } : { color: "white" }}>
        ATENÇÃO!
      </h2>
      <h2 style={corSemaforo == 2 ? { color: "green" } : { color: "white" }}>
        SIGA!
      </h2>
      <button
        onClick={() => {
          if (corSemaforo == 2) {
            setCorSemaforo(0);
          } else {
            setCorSemaforo(corSemaforo + 1);
          }
        }}
      >
        TROCAR
      </button>
    </div>
  );
}
