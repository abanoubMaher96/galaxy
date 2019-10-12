import React, {Component, Fragment} from 'react';
import {BlogComponent, Contain, MainBody, BodyAside, PagesUL, PagesLI, Pages} from './style';
import {OpenMenu, Menu, MenuParag, Ul, Li, LinkItem} from '../Home/style';
import Footer from '../footer';
import Header from '../Header';
import Contact from '../contact';
import {connect} from 'react-redux';
import {open_menu} from '../../redux/action';
import Navbar from '../navbar';
import Aside from '../aside';
import BlogBody from '../Blog body';

class Blog extends Component{
   
    render(){
        return(
        <Fragment>
            
            <Navbar name="gala" subname="xy"/>
                <OpenMenu className={this.props.activeState.active ? 'OpenMenuActive' : '' } >
                    <Menu className={this.props.activeState.active ? 'MenuActice' : '' }>
                        <Ul>
                            <Li><LinkItem to="/">Home</LinkItem></Li>
                            <Li><LinkItem to="/about" onClick={this.props.activeState.active= false}>About Us</LinkItem></Li>
                            <Li><Pages>Blog Entires</Pages></Li>
                            <Li><LinkItem to="/single">Single Post</LinkItem></Li>
                        </Ul>
                        <MenuParag>I create awesome templates</MenuParag>
                    </Menu>
                </OpenMenu>
                <Contact/>
            <BlogComponent>
                <Header name="our" subname="blog"/>
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
                                
                                btn="continue reading"
                            ></BlogBody>
                            <BlogBody 
                                src="blog_post_2.png" alt="2"
                                writer="admin" date="28 August 2018" type="Lifestyle"
                                title="Integer Scelerisque Odio Elit"
                                parag1="Aliquam erat volutpat. Donec condimentum ante nec sapien sodales,
                                        ut molestie mauris scelerisque. Maecenas in turpis sed odio pretium tempor.
                                        In libero tellus,maximus in accumsan id, posuere non urna."
                                parag2="Proin at augue quam. In laoreet arcu id lacus fringilla auctor.
                                        Etiam rutrum aliquet nisl,eu fermentum elit fermentum sed. Donec finibus
                                        urna sed sollicitudin egestas. In hac habitasse platea dictumst."
                                btn="continue reading"
                            ></BlogBody>
                            <BlogBody 
                                src="blog_post_3.png" alt="3"
                                writer="admin" date="31 July 2018" type="Work Stuff"
                                title="Nulla Condimentum At Dui Eu"
                                parag1="Proin at augue quam. In laoreet arcu id lacus fringilla auctor.
                                        Etiam rutrum aliquet nisl,eu fermentum elit fermentum sed. Donec finibus
                                        urna sed sollicitudin egestas. In hac habitasse platea dictumst."
                                parag2="Proin at augue quam. In laoreet arcu id lacus fringilla auctor.
                                        Etiam rutrum aliquet nisl,eu fermentum elit fermentum sed. Donec finibus
                                        urna sed sollicitudin egestas. In hac habitasse platea dictumst."
                                btn="continue reading"
                            ></BlogBody>
                            <PagesUL>
                                <PagesLI active>1</PagesLI>
                                <PagesLI>2</PagesLI>
                                <PagesLI>3</PagesLI>
                                <PagesLI>></PagesLI>
                            </PagesUL>
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
  
  export default connect(mapStateToProps,{open_menu})(Blog);