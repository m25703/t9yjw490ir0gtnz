import React from "react";
import axios from "axios";
import xtype from 'xtypejs'
import { useEffect, useState } from "react";
import Caroussel from "../cpy/Caroussel"

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      for(let i =0; i<listOfPosts.length; i++) { console.log(listOfPosts[i]); }
      console.log(xtype(listOfPosts));
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <center>
    <div style={{align: 'center', alignItems: 'center', width:'68vw'}}>
    <Caroussel flashcards={listOfPosts}/>
  </div>
  </center>
  );
}

export default Home;
