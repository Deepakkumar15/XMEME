import React from 'react';
import MemeItem from './MemeItem';

import './MemeList.css';


function MemeList(props) {
  let content;
  if (!props.items || props.items.length === 0) {
    content = <p>Could not find any Meme. Maybe create one?</p>;
  } else {
    content = (
      <ul className="meme-list">
        {props.items.map(p => (
          <MemeItem key={p.id} id={p.id} name={p.name} caption={p.caption} url={p.url} />
        ))}
      </ul>
    );
  }

  return <section id="meme">{content}</section>;
}

export default MemeList;
