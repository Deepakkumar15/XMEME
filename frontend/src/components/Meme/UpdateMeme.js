import React, { useState } from 'react';
import  { Redirect, useParams } from 'react-router-dom' ;
import Input from '../Input/Input';
import Button from '../Button/Button';
import './NewMeme.css';
import { useHistory } from 'react-router-dom';



const UpdateMeme = props => {
  const [enteredCaption, setEnteredCaption] = useState('');
  const [enteredUrl, setEnteredUrl] = useState('');
  const { id }  = useParams() ;
  const history = useHistory();

  const captionChangeHandler = event => {
    setEnteredCaption(event.target.value);
  };  
  
  const urlChangeHandler = event => {
    setEnteredUrl(event.target.value);
  };

  const updateMemeHandler = async (event) => {
    event.preventDefault();
    if((!enteredCaption || enteredCaption.length === 0) || (!enteredUrl || enteredUrl.length === 0)){
      alert('Enter correct details!');
    }
    else{
      let hasError = await props.onUpdateMeme(enteredCaption, enteredUrl, id);
      if(!hasError){
        history.push("/");
      }
    }
    
  };

  return (
    <section id="new-meme">
      <h2>Update Meme</h2>
      <form onSubmit={updateMemeHandler}>
        <Input
          type="text"
          label="New Caption"
          id="caption"
          Placeholder="Be creative with the caption"
          value={enteredCaption}
          onChange={captionChangeHandler}
        />
        <Input
          type="text"
          label="New URL"
          id="url"
          Placeholder="Enter URL of your meme here"
          value={enteredUrl}
          onChange={urlChangeHandler}
        />
        <Button type="submit">Update Meme</Button>
      </form>
    </section>
  );
};

export default UpdateMeme;
