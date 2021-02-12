import React, { useState } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import './NewMeme.css';

const NewMeme = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredCaption, setEnteredCaption] = useState('');
  const [enteredUrl, setEnteredUrl] = useState('');
  
  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const captionChangeHandler = event => {
    setEnteredCaption(event.target.value);
  };  
  
  const urlChangeHandler = event => {
    setEnteredUrl(event.target.value);
  };

  const submitMemeHandler = event => {
    event.preventDefault();
    props.onAddMeme(enteredTitle, enteredCaption, enteredUrl);
  };

  return (
    <section id="new-meme">
      <h2>Add a New Meme</h2>
      <form onSubmit={submitMemeHandler}>
        <Input
          type="text"
          label="Meme Owner"
          id="title"
          Placeholder="Enter your full name"
          value={enteredTitle}
          onChange={titleChangeHandler}
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
