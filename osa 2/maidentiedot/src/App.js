import { useState, useEffect } from "react";
import "./App.css";
import Country from "./components/Country";
import Find from "./components/Find";

function App() {
  // Define a state called countryData to store data from rest countries.
  const [countryData, setCountryData] = useState([]);
  // Define a state to find countries
  const [searchText, setSearchText] = useState("");
  // Define a state for Country component
  const [showCountry, setShowCountry] = useState(null) 

  // Use the useEffect hook to fetch data from the REST Countries API and update the countryData state with the fetched data
  useEffect(() => {
    // Fetch data from the REST Countries API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json()) // Convert the response to JSON format
      .then((data) => setCountryData(data)) // Update the countryData state with the fetched data
      .catch((error) => console.log(error)); // Log any errors to the console
  }, []); // The empty array tells React to execute this effect only once, when the component is mounted

  // Filter the countryData array based on the searchText state
  const filteredCountries = countryData.filter((country) => {
    const name = country.name.common.toLowerCase();
    const searchTerm = searchText.toLowerCase();
    return name.includes(searchTerm);
  });

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    setShowCountry(null);
  };

  useEffect(() => {
    if (filteredCountries.length === 1) {
      setShowCountry(filteredCountries[0]);
    }
  }, [filteredCountries]);

  // Display a list of matching countries if the number of matches is less than 11
  const countryList =
    filteredCountries.length > 1 && filteredCountries.length < 11 ? (
      <div>
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.cca3}>
              {country.name.common}
              <button onClick={() => setShowCountry(country)}>
                Show
              </button>
            </li>
          ))}
        </ul>
      </div>
    ) : null;

  return (
    <div className="App">
      <h1>Country information</h1>
      <Find
        searchText={searchText}
        onSearchTextChange={handleSearchTextChange}
      />

      {showCountry ? (
        <Country country={showCountry} />
      ) : (
        countryList
      )}
    </div>
  );
}

export default App;