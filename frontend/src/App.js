import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import NewMeme from './components/Meme/NewMeme';
import MemeList from './components/Meme/MemeList';
import './App.css';

function App() {
  const [loadedMemes, setLoadedMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMemes = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/test1');

      const responseData = await response.json();
      
      console.log("::INFO::", responseData);

      setLoadedMemes(responseData.memes);
      setIsLoading(false);
    };

    fetchMemes();
  }, []);

  const addMemeHandler = async (memeTitle, memeCaption, memeUrl) => {
    try {
      const newMeme = {
        title: memeTitle,
        caption: memeCaption,
        url: memeUrl
      };
      let hasError = false;

      const response = await fetch('http://localhost:5000/test2', {
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

      setLoadedMemes(prevMeme => {
        return [newMeme, ...prevMeme];
      });
    } catch (error) {
      alert(error.message || 'Something went wrong!');
    }
  };

  return (
    <React.Fragment>
      <Header />
      <main>
        <NewMeme onAddMeme={addMemeHandler} />
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && <MemeList items={loadedMemes} />}
      </main>
    </React.Fragment>
  );
}

export default App;
