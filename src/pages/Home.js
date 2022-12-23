import Nav from "../components/Nav";
import Landingpage from "../components/Landingpage";
import Aboutme from "../components/Aboutme";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Info from "../components/Info"
const Home = () => {

    return (
        <div className="overlay">
            <Nav />
            <Landingpage />
            <Aboutme />
            <Experience />
            <Project />
            <Contact />
            <Info />
        </div>
    )
}
export default Home
