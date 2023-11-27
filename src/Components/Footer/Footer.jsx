import React from 'react';
//import './Footer.css'; 
import { Box, Container, Link , Text} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram  } from '@fortawesome/free-brands-svg-icons' 
import { faCopyright  } from '@fortawesome/free-regular-svg-icons'
import {motion} from 'framer-motion'
const Footer=()=>{

    return(				
        <Container as='footer' h="6vh" maxW="100vw" display="flex" flexDirection="row" 
            justifyContent={"space-around"} bg={'rgb(248, 164, 136)'}
            alignItems={'center'} fontSize={{base:'10',sm:'12',md:'14',lg:'16'}}>
                <Container fontFamily={'Raleway'} display="flex" minW={{base:'180', sm:'200' , md:'250'}} maxW={{base:'200', sm:'250', md:'300'}} gap={{base:'1', md:'3'}} color={'black'}>
                    <Text>{<strong><FontAwesomeIcon icon={faCopyright} /> Copyright </strong>}</Text><Text><motion.div whileHover={{ scale: 1.15 }}><Link _hover={{color:'gold', textDecoration:'none'}}>{<strong> A.M. PROYECTOS </strong>}</Link></motion.div></Text>
                
                </Container>
                <Container display="flex" flexDirection="row" justifyContent={'center'} 
                alignItems={'center'} maxW={'100'}>
                    <motion.div whileHover={{ scale: 1.1 }}><Link p='2' color={'black'}>
                        <FontAwesomeIcon icon={faFacebook}  fontSize={'18'} /></Link> </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}><Link p='2' color={'black'} >
                        <FontAwesomeIcon icon={faInstagram}  fontSize={'18'}/></Link> </motion.div>
                    </Container>  
        </Container> 
    );   

}

export {Footer};