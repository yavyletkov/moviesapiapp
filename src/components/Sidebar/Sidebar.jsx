import React from "react";
import s from "./Sidebar.module.scss"
import {connect} from "react-redux";
import {setCurrentPage} from "../../redux/reducer";

let Sidebar = (props) => {

    let mappedToWatchList = props.toWatch.map(item => {
        return <div className='card m-3 p-3' key={item.id}>{item.title}</div>
    });

    return (
        <div className={s.sidebar}>
            <div className='m-3'><h2>TO WATCH</h2></div>
            <div>{mappedToWatchList}</div>
        </div>
    )
}

let mstp = (state) => {
    return {
        toWatch: state.toWatch
    }
}

export default connect(mstp, setCurrentPage)(Sidebar);