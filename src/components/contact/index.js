import React, {Component ,Fragment} from 'react';
import {ContactIcon, ContactPage, TextField, Inner, IconTitle, Input, Btn, CloseIcon} from './style';

class Contact extends Component{
   state ={
       show: false
   }
    render(){
        return(
            <Fragment>
                <ContactIcon onClick={()=> this.setState({show: true})}>
                    <img src="contact-icon.png" alt="contact"/>
                </ContactIcon>
                <ContactPage className={this.state.show ? 'showContact' : ''}>
                    <CloseIcon onClick={()=> this.setState({show: false})}>
                        <img src="close_contact.png" alt="close"/>
                    </CloseIcon>
                    <IconTitle>Say hello to Highway</IconTitle>
                    <Inner className="row justify-content-center">
                        <form className="col-xl-4 col-lg-6 col-md-8 col-10">
                            <Input placeholder="Your name..." type="text" />
                            <Input placeholder="Your email..." name="email" type="email" />
                            <TextField placeholder="Your message..." />
                            <div className="row justify-content-center">
                                <Btn className="col-auto" >send message now</Btn>
                            </div>
                        </form>
                    </Inner>
                </ContactPage>
            </Fragment>
        )
    }
}
  
  export default Contact;