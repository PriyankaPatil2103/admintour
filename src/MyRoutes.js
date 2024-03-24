import React from "react";
import Dashborad from "./component/Dashborad";
import Createpackage from "./component/Createpackage";
import Managepackages from "./component/Managepackages";
import Manageusers from "./component/Manageusers";
import Managebooking from "./component/Managebooking";
import Manageissue from "./component/Manageissue";
import Manageenquiries from "./component/Manageenquiries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyOffcanvas from "./MyOffcanvas";
import BookingDetails from "./component/BookingDetails";
import MyBooking from "./component/MyBooking";
import Sidebar from "./Sidebar";

function MyRoutes() {
  return (
    <div>
      <Router>
        <MyOffcanvas />
        <Routes>
          <Route path="/" element={<Dashborad />}></Route>
          <Route path="/Createpackage" element={<Createpackage />}></Route>
          <Route path="/Managepackage" element={<Managepackages />}></Route>
          <Route path="/Manageusers" element={<Manageusers />}></Route>
          <Route path="/Managebooking" element={<Managebooking />}></Route>
          <Route path="/Manageissue" element={<Manageissue />}></Route>
          <Route path="/Manageenquiries" element={<Manageenquiries />}></Route>
          {/* <Route path="/MyBooking" element={<MyBooking/>}></Route> */}
          <Route path="/BookingDetails/:BookingId" element={<BookingDetails/>}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default MyRoutes;
