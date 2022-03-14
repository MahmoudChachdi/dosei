import React from 'react';
import ART1 from './art1.jpg';
import ART2 from './art2.jpg';
import './art.css';

const Art = () => {
	return(
<div className="  center  " style={{ width: '100%' }}>
<div className='card1'>
<div className='card3'>
   <div className= ' ' >
    <div className= ' ' >
      <img className='border' alt='robots' src={ART1 }/>
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
      <img className='border' alt='robots' src={ART2 }/>
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

export default Art;