import React from 'react';
import './App.css';
import UpdateMeme from './components/Meme/UpdateMeme';



function Update() {
  const updateMemeHandler = async (memeCaption, memeUrl, memeId) => {
    
    let hasError = false;
    try {
      const updateMeme = {
        caption: memeCaption,
        url: memeUrl
      };
      
      const response = await fetch(`http://localhost:8081/memes/${memeId}`, {
        method: 'PATCH',
        body: JSON.stringify(updateMeme),
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

    } catch (error) {
      alert(error.message || 'Something went wrong!');
    }
    
    return hasError;
    
  };

  return (
    <UpdateMeme onUpdateMeme={updateMemeHandler} />
  );
}

export default Update;
