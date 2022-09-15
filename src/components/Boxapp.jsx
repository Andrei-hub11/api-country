import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";
import SearchResult from "./SearchResult";

function Boxapp() {
  const [country, setCountry] = useState("");
  const [search, setSearch] = useState([]);

  const fetchData = async () => {
    try {
      const countryName = country;
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );
      console.log(res);

      setSearch(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <SectionSearch>
        <InputSearch onChange={(e) => setCountry(e.target.value)} />

        <ButtonSearch onClick={() => fetchData()}>Buscar</ButtonSearch>
      </SectionSearch>
      {search?.map((dataCountry) => {
        return (
          <SearchResult
            key={dataCountry.altSpellings[0]}
            image={dataCountry.flags.svg}
            name={dataCountry.name.common}
            capital={dataCountry.capital[0]}
            continents={dataCountry.continents[0]}
            population={dataCountry.population}
            currencies={dataCountry.currencies}
            languages={dataCountry.languages}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  background-color: #ffffff;
  width: 80vh;
  max-width: 37.5em;
  padding: 3em 2.5em;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 0.62em;
  box-shadow: 0 1.25em 1.8em rgba(0, 21, 65, 0.25);
`;

const SectionSearch = styled.div`
  display: grid;
  grid-template-columns: 9fr 3fr;
  gap: 1.25em;
`;

const InputSearch = styled.input`
  font-size: 1em;
  padding: 0 0.62em;
  border: none;
  border-bottom: 2px solid #3d64e6;
  outline: none;
  color: #222a43;
`;

const ButtonSearch = styled.button`
  font-size: 1em;
  background-color: #3d64e6;
  color: #ffffff;
  padding: 0.8em 0;
  border: none;
  border-radius: 1.5em;
  cursor: pointer;
`;

export default Boxapp;
