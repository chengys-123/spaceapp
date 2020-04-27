import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import 'bulma/css/bulma.min.css';
import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default App => {
  return (
    <div>
      <Head>
        <title>Space X</title>
      </Head>

      <div className="block-1">
        <div className="sticky">
          <img src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png" className="logo" />
          <p></p>
          <div className="container">
            <h2>SpaceX designs, manufactures and launches advanced rockets and spacecraft.
            The company was founded in 2002 to revolutionize space technology, with the ultimate goal
             of enabling people to live on other planets.</h2>
          </div>
        </div>
      </div>
      <div className="block-2">
        <div className="first hero">
          <img className="hero-profile-img" src="/static/rocket.jpg"></img>
          <div className="hero-description-bk"></div>
          <div className="hero-description">
            <p>Discover all available rockets.</p>
          </div>
          <Link href="/MainRocketPage">
            <a className="hero-btn"> Learn More </a>
          </Link>
        </div>
        <div className="second hero">
          <img className="hero-profile-img" src="static/history.jpg" alt=""></img>
          <div className="hero-description-bk"></div>
          <div className="hero-description">
            <p>Historical events made by every rockets dispatched.</p>
          </div>
          <Link href="/MainHistoryPage">
            <a className="hero-btn"> Learn More </a>
          </Link>
        </div>
        <div className="third hero">
          <img className="hero-profile-img" src="static/launch.jpg" alt=""></img>
          <div className="hero-description-bk"></div>
          <div className="hero-description">
            <p>All rocket launches.</p>
          </div>
          <Link href="/MainLaunchPage">
            <a className="hero-btn"> Learn More </a>
          </Link>
        </div>
        <div className="lead lead-1">Visit the official <a href="https://www.spacex.com">
          <img src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png"></img>
        </a> site now. </div>
      </div>
    </div>
  );
}



