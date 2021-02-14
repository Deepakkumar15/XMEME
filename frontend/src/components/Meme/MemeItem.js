import React from 'react';
import  { BrowserRouter as Router, Redirect, Route, Switch, NavLink} from 'react-router-dom';
import './MemeItem.css';
import Button from '../Button/Button';

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