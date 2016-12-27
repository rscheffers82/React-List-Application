import React from 'react';

var Main = (props) => {
  return (
    <div>
      <div className="">
        <div className="">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
