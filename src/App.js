import CallRequest from "./callRequest/CallRequest.jsx";
import MainPage from "./components/mainPage/MainPage";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import ImageGallery from "./components/imageGallery/ImageGallery";
import DaycareActiv from "./components/daycare-activ/DaycareActiv";
import GoogleMapsDirections from "./components/googleMapsDirections/GoogleMapsDirections";
import NanniesCard from "./components/nanniesCard/NanniesCard.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainPage />
      <DaycareActiv />
      <Navigation />
      <ImageGallery />
      <NanniesCard />
      <GoogleMapsDirections />
      <CallRequest />
      <Footer />
    </div>
  );
}

export default App;
