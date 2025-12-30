import React, { useState } from "react";
import "./styles/app.scss";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Form from "./components/Form";
import Video from "./components/Video";


function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <Banner setShowForm={setShowForm} />
      <About />
      <Gallery />
      <Map />
      <Video />
      <Contact />
      {showForm && <Form setShowForm={setShowForm} />}
      <Footer />
    </div>
  );
}

export default App;
