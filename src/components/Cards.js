import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../images/img-9.jpg"
              text="Explore the waterfall"
              path="/services"
              label="Adventure"
            />
            <CardItem
              src="../images/img-2.jpg"
              text="Explore the Islands"
              path="/services"
              label="Luxury"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="../images/img-3.jpg"
              text="Explore the waterfall"
              path="/services"
              label="Water"
            />
            <CardItem
              src="../images/img-4.jpg"
              text="Explore the Islands"
              path="/services"
              label="Sports"
            />
            <CardItem
              src="../images/img-8.jpg"
              text="Explore the Islands"
              path="/services"
              label="Dessert"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;