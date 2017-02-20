import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, NavItem, Nav, Col, Thumbnail, Grid, Row} from 'react-bootstrap';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

import Movie from './components/movie/movie';
import UnderConstruction from './components/underConstruction/underConstruction';

import '../styles/app.scss';

class App extends React.Component {
    render() {
        return <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">
                            <img src="/resources/header-logo-large.png"
                                width="144" height="35"
                            />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">SERIER</NavItem>
                        <NavItem eventKey={2} href="#" className="active">FILM</NavItem>
                        <NavItem eventKey={3} href="#">SPORT</NavItem>
                        <NavItem eventKey={4} href="#">BARN</NavItem>
                        <NavItem eventKey={5} href="#">STORE</NavItem>
                        <NavItem eventKey={6} href="#">PROVA VIAPLAY</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="container-fluid">
                <div className="sub-container">
                    {this.props.children}
                    <div className="footer">
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                        <Grid>
                            <Row>
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    <img src="/resources/footer_logo_on_dark.png" />
                                </Col>
                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <h3>VIAPLAY</h3>
                                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <ul>
                                            <li>
                                                <a href="/serier" data-href="https://content.viaplay.se/pcdash-se/serier"><span>Serier</span></a>
                                            </li>
                                            <li>
                                                <a href="/film" data-href="https://content.viaplay.se/pcdash-se/film"><span>Film</span></a>
                                            </li>
                                            <li>
                                                <a href="/sport" data-href="https://content.viaplay.se/pcdash-se/sport"><span>Sport</span></a>
                                            </li>
                                            <li>
                                                <a href="/barn" data-href="https://content.viaplay.se/pcdash-se/barn"><span>Barn</span></a>
                                            </li>
                                            <li>
                                                <a href="/store" data-href="https://content.viaplay.se/pcdash-se/store"><span>Store</span></a>
                                            </li>
                                            <li>
                                                <a href="/package" data-href="https://content.viaplay.se/pcdash-se/package"><span>Prova Viaplay</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <h3>OM OSS</h3>
                                    <div id="collapsetwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <ul>
                                            <li>
                                                <a href="/press" data-href="https://content.viaplay.se/pcdash-se/press"><span>Press</span></a>
                                            </li>
                                            <li>
                                                <a href="/jobs" data-href="https://content.viaplay.se/pcdash-se/jobs"><span>Jobb</span></a>
                                            </li>
                                            <li>
                                                <a href="http://news.viaplay.se"><span>News</span></a>
                                            </li>
                                            <li>
                                                <a href="/premieres" data-href="https://content.viaplay.se/pcdash-se/premieres"><span>Premiärer</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <h3>INFORMATION</h3>
                                    <ul>
                                        <li>
                                            <a href="http://kundservice.viaplay.se"><span>Kundservice</span></a>
                                        </li>
                                        <li>
                                            <a href="/devices" data-href="https://content.viaplay.se/pcdash-se/devices"><span>Våra plattformar</span></a>
                                        </li>
                                        <li>
                                            <a href="/requirements" data-href="https://content.viaplay.se/pcdash-se/requirements"><span>Systemkrav</span></a>
                                        </li>
                                        <li>
                                            <a href="/allmanna_villkor" data-href="https://content.viaplay.se/pcdash-se/allmanna_villkor"><span>Allmänna villkor</span></a>
                                        </li>
                                        <li>
                                            <a href="/privacy" data-href="https://content.viaplay.se/pcdash-se/privacy"><span>Sekretesspolicy</span></a>
                                        </li>
                                        <li>
                                            <a href="/cookies" data-href="https://content.viaplay.se/pcdash-se/cookies"><span>Cookies</span></a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <h3>FÖLJ OSS</h3>
                                    <ul>
                                        <li>
                                            <a href="http://www.facebook.com/viaplay"><span>Facebook</span></a>
                                        </li>
                                        <li>
                                            <a href="http://twitter.com/viaplay_se"><span>Twitter</span></a>
                                        </li>
                                        <li>
                                            <a href="http://www.linkedin.com/company/viaplay"><span>LinkedIn</span></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/viaplaysverige/"><span>Instagram</span></a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <h3>TV</h3>
                                    <ul>
                                        <li>
                                            <a href="#" data-stream-url="https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey}&amp;guid=TV3SE"><span>TV3</span></a>
                                        </li>
                                        <li>
                                            <a href="#" data-stream-url="https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey}&amp;guid=DKMB13GfKIxWmF_XfoCMbej0I_XSeg55"><span>TV10</span></a>
                                        </li>
                                        <li>
                                            <a href="#" data-stream-url="https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey}&amp;guid=0LJGhbaMMazRbvFHEFZWnVH4qCzgFiAG"><span>TV6</span></a>
                                        </li>
                                        <li>
                                            <a href="#" data-stream-url="https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey}&amp;guid=TV1000"><span>Viasat Film</span></a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>;
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={UnderConstruction} />
            <Route path="/film/:filmId" component={Movie}></Route>
            <Route path="*" component={UnderConstruction}/>
        </Route>
    </Router>,
    document.getElementById('root')
);