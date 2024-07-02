import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterFunc from './components/CounterFunc';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Error from './pages/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/contactus' Component={ContactUs}/>
            <Route path='/counter' Component={CounterFunc}/>
            <Route path='*' Component={Error}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
