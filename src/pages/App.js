import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';
import './App.css';
import HomePage from './HomePage.jsx';

function App() {
  return (
    <div className="App">
      <div style={{fontSize:12, padding:4, backgroundColor:'#2AA7FF', color:'white', textAlign:'center'}}>
        <p>The health and well-being of our patients and their health care team will always be our priority, 
            so we follow the best practices for cleanliness.
        </p>
      </div>
      <HomePage/>
      <AppDownload />
      <Footer />
    </div>
  );
}

export default App;
