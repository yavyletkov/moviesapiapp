import React from "react";
import s from "./Sidebar.module.scss"
import {connect} from "react-redux";
import {setCurrentPage} from "../../redux/reducer";

let Sidebar = (props) => {

    let mappedToWatchList = props.toWatch.map(item => {
        return <div className='card m-3 p-3' key={item.id}>{item.title}</div>
    });

    let sidebarRef = React.useRef();

    let handleClick = () => {
        sidebarRef.current.classList.toggle(`${s.opened}`)
    }

    return (
        <>
            <div ref={sidebarRef} className={s.sidebar} onClick={handleClick}>
                {!props.toWatch.length ? <h5 className='m-3'>Click "Add movie"</h5> : null}
                <div>{mappedToWatchList}</div>
            </div>
            <button onClick={handleClick} className='btn btn-primary watchListBtn'>WATCH LIST</button>
        </>
    )
}

let mstp = (state) => {
    return {
        toWatch: state.toWatch
    }
}

export default connect(mstp, setCurrentPage)(Sidebar);