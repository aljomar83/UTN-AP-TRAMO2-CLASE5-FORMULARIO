import { Card, CardBody,  Heading,  Box, Container  } from "@chakra-ui/react";
import { Formulario } from "../Formulario/Formulario";

const MiCard=()=>{
   
    return(	
        <Container mt='4' mb='4'
        paddingTop={'30px'}
        paddingBottom={'30px'}
        borderRadius={'20px'}>			
            <Card 
                direction='column'
                variant='elevated' 
                webkitBoxShadow=' 0px 10px 35px 12px gold'
                mozBoxShadow=' 0px 10px 35px 12px pink'
                boxShadow=' 0px 10px 35px 12px gold' maxW='md' mx='auto'>
         
                <CardBody>
                <Heading fontFamily={'Raleway'} size='md' mb={4} as='h2' textAlign={'center'} >Formulario de registro</Heading>  
                    <Formulario/>   
                </CardBody>
            </Card> 
        </Container>
    );   

}

export {MiCard}