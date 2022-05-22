import React from 'react';
import BusinessSummary from './BusinessSummary';
import ClientsReviews from './ClientsReviews';
import ComingSoonTools from './ComingSoonTools';
import HeroBanner from './HeroBanner';
import ToolsGallery from './ToolsGallery';
import ToolsSection from './ToolsSection';

const Home = () => {

    return (
        <>
        <HeroBanner></HeroBanner>
        <ToolsSection ></ToolsSection>
        <BusinessSummary></BusinessSummary>
        <ToolsGallery ></ToolsGallery>
        <ClientsReviews></ClientsReviews>
        <ComingSoonTools></ComingSoonTools>
        </>
    );
};

export default Home;