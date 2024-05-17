import NavBar from "./NavBar";
import "./styles.css"

export default function Header(){

    return (
        <div>
            <div className='blue-box' style={{fontSize:12, padding:4}}>
                <p>The health and well-being of our patients and their health care team will always be our priority, 
                    so we follow the best practices for cleanliness.
                </p>
            </div>
            <NavBar/>
        </div>
    )
}