import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Img = styled.img`
  width: 100%;
  padding-top: ${props=>(props.first ? '0' : '6%')};
`
export const ImgDesc = styled.article`
  width: 100%;
  color: #FFF ;
  margin-top: 20px;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #414141;
`
export const DescDate = styled.a`
  color: #f4dd5b !important;
  font-size: 15px;
  font-weight: 100;
  padding-right: 10px;
  cursor: pointer;
  text-transform: capitalize;
  padding-left: ${props=>(props.left ? '10px' : '0')};
`
export const DescTitle = styled.h2`
  font-size: 34px;
  padding-top: 5px;
`
export const DescParag = styled.p`
  color: #BBB;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 100;
`
export const DescBtn = styled.button`
  border: none;
  color: #FFF;
  background: transparent;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
  letter-spacing: 1.5px;
  padding: 0 0 10px 0;
  border-bottom: 3px solid #FFF;
  transition: all 0.4s ease-out;
  margin-bottom: 8%;
  &:hover{
    opacity: 0.5;
  }
`
export const DescBtnBack = styled.button`
  border: none;
  color: #337ab7;
  background: transparent;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
  letter-spacing: 1.5px;
  padding: 0 0 10px 0;
  transition: all 0.4s ease-out;
  margin-bottom: 8%;
  &:hover{
    color: #74a4ce;
  }
`
export const LinkPost = styled(Link)`
`