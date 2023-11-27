import React from 'react';
import { Link, Heading, Container, IconButton, useColorMode, Button, Tooltip, Flex, Center, } from "@chakra-ui/react";
import { motion } from 'framer-motion';

const Header=()=>{

    const {colorMode, toggleColorMode} = useColorMode()
    
    return(				
        <Container as='header' h={{base:'10vh',md:'14vh'}} maxW="100vw" display="flex" flexDirection="row" justifyContent={'flex-start'} bg={'rgb(248, 164, 136)'} alignItems={'center'} >
                <Container display="flex"  flexDirection="center" alignItems={'center'} justifyContent={'center'} gap={{base:'2',sm:'4',md:'4',lg:'6'}} >
                    <Container display='flex' flexDirection='center' alignItems={'center'} fontSize={{base:'20',sm:'30',md:'36',lg:'46'}} color={'whitesmoke'} maxW={{base:'30',md:'50'}}></Container>
                    <Container><Heading display={'flex'} flexDirection='column' alignContent={'center'} justifyContent={'center'}   as='h1' maxW={{base:'120',sm:'160',md:'200',lg:'260'}} fontFamily={'Pacifico'} fontWeight={'800'} fontSize={{base:'16',sm:'26',md:'36',lg:'46'}} textColor={'gold'}>
                        <Link maxW={{base:'120',sm:'160',md:'200',lg:'260'}}> Formulario </Link></Heading></Container>
                </Container>
        </Container>
    );   

}

export {Header};