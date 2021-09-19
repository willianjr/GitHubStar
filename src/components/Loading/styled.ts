import styled from "styled-components";




export const Containers = styled.div`
  background-color: ${({ theme: { colors } }) => colors.overlay};
  height:100vh;
  width:100vw;
  position:fixed;
  top:0px;
  left:0px;

  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  
  > span{
      color:${({ theme: { colors } }) => colors.text};
      padding:0.5rem;
      font-size:18px;
      letter-spacing:5px;
      text-transform:uppercase;
      text-align:center;
      font-weight:bold;

  }
  
`
