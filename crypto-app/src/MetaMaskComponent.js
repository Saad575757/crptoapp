import React, { useEffect, useState } from 'react';
import './MetaMaskComponent.css'; // Import the CSS file for styling

function MetaMaskComponent() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function fetchAccounts() {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccounts(accounts);
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchAccounts();
  }, []);

  return (
    <div className="metamask-container">
      <h2 className="metamask-title">MetaMask Integration</h2>
      <div className="metamask-content">
        {accounts.length > 0 ? (
          <p className="connected-account">Connected MetaMask account: {accounts[0]}</p>
        ) : (
          <p className="not-connected">MetaMask not connected</p>
        )}
      </div>
    </div>
  );
}

export default MetaMaskComponent;
