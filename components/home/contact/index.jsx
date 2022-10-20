import { Row, Col, Container, Form, Button, Collapse } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="container mt-5">
      <h2 id="contact">Contacto</h2>
      <Row className="justify-content-center">
        <Col className="text-center" xs={12} md={9}>
          <p className="text-muted">Déjame tus datos y te contactare</p>
        </Col>
      </Row>
      <Row className="justify-content-center pt-4">
        <Col xs={12} md={7}>
          <Form
            action="https://formsubmit.co/e03105ef4453e410fa3cc62fcc5e1ddf"
            method="POST"
          >
            <Row>
              <Form.Group
                as={Col}
                xs={12}
                md={6}
                className="mb-3 py-3"
                controlId="formBasicName"
              >
                <Form.Label>Nombre*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="name"
                  required
                />
              </Form.Group>

              <Form.Group
                as={Col}
                xs={12}
                md={6}
                className="mb-3 py-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su email"
                  name="email"
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                xs={12}
                md={6}
                className="mb-3 py-3"
                controlId="formBasicPhone"
              >
                <Form.Label>Numero telefonico</Form.Label>
                <Form.Control
                  type="phone"
                  placeholder="+57 394 0875 326"
                  name="tel"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                xs={12}
                md={6}
                className="mb-3 py-3"
                controlId="formBasicOrg"
              >
                <Form.Label>Empresa u organización</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Ingrese el nombre de su empresa"
                  name="org"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                xs={12}
                className="mb-3 py-3"
                controlId="formBasicMessage"
              >
                <Form.Label>Mensaje*</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="message"
                  placeholder="Escribeme un mensaje "
                  name="msg"
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-5 justify-content-end">
              <Col xs={12} md={"auto"}>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
            <input
              type={"hidden"}
              name="_next"
              value={"https://nextjs-portfolio-23pn.vercel.app/"}
            ></input>
            <input type={"hidden"} name="_captcha" value="false"></input>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
