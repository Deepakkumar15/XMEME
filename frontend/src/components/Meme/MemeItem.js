import React from 'react';

import './MemeItem.css';

const MemeItem = props => {
  return (
    <li className="meme-item">
      <h2>{props.title}</h2>
      <p>{props.caption}</p>
      <img src={props.url}/>
    </li>
  );
};

export default MemeItem;