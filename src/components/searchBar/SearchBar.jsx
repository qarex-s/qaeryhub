import React from "react";
import Style from "./SearchBar.module.css";
const SearchBar = ({
  urlValue = null,
  placeholderProp = "SITE'S URL",
  btnTitle = "SEND",
  setUrlValue = () => {},
  setUnFocus = () => {},
  getPage = () => {},
  getError = null,
}) => {
  return (
    <>
      <div className={Style.wrapper__container__search__bar}>
        <div className={Style.container__search__bar}>
          <div className={Style.wrapper__search__bar}>
            <input
              className={Style.search__bar}
              placeholder={placeholderProp}
              value={urlValue}
              onChange={(e) => setUrlValue(e)}
              onBlur={(e) => setUnFocus(e)}
            />
            <button className={Style.btn__class} onClick={getPage}>
              {btnTitle}
            </button>
          </div>
        </div>
        <div className={Style.container__searching__error}>
          <span className={Style.getErrorStyle}>
            {getError ? getError : null}
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
