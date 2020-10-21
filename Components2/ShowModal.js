import React from 'react';
import ReactDOM from 'react-dom';
import  useModal from './UseModal';
import Modal from './Modal';

const ShowModal = () => {
    const {isShowing, toggle} = useModal();
    return (
      <div className="App">
        <button className="button-default" onClick={toggle}>Show Modal</button>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
      </div>
    );
  };
   
export default  ShowModal;