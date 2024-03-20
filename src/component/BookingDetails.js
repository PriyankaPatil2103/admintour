import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import '../AllCss/Bookingdetails.css';
function BookingDetails() {
  const { BookingId } = useParams();
  const [bookingData, setbookingData] = useState({});
  const [Status, setStatus]=useState("");

  useEffect(() => {
    const bookdata = {
      BookingId: BookingId,
    };
    axios
      .post("http://localhost:5000/api/getbookingbyid", bookdata)
      .then((result) => {
        setbookingData(result.data);
        console.log("DATA", result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, {});
  const updateBookingStatus=()=>{
    const statusData={
      Bid:BookingId,
      Status:Status,
    };
    axios
    .post("http://localhost:5000/api/updatebookingstatus",statusData)
    .then((result) => {
      console.log("Data",result);
      alert("Status Updated");
      window.location.reload(false);
    }).catch((err) => {
      console.log(err);
    });
  }
  return (
    <div>
      Booking Details
      {/* <h3>{BookingId}</h3> */}
      <Container className="container">
        <Row>
          <Col lg={6} sm={12} md={6} className="user-details">
            <h3 className="user-details h3">User Details</h3>
            <h4 className="user-details h4">UserName: {bookingData?.UserId?.UserFullName}</h4>
            <h4 className="user-details h4">UserEmailId: {bookingData?.UserId?.UserEmailId}</h4>
            <h4 className="user-details h4">User MobileNo: {bookingData?.UserId?.UserMobileNumber}</h4>
          </Col>
          <Col lg={6} sm={12} md={6} className="package-details">
            <h3 className="package-details h3">Package Details</h3>
            <h4 className="package-details h4">PackageName: {bookingData?.PackageId?.PackageName}</h4>
            <h4 className="package-details h4">PackagePrice: {bookingData?.PackageId?.PackagePrice}</h4>
            <h4 className="package-details h4">PackageDetails: {bookingData?.PackageId?.PackageDetails}</h4>
          </Col>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Booking Confirmation</Form.Label>
              <Form.Check onChange={(e)=>setStatus(e.target.value)}
                type="radio"
                name="type"
                value="Pending"
                label="Pending"
                >
              </Form.Check>
              <Form.Check onChange={(e)=>setStatus(e.target.value)}
              type="radio"
              name="type"
              value="Confirm"
              label="Confirm"></Form.Check>
              <Form.Check onChange={(e)=>setStatus(e.target.value)}
              type="radio"
              name="type"
              value="Cancel"
              label="Cancel"></Form.Check>
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Button onClick={updateBookingStatus}>Update Status</Button>
          <Button>Delete</Button>
        </Row>
      </Container>
    </div>
  );
}

export default BookingDetails;
