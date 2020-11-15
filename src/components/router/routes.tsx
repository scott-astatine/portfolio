import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from '../pages/about'
import Contact from '../pages/contact'
import Home from '../pages/home'
import Skills from '../pages/skills'

interface Props {
    name: string;
}

export const Routes: React.FC<Props> = (props) => {
    return (
        <Switch>
            <Route exact path="/">
                <Home name={props.name} />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/skills">
                <Skills />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
        </Switch>
    )
}

export default Routes