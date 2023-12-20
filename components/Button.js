import React from 'react';

export default function Button({ children, type, ...props }) {
  let classes = 'border-2 border-solid  px-6 py-1';
  if (type == 'DELETE') {
    classes +=
      ' ' +
      'border-background-btn-secondry bg-background-btn-secondry hover:bg-background-btn-secondry/90 text-stone-100';
  } else if (type == 'ADD' || type == 'BACK' || type == 'UPDATE') {
    classes += ' ' + 'bg-background-btn-primary ';
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
