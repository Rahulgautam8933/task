
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import TextSection from "./components/TextSection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
    
      <div className="bg-white w-[90%] m-auto">
        <Header />
        <Hero />
        <AboutUs />
      </div>
        <TextSection />
        <Faq/>
        <Footer/>
    </div>
  );
}

export default App;
