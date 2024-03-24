import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import { useParams } from 'react-router-dom'
import "../AllCss/ManagePackage.css";

function Managepackages() {
  // const {PackageId}=useParams();
  const [packageData, setPackageData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallpackage")
      .then((result) => {
        console.log("DATA", result.data);
        setPackageData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Container className="container">
        <Row>
          {packageData.map((pkg) => {
            return (
              <Col sm={12} md={6} lg={3}>
                <Card>
                  <Card.Img className="image"
                    src={`http://localhost:5000${pkg.PackageImage}`}
                    alt={pkg.PackageName}
                  ></Card.Img>
                  <Card.Title className="card-title">{pkg.PackageName}</Card.Title>
                  <Card.Body>
                    <Card.Text>{pkg.PackageType}</Card.Text>
                  <Card.Text>{pkg.PackagePrice}</Card.Text>
                  <Card.Text>{pkg.PackageLocation}</Card.Text>
                  </Card.Body>
                  <Button>View Details</Button>
                  
                  
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Managepackages;
