// App.js
import React from 'react';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import PopularResources from './components/PopularResources';
import ImgContent from './components/ImgContent';
import ResourcesCategory from './components/ResourcesCategory';

import Footer from './components/Footer';
import FooterBorder from './components/footerBorder';

const App = () => {
  return (
    <div>
    
    <Header/>
    <ContentSection/>
    <PopularResources/>
    <ImgContent/>
    <ResourcesCategory/>
    


    <Footer/>
    <FooterBorder/>

    
   
      {/* Add other sections of your homepage here */}
    </div>
  );
};

export default App;
