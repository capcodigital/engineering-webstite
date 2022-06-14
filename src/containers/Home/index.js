import React from 'react';
import NavBar from '../../components/NavBar';
import HeroComponent from '../../components/HeroComponent';
import ExploreSection from '../ExploreSection';
import OpenRoleSetion from '../OpenRoleSetion';
import EventSection from '../EventsSection';
import CultureSection from '../CultureSection';

function Home() {
  return (
    <div>
        <NavBar />
        <HeroComponent />
        <ExploreSection />
        <OpenRoleSetion bgColor={'#000000'}/>
        <EventSection bgColor={'#F5F5F5'}/>
        <CultureSection />
    </div>
  )
}

export default Home