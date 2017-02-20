import React from 'react';

import './imdbRating.scss';

export default class ImdbRating extends React.Component {
    render() {
        if (!this.props.data) {
            return null;
        }

        return <div className="imdbRating">
            <a href={this.props.data.url}>
                <span>{this.props.data.rating}</span> från {this.props.data.votes} användare
            </a>
        </div>;
    }
}