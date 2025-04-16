import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import './MemeItem.css';

const MemeItem = props => {
  return (
    <li className="meme-item" key={props.id}>
      <h2>{props.name}</h2>
      <p>{props.caption}</p>
      <img src={props.url} alt={props.caption}/>
      <Link to={`/memes/${props.id}`}>
        <Button>EDIT</Button>
      </Link>
    </li>
  );
};

export default MemeItem;
