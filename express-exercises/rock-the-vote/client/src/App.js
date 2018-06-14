import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import IssuesView from './views/IssuesView'
import IssueView from './views/IssueView'
import EditorView from './views/EditorView'

import './App.css'

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={IssuesView}/>
                <Route path="/editor" component={EditorView}/>
                <Route path="/:id" component={IssueView}/>
            </Switch>
        </div>
    )
}

export default App