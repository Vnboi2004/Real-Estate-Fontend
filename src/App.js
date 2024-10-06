import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Companies from './components/Companies/Companies.jsx';
import Recidencies from './components/Recidencies/Recidencies.jsx'
import Values from './components/Values/Values.jsx'
import Contact from './components/Contact/Contact.jsx';
import GetStarted from './components/GetStarted/GetStarted.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css'


function App() {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Header/>
      <Hero/>
    </div>
    <Companies/>
    <Recidencies/>
    <Values/>
    <Contact/>
    <GetStarted/>
    <Footer/>
  </div>
  );
}

export default App;
