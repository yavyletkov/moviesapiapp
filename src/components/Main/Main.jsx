import React from "react";
import Pagination from "../Pagination/Pagination";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import {setCurrentPage} from "../../redux/reducer";
import {connect} from "react-redux";
import SortTabs from "../SortTabs/SortTabs";

const Main = (props) => {

    let onPageChange = (page) => {
        props.setCurrentPage(page)
    }

    return (
        <div>
            <SortTabs/>
            <Pagination currentPage={props.currentPage} onPageChange={onPageChange}/>
            <CardsWrapper/>
            <Pagination currentPage={props.currentPage} onPageChange={onPageChange}/>
        </div>
    )
}

let mstp = (state) => {
    return {
        currentPage: state.currentPage
    }
}

export default connect(mstp, {setCurrentPage})(Main);