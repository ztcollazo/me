import { useState, useEffect } from 'react';
import { HiOutlineChevronUp } from '@react-icons/all-files/hi/HiOutlineChevronUp';
import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {
  const [atTop, setAtTop] = useState(true);

  const handleScroll = () => setAtTop(window.scrollY < 200);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <button type="button" className={`rounded-xl ${atTop ? 'hidden' : ''} z-50 shadow-xl cursor-pointer dark:text-black text-gray-600 p-4 bg-white fixed bottom-10 right-10`} onClick={() => scroll.scrollToTop({ smooth: true })}>
      <HiOutlineChevronUp className="cursor-pointer" />
    </button>
  );
};

export default BackToTop;
