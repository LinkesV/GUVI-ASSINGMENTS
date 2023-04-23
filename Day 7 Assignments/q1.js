let url = 'https://restcountries.com/v3.1/all';

let fetchUrl = fetch(url)
fetchUrl.then((res) => res.json()).then((countrydetails) => {
    
    // a Get all the countries from the Asia continent /region using the Filter function

    let asiancountries = countrydetails.filter((place)=> {if(place.region == "Asia"){
        return place;
    }})

    for(let i = 0; i < asiancountries.length; i++){
        console.log(asiancountries[i].name.official)
       }

    // b Get all the countries with a population of less than 2 lakhs using Filter function


    let small = countrydetails.filter((place)=> {if(place.population < 200000){
        return place;
    }})
    for(let i = 0; i < small.length; i++){
        console.log(small[i].name.official)
       }
    
    // c Print the following details name, capital, flag using forEach function

    countrydetails.forEach(element => {
        console.log(`Name: ${element.name.official}  Capital: ${element.capital[0]}  Flag: ${element.flags.png}`)
    });
        
    // d Print the total population of countries using reduce function
    let pop = countrydetails.reduce((x,y)=>{
        return x+y.population;
    },0)
    console.log(pop);



    //  e Print the country which uses US Dollars as currency.

    for(let country of countrydetails){
        let x = country.currencies;
        var y = Object.entries(x);
        
        if(y[0][0] == "USD"){
            console.log(country.name.official);
        }
    }

    });

