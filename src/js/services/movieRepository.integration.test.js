import MovieRepository from './movieRepository'; 

test('Integration test movie data retrieval', () => {
    let movieRepository = new MovieRepository();

    return movieRepository
        .getMovie('titanic-1997')
        .then(() => {
            expect(movieRepository.getName()).toBe('Titanic');
            expect(movieRepository.getProductionCountry()).toBe('USA');
        })
});