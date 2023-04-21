// Use the rest countries API Url and display all the country flags in the consol.

let url = 'https://restcountries.com/v3.1/all';

let fetchUrl = fetch(url)
fetchUrl.then((res) => res.json()).then((countrydetails) => {
    for (let flag of countrydetails) {
        console.log(`${flag.flags.png}`);
        }
    });