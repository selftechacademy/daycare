import MainPage from "./components/mainPage/MainPage";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import ImageGallery from "./components/imageGallery/ImageGallery";
import GoogleMapsDirections from "./components/googleMapsDirections/GoogleMapsDirections";
import "./App.css";

function App() {
  return (
    <div>
      <MainPage />
      <Navigation />
      <ImageGallery />
      <GoogleMapsDirections />
      <Footer />
    </div>
  );
}

export default App;
