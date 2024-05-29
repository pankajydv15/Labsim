import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home Main/Home/Home';
import Intro from './Components/Home Main/Intro/Intro';
import Navbar from './Components/Home Main/Navbar/Navbar';
import Portfolio from './Components/Home Main/Portfolio/Portfolio';
import Clients from './Components/Home Main/Clients/clients';
import Footer from './Components/Home Main/Footer/Footer';
import About from './Components/About/About';
import Service from './Components/Service/service';
import ContactForm from './Components/ContactUs/contact';


function App() {
  
  return (
    
    <div className="App">
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path='/' element = {<HomeLayout/>}/>
          <Route path='/about' element ={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<ContactForm />}/>
        </Routes>
        <Footer/>
    </BrowserRouter>


    </div>
  );
}

function HomeLayout() {
  return (
    <>
      <Home />
      <Intro />
      <Portfolio />
      <Clients />
    </>
  );
}

export default App;
