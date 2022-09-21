import { useState } from 'react';
import Menu_64 from './components/Menu_64';
import items from './data'
import React from 'react';
import './App_64.css';

const App_64 = () => {
  const [menuItems, setMenuItems] = useState(items);

  //console.log('menuItems', menuItems);=
  return (
    <section className="menu">
        {/* title */}
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* filter buttons */}
        <div className="btn-container">
          <button type="button" className="filter-btn" data-id="all">
            all
          </button> 
          <button type="button" className="filter-btn" data-id="breakfast">
            breakfast
          </button>
          <button type="button" className="filter-btn" data-id="lunch">
            lunch
          </button>
          <button type="button" className="filter-btn" data-id="shakes">
            shakes
          </button>
          <button type="button" className="filter-btn" data-id="dinner">
            dinner
          </button>
        </div>
        {/* menu items */}
        <Menu_64 items={menuItems} />
        <script src="app.js"></script>
      </section>
       
  );
};

export default App_64;