import React, {Component, Fragment} from 'react';
import {AboutComponent, OpenMenu, Menu, MenuParag, Ul, Li, Pages} from './style';
import Footer from '../footer';
import Header from '../Header';
import AboutBody  from '../about body';
import AboutAside from '../about Aside';
import Contact from '../contact';
import AboutPrices from '../about prices';
import {connect} from 'react-redux';
import {open_menu} from '../../redux/action';
import Navbar from '../navbar';
import { LinkItem } from '../Home/style';

class About extends Component{
   
    render(){
        return(
        <Fragment>
            
            <Navbar name="high" subname="way"/>
                <OpenMenu className={this.props.activeState.active ? 'OpenMenuActive' : '' } >
                    <Menu className={this.props.activeState.active ? 'MenuActice' : '' }>
                        <Ul>
                            <Li><LinkItem to="/" onClick={this.props.activeState.active= false}>Home</LinkItem></Li>
                            <Li><Pages>About Us</Pages></Li>
                            <Li><LinkItem to="/blog">Blog Entries</LinkItem></Li>
                            <Li><LinkItem to="/single">Single Post</LinkItem></Li>
                        </Ul>
                        <MenuParag>I create awesome templates</MenuParag>
                    </Menu>
                </OpenMenu>
                <Contact/>
            <AboutComponent>
                <Header name="about" subname="us"/>
                <AboutBody/>
                <AboutAside/>
                <AboutPrices/>
                <Footer />
            </AboutComponent>
        
        </Fragment>
        )
    }
}
  
function mapStateToProps(state){
    return{
      activeState: state
    }
  }
  
  export default connect(mapStateToProps,{open_menu})(About);