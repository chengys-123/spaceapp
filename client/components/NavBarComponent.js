import React from 'react';
import Link from 'next/link';

export default NavBarComponent => {
    return (
        <nav className="navbar is-black" role="navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png" width="100" height="200" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item"> Home </a>
            </Link>
            <Link href="/MainRocketPage">
              <a className="navbar-item"> Rockets </a>
            </Link>
            <Link href="/MainHistoryPage">
              <a className="navbar-item"> History </a>
            </Link>
            <Link href="/MainLaunchPage">
              <a className="navbar-item"> Launches </a>
            </Link>
          </div>
        </div>
      </nav>
    )
}