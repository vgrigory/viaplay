import 'whatwg-fetch';

export default class MovieRepository {
    constructor(props) {
        this.movie = {};
    }

    getMovie(name) {
        return fetch('https://content.viaplay.se/pc-se/film/' + name)
            .then((response) => {
                return response.json();
            }).then((json) => {
                this.movie = json;
            }).catch((ex) => {
                throw ex;
            });
    }

    getPosterUrl() {
        return this.movie['_embedded']['viaplay:blocks'][0]._embedded['viaplay:product'].content.images.landscape.url;
    }

    getThumbnailUrl() {
        return this.movie['_embedded']['viaplay:blocks'][0]._embedded['viaplay:product'].content.images.boxart.url;
    }

    getName() {
        return this.movie['_embedded']['viaplay:blocks'][0]._embedded['viaplay:product'].content.title;
    }

    getGenres() {
        return this.movie['_embedded']['viaplay:blocks'][0]._embedded['viaplay:product']['_links']['viaplay:genres'];
    }

    getReadableDuration() {
        return this.movie['_embedded']['viaplay:blocks'][0]._embedded['viaplay:product'].content.duration.readable;
    }

    getProductionYear() {
        return this.movie['_embedded']['viaplay:blocks'][0]._embedded['viaplay:product'].content.production.year;
    }

    getProductionCountry() {
        return this.movie['_embedded']['viaplay:blocks'][0]._embedded['viaplay:product'].content.production.country;
    }

    getParentalRating() {
        return this.movie['_embedded']['viaplay:blocks'][0]._embedded['viaplay:product'].content.parentalRating;
    }

    getFlags() {
        return this.movie['_embedded']['viaplay:blocks'][0]._embedded['viaplay:product'].system.flags[0].split(';');
    }

    getImdbRating() {
        return this.movie['_embedded']['viaplay:blocks'][0]._embedded['viaplay:product'].content.imdb;
    }

    getSynopsis() {
        return this.movie['_embedded']['viaplay:blocks'][0]._embedded['viaplay:product'].content.synopsis;
    }

    getActors() {
        return this.movie['_embedded']['viaplay:blocks'][0]._embedded['viaplay:product'].content.people.actors;
    }

    getDirectors() {
        return this.movie['_embedded']['viaplay:blocks'][0]._embedded['viaplay:product'].content.people.directors;
    }

    getSimilarMovies() {
        return {
            movies: this.movie['_embedded']['viaplay:blocks'][1]._embedded['viaplay:products'],
            title: this.movie['_embedded']['viaplay:blocks'][1].title
        };
    }
}