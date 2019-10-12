import React, {Component, Fragment} from 'react';
import Home from '../Home';
import Album from '../album';
import Footer from '../footer';
import Contact from '../contact';

class Main extends Component{
   
    render(){
        return(
        <Fragment>
            <Contact/>
            <Home/>
            <Album />
            <Footer />
        
        </Fragment>
        )
    }
}
  
  
  export default Main;