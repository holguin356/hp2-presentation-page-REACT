import AceptTerms from './AceptsTerms';
import React from 'react';
import logo from '../Assets/logobig.png';
import './Loading.css';
import {Button, Modal, ModalHeader, ModalBody,ModalFooter} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import LoadingBar from './LoadingBar';

class PopUp extends React.Component{
  state={
    open:true,
  }

  ModalOpen=()=>{
    this.setState({open: !this.state.open});
    alert('si apretaste el boton')
  }
  
  render()
  {
    return(
      <div className='container'>
        <div className='subcontainer'>
           <Button color="success" onClick={this.ModalOpen}>boton modal:</Button>
        </div>
           <Modal isOpen={this.state.open} className='popup'>
                <ModalBody className='conteiner'>
                <img src={logo}></img><br/>
                <p>Me llamo Sebastian Holguin <br/>Estudiante de desarrollo de sofware</p>
       <div className='aceppt'><AceptTerms/></div>  
                
                </ModalBody>
            </Modal>
      </div>
    );
  }
}


export default PopUp;
