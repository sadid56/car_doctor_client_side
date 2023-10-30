import About from "../About/About";
import Banner from "../Banner/Banner";
import HaveAQuestion from "../HaveAQuestion/HaveAQuetion";
import Services from "../Services/Services";

const Home = () => {
    return ( 
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <HaveAQuestion></HaveAQuestion>
        </div>
     );
}
 
export default Home;