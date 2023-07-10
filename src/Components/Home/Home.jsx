import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Featured from "./FeaturedSection/Featured";
import Jobs from "./RecentJobs/Jobs";
import Testimonial from "./Testimonial/Testimonial";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Featured />
      <Jobs />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
