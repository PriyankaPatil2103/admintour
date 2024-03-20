import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Managebooking() {
  const [bookingData, setbookingData] = useState([]);
  const navi=useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallbooking")
      .then((result) => {
        console.log("DATA", result.data);
        setbookingData(result.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {bookingData.map((booking) => {
            return (
              <Col sm={12} md={6} lg={3}>
                <Card>
                  <Card.Title>{booking.FromDate}</Card.Title>
                  <Card.Text>{booking.ToDate}</Card.Text>
                  <Card.Text>{booking.Comment}</Card.Text>
                  <Card.Text>{booking.Status}</Card.Text>
                  <Button onClick={()=>navi(`/BookingDetails/${booking._id}`)}>
                    Details</Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Managebooking;
