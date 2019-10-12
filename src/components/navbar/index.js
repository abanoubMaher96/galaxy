import React, {Component}  from 'react';
import {NavbarComponent, Logo, Span, Icon, IconLines} from './style';
import {connect} from 'react-redux';
import {open_menu, clear_state} from '../../redux/action';

class Navbar extends Component {
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
        <NavbarComponent className={this.check()}>
            <Logo>{this.props.name}<Span>{this.props.subname}</Span></Logo>
            <Icon onClick={this.toggle} 
            className={this.state.active ? 'iconActive' : '' }>
                <IconLines className={this.state.active ? 'lineActive' : '' } />
            </Icon>
        </NavbarComponent>
        )
    }
}

function mapStateToProps(state){
    return{
      activeState: state,
    }
  }
  
  export default connect(mapStateToProps,{open_menu,clear_state})(Navbar);