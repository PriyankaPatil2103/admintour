import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
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
      <Container>
        <Row>
          {packageData.map((pkg) => {
            return (
              <Col sm={12} md={6} lg={3}>
                <Card>
                  <Card.Img
                    src={`http://localhost:5000${pkg.PackageImage}`}
                    alt={pkg.PackageName}
                  ></Card.Img>
                  <Card.Title>{pkg.PackageName}</Card.Title>
                  <Card.Text>{pkg.PackagePrice}</Card.Text>
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
