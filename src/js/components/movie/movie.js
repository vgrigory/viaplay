import React from 'react';
import {Thumbnail} from 'react-bootstrap';

import MainInfo from '../mainInfo/mainInfo';
import DetailedInfo from '../detailedInfo/detailedInfo';
import ImdbRating from '../imdbRating/imdbRating';
import SimilarMovies from '../similarMovies/similarMovies';

import MovieRepository from '../../services/movieRepository';

import './movie.scss';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        let movieRepository = new MovieRepository();

        movieRepository
            .getMovie(this.props.params.filmId)
            .then(() => {
                this.setState({
                    movieLoaded: true,
                    subContainerStyle: {
                        backgroundImage: 'url("' + movieRepository.getPosterUrl() + '")'
                    },
                    thumbnailUrl: movieRepository.getThumbnailUrl(),
                    mainInfo: {
                        name: movieRepository.getName(),
                        genres: movieRepository.getGenres(),
                        productionYear: movieRepository.getProductionYear(),
                        readableDuration: movieRepository.getReadableDuration(),
                        parentalRating: movieRepository.getParentalRating(),
                        flags: movieRepository.getFlags()
                    },
                    imdbRating: movieRepository.getImdbRating(),
                    detailedInfo: {
                        synposis: movieRepository.getSynopsis(),
                        actors: movieRepository.getActors(),
                        directors: movieRepository.getDirectors(),
                        productionCountry: movieRepository.getProductionCountry()
                    },
                    similarMovies: movieRepository.getSimilarMovies()
                });
            }).catch(() => {
                this.setState({
                    movieLoaded: false
                });
            });
    }

    render() {
        if (!this.state.movieLoaded) {
            return <div className="noMovieNoCry">
                Ooops, we'll add this movie ASAP. Meanwhile try <a href="/film/titanic-1997">Titanic</a>.
            </div>;
        } else {

            return <div className="movieWrapper" style={this.state.subContainerStyle}>
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <div className="poster">
                            <Thumbnail src={this.state.thumbnailUrl} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                    <div className="col-lg-4 col-md-2 col-sm-2">
                        <MainInfo data={this.state.mainInfo} />
                    </div>
                </div>
                <div className="row ratingWrapper">
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                    <div className="col-lg-5 col-md-5 col-sm-5" style={{textAlign: 'left'}}>
                        <ImdbRating data={this.state.imdbRating} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <DetailedInfo data={this.state.detailedInfo} />
                    </div>
                </div>
                <div className="row">
                    <SimilarMovies data={this.state.similarMovies} />
                </div>
            </div>;
        }
    }
}