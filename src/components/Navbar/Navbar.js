import React from 'react';
import { Outlet, Link } from "react-router-dom";

import LOGO from './LOGO.png';
import Tilt from 'react-tilt';
import './Navbar.css';

const Navbar = () => {
  return(
<>
<nav className=" font background dt w-100 border-box  ph5-ns shadow-3">
  <div  style={{paddingTop: '0px'}} className='ma2 mt2 ph3 '>
         <Link to="/" > 
          <Tilt className="Tilt r2 shadow-2 " options={{ max : 55 }} style={{ height: 50, width: 50 }} >
              <div className="Tilt-inner pa1" > 
                <img
                              src={LOGO}
                              style={{ width:'100%', height:'100%' }}
                              
                              alt='logo'/> 
              </div>
            </Tilt>
            </Link>
          
  </div>
  <div class="dtc v-mid w-75 tr">
    
    
    <Link to="collab" className='pointer b link   f4 f6-ns dib mr3 mr4-ns'>
      <button>
        <span className="button_top "> Collaboration
        </span>
      </button>
    </Link>
    
    <Link to="art" className='pointer b link   f4 f6-ns dib mr3 mr4-ns' >
    <button>
  <span className="button_top"  > Art
  </span>
</button></Link>

</div>
</nav>
<Outlet /> 
 </>   
)  
  
}
export default Navbar;



