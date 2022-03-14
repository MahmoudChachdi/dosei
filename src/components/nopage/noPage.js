import React from 'react';
import { Outlet, Link } from "react-router-dom";



const NoPage = () => {
	return(
	

<section class="vh-100 white baskerville">
  <header class="tc ph5 lh-copy">
      <h1 class="f1 f-headline-l code mb3 fw9 dib tracked-tight black">404</h1>
      <h2 class="tc black f1-l fw1">Sorry, we can't find the page you are looking for.</h2>
  </header>
  <p class="fw1 i black tc mt4 mt5-l f4 f3-l">Are you looking for one of these?</p>
  <ul class="list tc pl0 w-100 mt5">
    <li class="dib"><Link to='/' class="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/">Home</Link></li>
    <li class="dib"><Link to='collab' class="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/about">Collaboration</Link></li>
    <li class="dib"><Link to='art' class="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/careers">Art</Link></li>
    <li class="dib"><Link to='order' class="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/contact">Merch</Link></li>

  </ul>
  <Outlet/>
</section>
)}

export default NoPage;