import React from 'react';
import NavLink from 'react-router-dom';
import Button from '../Button/Button';

import './MemeItem.css';


const MemeItem = props => {
  return (
    <li className="meme-item" key={props.id}>
      <h2>{props.name}</h2>
      <p>{props.caption}</p>
      <img src={props.url}/>
      <NavLink to={`/memes/${props.id}`}>
        <Button>EDIT</Button>
      </NavLink>
    </li>
  );
};

export default MemeItem;