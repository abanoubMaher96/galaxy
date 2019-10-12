import React, {Component} from 'react';
import {HomeComponent, Video, Overlay, Title, SubTitle, TitleSpan, Contain, Desc, OpenMenu, Menu, MenuParag, Ul, Li, GoArrow, LinkItem} from './style';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import {open_menu} from '../../redux/action';
import { Link as Going } from "react-scroll";

class Home extends Component{
   
    render(){
        return(
            <HomeComponent>
            <Navbar name="high" subname="way"/>
            <Overlay />
            <Contain >
                <Desc>
                    <Title>WELCOME TO <TitleSpan>Highway</TitleSpan> </Title>
                    <SubTitle>Made By Abanoub Maher</SubTitle>
                </Desc>
                <GoArrow href="">
                    <Going to="album" spy={true} smooth={true} offset={5} duration= {900}>
                        <img src="scroll-icon.png" alt="goDown" />
                    </Going>
                </GoArrow>
            </Contain>
            <Video autoPlay muted loop >
        	    <source src="highway-loop.mp4" type="video/mp4" />
            </Video>
            <OpenMenu className={this.props.activeState.active ? 'OpenMenuActive' : '' } >
                <Menu className={this.props.activeState.active ? 'MenuActice' : '' }>
                    <Ul>
                        <Li><LinkItem>Home</LinkItem></Li>
                        <Li><LinkItem to="/about" onClick={this.props.activeState.active= false}>About Us</LinkItem></Li>
                        <Li><LinkItem to="/blog">Blog Entries</LinkItem></Li>
                        <Li><LinkItem to="/single">Single Post</LinkItem></Li>
                    </Ul>
                    <MenuParag>I create awesome templates</MenuParag>
                </Menu>
            </OpenMenu>
        </HomeComponent>
        )
    }
}
function mapStateToProps(state){
    return{
      activeState: state
    }
  }
  
  export default connect(mapStateToProps,{open_menu})(Home);