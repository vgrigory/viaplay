Project is a single page app mimicking https://viaplay.se/film/titanic-1997

**Intro**

It is written in React using ES6 + Babel, utilises Viaplay Content API to fetch movie data,
has different components (Movie, ImdbRating, SimilarMovies, ...) to construct movie page.
There is a basic routing handling movie page (film/:filmId route) and the rest of the system.
Routing is implemented using https://github.com/ReactTraining/react-router.

**Structure**

"App" component is responsible for general layout of the app, routing config.

"Movie" component is responsible for fetching movie data via MovieRepository,
laying out movie related component to construct the page.

"MovieRepository" service is responsible for requesting movie data from Viaplay Content API,
holds the knowledge about movie data structure and exposes handy get methods,
which are used by other components (Movie in particular).

Rest of the components are "dumb" and expect their data externally.

**Tests**

* I've written snapshot tests (http://facebook.github.io/jest/docs/snapshot-testing.html#content) 
for SimilarMovies and Movie components, using Jest
* there is also an integration test for MovieRepository, which fetches Titanic's data
and asserts movie title and production country

**Design**

* using Twitter Bootstrap (only styles) as a CSS framework for general styling and resposivness
* using https://react-bootstrap.github.io/ as Bootstrap's javascript adaptation for React
(that's why bootstrap.js is not present in the project) to have basic Bootstrap js components: Carousel, Navbar, ...
* using SASS to write styles for components
* used mediaqueries to hide movie thumbnail and footer for smaller screens (<~ 1200px)

**Bundling**

Using Webpack to bundle project, available commands are:
* *npm install* - after cloning repo into your machine, run this at first to fetch all dependencies
* *npm start* - run this to start serving project locally (e.g. http://localhost:8080/film/titanic-1997).
Applies eslint to project sources.
* *npm run bundle* - bundles (contact, minify/uglify) entire project into dist/ folder
* *npm test* - runs all mentioned tests
* *npm run test -- -u* - over the course of development process you might modify your components under test.
This might make snapshot tests fail, run this command to update snapshots of all failing tests
(if you are sure they are not buggy)

**XHR**

React does not come with XHR support (as it is pure UI rendering lib).
I used https://github.com/github/fetch for that purpose, as it is small,
has no other dependencies, has good browser support and has single purpose. 
