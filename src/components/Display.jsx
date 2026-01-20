import React from "react";

export default function Display({ items }) {
  console.log(items);
  return (
    <div className="display">
    <ul>
      {items.map((x, id) => (
        <li key={id}>
          <input type="checkbox" />
          <span>{x.amount}</span>
          <span>{x.item}</span>
          <button className="times">&times;</button>
        </li>
      ))}
    </ul>
    </div>
  );
}
