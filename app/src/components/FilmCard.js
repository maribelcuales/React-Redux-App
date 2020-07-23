import React from 'react';
import {
  Container,
  Row,
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardSubtitle,
  Badge,
  Col
} from "reactstrap";

import './styles.css'; 

const FilmCard = ({ film }) => {
  // console.log("props", props); 
  return (
    <Container>
      <Row>
          {film.map(item => {
            return(  
              // <div key={item.id} className="filmCard-container">
                <Col xs="12" sm="6" md="4" xl="3">
                  <Card className="card-details">
                    <CardHeader>
                      <h3>Film Title: {item.title}</h3>
                    </CardHeader>   
                    <CardBody>   
                      <CardText>{item.description}</CardText>
                      <CardSubtitle>Director: {item.director}</CardSubtitle>
                      <CardSubtitle>Producer: {item.producer}</CardSubtitle>
                      <Badge color="info">Release Date: {item.release_date}</Badge>
                    </CardBody>
                  </Card>
                </Col>
              // </div>
            )
          })}
      </Row>
    </Container>
  );
};

export default FilmCard; 
