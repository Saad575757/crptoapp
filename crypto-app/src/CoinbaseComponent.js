import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CoinbaseComponent.css'; // Import the CSS file for styling

function CoinbaseComponent() {
  const [btcPrice, setBTCPrice] = useState(null);

  useEffect(() => {
    async function fetchBTCPrice() {
      try {
        const response = await axios.get('https://api.coinbase.com/v2/prices/spot?currency=USD');
        setBTCPrice(response.data.data.amount);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBTCPrice();
  }, []);

  return (
    <div className="coinbase-container">
      <h2 className="coinbase-title">Coinbase Integration</h2>
      <div className="coinbase-content">
        {btcPrice !== null ? (
          <p className="btc-price">Current Bitcoin price: ${btcPrice}</p>
        ) : (
          <p className="fetching">Fetching price...</p>
        )}
      </div>
    </div>
  );
}

export default CoinbaseComponent;
