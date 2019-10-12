import React, {Component}  from 'react';
import {NavbarComponent, Logo, Span, Icon, IconLines, OpenMenu, Menu, Pages, MenuParag, Ul, Li} from './style';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {open_menu, clear_state} from '../../redux/action';

class ReadyNavbar extends Component {
    state={
        active: false,
    }
    
    toggle = () =>{
        this.setState(prevState => ({ active: !prevState.active }));
        this.props.open_menu(!this.state.active)
    }

    check = () =>{
        if(this.props.activeState.isOpen===true){
            return('navClear')
        }
        else if(this.state.active===true){
            return('navActive')
        }
        else{
            return('')
        }
    }

    render(){
        return(
        <div>
            <NavbarComponent className={this.check()}>
                <Logo>{this.props.name}<Span>{this.props.subname}</Span></Logo>
                <Icon onClick={this.toggle} 
                className={this.state.active ? 'iconActive' : '' }>
                    <IconLines className={this.state.active ? 'lineActive' : '' } />
                </Icon>
            </NavbarComponent>
            <OpenMenu className={this.props.activeState.active ? 'OpenMenuActive' : '' } >
                <Menu className={this.props.activeState.active ? 'MenuActice' : '' }>
                    <Ul>
                        <Li><Link to="/"><Pages>Home</Pages></Link></Li>
                        <Li><Link to="/about"><Pages>About Us</Pages></Link></Li>
                        <Li><Link><Pages>Blog Entries</Pages></Link></Li>
                        <Li><Link><Pages>Single Post</Pages></Link></Li>
                    </Ul>
                    <MenuParag>I create awesome templates</MenuParag>
                </Menu>
            </OpenMenu>
        </div>
        )
    }
}

function mapStateToProps(state){
    return{
      activeState: state,
    }
  }
  
  export default connect(mapStateToProps,{open_menu,clear_state})(ReadyNavbar);