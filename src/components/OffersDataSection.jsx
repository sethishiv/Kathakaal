import React, { useEffect, useState } from 'react';
import { FaGift, FaClock, FaBolt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OffersDataSection = () => {
  // Example data: add badge to any offer you want
  const initialOffers = [
    {
      title: 'Festive Loan Bonanza',
      desc: 'Apply now & save on processing charges.',
      expiry: '2025-07-31T23:59:59',
      badge: 'HOT', // Example badge
    },
    {
      title: 'Startup Support Offer',
      desc: '5% cashback on loans above ₹1,00,000.',
      expiry: '2025-08-05T18:00:00',
      // no badge
    },
    {
      title: 'Women Entrepreneurs',
      desc: 'Lower interest rates for women-led businesses.',
      expiry: '2025-08-10T12:00:00',
      badge: 'NEW', // Example badge
    },
    {
      title: 'Rural Empowerment Scheme',
      desc: 'Special microfinance rates for rural businesses.',
      expiry: '2025-08-15T20:30:00',
      // no badge
    },
  ];

  const [offers, setOffers] = useState([]);

  // Update countdown for each offer
  const updateCountdowns = () => {
    const updatedOffers = initialOffers.map((offer) => {
      const now = new Date();
      const end = new Date(offer.expiry);
      const diff = end - now;

      if (diff <= 0) {
        return { ...offer, countdown: 'Offer expired' };
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      return {
        ...offer,
        countdown: `${days}d ${hours}h ${minutes}m ${seconds}s`,
      };
    });
    setOffers(updatedOffers);
  };

  useEffect(() => {
    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800">

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-800 tracking-tight drop-shadow flex items-center justify-center gap-3">
          <span>Limited Time Offers</span>
        </h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative bg-white/80 backdrop-blur border border-blue-200 rounded-3xl shadow-2xl flex flex-col justify-between px-7 py-7 hover:-translate-y-2 hover:shadow-blue-200 hover:shadow-2xl transition duration-300 cursor-pointer overflow-hidden"
            >
              {/* BADGE */}
              {offer.badge && (
                <span className="absolute top-5 right-7 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow z-10 tracking-wide animate-pulse flex items-center gap-1">
                  {offer.badge.toLowerCase() === 'hot' && (
                    <FaBolt className="text-white text-xs" />
                  )}
                  {offer.badge}
                </span>
              )}

              {/* Icon */}
              <div className="flex items-center justify-center mb-3">
                <div className="bg-blue-100 text-blue-700 rounded-full p-3 border-2 border-white shadow">
                  <FaGift className="text-2xl drop-shadow" />
                </div>
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-blue-800 text-center mt-1 mb-2 tracking-tight leading-snug">
                {offer.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-base text-center flex-grow mb-2 font-medium">
                {offer.desc}
              </p>
              {/* Expiry and Countdown */}
              <div className="flex flex-col gap-1 items-center">
                <div className="text-xs text-gray-400 italic flex items-center gap-1 mb-1">
                  <FaClock className="text-blue-400" />
                  <span>
                    Ends: <span className="font-medium">{new Date(offer.expiry).toLocaleString()}</span>
                  </span>
                </div>
                <span
                  className={`inline-block px-4 py-1 rounded-full text-[13px] font-semibold tracking-wider shadow ${
                    offer.countdown === 'Offer expired'
                      ? 'bg-gray-200 text-red-500'
                      : 'bg-gradient-to-r from-blue-600 to-blue-400 text-white'
                  }`}
                >
                  {offer.countdown}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/loan"
            className="bg-gradient-to-l from-blue-700 to-blue-500 hover:from-blue-900 hover:to-blue-600 text-white px-10 py-3 rounded-full font-bold text-lg shadow-lg transition duration-300 drop-shadow"
          >
            View All Loan Options
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OffersDataSection;
