import React from 'react'
import {ColorModeSwitcher} from '../../../ColorModeSwitcher';
import {Button,Drawer,DrawerOverlay,DrawerContent,DrawerHeader,DrawerBody,useDisclosure,VStack, HStack} from '@chakra-ui/react';
import {RiMenu5Fill,RiLogoutBoxLine,RiDashboardFill} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user';

// Link button yha define kra gya hai
const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

// main componet start from here
   const Header = ({isAuthenticated=false,user}) => {
    const{isOpen,onOpen,onClose} = useDisclosure()
    
    //logout handler
    const dispatch = useDispatch();
    const logoutHandler = () =>{
    onClose();
    dispatch(logout());
  }
  return (
    <>
    <ColorModeSwitcher/>

    <Button onClick={onOpen} colorScheme={"yellow"} width="12" height={"12"} rounded="full" zIndex={'overlay'} position={"fixed"} top="6" left="6">
      <RiMenu5Fill/>
    </Button>

{/* Drawer start from here   onClose define krne pr window k kisi bhi place pr click krne pr ye Drawer close ho jata hai  */}
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>

{/* Drawer Overlay - ye Drawer k back wale part ko blur kr dega */}
     <DrawerOverlay backdropFilter={'blur(3px)'}/>
     <DrawerContent>
       <DrawerHeader borderBottomWidth={'1px'}>
         course Bundler
       </DrawerHeader>
       <DrawerBody>

{/* Link button  - ye component upper define kra gya hai        */}
      <VStack spacing={'4'} alignItems="flext-start">
        <LinkButton onClose={onClose} url="/" title="Home"/>
        <LinkButton onClose={onClose} url="/courses" title="Browse All Courses"/>
        <LinkButton onClose={onClose} url="/request" title="Rrequest a Course"/>
        <LinkButton onClose={onClose} url="/contact" title="Contact us"/>
        <LinkButton onClose={onClose} url="/About" title="About"/>
      </VStack>

 {/* authentication here      */}
      <HStack justifyContent={"space-evenly"} position="absolute" bottom={"2rem"} width="80%">
      {isAuthenticated ? (<>
      <VStack>
        <HStack>
        <Link onClick={onClose} to="/profile"><Button variant={'ghost'} colorScheme={'yellow'}>Profile</Button></Link>
        <Button variant={'ghost'} onClick={logoutHandler}>
          <RiLogoutBoxLine/>
          Logout</Button>
          </HStack>
          {user && user.role === 'admin' && (
            <Link onClick={onClose} to="/admin/dashboard">
              <Button colorScheme={'purple'} variant="ghost"> 
                <RiDashboardFill style={{margin:'4px'}}/>
                Dashboard
              </Button>
            </Link>
          )}
      </VStack>
          </>):(
        <>
        <Link onClick={onClose} to="/login"><Button colorScheme={'yellow'}>Login</Button></Link>
        <p>OR</p>
        <Link onClick={onClose} to="/register"><Button colorScheme={'yellow'}>Sign Up</Button></Link>
        </>
      )}
      </HStack>
       </DrawerBody>
     </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header


