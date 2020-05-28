import React from 'react';
import './App.css';
import {connect, Provider} from "react-redux";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

const App = (props) => {

    return (
        <Provider store={props.store}>
            <div className='App'>
                <Main/>
                <Sidebar />
            </div>
        </Provider>

    )
}

export default connect(null)(App);
