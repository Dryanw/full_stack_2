function findFacts(city) {
    return city.name + ' has a population of ' + city.population + ' and is located in ' + city.continent;
}

findFacts({
    name: 'Toronto',
    population:'6,197,000',
    continent: 'North America'
});

findFacts({
    name: 'Venice',
    population:'261,905',
    continent: 'Europe'
});