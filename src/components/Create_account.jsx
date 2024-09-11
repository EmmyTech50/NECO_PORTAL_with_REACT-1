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
  SimpleGrid,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Leftpart from './common/Leftpart';

function Create_account() {
  // for password visibility toggle
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  // User inputs state
  const [fname, setFname] = React.useState('');
  const [mdname, setMdName] = React.useState('');
  const [lname, setLname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPassword] = React.useState('');

  const isError = '';

  return (
    <Grid
      h="100vh"
      templateRows={{ base: 'repeat(2, 1fr)', md: '1fr' }} // stack on mobile, side by side on desktop
      templateColumns={{ base: '1fr', md: '2fr 3fr' }} // left part 2/5, form 3/5 on desktop
      gap={0}
    >
      {/* Left section */}
      <GridItem
        colSpan={{ base: 1, md: 1 }}
        bg="#f0f0f0" // you can set a background color or image for the Leftpart
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Leftpart />
      </GridItem>

      {/* Form section */}
      <GridItem
        colSpan={{ base: 1, md: 1 }}
        bg="#fff"
        h={{ base: 'auto', md: '100vh' }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={{ base: 4, md: 0 }}
      >
        <Stack display="flex" justifyContent="center" alignItems="center" w="100%" p={{ base:15,md:10}}>
          <Box
            w={{ base: '90%', md: '75%' }}
            h={{ base: 'auto', md: '95vh' }}
            margin="auto"
            mt={{ base: 0, md: '5vh' }}
            p={{ base: 4, md: 6 }}
            bg={{ base: 'gray.50', md: 'white' }}
            borderRadius="md"
            boxShadow="md"
          >
            <VStack spacing={4}>
              <Heading fontSize={{ base: 'xl', md: '2xl' }} textAlign="center">
                Create a new account
              </Heading>
              <Heading as="h5" size={{ base: 'sm', md: 'md' }} textAlign="center">
                Create an account by filling the information below
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} >
                <FormControl isInvalid={isError}>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    variant="filled"
                    placeholder="First Name"
                  />
                  {!isError ? '' : <FormErrorMessage>First Name is required.</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={isError}>
                  <FormLabel>Middle Name</FormLabel>
                  <Input
                    type="text"
                    value={mdname}
                    onChange={(e) => setMdName(e.target.value)}
                    variant="filled"
                    placeholder="Middle Name"
                  />
                  {!isError ? '' : <FormErrorMessage>Middle Name is required.</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={isError}>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    variant="filled"
                    placeholder="Last Name"
                  />
                  {!isError ? '' : <FormErrorMessage>Last Name is required.</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={isError}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="filled"
                    placeholder="example@gmail.com"
                  />
                  {!isError ? '' : <FormErrorMessage>Email is required.</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={isError}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    variant="filled"
                    placeholder="080--"
                  />
                  {!isError ? '' : <FormErrorMessage>Phone number is required.</FormErrorMessage>}
                </FormControl>

                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      variant="filled"
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      variant="filled"
                      type={show ? 'text' : 'password'}
                      placeholder="Confirm password"
                      value={confirmPass}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </SimpleGrid>

              <Button bg="#07bc0c88" w="100%" color="white">
                Create Account
              </Button>

              <Button border="2px" borderColor="blue" w="100%" mb={10}>
                <Link href="/create-account" color="blue">
                  Check Result Here
                </Link>
              </Button>

              <HStack>
                <Text>Don't have an account?</Text>
                <Link href="/login" color="#07bc0c88" fontSize="md">
                  Login Here
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Stack>
      </GridItem>
    </Grid>
  );
}

export default Create_account;
