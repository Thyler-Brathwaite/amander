import React, { createContext, useState } from "react";
import spiritedImg from "../images/spirited.png";
import chinese1 from "../images/chinese1.png";
import chinese2 from "../images/chinese2.png";
import chinese3 from "../images/chinese3.png";
import roll1 from "../images/roll1.png";
import roll2 from "../images/roll2.png";
import sprite1 from "../images/sprite1.png";
import sprite2 from "../images/sprite2.png";
import milk from "../images/milk.png";
import studio from "../images/StudioGhibli.png";
import paimon from "../images/paimon.png";
import paimon2 from "../images/paimon2.png";
import xianling from "../images/xianling.png";
import music1 from "../images/music1.png"
import music2 from "../images/music2.png"
import sombr from "../images/sombr.png"
import chinesem from "../audio/chinesem.mp4"
import rollm from "../audio/rollm.mp4"
import sombrm from "../audio/sombrm.mp4"
import howls from "../audio/howls.mp4"
import genshinm from "../audio/genshinm.mp4"


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const cards = [
  {
    title: "My Guiding Spirit",
    description: "Like Chihiro, you move through life with quiet courage. You are kind, curious, and pure. Your beauty captivates my soul, such so that it takes my spirit away.(it may be the witch magic) ",
    color: "from-pink-100 to-rose-200",
    image: spiritedImg,
    image2: sprite2,
    song: howls,
    bgColor: "bg-rose-50",
    floatingImage: sprite1,
  },
  {
    title: "The Flame That Found Me",
    description: "Xiangling’s fire is said to be an intense elemental power that burns hotter than cooking fire, yet you seem to burn hotter than her flames in more ways than one. Whether its your sizzling good looks or your comforting presence, your warmth is one I can't get enough of. (Some how her hands are still always cold tho.)",
    color: "from-sky-100 to-indigo-200",
    image: xianling,
    image2: paimon,
    song: genshinm,
    bgColor: "bg-sky-50",
    floatingImage: paimon2,
  },
  {
    title: "My Chinese Monk",
    description: "I'm still scepticle on this heritage of yours but although you may not look that chinese, similar to a chinese monk your patience humbles me. (I have like 2 chinese friends btw I get a pass)",
    color: "from-amber-100 to-orange-200",
    image: chinese1,
    image2: chinese3,
    song: chinesem,
    bgColor: "bg-amber-50",
    floatingImage: chinese2,
  },
  {
    title: "My Sweetest Cloud",
    description: "As cute as cinnamoroll and as sweet as a cotton candy cloud, you’re the kind of sweetness the world doesn’t deserve. Like Cinnamoroll floating through a pastel sky, you make my heart lighter just by being near.",
    color: "from-blue-100 to-cyan-200",
    image: roll1,
    image2: roll2,
    song: rollm,
    bgColor: "bg-blue-50",
    floatingImage: milk,
  },
  {
    title: "More Than Friends",
    description: " like Sombr once said, Can I get it through to you? We can be more than friends — I wanna love you till the end of my life. ’Cause you’re a ten, and I’m a man that needs a dime. (its maybe like the only non-depressing thing he ever wrote T_T)",
    color: "from-fuchsia-100 to-purple-200",
    image: sombr,
    image2: music2,
    song: sombrm,
    bgColor: "bg-fuchsia-50",
    floatingImage: music1,
  },
];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const value = {
    cards,
    currentCard: cards[currentIndex],
    nextCard,
    prevCard,
  };

  return <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>;
};