import React from 'react';

const Popup = (props) => {
  return props.trigger ? (
    <div>
      <h1>This is a popup</h1>
      <div className="flex flex-col">{props.children}</div>
      <button>Close popup</button>
    </div>
  ) : (
    ''
  );
};

export default Popup;
