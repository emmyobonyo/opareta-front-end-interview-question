import React, { useState } from 'react';

function Form() {
  const [state, setState] = useState(0);
  const [swap, setSwap] = useState(true);

  const handleClick = () => {
    const amount = document.getElementById('number').value ? document.getElementById('number').value : '0';
    const crypto = document.getElementById('crypto');
    const currency = document.getElementById('currency');

    if (amount === '0') {
      setState(() => 0);
    } else {
      const params = {
        convert: currency.value,
        id: crypto.value,
        amount,
      };

      const api = new URL('https://radiant-retreat-45087.herokuapp.com/https://pro-api.coinmarketcap.com/v1/tools/price-conversion');

      Object.keys(params).forEach((key) => api.searchParams.append(key, params[key]));

      fetch(api, {
        headers: {
          'X-CMC_PRO_API_KEY': '6a327d7f-9672-4415-93f1-d1cea0b90e17',
        },
      })
        .then((res) => res.json())
        .then((res) => setState(() => `${amount} ${res.data.name} ${res.data.symbol} =  ${res.data.quote[params.convert].price} ${params.convert}`));
    }
  };

  const clickButton = () => {
    setSwap(() => !swap);
  };

  const clickSwap = () => {
    const amount = document.getElementById('number').value ? document.getElementById('number').value : '0';
    const crypto = document.getElementById('crypto');
    const currency = document.getElementById('currency');

    if (amount === '0') {
      setState(() => 0);
    } else {
      const params = {
        convert: crypto.value,
        id: currency.value,
        amount,
      };

      const api = new URL('https://radiant-retreat-45087.herokuapp.com/https://pro-api.coinmarketcap.com/v1/tools/price-conversion');

      Object.keys(params).forEach((key) => api.searchParams.append(key, params[key]));

      fetch(api, {
        headers: {
          'X-CMC_PRO_API_KEY': '6a327d7f-9672-4415-93f1-d1cea0b90e17',
        },
      })
        .then((res) => res.json())
        .then((res) => setState(() => `${amount} ${res.data.name} ${res.data.symbol} =  ${res.data.quote[params.convert].price} ${params.convert}`));
    }
  };

  return (
    <div>
      { swap && (
        <input id="number" type="number" placeholder="Enter Amount" onChange={handleClick} />
      )}
      {
        !swap && (
          <input id="number" type="number" placeholder="Enter Amount" onChange={clickSwap} />
        )
      }
      <br />
      { swap && (
        <select name="crypto" id="crypto" onChange={handleClick}>
          <option value="1">Bitcoin (BTC)</option>
          <option value="2">Litecoin (LIT)</option>
          <option value="3">Namecoin (NMC)</option>
        </select>
      ) }
      { !swap && (
        <select name="currency" id="currency" onChange={clickSwap}>
          <option value="2781">US Dollars ($)</option>
          <option value="2791">Pound Sterling (£)</option>
          <option value="3570">Uganda Shillings (/-)</option>
        </select>
      ) }
      <button type="button" onClick={clickButton}>
        <i className="fa fa-exchange" aria-hidden="true" />
      </button>
      { swap && (
        <select name="currency" id="currency" onChange={handleClick}>
          <option value="USD">US Dollars ($)</option>
          <option value="GBP">Pound Sterling (£)</option>
          <option value="UGX">Uganda Shillings (/-)</option>
        </select>
      ) }
      { !swap && (
        <select name="crypto" id="crypto" onChange={clickSwap}>
          <option value="BTC">Bitcoin (BTC)</option>
          <option value="LIT">Litecoin (LIT)</option>
          <option value="NMC">Namecoin (NMC)</option>
        </select>
      ) }
      <p>{ state }</p>
    </div>
  );
}

export default Form;
