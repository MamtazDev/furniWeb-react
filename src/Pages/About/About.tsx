import React from 'react';
import Banner from './Components/Banner';
import VideoSection from './Components/VideoSection';
import Progress from './Components/Progress';
import Quality from './Components/Quality';
import Team from './Components/Team';
import MarqueeSection from './Components/MarqueeSection';

const About = () => {
    return (
     <>
     <Banner/>
     <VideoSection/>
     <Progress/>
     <Quality/>
     <Team/>
     <MarqueeSection/>
     </>
    );
};

export default About;