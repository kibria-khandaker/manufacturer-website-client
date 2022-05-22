import React from 'react';
import HeroBanner from './HeroBanner';
import ToolsSection from './ToolsSection';
import BusinessSummary from './BusinessSummary';
import ToolsGallery from './ToolsGallery';
import ClientsReviews from './ClientsReviews';
import ComingSoonTools from './ComingSoonTools';

const Home = () => {
    return (
        <>
        <HeroBanner></HeroBanner>
        <ToolsSection></ToolsSection>
        <BusinessSummary></BusinessSummary>
        <ToolsGallery></ToolsGallery>
        <ClientsReviews></ClientsReviews>
        <ComingSoonTools></ComingSoonTools>
        </>
    );
};

export default Home;