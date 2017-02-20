import React from 'react';

import './mainInfo.scss';

export default class MainInfo extends React.Component {
    render() {
        let genres = [];
        let flags = [];
        let i;

        if (!this.props.data || !this.props.data.genres || !this.props.data.flags) {
            return null;
        }

        for (i = 0; i < this.props.data.genres.length; i++) {
            let g = <a key={this.props.data.genres[i].title} href={this.props.data.genres[i].href}>
                {this.props.data.genres[i].title}
            </a>;

            genres.push(g);

            if (i + 1 < this.props.data.genres.length) {
                genres.push(<span key={this.props.data.genres[i].title + 'slash'}>&nbsp;/&nbsp;</span>);
            }
        }

        for (i = 0; i < this.props.data.flags.length; i++) {
            let f = <span key={this.props.data.flags[i]}>{this.props.data.flags[i]}</span>;

            flags.push(f);

            if (i + 1 < this.props.data.flags.length) {
                flags.push(<span key={this.props.data.flags[i] + 'comma'}>&nbsp;/&nbsp;</span>);
            }
        }

        return <div className="mainInfo">
            <h1>{this.props.data.name}</h1>
            <div className="info1">
                <span>
                    {genres}
                </span>
                <span>{this.props.data.productionYear}</span>
                <span>{this.props.data.readableDuration}</span>
            </div>
            <div className="info2">
                <span className="flags">{flags}</span>
                <span>{this.props.data.parentalRating} år</span>
            </div>
        </div>;
    }
}