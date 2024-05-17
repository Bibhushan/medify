
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";

export default function HomePage(){

    return (
        <div style={{padding:'1rem 2rem'}}>
            <NavBar />
            <HeroSection 
                topText='Skip the travel! Find Online'
                middleNormal='Medical'
                middleHighlight='Center'
                bottomText='Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.'
            />
        </div>
    )
}