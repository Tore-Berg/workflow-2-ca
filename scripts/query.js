import ApolloClient, { gql } from 'apollo-boost';
import "regenerator-runtime/runtime";
import { orderBy } from "lodash";

const resultsContainer = document.querySelector(".results");

const getData = async () => {
  const client = new ApolloClient({
      uri: "https://countries.trevorblades.com"
  });

  const response = await client.query({
      query: gql`
      {
        countries {
          code
          name
          emoji
        }
      }
      `,
  });

  const descendingCountries = orderBy(response.data.countries, ["name"], ["desc"])
  console.log(descendingCountries)
  
  renderSortedCountries(descendingCountries)

};

getData();

const renderSortedCountries = (descendingCountries) => {
    descendingCountries.forEach(country => {
        createHtml(country)
    })
}

const createHtml = (country => {
    resultsContainer.innerHTML += `
        <div class="results__card">
        <h2>${country.name}(${country.code})</h2>
        <p>${country.emoji}</p>
        </div>
    `
})