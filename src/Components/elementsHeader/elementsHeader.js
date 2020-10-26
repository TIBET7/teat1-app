import React from 'react';

import './elementsHeader.scss';

const ElementsHeader = () => {
  return (
    <div className="elements__header">
      <div className="elements__header-checkbox">
        <label className="check">
          <input type="checkbox" className="check__input check__input--main visually-hidden" name="header-checkbox" />
          <span className="check__box check__box--main"></span>
        </label>
      </div>
      <div className="elements__header-name">Название</div>
      <div className="elements__header-sort"></div>
      <div className="elements__header-description">Описание</div>
      <div className="elements__header-visibility"></div>
    </div>
  );
};

export default ElementsHeader;
