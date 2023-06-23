import React, { useState, useRef, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from './Card';



const Caroussel = ({ flashcards }) => {
  const [array, setArray] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef(null);
  const [difficultCards, setDifficultCards] = useState([]);
  const [normalCards, setNormalCards] = useState([]);
  const [newDifficultCards, setNewDifficultCards] = useState([]);
  const [newNormalCards, setNewNormalCards] = useState([]);

  useEffect(() => {
    const shuffledItems = [...flashcards].sort(() => Math.random() - 0.5);
    const pickedItems = shuffledItems.slice(0, 15);
    setArray(pickedItems);
  }, [flashcards]);

  useEffect(() => {
    const interval = setInterval(() => {
      setArray(prevArray => [...prevArray, ...difficultCards]);
      setDifficultCards([]);
    }, 6000);
    return () => clearInterval(interval);
  }, [difficultCards]);

  useEffect(() => {
    const interval = setInterval(() => {
      setArray(prevArray => [...prevArray, ...normalCards]);
      setNormalCards([]);
    }, 15000);
    return () => clearInterval(interval);
  }, [normalCards]);


  const handleAddAfterCurrent1 = () => {
    const currentIndex = selectedIndex;
    let newArray = [...array];
    setSelectedIndex(currentIndex+1);
    // setTimeout(() => {
    //   const newCurrentIndex = carouselRef.current.state.selectedItem;
    //   newArray.splice(newCurrentIndex +1 , 0, currentData);
    //   setArray(newArray);
    // }, 5000);

    if (newArray.length < 5) {
      const remainingFlashcards = flashcards.filter(
        card => !newArray.includes(card)
      );
      const shuffledRemaining = remainingFlashcards.sort(() => Math.random() - 0.5);
      const newCards = shuffledRemaining.slice(0, 5);
      newArray = [...newArray, ...newCards];
    }

    newArray.splice(currentIndex, 1);
    setArray(newArray);
    setSelectedIndex(currentIndex === newArray.length ? currentIndex - 1 : currentIndex);
  };

  const handleAddAfterCurrent2 = () => {
    const currentIndx = carouselRef.current.state.selectedItem;
    const currentData = array[currentIndx];
    const currentIndex = selectedIndex;
    let newArray = [...array];
    setNewNormalCards([]);
    if(!normalCards.includes(currentData)) {
      setNewNormalCards(currentData);
    }
    if(newNormalCards.length!==0) {
    setNormalCards([...normalCards,newNormalCards]);
    }
    // console.log(normalCards);
    if (newArray.length < 10) {
      const remainingFlashcards = flashcards.filter(
        card => !newArray.includes(card)
      );
      const shuffledRemaining = remainingFlashcards.sort(() => Math.random() - 0.5);
      const newCards = shuffledRemaining.slice(0, 5);
      newArray = [...newArray, ...newCards];
      setArray(newArray);
    }

    setSelectedIndex(currentIndex+1);
    setTimeout(() => {
      const newCurrentIndex = carouselRef.current.state.selectedItem;
      newArray.splice(newCurrentIndex +1 , 0, currentData);
      setArray(newArray);
    }, 10000);
  };
  
  const handleAddAfterCurrent3 = () => {
    const currentIndx = carouselRef.current.state.selectedItem;
    const currentData = array[currentIndx];
    const currentIndex = selectedIndex;
    let newArray = [...array];
    setNewDifficultCards([]);
    if(!difficultCards.includes(currentData)) {
      setNewDifficultCards(currentData);
    }
    if(newDifficultCards.length!==0) {
      setDifficultCards([...difficultCards, newDifficultCards]);
    }
    // console.log(difficultCards);
    if (newArray.length < 10) {
      const remainingFlashcards = flashcards.filter(
        card => !newArray.includes(card)
      );
      const shuffledRemaining = remainingFlashcards.sort(() => Math.random() - 0.5);
      const newCards = shuffledRemaining.slice(0, 5);
      newArray = [...newArray, ...newCards];
      setArray(newArray);
    }
    setSelectedIndex(currentIndex+1);
    setTimeout(() => {
      const newCurrentIndex = carouselRef.current.state.selectedItem;
      newArray.splice(newCurrentIndex +1 , 0, currentData);
      setArray(newArray);
    }, 5000);
  };

  return (
    <>
      <div style={{margin: '0', align: 'center',
                justifyContent: 'center',
                alignItems: 'center', maxwidth:'74vw'}}>
        <Carousel
          ref={carouselRef}
          selectedItem={selectedIndex}
          onChange={index => setSelectedIndex(index)}
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
        >
          {array.map((flashcard, index) => (
            <div
              key={index}
              className="card"
              style={{
                // borderRadius: '25px',
                width:'72vw',
                height: '26vw',
                backgroundColor: 'deepskyblue',
                // display: 'flex',
                // align: 'center',
                // justifyContent: 'center',
                // alignItems: 'center'
              }}
            >
              <Card question={flashcard.question} answer={flashcard.answer} />
            </div>
          ))}
        </Carousel>
      </div>
      
      <div align='center'>
      <button onClick={handleAddAfterCurrent1} style={{
          backgroundColor:'#62ddbd',
          borderRadius:'0.33vw',
          borderStyle:'none',
          boxSizing:'border-box',
          color:'#fff',
          cursor:'pointer',
          display:'inline-block',
          fontfamily:'"Farfetch Basis","Helvetica Neue",Arial,sans-serif',
          fontSize:'2vw',
          fontWeight:'400',
          margin:'1vw',
          minHeight:'3.66vw',
          minWidth:'0.86vw',
          outline:'none',
          overflow:'hidden',
          padding:'0.75vw 1.66vw 0.66vw',
          position:'relative',
          textAlign:'center',
          textTransform:'none',
          touchAction:'manipulation'
      }}>Easy</button> 
      <button onClick={handleAddAfterCurrent2}
      style={{
        backgroundColor:'#a2aeb3',
        borderRadius:'0.33vw',
        borderStyle:'none',
        boxSizing:'border-box',
        color:'#fff',
        cursor:'pointer',
        display:'inline-block',
        fontfamily:'"Farfetch Basis","Helvetica Neue",Arial,sans-serif',
        fontSize:'2vw',
        fontWeight:'400',
        margin:'1vw',
        minHeight:'3.66vw',
        minWidth:'0.86vw',
        outline:'none',
        overflow:'hidden',
        padding:'0.75vw 1.66vw 0.66vw',
        position:'relative',
        textAlign:'center',
        textTransform:'none',
        touchAction:'manipulation'
    }}>Needs Practice</button> 
      <button onClick={handleAddAfterCurrent3}
      style={{
        backgroundColor:'#ff7373',
        borderRadius:'0.33vw',
        borderStyle:'none',
        boxSizing:'border-box',
        color:'#fff',
        cursor:'pointer',
        display:'inline-block',
        fontfamily:'"Farfetch Basis","Helvetica Neue",Arial,sans-serif',
        fontSize:'2vw',
        fontWeight:'400',
        margin:'1vw',
        minHeight:'3.66vw',
        minWidth:'0.86vw',
        outline:'none',
        overflow:'hidden',
        padding:'0.75vw 1.66vw 0.66vw',
        position:'relative',
        textAlign:'center',
        textTransform:'none',
        touchAction:'manipulation'
    }}>Difficult</button>
    </div>
  </>
  );
};

export default Caroussel;
