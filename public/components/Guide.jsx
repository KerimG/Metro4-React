import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
    Container, Row, Cell,
} from "../../src";
import MainMenu from "./MainMenu";
import SideMenu from "./SideMenu";
import "../css/guide.less";
import NotFound from "./NotFound";
import GuideIntro from "./guide/Intro";
import GuideCommon from "./guide/Common";
import GuideColorStyles from "./guide/ColorStyles";
import GuideGrid from "./guide/Grid";

export default class Guide extends React.Component {
    render(){
        return (
            <Container fluid={true} cls={'guide-main-container'}>
                <MainMenu fullSize={true}/>

                <Row>
                    <Cell cls={'cell-md-8 cell-lg-9 order-2 order-md-1'}>
                        <article>
                            <Switch>
                                <Route exact path='/guide/' component={GuideIntro}/>
                                <Route path='/guide/common' component={GuideCommon}/>
                                <Route path='/guide/colors' component={GuideColorStyles}/>
                                <Route path='/guide/grid' component={GuideGrid}/>
                                <Route component={NotFound} />
                            </Switch>
                        </article>
                    </Cell>
                    <Cell cls={'cell-md-4 cell-lg-3 order-1 order-md-2'} id={'side-nav'}>
                        <SideMenu/>
                    </Cell>
                </Row>
            </Container>
        )
    }
}