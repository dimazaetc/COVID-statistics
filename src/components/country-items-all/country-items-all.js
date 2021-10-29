import React, { useEffect, useState } from "react";
import CountryItem from "../country-item/country-item";
import "./country-items-all.css";
import Loader from "../loader";
import Sort from "../sort/";
import Search from "../search";
import InfoLine from "../info-line";
import InfoPopup from "../info-popup/";

function CountryItemsAll() {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [popupValue, setPopupValue] = useState("");
  const [sortTotalConfirmed, setSortTotalConfirmed] = useState(false);
  const [sortCountry, setSortCountry] = useState(false);
  const getCountries = () => {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((response) => {
        setCountries(response.Countries);
      });
  };
  useEffect(() => {
    getCountries();
  }, []);
  const filteredCountries = countries.filter((country) => {
    let newCountry = country.Country;
    return newCountry.toLowerCase().includes(value.toLowerCase());
  });
  const changeItem = (...items) => {
    setPopupValue([...items]);
    document.body.style.overflow = "hidden";
  };
  const closePopup = () => {
    document.body.style.overflow = "auto";
    setPopupValue("");
  };
  const country = null ? (
    <Loader />
  ) : (
    filteredCountries.map((country, index) => {
      const { id, Country, TotalConfirmed, TotalDeaths, TotalRecovered } =
        country;

      return (
        <CountryItem
          key={id}
          index={index + 1}
          country={Country}
          total={TotalConfirmed}
          onClick={() =>
            changeItem(Country, TotalConfirmed, TotalDeaths, TotalRecovered)
          }
        />
      );
    })
  );
  const inputClick = () => {
    setIsOpen(true);
  };
  const itemClickSearch = (e) => {
    setValue(e.target.textContent);
    setIsOpen(!isOpen);
  };
  const sortData = (field) => {
    const copyData = countries.concat();
    let sortData;
    if (
      (sortCountry && field === "Country") ||
      (sortTotalConfirmed && field === "TotalConfirmed")
    ) {
      console.log("1", field);
      sortData = copyData.sort((a, b) => {
        return a[field] > b[field] ? 1 : -1;
      });
    } else {
      console.log("2", field);
      sortData = copyData.sort((a, b) => {
        return a[field] > b[field] ? -1 : 1;
      });
    }

    setCountries(sortData);
    if (field === "TotalConfirmed") {
      setSortTotalConfirmed(!sortTotalConfirmed);
    } else if (field === "Country") {
      setSortCountry(!sortCountry);
    }
  };
  return (
    <div className="container">
      {popupValue ? <div className="background"></div> : null}
      {popupValue ? (
        <InfoPopup
          name={popupValue[0]}
          confirmed={popupValue[1]}
          death={popupValue[2]}
          recovered={popupValue[3]}
          onClick={closePopup}
        />
      ) : null}

      <form>
        <Search
          value={value}
          onClick={inputClick}
          onChange={(event) => setValue(event.target.value)}
          autocomplete={
            value && isOpen
              ? filteredCountries.map((country) => {
                  return (
                    <li
                      onClick={itemClickSearch}
                      key={country.id}
                      className="autocomplete_item"
                    >
                      {country.Country}
                    </li>
                  );
                })
              : null
          }
        />
      </form>
      <Sort
        sortData={sortData}
        sortCountry={sortCountry}
        sortTotalConfirmed={sortTotalConfirmed}
      />
      <InfoLine />
      <div>{country}</div>
    </div>
  );
}
export default CountryItemsAll;
