import React from "react";
import {setSortBy} from "../../redux/reducer";
import {connect} from "react-redux";

let SortTabs = ({ setSortBy, sortBy}) => {

    return (
        <ul className='tabs nav nav-pills justify-content-center mt-3'>
            <li className='nav-item' onClick={() => setSortBy('popularity.desc')}>
                <span className={'nav-link' + (sortBy === 'popularity.desc' ? ' active' : '')}>Sort by popularity .desc</span>
            </li>
            <li className='nav-item' onClick={() => setSortBy('revenue.desc')}>
                <span className={'nav-link' + (sortBy === 'revenue.desc' ? ' active' : '')}>Sort by revenue .desc</span>
            </li>
            <li className='nav-item' onClick={() => setSortBy('primary_release_date.desc')}>
                <span className={'nav-link' + (sortBy === 'primary_release_date.desc' ? ' active' : '')}>Sort by release date .desc</span>
            </li>
        </ul>
    )
}

let mstp = (state) => {
    return {
        sortBy: state.sortBy
    }
};

export default connect(mstp, {setSortBy})(SortTabs);