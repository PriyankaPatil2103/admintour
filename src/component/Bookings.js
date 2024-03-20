import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Booking({bookingstatus}) {
  const [bookingData, setbookingData] = useState([]);
  const { UserData } = useSelector((state) => state);
  const navi = useNavigate();

  useEffect(() => {
    const userbooking = {
      UserId: UserData._id,
      Status: bookingstatus,
    };

    axios
      .post("http://localhost:5000/api/getbookingbyuserid", userbooking)
      .then((result) => {
        console.log("DATA", result.data);
        setbookingData(result.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <h3>Booking</h3>
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
                  <Card.Footer>
                    <Button
                      onClick={() => navi(`/BookingDetails/${booking._id}`)}>
                      Details
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Booking;
