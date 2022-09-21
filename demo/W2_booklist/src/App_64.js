import React from 'react';
import './App_64.css';

const App_64 = () => {
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
        <div className="section-center">
          <article className="menu-item">
            <img src="/images/item-1.jpeg" alt="buttermilk" pancakes="" className="photo"/>
            <div className='item-info'>
              <header>
                <h4>buttermilk pancakes</h4>
                <h4 className="price">$15.99</h4>
              </header>
              <p className="item-text">
                I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed 
              </p>
            </div>
          </article>
          <article className="menu-item">
            <img src="/images/item-2.jpeg" alt="diner" double="" className="photo"/>
            <div className="item-info">
              <header>
                <h4>diner double</h4>
                <h4 className="price">$13.99</h4>
              </header>
              <p className="item-text">
                vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats 
              </p>
            </div>
          </article>
          <article className="menu-item">
            <img src="/images/item-3.jpeg" alt="godzilla" milkshake="" className="photo"/>
            <div className="item-info">
              <header>
                <h4>godzilla milkshake</h4>
                <h4 className="price">$6.99</h4>
              </header>
              <p className="item-text">
                ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.
              </p>
            </div>
          </article>
          </div>
      </section>
  );
};

export default App_64;