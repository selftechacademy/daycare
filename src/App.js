import React from "react";
import "./app.css";
import NanniesCard from "./nanniesCard/NanniesCard";
import MainPage from "./components/mainPage/MainPage";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import ImageGallery from "./components/imageGallery/ImageGallery";
import DaycareActiv from "./components/daycare-activ/DaycareActiv";

function App() {
  return (
    <div>
      <Navigation />
      <MainPage />
      <DaycareActiv />
      <NanniesCard />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
