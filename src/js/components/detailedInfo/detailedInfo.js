import React from 'react';

import './detailedInfo.scss';

export default class DetailedInfo extends React.Component {
    render() {
        let i;
        let actors = [];
        let directors = [];

        if (!this.props.data || !this.props.data.actors || !this.props.data.directors) {
            return null;
        }

        for (i = 0; i < this.props.data.actors.length; i++) {
            let a = <a key={this.props.data.actors[i]} href={'https://viaplay.se/film/search?query="' + this.props.data.actors[i] + '"'}>
                {this.props.data.actors[i]}
            </a>;

            actors.push(a);

            if (i + 1 < this.props.data.actors.length) {
                actors.push(<span key={this.props.data.actors[i] + 'slash'}>,&nbsp;</span>);
            }
        }

        for (i = 0; i < this.props.data.directors.length; i++) {
            let d = <a key={this.props.data.directors[i]} href={'https://viaplay.se/film/search?query="' + this.props.data.directors[i] + '"'}>
                {this.props.data.directors[i]}
            </a>;

            directors.push(d);

            if (i + 1 < this.props.data.directors.length) {
                directors.push(<span key={this.props.data.directors[i] + 'slash'}>,&nbsp;</span>);
            }
        }

        return <div className="detailedInfo">
            <p>{this.props.data.synposis}</p>
            <div className="cast">
                <div>
                    Skådespelare: {actors}
                </div>
                <div>
                    Regissör: {directors}
                </div>
                <div>
                    Land: {this.props.data.productionCountry}
                </div>
            </div>
        </div>;
    }
}