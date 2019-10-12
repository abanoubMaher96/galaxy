import React, {Component, Fragment} from 'react';
import {BlogComponent, Contain, MainBody, BodyAside, Pages} from './style';
import {OpenMenu, Menu, MenuParag, Ul, Li, LinkItem} from '../Home/style';
import Footer from '../footer';
import Header from '../Header';
import Contact from '../contact';
import {connect} from 'react-redux';
import {open_menu} from '../../redux/action';
import Navbar from '../navbar';
import Aside from '../aside';
import BlogBody from '../Blog body';

class SinglePost extends Component{
   
    render(){
        return(
        <Fragment>
            <Navbar name="gala" subname="xy"/>
                <OpenMenu className={this.props.activeState.active ? 'OpenMenuActive' : '' } >
                    <Menu className={this.props.activeState.active ? 'MenuActice' : '' }>
                        <Ul>
                            <Li><LinkItem to="/">Home</LinkItem></Li>
                            <Li><LinkItem to="/about" onClick={this.props.activeState.active= false}>About Us</LinkItem></Li>
                            <Li><LinkItem  to="/blog">Blog Entries</LinkItem></Li>
                            <Li><Pages>Single Post</Pages></Li>
                        </Ul>
                        <MenuParag>I create awesome templates</MenuParag>
                    </Menu>
                </OpenMenu>
                <Contact/>
            <BlogComponent>
                <Header name="single" subname="post"/>
                <Contain>
                    <div className="row justify-content-lg-around">
                        <MainBody className="col-lg-8">
                            <BlogBody 
                                src="blog_post_1.png" alt="1"
                                writer="admin" date="16 September 2018" type="branding"
                                title="Duis Mollis Orci Vel Lectus"
                                parag1="Proin at augue quam. In laoreet arcu id lacus fringilla auctor.
                                        Etiam rutrum aliquet nisl,eu fermentum elit fermentum sed. Donec finibus
                                        urna sed sollicitudin egestas. In hac habitasse platea dictumst."
                                parag2="Proin at augue quam. In laoreet arcu id lacus fringilla auctor.
                                        Etiam rutrum aliquet nisl,eu fermentum elit fermentum sed. Donec finibus
                                        urna sed sollicitudin egestas. In hac habitasse platea dictumst."
                                parag3="Pellentesque vel dignissim libero, et sagittis elit. Nulla dignissim
                                        eleifend tellus, sed molestie risus rutrum non. Etiam lorem odio, convallis
                                        a arcu vel, bibendum molestie metus. Pellentesque imperdiet nisl ante,
                                        eu congue nisl suscipit id."
                                back="Back To Blog"
                            ></BlogBody>
                        </MainBody>
                        <BodyAside className="col-lg-3 ">
                            <Aside/>
                        </BodyAside>
                    </div>
                </Contain>
                <Footer />
            </BlogComponent>
        </Fragment>
        )
    }
}
  
function mapStateToProps(state){
    return{
      activeState: state
    }
  }
  
  export default connect(mapStateToProps,{open_menu})(SinglePost);