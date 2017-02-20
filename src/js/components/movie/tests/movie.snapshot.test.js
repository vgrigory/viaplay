import React from 'react';
import Movie from '../movie';
import renderer from 'react-test-renderer';

it('snapsot test for Movie component', () => {
    let movie = {
        filmId: 'titanic-1997'
    };

    const tree = renderer.create(
        <Movie params={movie} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});