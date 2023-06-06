import CallRequest from "./callRequest/CallRequest.jsx";
import "./App.css";
import MainPage from "./components/mainPage/MainPage";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import ImageGallery from "./components/imageGallery/ImageGallery";
import GoogleMapsDirections from "./components/googleMapsDirections/GoogleMapsDirections";
import NanniesCard from "./components/nanniesCard/NanniesCard.jsx";
import "./App.css";
import AgeGroup from "./components/ageGroup/AgeGroup";

function App() {
  return (
    <div className="App">
      <MainPage />
      <Navigation />
      <ImageGallery />

      <AgeGroup />

      <NanniesCard />
      <GoogleMapsDirections />
      <CallRequest />

      <Footer />
    </div>
  );
}

export default App;
