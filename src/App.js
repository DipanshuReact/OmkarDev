import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Market from './components/Market';
import MatchOdds from './components/MatchOdds';
import OmkarDev from './components/OmkarDev';
import Photoreview from './components/Photoreview';
import Mobile from './Mobile';
import Reviews from './components/Reviews';
import MobOmkardev from './components/MobileCompo/MobOmkardev';

import PortfolioSection from './components/PortfolioSection';
import MobPort from './components/MobileCompo/MobPort';
import MobWork from './components/MobileCompo/MobWork';
import MobReview from './components/MobileCompo/MobReview';
import MobBefAft from './components/MobileCompo/MobBefAft';

function App() {
  // Define a breakpoint for mobile devices (e.g., 768 pixels)
  const mobileBreakpoint = 768;
  
  // Get the current window width
  const windowWidth = window.innerWidth;

  return (
    <>
      {windowWidth < mobileBreakpoint ? (
        // Render components for mobile
        <>
       {/* <Mobile></Mobile> */}
       <MobOmkardev></MobOmkardev>
       <MobPort></MobPort>
       <MobWork></MobWork>
       <MobReview></MobReview>
       <MobBefAft></MobBefAft>
        </>
      ) : (
        // Render components for larger screens
        <>
         {/* <p>hi</p> */}
   {/* <Market></Market> */}
   {/* <MatchOdds></MatchOdds> */}
   {/* <Filter></Filter> */}

   
   <OmkarDev></OmkarDev>
   <Reviews></Reviews>
   <Photoreview></Photoreview>
   <PortfolioSection></PortfolioSection>
   
        </>
      )}
    </>
  );
}

export default App;
