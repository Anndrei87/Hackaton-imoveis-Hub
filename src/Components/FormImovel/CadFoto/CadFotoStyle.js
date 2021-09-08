import styled from 'styled-components'

export const FormContainer =styled.div`
  box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.034);
  0 6.7px 5.3px rgba(0, 0, 0, 0.048);
  0 12.5px 10px rgba(0, 0, 0, 0.06);
  0 22.3px 17.9px rgba(0, 0, 0, 0.072);
  0 41.8px 33.4px rgba(0, 0, 0, 0.086);
  0 100px 80px rgba(0, 0, 0, 0.12);
  width: 1050px;
  margin: 10px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;

  

  @media screen and (max-width:820px){
    margin-top: 20px;
    width: 320px; 
  }
`

export const FormIM2 = styled.h1`
    text-align: center;
    font-size: 28px;
    @media screen and (max-width:820px){
   font-size: 25px;
  }
`

export const FormContainerGeral = styled.div`
display: flex;
flex-wrap:wrap;
background-color: #e6e6e6;

align-items: center;
  width: 100%;
  height: auto;
`

export const FormContainerFotoG = styled.div`
display: felx;
flex-wrap:wrap;
background-color: #e6e6e6

aligin-itens: center;
   width: 100%
   height: 100 vh;
`

export const FormContainerFoto = styled.div`
display: felx;
flex-wrap:wrap;
background-color: #e6e6e6

aligin-itens: center;
   width: 100%
   height: 100 vh;
`