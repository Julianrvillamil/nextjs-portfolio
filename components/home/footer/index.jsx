import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div className="container m-4">
          <h2 className=" mb-4">Datos</h2>
          <h4>Julian Roa Villamil</h4>
          <h4>Desarrollador de software</h4>
          <h4>Mail: julianrvillamil@gmail.com</h4>
        </div>
      </Container>
    </div>
  );
}
