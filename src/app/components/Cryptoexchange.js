'use client';

import { useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import { FaBitcoin, FaEthereum } from 'react-icons/fa6';
import { SiTether, SiLitecoin } from 'react-icons/si';

const coinOptions = [
  { name: 'Bitcoin', symbol: 'BTC', icon: <FaBitcoin className="text-orange-400" /> },
  { name: 'Ethereum', symbol: 'ETH', icon: <FaEthereum className="text-indigo-400" /> },
  { name: 'Tether', symbol: 'USDT', icon: <SiTether className="text-green-400" /> },
  { name: 'Litecoin', symbol: 'LTC', icon: <SiLitecoin className="text-blue-300" /> },
];

export default function CryptoExchange() {
  const [tab, setTab] = useState('Exchange');
  const [rateType, setRateType] = useState('best');
  const [sendCurrency, setSendCurrency] = useState('BTC');
  const [getCurrency, setGetCurrency] = useState('USDT');
  const [sendAmount, setSendAmount] = useState(0.1);
  const [getAmount, setGetAmount] = useState(11437);

  const getCoin = (symbol) => coinOptions.find((c) => c.symbol === symbol);

  return (
    <div className="w-full mx-auto mt-10 bg-[#0e0f1a] text-white p-6 rounded-2xl shadow-lg">
      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-[#161922] p-3 py-3 rounded-xl">
        {['Exchange', 'Buy', 'Sell'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-3 rounded-lg text-sm font-medium transition ${
              t === tab ? 'bg-[#313540]' : 'bg-[#20222E] text-[#FFFFFF]/40'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* You Send */}
      <div className="flex items-center bg-[#1a1b2c] rounded-xl mb-6">
        <div className='flex justify-between items-center w-[50%] rounded-l-lg bg-[#1C202A] p-4'>
            <span className="manrope-regular text-xs md:text-base text-[#CEE4FA] mr-2">You send</span>
            <input
            type="number"
            value={sendAmount}
            onChange={(e) => setSendAmount(e.target.value)}
            className="bg-transparent outline-none w-20 text-white text-lg font-semibold"
            />
        </div>
        <div className="w-[50%] flex items-center justify-between p-5 rounded-r-lg bg-[#161922]">
          {getCoin(sendCurrency).icon}
          <select
            value={sendCurrency}
            onChange={(e) => setSendCurrency(e.target.value)}
            className="bg-[#161922] w-[95%] text-xs px-1.5 py-1 rounded-md"
          >
            {coinOptions.map((coin) => (
              <option key={coin.symbol} value={coin.symbol}>
                {coin.symbol}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Rate Switch */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex">
          <button
            onClick={() => setRateType('best')}
            className={`px-4 py-2 rounded-l-full text-sm font-medium ${
              rateType === 'best'
                ? 'bg-[#431EA1] text-white'
                : 'bg-[#2c2d3f] text-gray-300'
            }`}
          >
            Best Rate
          </button>
          <button
            onClick={() => setRateType('fixed')}
            className={`px-4 py-2 rounded-r-full text-sm font-medium ${
              rateType === 'fixed'
                ? 'bg-[#2c2d3f] text-white'
                : 'bg-[#3B1868] text-gray-300'
            }`}
          >
            Fixed Rate
          </button>
        </div>
        <button className="text-xl text-cyan-300">
          <FaExchangeAlt />
        </button>
      </div>

      {/* You Get */}
      <div className="flex items-center bg-[#1a1b2c] rounded-xl mb-6">
        <div className='flex justify-between items-center w-[50%] rounded-l-lg bg-[#1C202A] p-4'>
            <span className="text-[#CEE4FA] text-xs md:text-base mr-2">You get</span>
            <input
            type="number"
            value={getAmount}
            onChange={(e) => setGetAmount(e.target.value)}
            className="bg-transparent outline-none w-24 text-white text-lg font-semibold"
            />
        </div>
        <div className="ml-auto flex items-center p-5 w-[50%] rounded-r-lg bg-[#161922]">
          {getCoin(getCurrency).icon}
          <select
            value={getCurrency}
            onChange={(e) => setGetCurrency(e.target.value)}
            className="bg-[#161922] text-xs px-1.5 py-1 rounded-md w-[95%]"
          >
            {coinOptions.map((coin) => (
              <option key={coin.symbol} value={coin.symbol}>
                {coin.symbol}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Exchange Button */}
     <div className='mx-auto w-[40%]'>
         <button className="w-[100%] px-5 mx-auto py-3 rounded-xl bg-[#6FFFE9] text-[#0e0f1a] font-semibold hover:bg-cyan-300 transition">
            Exchange
        </button>
     </div>
    </div>
  );
}
