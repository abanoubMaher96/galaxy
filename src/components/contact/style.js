import styled from 'styled-components';

export const ContactIcon = styled.div`
  height: 63px;
  width: 63x;
  position: fixed;
  z-index: 9999;
  bottom:6%;
  right:2%;
  cursor: pointer;
`
export const ContactPage = styled.section`
  height: 100%;
  width: 100% !important;
  position: fixed;
  z-index: 99999999;
  right:0;
  background-color: rgba(0,0,0,0.95);
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.8s ease-in-out;
`
export const IconTitle = styled.h1`
  color: #FFF;
  text-align: center;
  font-size: 60px;
  margin-top: 5%;
  @media (max-width:1100px) {
    margin-top: 25%;
  }
`
export const Inner = styled.article`
  margin-top: 4%;
`
export const Input = styled.input`
  height: 23%;
  margin-bottom: 5%;
  width: 100%;
  border-radius: 5px;
  border:0;
  background-color: rgba(50,50,50,0.5);
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  color: #FFF;
  outline: 0;
  transition: all 0.2s ease-in-out;
  &:focus{
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
  }
`
export const TextField = styled.textarea`
  height: 70%;
  width: 100%;
  border-radius: 5px;
  border:0;
  background-color: rgba(50,50,50,0.5);
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  color: #FFF;
  outline: 0;
  transition: all 0.2s ease-in-out;
  min-height:20%;
  &:focus{
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
  }
`
export const Btn = styled.button`
  border: 0; 
  padding: 0 !important;
  margin-top: 5px;
  background-color: rgba(0,0,0,0);
  color: #FFF;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  border-bottom: 2px solid #fff;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  &:hover{
    color: rgba(250,250,250,0.5);
    border-color: rgba(250,250,250,0.5);
  }
`
export const CloseIcon = styled.div`
  height: 63px;
  width: 63x;
  position: absolute;
  z-index: 999999999;
  top:5%;
  right:2%;
  cursor: pointer;
  color:#FFF;
`