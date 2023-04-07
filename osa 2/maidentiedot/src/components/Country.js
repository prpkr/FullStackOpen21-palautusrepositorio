import React from "react";
import Weather from "./Weather";

const Country = (props) => {
  const { name, capital, population, area, languages, flag } = props.country;

  const languageNames = Object.values(languages).map((language) => (
    <li key={language}>{language}</li>
  ));

//flag doesnt work in Chrome
  return (
    <div>
      <h2>{name.common}</h2>
      <p>{flag}</p>
      
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Languages:</p>
      <ul>{languageNames}</ul>
      <p>Capital: {capital[0]}</p>
      <Weather capital={capital[0]}/>
    </div>
  );
};

export default Country;
