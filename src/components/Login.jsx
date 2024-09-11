import React from 'react';
import {
  Grid,
  GridItem,
  Box,
  Heading,
  Stack,
  Text,
  HStack,
  VStack,
  FormControl,
  Input,
  Button,
  Link,
  InputRightElement,
  InputGroup,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Leftpart from './common/Leftpart';

function Login() {
  // for email
  const [input, setInput] = React.useState('');
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === '';

  // for password
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Grid
      h="100vh"
      templateRows={{ base: '1fr', md: '1fr' }}
      templateColumns={{ base: '1fr', md: '2fr 3fr' }}
      gap={0}
    >
     <GridItem
        colSpan={{ base: 1, md: 1 }}
        bg="#f0f0f0" // you can set a background color or image for the Leftpart
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Leftpart />
      </GridItem>

      <GridItem>
      
        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
          p={{ base: 4, md: 0 }}
        >
          <Box
            h={{ base: 'auto', md: '90vh' }}
            w={{ base: '90%', md: '55%' }}
            mt={{ base: 0, md: '5vh' }}
            p={{ base: 4, md: 2 }}
            bg={{ base: 'gray.50', md: 'white' }}
            borderRadius="md"
            boxShadow="md"
          >
            <VStack spacing={4}>
              <Heading fontSize={{ base: 'xl', md: '2xl' }}>
                Login to your account
              </Heading>
              <Heading as="h5" size={{ base: 'sm', md: 'md' }} textAlign="center">
                Login with your email address & password.
              </Heading>

              <FormControl isInvalid={isError} mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={input}
                  onChange={handleInputChange}
                  w="100%"
                  variant="filled"
                  placeholder="example@gmail.com"
                />
                {!isError ? (
                  <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    variant="filled"
                    type={show ? 'text' : 'password'}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl mt={4}>
                <Button bg="#07bc0c88" w="100%" color="white">
                  Login
                </Button>
              </FormControl>

              <Link href="/Forgot_Password" color="green" fontSize="md" alignSelf="flex-end">
                Forgot Password
              </Link>

              <FormControl mt={2}>
                <Button border="2px" borderColor="blue" w="100%">
                  <Link href="/login" color="blue">
                    Check Result Here
                  </Link>
                </Button>
              </FormControl>

              <HStack>
                <Text>Don't have an account?</Text>
                <Link href="/Create_account" color="green" fontSize="md">
                  Create account here
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Stack>
      </GridItem>
    </Grid>
  );
}

export default Login;
