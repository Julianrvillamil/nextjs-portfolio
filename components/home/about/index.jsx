import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import style from "./About.module.css";
import Idiomas from "../languages";

export default function About() {
  return (
    <div className={style.seccion} id={"skills"}>
      <Container>
        <Row>
          <Col>
            <h2 className="mb-5">Habilidades</h2>
            <Row className="mb-5">
              <Col>
                <div className={style.imageContainer}>
                  <Image
                    className={style.imagen}
                    src={"/icons/html-5.png"}
                    width="100px"
                    height={"100px"}
                  ></Image>
                </div>
              </Col>
              <Col>
                <div className={style.imageContainer}>
                  <Image
                    src={"/icons/css.png"}
                    width="100px"
                    height={"100px"}
                  ></Image>
                </div>
              </Col>
              <Col>
                <div className={style.imageContainer}>
                  <Image
                    src={"/icons/js.png"}
                    width="100px"
                    height={"100px"}
                  ></Image>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <div className={style.imageContainer}>
                  <Image
                    src={"/icons/react.png"}
                    width="100px"
                    height={"100px"}
                  ></Image>
                </div>
              </Col>
              <Col>
                <div className={style.imageContainer}>
                  <Image
                    src={"/icons/nextjs.png"}
                    width="100px"
                    height={"100px"}
                  ></Image>
                </div>
              </Col>
              <Col>
                <div className={style.imageContainer}>
                  <Image
                    src={"/icons/bootstrap.png"}
                    width="100px"
                    height={"100px"}
                  ></Image>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={style.imageContainer}>
                  <Image
                    src={"/icons/github.png"}
                    width="100px"
                    height={"100px"}
                  ></Image>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <h2>Idiomas</h2>
            <Row>
              <Col>
                <Idiomas idioma={"Español"} nivel={"Nativo"}></Idiomas>
              </Col>
              <Col>
                <Idiomas idioma={"Ingles"} nivel={"B2"}></Idiomas>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        img {
          margin-top: 64px;
        }
      `}</style>
    </div>
  );
}
