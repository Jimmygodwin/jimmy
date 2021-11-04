import react from 'react';
import pencil  from './icons/pencil 1.png';
import destination from './icons/destination 1.png';
import writing from './icons/writing 1.png';
import handshake from './icons/hand-shake 1.png';
import './nav.css';


function Greet() {
    return(
        <div >
            
            <div id="fullbar" class="navba d-flex justify-content-evenly bd-highlight mb-3 fixed-bottom">
                 <a href="www.google.com">
                 <div class="p-2 bd-highlight">
                     <img id="icons" src ={pencil} alt="pencil"/>
                     <p>Skillset</p>
                 </div>
                 </a>
            
                
                 <div class="p-2 bd-highlight">
                     <img id="icons" src ={destination} alt="destination"></img>
                     <p>The Journey</p>
                 </div>
                 <div class="p-2 bd-highlight">
                     <img id="icons" src ={writing} alt="destination"></img>
                     <p>Blog</p>
                 </div>
                 <div class="p-2 bd-highlight">
                     <img id="icons" src ={handshake} alt="handshake"></img>
                     <p>Connect</p>
                 </div>
                 
            </div>

             
         
        </div>
    )
}


export default Greet;