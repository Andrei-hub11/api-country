import React from "react";
import styled from "styled-components";

function SearchResult({
  image,
  name,
  capital,
  continents,
  population,
  currencies,
  languages,
}) {
  return (
    <Result>
      <img src={image} className="flag-img" alt="country" />
      <h2>{name}</h2>
      <div className="wrapper">
        <div className="data-wrapper">
          <h4>Capital:</h4>
          <span> {capital}</span>
        </div>
      </div>
      <div className="wrapper">
        <div className="data-wrapper">
          <h4>Continente:</h4>
          <span> {continents}</span>
        </div>
      </div>
      <div className="wrapper">
        <div className="data-wrapper">
          <h4>População:</h4>
          <span> {population}</span>
        </div>
      </div>
      <div className="wrapper">
        <div className="data-wrapper">
          <h4>Moeda:</h4>
          <span>
            {currencies[Object.keys(currencies)].name} -{" "}
            {Object.keys(currencies)}
          </span>
        </div>
      </div>
      <div className="wrapper">
        <div className="data-wrapper">
          <h4>Linguagens comum:</h4>
          <span>
            {Object.values(languages).toString().split(",").join(", ")}
          </span>
        </div>
      </div>
    </Result>
  );
}

const Result = styled.div`
  margin-top: 1.5em;

  .flag-img {
    display: block;
    width: 45%;
    min-width: 7.5em;
    margin: 1.8em auto 1.2em auto;
  }

  h2 {
    font-weight: 600;
    color: #222a43;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1.8em;
  }

  .data-wrapper {
    margin-bottom: 1em;
    letter-spacing: 0.3px;
  }

  h4 {
    display: inline;
    font-weight: 400;
    color: #222a43;
  }

  span {
    color: #222a43;
  }
  h3 {
    text-align: center;
  }
`;

export default SearchResult;
