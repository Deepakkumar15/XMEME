import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './NewMeme.css';

const NewMeme = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredCaption, setEnteredCaption] = useState('');
  const [enteredUrl, setEnteredUrl] = useState('');
  
  const nameChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const captionChangeHandler = event => {
    setEnteredCaption(event.target.value);
  };  
  
  const urlChangeHandler = event => {
    setEnteredUrl(event.target.value);
  };

  const submitMemeHandler = event => {
    event.preventDefault();
    if((!enteredName || enteredName.length === 0) || (!enteredCaption || enteredCaption.length === 0) || (!enteredUrl || enteredUrl.length === 0)){
      alert('Enter correct details!');
    }
    else{
      props.onAddMeme(enteredName, enteredCaption, enteredUrl);
    }  
  };

  return (
    <section id="new-meme">
      <h2>Add a New Meme</h2>
      <form onSubmit={submitMemeHandler}>
        <Input
          type="text"
          label="Meme Owner"
          id="name"
          Placeholder="Enter your full name"
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <Input
          type="text"
          label="Caption"
          id="caption"
          Placeholder="Be creative with the caption"
          value={enteredCaption}
          onChange={captionChangeHandler}
        />
        <Input
          type="text"
          label="Meme URL"
          id="url"
          Placeholder="Enter URL of your meme here"
          value={enteredUrl}
          onChange={urlChangeHandler}
        />
        <Button type="submit">Submit Meme</Button>
      </form>
    </section>
  );
};

export default NewMeme;
