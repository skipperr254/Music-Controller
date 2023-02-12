import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom"

import RoomCreatePage from "./RoomCreatePage";
import RoomJoinPage from "./RoomJoinPage";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Router>
                    <Routes>
                        <Route path='/' element={<h1>Hello world</h1>}></Route>
                        <Route path='/join' element={<RoomJoinPage />}/>
                        <Route path='/create' element={<RoomCreatePage />}/>
                    </Routes>
                </Router>
            )
    }
}