import CaseStudy from "./Components/UI/CaseStudy";
import Client from "./Components/UI/Client";
import Header from "./Components/UI/Header";
import Hero from "./Components/UI/Hero";
import Service from "./Components/UI/Service";


const App = () => {
    return (
        <div>
            <Header/>
             <Hero/>
             <Client/>
             <CaseStudy/>
             <Service/>
        </div>
    );
};

export default App;