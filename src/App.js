import "./App.css";
import About from "./components/About/About";
import BestSellers from "./components/BestSellers/BestSellers";
import Discount from "./components/Discount/Discount";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <BestSellers />
      <Discount />
      <Footer />
    </div>
  );
}

export default App;
