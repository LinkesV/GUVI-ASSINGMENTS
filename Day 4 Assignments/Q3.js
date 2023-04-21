// Use the same rest countries and print all countries name, region, sub - reigon and population

let url = 'https://restcountries.com/v3.1/all';

let fetchUrl = fetch(url)
fetchUrl.then((res) => res.json()).then((countrydetails) => {
    for (let flag of countrydetails) {
        console.log(`${flag.name.official}, ${flag.subregion}, (${flag.region}), ${flag.population}`);
    }
});