
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyRoutes from './MyRoutes';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <MyRoutes/>
      {/* <Header/> */}
      <Footer/>
    </div>
  );
}

export default App;
