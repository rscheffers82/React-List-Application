import React, { Component } from 'react';
import {connect} from 'react-redux';
import { setSearchText, toggleShowCompleted } from 'actions';

export class TodoSearch extends Component {
  state = {
    checked: false,
  }
  render() {
    const {dispatch, showCompleted, searchText} = this.props;

    return (
      <div className='container__header'>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <svg style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
              <path fill="#000000" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
          </span>
        </div>
        <input type="search" className="form-control" value={searchText} placeholder="Search todo's" aria-label="Search todo's" onChange={ (e) => {
              const searchText = e.target.value;
              dispatch( setSearchText(searchText) );
            }}/>

      </div>

          <label onClick={() => { dispatch( toggleShowCompleted() ) }}>
            {showCompleted
              ? <svg style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                  <path fill="#000000" d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" />
                </svg>
              : <svg style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                  <path fill="#000000" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
                </svg>
            }
            &nbsp;Show completed todo's
          </label>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  showCompleted: state.showCompleted,
  searchText: state.searchText
});

export default connect(mapStateToProps)(TodoSearch);
