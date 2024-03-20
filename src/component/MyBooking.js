import React from 'react'
import { Container, Row, Tab, Tabs } from 'react-bootstrap'
import Bookings from './Bookings'
function MyBooking() {
  return (
    <div>
        <Container>
            <Row>
                <Tabs defaultActiveKey="Pending">
                    <Tab eventKey="Pending" title="Pending">
                        <Bookings bookingstatus="Pending"></Bookings>
                    </Tab>
                    <Tab eventKey="Confirm" title="Confirm">
                        <Bookings bookingstatus="Confirm"/>
                    </Tab>
                    <Tab eventKey="Cancel" title="Cancel">
                        <Bookings bookingstatus="Cancel"/>
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    </div>
  )
}

export default MyBooking