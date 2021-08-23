import React  from 'react'
import {FaBars} from 'react-icons/fa'



import {
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavBtn, 
    NavBtnLink,
    NavLinks} from "./NavbarStyle"

const Navbar = ({toggle}) => {

   

  

   return (
      <>
      
           <Nav >
               <NavbarContainer>
                   <NavLogo to='/' >DarahLogo</NavLogo>
                   <MobileIcon onClick={toggle}>
                       <FaBars/>
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to="/cadastroUser">Cadastro de usuario</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to= "discover">Anuncie</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to= "discover">Contato</NavLinks>
                       </NavItem>
                       
                   </NavMenu>
                   <NavBtn>
                       <NavBtnLink to="/singin">Sing in</NavBtnLink>
                   </NavBtn>
                   
               </NavbarContainer>
           </Nav>
           
      </>
   )
}


export default Navbar