import {App} from './snow'
import { Input, useColorModeValue } from '@chakra-ui/react'
import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/layout";
import { Header } from "./header";
import { Footer } from "./footer";
import Styles from './css/cursor.module.css';
import Link from 'next/link';

export const Login = () => {
    const color = useColorModeValue("#006400", "#000")
  return (
    <>
    {App()}
    <Box className={Styles.cursor} bg={color} opacity="0.8" color="#ffffff">
    <Box>
      <Header />
    </Box>

    <Box  h={100}>
      </Box>
    
    <Box w="30%" m="auto">
      <Input variant='outline' placeholder='number' size='md' />
      <Input variant='outline' placeholder='password' size='md' />
    </Box>
      <Box  h={50}>
      </Box>
      <Box w="fit-content" m="auto">
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={20}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
    <GridItem colSpan={1}>
    <Box
        className={Styles.cursor2}
        boxShadow='dark-lg'
          p={10}
          w="200px"
          bg="000"
          border="1px solid #ffffff"
          borderRadius="4px"
          m="auto"
          mt="30px"
          _hover={{ border: "1px solid #FF3333", color:"#FF3333" }}
        >
          <Text fontSize="3xl" fontFamily="cursive">
          <Link href='../'>← Home</Link>
          </Text>
    </Box>
    </GridItem>
    <GridItem colSpan={1}>
        <Box
        className={Styles.cursor2}
        boxShadow='dark-lg'
          p={10}
          w="200px"
          bg="000"
          border="1px solid #ffffff"
          borderRadius="4px"
          m="auto"
          _hover={{ border: "1px solid #FF3333", color:"#FF3333" }}
        >
          <Text fontSize="3xl" fontFamily="cursive">
          <Link href='../game'>Guest mode →</Link>
          </Text>
    </Box>
    </GridItem>
      </Grid>
      </Box>
      <Box  h={200}>
      </Box>
    <Box>
      <Footer />
    </Box>
    </Box>
    </>
  );
};

export default Login;