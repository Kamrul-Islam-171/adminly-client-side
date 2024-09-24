
import AboutSection from "./Components/AboutSection";
import BannarSection from "./Components/BannarSection";


import FAQSection from "./Components/FAQSection";

import Features from "./Components/Features";

const Home = () => {
  return (
    <div className=''>
     
      <BannarSection></BannarSection>
      
      <Features></Features>
      
      <AboutSection></AboutSection>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
