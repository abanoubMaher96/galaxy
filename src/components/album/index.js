import React, {Component} from 'react';
import {AlbumComponent, ImageGroup, Image, Title, EachImage, SubTitle} from './style';
import Lightbox from "react-image-lightbox";
import {connect} from 'react-redux';
import {clear_state} from '../../redux/action';
import Media from 'react-media';

const smallImages = [
    'big_portfolio_item_4.png',
    'big_portfolio_item_2.png',
    'big_portfolio_item_3.png',
    'big_portfolio_item_1.png',
    'big_portfolio_item_5.png',
    'big_portfolio_item_6.png',
    'big_portfolio_item_7.png',
    'big_portfolio_item_8.png',
    'big_portfolio_item_9.png',
]
const images = [
    'big_portfolio_item_4.png',
    'big_portfolio_item_2.png',
    'big_portfolio_item_3.png',
    'big_portfolio_item_1.png',
    'big_portfolio_item_5.png',
    'big_portfolio_item_6.png',
    'big_portfolio_item_7.png',
    'big_portfolio_item_8.png',
    'big_portfolio_item_9.png',
]
class Album extends Component{
    state={
        photoIndex: 0,
        isOpen: false
    }
  render(){
    const { photoIndex, isOpen } = this.state;
    return(
      <div>
      <Media query="(min-width: 1024px)" render={() =>
        (
          <AlbumComponent id="album">
          <ImageGroup className="row">
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4" onClick={()=>this.props.clear_state(!this.state.isOpen)} >
           
               <Image alt="1" src={smallImages[0]} onClick={() =>{this.setState({ photoIndex: 0, isOpen: true })}}/>
               <Title first>biodiesel squid</Title>
               <SubTitle first>awesome subtitle goes here</SubTitle>
           
          </EachImage>
          
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4" onClick={()=>this.props.clear_state(!this.state.isOpen)}>
              
               <Image alt="2"  src={smallImages[1]} onClick={() =>this.setState({ photoIndex: 1, isOpen: true })} />
               <Title>raclette taxidermy</Title>
               <SubTitle>awesome subtitle goes here</SubTitle>
           
          </EachImage>
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4" onClick={()=>this.props.clear_state(!this.state.isOpen)}>
              
               <Image alt="3"  src={smallImages[2]} onClick={() =>this.setState({ photoIndex: 2, isOpen: true })} />
               <Title>humblebrag brunch</Title>
               <SubTitle>awesome subtitle goes here</SubTitle>
           
          </EachImage>
       </ImageGroup>

      <ImageGroup className="row">
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4" onClick={()=>this.props.clear_state(!this.state.isOpen)}>
              
               <Image alt="4" src={smallImages[3]} onClick={() =>this.setState({ photoIndex: 3, isOpen: true })} />
               <Title first>Succulents chambray</Title>
               <SubTitle first>awesome subtitle goes here</SubTitle>
           
          </EachImage>
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4" onClick={()=>this.props.clear_state(!this.state.isOpen)}>
              
               <Image alt="5"  src={smallImages[4]} onClick={() =>this.setState({ photoIndex: 4, isOpen: true })} />
               <Title>freegan aesthetic</Title>
               <SubTitle>awesome subtitle goes here</SubTitle>
           
          </EachImage>
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4" onClick={()=>this.props.clear_state(!this.state.isOpen)}>
              
               <Image alt="6"  src={smallImages[5]} onClick={() =>this.setState({ photoIndex: 5, isOpen: true })} />
               <Title>taiyaki vegan</Title>
               <SubTitle>awesome subtitle goes here</SubTitle>
           
          </EachImage>
       </ImageGroup>

      <ImageGroup className="row">
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4" onClick={()=>this.props.clear_state(!this.state.isOpen)}>
              
               <Image alt="7"  src={smallImages[6]} onClick={() =>this.setState({ photoIndex: 6, isOpen: true })} />
               <Title first>Thundercats santo</Title>
               <SubTitle first>awesome subtitle goes here</SubTitle>
           
          </EachImage>
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4" onClick={()=>this.props.clear_state(!this.state.isOpen)}>
              
               <Image alt="8"  src={smallImages[7]} onClick={() =>this.setState({ photoIndex: 7, isOpen: true })} />
               <Title>wayfarers yuccie</Title>
               <SubTitle>awesome subtitle goes here</SubTitle>
           
          </EachImage>
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4" onClick={()=>this.props.clear_state(!this.state.isOpen)}>
              
               <Image alt="9"  src={smallImages[8]} onClick={() =>this.setState({ photoIndex: 8, isOpen: true })} />
               <Title>disrupt street</Title>
               <SubTitle>awesome subtitle goes here</SubTitle>
           
          </EachImage>
          
       </ImageGroup>
       {isOpen && (
     <Lightbox
       mainSrc={images[photoIndex]}
       nextSrc={images[(photoIndex + 1) % images.length]}
       prevSrc={images[(photoIndex + images.length - 1) % images.length]}
       imageTitle={photoIndex + 1 + "/" + images.length}
       onCloseRequest={() =>{this.setState({ isOpen: false });this.props.clear_state(this.state.isOpen)} }
       onMovePrevRequest={() =>
         this.setState({
           photoIndex: (photoIndex + images.length - 1) % images.length
         })
       }
       onMoveNextRequest={() =>
         this.setState({
           photoIndex: (photoIndex + 1) % images.length
         })
       }
     />
   )}
   </AlbumComponent>

        )}
      />
      <Media query="(max-width: 1023px)" render={() =>
        (
          <AlbumComponent id="album">
          <ImageGroup className="row">
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4" >
           
               <Image alt="1" src={smallImages[0]}/>
               <Title first>biodiesel squid</Title>
               <SubTitle first>awesome subtitle goes here</SubTitle>
           
          </EachImage>
          
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4">
              
               <Image alt="2"  src={smallImages[1]} />
               <Title>raclette taxidermy</Title>
               <SubTitle>awesome subtitle goes here</SubTitle>
           
          </EachImage>
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4">
              
               <Image alt="3"  src={smallImages[2]} />
               <Title>humblebrag brunch</Title>
               <SubTitle>awesome subtitle goes here</SubTitle>
           
          </EachImage>
       </ImageGroup>

      <ImageGroup className="row">
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4">
              
               <Image alt="4" src={smallImages[3]} />
               <Title first>Succulents chambray</Title>
               <SubTitle first>awesome subtitle goes here</SubTitle>
           
          </EachImage>
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4">
              
               <Image alt="5"  src={smallImages[4]} />
               <Title>freegan aesthetic</Title>
               <SubTitle>awesome subtitle goes here</SubTitle>
           
          </EachImage>
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4">
              
               <Image alt="6"  src={smallImages[5]} />
               <Title>taiyaki vegan</Title>
               <SubTitle>awesome subtitle goes here</SubTitle>
           
          </EachImage>
       </ImageGroup>

      <ImageGroup className="row">
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4">
              
               <Image alt="7"  src={smallImages[6]} />
               <Title first>Thundercats santo</Title>
               <SubTitle first>awesome subtitle goes here</SubTitle>
           
          </EachImage>
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4">
              
               <Image alt="8"  src={smallImages[7]} />
               <Title>wayfarers yuccie</Title>
               <SubTitle>awesome subtitle goes here</SubTitle>
           
          </EachImage>
          <EachImage className="col-12 col-sm-12 col-md-12 col-lg-4">
              
               <Image alt="9"  src={smallImages[8]} />
               <Title>disrupt street</Title>
               <SubTitle>awesome subtitle goes here</SubTitle>
           
          </EachImage>
          
       </ImageGroup>
       {isOpen && (
     <Lightbox
       mainSrc={images[photoIndex]}
       nextSrc={images[(photoIndex + 1) % images.length]}
       prevSrc={images[(photoIndex + images.length - 1) % images.length]}
       imageTitle={photoIndex + 1 + "/" + images.length}
       onCloseRequest={() =>{this.setState({ isOpen: false });this.props.clear_state(this.state.isOpen)} }
       onMovePrevRequest={() =>
         this.setState({
           photoIndex: (photoIndex + images.length - 1) % images.length
         })
       }
       onMoveNextRequest={() =>
         this.setState({
           photoIndex: (photoIndex + 1) % images.length
         })
       }
     />
   )}
   </AlbumComponent>

        )}
      />
       </div>
        )
  }
}
function mapStateToProps(state){
    return{
      clearState: state
    }
  }
  
  export default connect(mapStateToProps,{clear_state})(Album);