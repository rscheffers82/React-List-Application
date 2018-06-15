import React, { Component } from 'react';
import {connect} from 'react-redux';
import { setSearchText, toggleShowCompleted } from 'actions';

export class TodoSearch extends Component {
  render() {
    const {dispatch, showCompleted, searchText} = this.props;

    return (
      <div className='container__header'>
        <div>
          <input type="search" ref="searchText" value={searchText} placeholder="Search todo's" onChange={ () => {
              const searchText = this.refs.searchText.value;
              dispatch( setSearchText(searchText) );
            }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={ () => {
                dispatch( toggleShowCompleted() );
              }}/>
            Show completed todo's
          </label>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  showCompleted: state.showCompleted,
  searchText: state.searchText
});

export default connect(mapStateToProps)(TodoSearch);
