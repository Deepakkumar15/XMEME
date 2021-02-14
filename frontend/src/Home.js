import React, { useState, useEffect } from 'react';
import NewMeme from './components/Meme/NewMeme';
import MemeList from './components/Meme/MemeList';

import './App.css';

const url = 'http://localhost:8081' ;


function Home() {
  const [loadedMemes, setLoadedMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMemes = async () => {
      setIsLoading(true);
      const response = await fetch(url + '/memes');

      const responseData = await response.json();

      setLoadedMemes(responseData);
      setIsLoading(false);
    };

    fetchMemes();
  }, []);

  const addMemeHandler = async (memeName, memeCaption, memeUrl) => {
    try {
      const newMeme = {
        name: memeName,
        caption: memeCaption,
        url: memeUrl
      };
      let hasError = false;

      const response = await fetch(url + '/memes', {
        method: 'POST',
        body: JSON.stringify(newMeme),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        hasError = true;
      }

      const responseData = await response.json();

      if (hasError) {
        throw new Error(responseData.message);
      }
     
      newMeme.id = await responseData.id;
      
      setLoadedMemes(prevMeme => {
        return [newMeme, ...prevMeme];
      });

    } catch (error) {
      alert(error.message || 'Something went wrong!');
    }
  };

  return (
      <main>
        <NewMeme onAddMeme={addMemeHandler} />
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && <MemeList items={loadedMemes} />}
      </main>    
  );
}

export default Home;
