import React, { useState, useRef } from "react";
import DiaryPage from "../components/DiaryPage";
import HTMLFlipBook from 'react-pageflip';


const Diary = (props) => {
  const flipBookRef = useRef(null);

  // Function to handle button click and navigate to a specific page
  const goToPage = (pageNumber) => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flip(pageNumber, 'bottom');
    }
  };


  // Function to generate an array of DiaryPage components
  const generateDiaryPages = (count) => {
    return Array.from({ length: count }, (_, index) => (
         <DiaryPage />
    ));
  };

  return (
    <div className="">
      <nav className='flex w-full items-center justify-between fixed bg-black px-4 lg:h-20 h-20'>
        <div>
            <img src={require('../assets/images/fontbolt (2).png')} alt='logo' className='h-8 hidden lg:block'/>
        </div>
        <div>
          <button className='border rounded-lg px-8 py-3 text-center font-extrabold text-white font-death-note'>
            GUIDELINES
          </button>
        </div>
    </nav>
    <div className=" flex justify-center items-center min-h-screen font-roboto-mono">
      <HTMLFlipBook width={500} height={500} ref={flipBookRef} usePortrait size="fixed" showCover={true}>
        {generateDiaryPages(100)}
      </HTMLFlipBook> 
      <button onClick={() => goToPage(10)}>Go to Page 10</button>
    </div>
      {/* {/* <DiaryPage/> */}
      
    </div>
  )
}
export default Diary
