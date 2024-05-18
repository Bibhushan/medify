import AppDownload from '../components/AppDownload';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import './App.css';
import HomePage from './HomePage.jsx';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SearchResults from './SearchResults';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div style={{fontSize:12, padding:4, backgroundColor:'#2AA7FF', color:'white', textAlign:'center'}}>
          <p>The health and well-being of our patients and their health care team will always be our priority, 
              so we follow the best practices for cleanliness.
          </p>
        </div>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/search' element={<SearchResults/>}/>
        </Routes>
        <FAQ/>      
        <AppDownload />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
