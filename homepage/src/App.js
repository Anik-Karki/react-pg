// App.js
import React from 'react';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import SecondContentSection from './components/SecondContentSection';
import ThirdContentSection from './components/ThirdContentSection';
import FourthContentSection from './components/FourthContentSection';
import FifthContentSection from './components/FifthContentSection';
import SixthContentSection from './components/SixthContentSection';
import Footer from './components/Footer';
import FooterBorder from './components/footerBorder';


const App = () => {
  return (
    <div>
      <Header />
      <ContentSection />
    <SecondContentSection/>
    <ThirdContentSection/>
    <FourthContentSection/>
    <FifthContentSection/>
    <SixthContentSection/>
    <Footer/>
    <FooterBorder/>

    
   
      {/* Add other sections of your homepage here */}
    </div>
  );
};

export default App;
