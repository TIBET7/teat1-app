import React from 'react'; 

import './element.scss';

const Element = () => {
  return (
    <div className="elements__item visible">
      <div className="elements__item-checkbox">
        <label className="check">
          <input type="checkbox" className="check__input check__input--element visually-hidden" name="header-checkbox" />
          <span className="check__box"></span>
        </label>
      </div>
      <div className="elements__item-main">
        <div className="elements__item-name">Элемент #1</div>
        <div className="elements__item-description">Описание элемента #1</div>
        <div className="elements__item-visibility"></div>
      </div>
    </div>
  );
};

export default Element;
