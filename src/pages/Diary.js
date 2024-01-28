import React, { useState, useRef } from "react";
import DiaryPage from "../components/DiaryPage";
import HTMLFlipBook from 'react-pageflip';
import Navbar from "../components/Navbar";


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
    <div >
      <nav className='flex w-full items-center justify-between fixed px-4 lg:h-20 h-20 bg-black'>
        <div>
            <img src={require('../assets/images/fontbolt (2).png')} alt='logo' className='h-8 hidden lg:block'/>
        </div>
        <div>
          <button className='border rounded-lg px-8 py-3 text-center font-bold text-white font-roboto-mono'>
            GUIDELINES
          </button>
        </div>
      </nav>
      {/* <Navbar/> */}
      <div className=" flex justify-center items-center min-h-screen font-roboto-mono bg-black lg:bg-white pt-10 lg:pt-20 rounded-lg flex-col">
      <div className="flex items-center justify-evenly w-full">
        <img src={require('../assets/images/fontbolt (4).png')} alt="left" className="w-14 lg:w-20 hidden lg:block " onClick={ () => flipBookRef.current.pageFlip().flipPrev('top')}/>
        <img src={require('../assets/images/fontbolt (3).png')} alt="right" className="w-14 lg:w-20 hidden lg:block " onClick={() => flipBookRef.current.pageFlip().flipNext('top')}/>
        <img src={require('../assets/images/fontbolt (9).png')} alt="left" className="w-14 lg:w-20 block lg:hidden " onClick={ () => flipBookRef.current.pageFlip().flipPrev('top')}/>
        <img src={require('../assets/images/fontbolt (8).png')} alt="right" className="w-14 lg:w-20 block lg:hidden " onClick={() => flipBookRef.current.pageFlip().flipNext('top')}/>
      </div>
        <HTMLFlipBook width={window.innerWidth > 600 ? window.innerWidth/3 : window.innerWidth} height={window.innerHeight-200} useMouseEvents={false} ref={flipBookRef} size="fixed" showCover={true} mobileScrollSupport={true} className="w-full bg-white rounded-lg">
          <img src={require('../assets/images/deathnote_cover_for_download_by_deathnote_club_d1xmeas.jpg')} className="rounded-lg h-fit" alt="deathnote guidelines"/>
          <img src={require('../assets/images/deathnote_rules___page_1_by_deathnote_club_d1xmein.jpg')} className="rounded-lg h-fit" alt="deathnote guidelines"/>
          <img src={require('../assets/images/deathnote_rules___page_2_by_deathnote_club_d1xmply.jpg')} className="rounded-lg h-fit" alt="deathnote guidelines"/>
          <img src={require('../assets/images/deathnote_rules___page_3_by_deathnote_club_d1xmpp8.jpg')} className="rounded-lg h-fit" alt="deathnote guidelines"/>
          <img src={require('../assets/images/deathnote_rules___page_4_by_deathnote_club_d1xmps7.jpg')} className="rounded-lg h-fit" alt="deathnote guidelines"/>
          <img src={require('../assets/images/deathnote_rules___page_5_by_deathnote_club_d1xmpug.jpg')} className="rounded-lg h-fit" alt="deathnote guidelines"/>
          {generateDiaryPages(100)}
        </HTMLFlipBook> 
        {/* <button onClick={() => goToPage(10)}>Go to Page 10</button> */}
      </div>
    </div>
  )
}
export default Diary
