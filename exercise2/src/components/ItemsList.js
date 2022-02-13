import React from 'react';

export default function ItemsList(props) {
  return  <ul className="listBox">
            {props.list.map((item,index )=> {
              return <li className="listItems" key={index}>{item.qty} {item.name}</li>
            }
            )}

          </ul>
  ;
}