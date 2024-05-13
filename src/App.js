import "./styles/app.scss";
//import Components
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Map></Map>
      <About></About>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
