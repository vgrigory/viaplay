import React from 'react';
import {Carousel, Thumbnail, Grid, Row, Col} from 'react-bootstrap';


import './similarMovies.scss';

export default class SimilarMovies extends React.Component {

    render() {
        let i;
        let j;
        let similarMovies = [];

        if (!this.props.data) {
            return null;
        }

        for (i = 0; i < this.props.data.movies.length; i += 6) {
            let movieItems = [];
            let carouselItem = <Carousel.Item key={i}>
                <Grid>
                    <Row>
                        {movieItems}
                    </Row>
                </Grid>
            </Carousel.Item>;

            for (j = 0; j < 6; j++) {
                if (i + j == this.props.data.movies.length) {
                    break;
                }

                let movie = this.props.data.movies[i + j];

                let movieItem = <Col lg={2} md={2} sm={2} xs={4} key={(j + 1) * 100}>
                    <a href={'/film/' + movie.publicPath}>
                        <Thumbnail src={movie.content.images.boxart.url} />
                    </a>
                </Col>;

                movieItems.push(movieItem);
            }

            similarMovies.push(carouselItem);
        }

        return <Carousel>{similarMovies}</Carousel>;
    }
};