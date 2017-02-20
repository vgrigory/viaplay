import React from 'react';

import './underConstruction.scss';

export default class UnderConstruction extends React.Component {
    render() {
        return <div className="underConstruction">
            Thanks for visiting us, while we're building rest of the system, enjoy <a href="/film/titanic-1997">Titanic</a>.
        </div>;
    }
}