import Achievement from "./Components/UI/Achievement";
import CaseStudy from "./Components/UI/CaseStudy";
import Client from "./Components/UI/Client";
import Header from "./Components/UI/Header";
import Hero from "./Components/UI/Hero";
import Idea from "./Components/UI/Idea";
import Service from "./Components/UI/Service";
import Testimonial from "./Components/UI/Testimonial";


const App = () => {
    return (
        <div>
            <Header/>
             <Hero/>
             <Client/>
             <CaseStudy/>
             <Service/>
             <Achievement/>
             <Testimonial/>
             <Idea/>
        </div>
    );
};

export default App;