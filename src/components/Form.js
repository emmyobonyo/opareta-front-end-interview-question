import React from 'react';

function Form() {
  const handleClick = () => {
    const params = {
      convert: 'USD',
      id: 1,
      amount: 40,
    };

    const api = new URL('https://radiant-retreat-45087.herokuapp.com/https://pro-api.coinmarketcap.com/v1/tools/price-conversion');

    Object.keys(params).forEach((key) => api.searchParams.append(key, params[key]));

    fetch(api, {
      headers: {
        'X-CMC_PRO_API_KEY': '6a327d7f-9672-4415-93f1-d1cea0b90e17',
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res.data.quote.USD.price));
  };

  return (
    <div>
      <input type="number" placeholder="Enter Amount" />
      <br />
      <select name="crypto" id="crypto" onChange={handleClick}>
        <option value="Bitcoin">Bitcoin (BTC)</option>
        <option value="Etherium">Etherium (ETH)</option>
        <option value="Litecoin">Litecoin (LIT)</option>
      </select>
      <button type="button">
        <i className="fa fa-exchange" aria-hidden="true" />
      </button>
      <select name="currency" id="currency">
        <option value="US Dollars">US Dollars ($)</option>
        <option value="Pound Sterlings">Pound Sterling (£)</option>
        <option value="Uganda Shillings">Uganda Shillings</option>
      </select>
    </div>
  );
}

export default Form;
