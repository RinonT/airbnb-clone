import React from 'react';
import ReactDOM from 'react-dom';
import SearchSelect from './SearchSelect';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <h3>Edit your search</h3> 
          <SearchSelect />
            <input className="add-guest-input" type="number" name="number" placeholder="Add a guest"/>
            <div>
                <button className="search-button" type="button" > Search</button>
            </div>
        </div>
      </div>
    </React.Fragment>, document.body
  ) : null;
  
  export default Modal;