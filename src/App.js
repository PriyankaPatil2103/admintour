
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyRoutes from './MyRoutes';
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Createpackage from './component/Createpackage';
import Managebooking from './component/Managebooking';
import Manageusers from './component/Manageusers';
import Dashborad from './component/Dashborad';
import Managepackages from './component/Managepackages';
import Manageissue from './component/Manageissue';
import Manageenquiries from './component/Manageenquiries';
import BookingDetails from './component/BookingDetails';
import Sidebar from './Sidebar';

function App() {
  return (
    <div>
      <MyRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
