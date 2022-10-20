import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function ProjectCard({
  img,
  title,
  description,
  skills = [],
  github,
  open,
  seeGithub,
  seeProject,
}) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <div className="container">
          <b>Habilidades utilizadas:</b>
        </div>

        <ListGroup className="list-group-flush">
          {skills.map((skill, index) => (
            <ListGroup.Item key={index}>{skill}</ListGroup.Item>
          ))}
          {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
        </ListGroup>
        <Card.Body>
          {seeGithub == true ? (
            <Card.Link target="_blank" href={github}>
              GitHub
            </Card.Link>
          ) : (
            <div></div>
          )}
          {seeProject == true ? (
            <Card.Link target="_blank" href={open}>
              Open Project
            </Card.Link>
          ) : (
            <div></div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
