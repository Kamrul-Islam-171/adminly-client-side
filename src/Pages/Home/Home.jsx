import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import AboutSection from "./Components/AboutSection";
import BannarSection from "./Components/BannarSection";
import Banner from "./Components/Banner";
import CallToAction from "./Components/CallToAction";
import FAQSection from "./Components/FAQSection";
import FeatureCards from "./Components/FeatureCards";
import Features from "./Components/Features";

const Home = () => {
  return (
    <div className=''>
      {/* <Banner></Banner> */}
      <BannarSection></BannarSection>
      {/* <FeatureCards></FeatureCards> */}
      <Features></Features>
      {/* <CallToAction></CallToAction> */}
      <AboutSection></AboutSection>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
