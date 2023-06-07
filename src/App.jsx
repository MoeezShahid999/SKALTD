import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Complaint } from "./components/complaint";
import Introduction from "./components/introduction";
import Ombudsman from "./components/ombudsman";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Introduction data={landingPageData.Introduction} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Complaint data={landingPageData.Complaint} />
      <Ombudsman data={landingPageData.Ombudsman} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
