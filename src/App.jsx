import React, { useState, useEffect } from 'react';

const HeaderAnimation = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['baby', 'babe', 'love'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <span className="text-pink-500">{texts[textIndex]}</span>
  );
};

const SweetBox = ({ sweetText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-1/2 lg:w-1/5 bg-pink-200 rounded-lg overflow-hidden flex justify-center items-center m-2">
      <button
        className="w-3/4 h-3/4 bg-transparent rounded-lg flex justify-center items-center transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <p className="text-lg text-center">{sweetText}</p>
        ) : (
          <p className="text-center" style={{ fontSize: '3em' }}>❤️</p>
        )}
      </button>
    </div>
  );
};

const App = () => {
  const sweetTexts = [
    "You're my sunshine",
    "You make my heart skip a beat",
    "Forever and always",
    "You're my world",
    "Love you to the moon and back",
    "You're my everything",
    "You complete me",
    "You're my soulmate",
    "Can't imagine life without you",
    "You're the best thing that ever happened to me"
  ];

  return (
    <div className="p-4 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 min-h-screen">
      <h1 className="text-3xl text-center font-bold mt-4">Happy 1st Monthsarry <HeaderAnimation /></h1>
      <div className="flex flex-wrap justify-center items-center">
        {sweetTexts.map((text, index) => (
          <SweetBox key={index} sweetText={text} />
        ))}
      </div>
      <p className="text-center text-white mt-8">Happy 1st Month Anniversary, Paula Mae!(baby) 💖  every moment has been filled with love and joy. You are my sunshine on cloudy days, my laughter in moments of doubt, and my constant source of happiness. Here's to many more months of love, laughter, and beautiful memories together. I love you more than words can express!</p>
    </div>
  );
};

export default App;


