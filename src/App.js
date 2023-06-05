import CallRequest from "./callRequest/CallRequest.jsx";
import './App.css';
import MainPage from "./components/mainPage/MainPage";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import ImageGallery from "./components/imageGallery/ImageGallery";
import "./App.css";


function App() {
  return (
    <div className="App">
      <CallRequest />
      <MainPage />
      <Navigation />
      <ImageGallery />
          <Footer />
    </div>
  );
}

export default App;
