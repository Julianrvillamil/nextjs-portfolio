import ProjectCard from "../projectCard";
import style from "./Projects.module.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Row } from "react-bootstrap";

export default function Projects() {
  return (
    <div className="container" id="projects">
      <div className={style.projectsContainer}>
        <h2>proyectos</h2>
        {/* { img, title, description, skills, github, open, seeGithub, seeProject }) */}

        <Row>
          <Col xs={12}>
            <Row xs={1} md={3}>
              <ProjectCard
                img={"/images/metajungleProject.png"}
                title="MetaJungle"
                description={"Proyecto realizado para la empresa HackMonkeys."}
                skills={["HTML", "CSS", "JavaScript", "React", "NextJs"]}
                github={"https://github.com/Julianrvillamil"}
                open={"https://metajungle.group/"}
                seeGithub={true}
                seeProject={true}
              ></ProjectCard>
              <ProjectCard
                img={"/images/megaManSab.png"}
                title="Juego Megaman"
                description={
                  "Videojuego basado en el popular juego de plataforma Megaman."
                }
                skills={["Unity", "C#"]}
                github={
                  "https://github.com/Julianrvillamil/Proyecto-Megaman-main"
                }
                open={"https://julianrvillamil.itch.io/megamanxusab"}
                seeGithub={true}
                seeProject={true}
              ></ProjectCard>

              <ProjectCard
                img={"/images/clinicaSab-collage.png"}
                title="Clinica de la Sabana"
                description={
                  "Proyecto realizado emulando un programa de gestion de Especialidades - Medicos - Pacientes - Citas y Consultorio utilizado en una clinica, con una base de datos local (txt)."
                }
                skills={["Java"]}
                github={"https://github.com/Julianrvillamil/Clinica-Usabana"}
                open={""}
                seeGithub={true}
                seeProject={false}
              ></ProjectCard>
              <ProjectCard
                img={"/images/appSutaPortfolio.jpg"}
                title="App Sutatausa"
                description={
                  "Proyecto realizado para la alcaldia de Sutatausa."
                }
                skills={["Kotlin"]}
                github={"https://github.com/Julianrvillamil/App_Sutatausa"}
                open={""}
                seeGithub={true}
                seeProject={false}
              ></ProjectCard>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
