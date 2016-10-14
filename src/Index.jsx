require('./resources/css/bootstrap.min.css');
require('./resources/css/bootstrap-theme.min.css');
require('./resources/css/site.min.css');

import {
    Button,
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Grid,
    Row,
    Col,
    Label,
    Panel,
    SplitButton,
    MenuItem,
    Glyphicon,
    ListGroup,
    ListGroupItem,
    ButtonToolbar,
    Image
} from 'react-bootstrap'
import React from 'react'

var Index = React.createClass({
    render: function() {
        return (
            <div>
                <Grid className="navbar navbar-inverse navbar-fixed-top">
                    <Grid className="container">
                        <Grid className="navbar-header">
                            <Button className="navbar-toggle collapsed" bsStyle="info">
                                <Label className="sr-only">Toggle navigation</Label>
                                <Label className="icon-bar"></Label>
                                <Label className="icon-bar"></Label>
                                <Label className="icon-bar"></Label>
                            </Button>
                            <ButtonToolbar className="nav navbar-nav">
                                <Button className="navbar-brand hidden-sm" bsStyle="link" href="#containers">Project Navigation</Button>
                            </ButtonToolbar>
                            <ButtonToolbar className="nav navbar-nav">
                                <Button className="navbar-brand hidden-sm" bsStyle="link" href="#" target="_blank">ListItem-1</Button>
                                <Button className="navbar-brand hidden-sm" bsStyle="link" href="#containers">ListItem-2</Button>
                            </ButtonToolbar>
                            <ButtonToolbar className="nav navbar-nav navbar-right hidden-sm">
                                <Button className="navbar-brand hidden-sm" bsStyle="link" href="#">ListItem-Right-1</Button>
                            </ButtonToolbar>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid id="containers" className="jumbotron masthead">
                    <Grid className="container">
                        <h1>Title Header H1</h1>
                        <p>This is the subtitle of Header H1</p>
                        <p className="masthead-button-links">
                            <Button className="btn btn-lg btn-primary btn-shadow" href="#containers" bsStyle="primary">Tookit (V0.1.0)</Button>
                        </p>
                    </Grid>
                </Grid>
                <Grid className="bc-social">
                    <Grid className="container">
                        <ul className="bc-social-buttons">
                            <li className="social-qq">
                                <i className="fa fa-qq"></i>
                                QQ<span id="qqgroup">xxxxxxx</span>
                            </li>
                            <li className="social-weibo">
                                <a href="#" title="weibo" target="_blank">
                                    <i className="fa fa-weibo"></i>
                                    Weibo</a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>

                <Grid className="container projects">

                    <Grid className="projects-header page-header">
                        <h2>Title Header h2</h2>
                        <p>This is the subtitle of Header H2</p>
                    </Grid>

                    <Grid className="row">

                        <Grid className="col-sm-6 col-md-4 ">
                            <Grid className="thumbnail" height="336px">
                                <a href="/#" title="itme" target="_blank">
                                    <img src={require('./resources/img/itme.png')} width="300" className="lazy" height="150"/>
                                </a>

                                <h3>
                                    <a href="/codec.html" title="itme" target="_blank">Itme-1<br/>
                                        <small>by @oliver</small>
                                    </a>
                                </h3>
                                <p>
                                    This is brief introduction for Item-1.
                                </p>

                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

                <footer className="footer ">
                    <div className="container">
                        <div className="row footer-top">
                            <div className="col-sm-6 col-lg-6">
                                <h4>
                                    <img src={require('./resources/img/logo.png')}/>
                                </h4>
                                <p>All the projects listed above were collected by
                                    <a href="#">Oliver</a>
                                </p>
                            </div>
                            <div className="col-sm-6  col-lg-5 col-lg-offset-1">
                                <div className="row about">
                                    <div className="col-xs-3">
                                        <h4>About</h4>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#">README</a>
                                            </li>
                                            <li>
                                                <a href="#">CONTRIBUTING</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-xs-3">
                                        <h4>Contact US</h4>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="mailto:wuzhuoran@qiyoukeji.com">Zhuoran Wu</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </footer>
            </div>
        )
    }
});

module.exports = Index;
