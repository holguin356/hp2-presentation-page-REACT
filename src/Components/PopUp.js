
import React from 'react';
import logo from '../Assets/logobig.png';
import './Loading.css';
import {Button, Modal, ModalBody} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'


class PopUp extends React.Component{
  state={
    open:true,
  }

  ModalOpen=()=>{
    this.setState({open: !this.state.open});
  }
  
  render()
  {
    return(
      <div className='container'>
        <div className='subcontainer'>
        </div>
           <Modal isOpen={this.state.open} className='popup'>
                <ModalBody className='conteiner'>
                <img src={logo}></img><br/>
                <p>I Am Sebastian Holguin <br/>Developer Student</p>
       <div className='aceppt'>
       <Button color="success" onClick={this.ModalOpen}>See More</Button>
        </div>   
                </ModalBody>
            </Modal>
      </div>
    );
  }
}


export default PopUp;
