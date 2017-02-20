import React from 'react';
import SimilarMovies from '../similarMovies';
import renderer from 'react-test-renderer';

it('snapsot test for SimilarMovies component', () => {
    let similarMovies = {
        movies: [{
            publicPath: 'titanic-1997',
            content: {
                images: {
                    boxart: {
                        url: 'some url'
                    }
                }
            }
        }, {
            publicPath: 'the-choice-2016',
            content: {
                images: {
                    boxart: {
                        url: 'some other url'
                    }
                }
            }
        }],
        title: 'Similar movies'
    };

    const tree = renderer.create(
        <SimilarMovies data={similarMovies} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});