import React from 'react';

function Form() {
  return (
    <div>
      <input type="number" placeholder="Enter Amount" />
      <br />
      <select name="crypto">
        <option value="Bitcoin">Bitcoin (BTC)</option>
        <option value="Etherium">Etherium (ETH)</option>
        <option value="Litecoin">Litecoin (LIT)</option>
      </select>
      <button type="button">
        <i className="fa fa-exchange" aria-hidden="true" />
      </button>
      <select name="currency">
        <option value="US Dollars">US Dollars ($)</option>
        <option value="Pound Sterlings">Pound Sterling (£)</option>
        <option value="Uganda Shillings">Uganda Shillings</option>
      </select>
    </div>
  );
}

export default Form;
