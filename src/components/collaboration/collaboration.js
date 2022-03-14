import React from 'react';
import COLLAB1 from './collab1.jpg';
import COLLAB2 from './collab2.jpg';
import './collaboration.css';


const Collab = () => {
	return(
<div className="  center  " style={{ width: '100%' }}>
<div className='card1'>
<div className='card3'>
   <div className= ' ' >
    <div className= ' ' >
      <img className='border' alt='robots' src={COLLAB1 }/>
     </div>
      <div className=''>
        <div className='center h2' style={{ width: '100%' }}>title</div>
        <div className='center p mt2' style={{ width: '100%' }}>concept</div>
      </div>
       
       </div> 
      </div>
    </div>
    <div className='card1'>
<div className='card3'>
   <div className= ' ' >
    <div className= ' ' >
      <img className='border' alt='robots' src={COLLAB2 }/>
     </div>
      <div className=''>
        <div className='center h2' style={{ width: '100%' }}>title</div>
        <div className='center p mt2' style={{ width: '100%' }}>concept</div>
      </div>
       
       </div> 
      </div>
    </div>
</div>
)}



export default Collab;