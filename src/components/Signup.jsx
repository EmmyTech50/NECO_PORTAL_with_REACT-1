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
  Select,
  FormControl,
  Input,
  Button,
  Link,
  Flex,
} from '@chakra-ui/react';
import Leftpart from './common/Leftpart';

function Signup() {
  const Years = Array.from({ length: 2023 - 2000 + 1 }, (_, index) => 2000 + index);

  return (
    <Grid
      h="100vh"
      templateRows="1fr"
      templateColumns={['1fr', '1fr 4fr']}
      gap={4}
      width="100%"
    >
      {/* Left Part (Side Navigation or Information) */}
      <Leftpart />

      {/* Main Content Area */}
      <GridItem colSpan={3} bg="#fff" h="100vh">
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          h="100%"
          px={[4, 8]}
        >
          <Box w={['90%', '70%', '55%']} mt={['4vh', '5vh']} mx="auto">
            <VStack spacing={4}>
              <Heading>Check Result</Heading>
              
              {/* Examination Year Select */}
              <Select variant="filled" placeholder="Examination Year">
                {Years.map((val, index) => (
                  <option value={val} key={index}>
                    {val}
                  </option>
                ))}
              </Select>

              {/* Examination Type Select */}
              <Select variant="filled" placeholder="Examination Type">
                <option value="ssce_int">SSCE INTERNAL</option>
                <option value="ssce_ext">SSCE EXTERNAL</option>
                <option value="bece">BECE</option>
                <option value="ncee">NCEE</option>
                <option value="gifted">GIFTED</option>
              </Select>

              {/* Token Input */}
              <FormControl>
                <Input
                  type="text"
                  placeholder="Token Eg (0000 0000 0000)"
                  variant="filled"
                />
              </FormControl>

              {/* Registration Number Input */}
              <FormControl>
                <Input
                  type="text"
                  placeholder="Registration Number"
                  variant="filled"
                />
              </FormControl>

              {/* Check Result Button */}
              <FormControl>
                <Button colorScheme="green" w="100%">
                  Check Result
                </Button>
              </FormControl>

              <Text>or</Text>

              <Text fontSize="sm" textAlign="center">
                Don’t have a token to check your result? Purchase a token with
                the button below
              </Text>

              {/* Purchase Token Button */}
              <FormControl>
                <Button colorScheme="blue" w="100%">
                  <Link href="/login" color="white">
                    Purchase Token
                  </Link>
                </Button>
              </FormControl>

              {/* Login Section */}
              <HStack>
                <Text>Already have an account?</Text>
                <Link href="/login" color="blue.600">
                  Login here
                </Link>
              </HStack>

              {/* Create Account Section */}
              <VStack>
                <Link href="/Create_account" color="green.600">
                  Create Account
                </Link>
              </VStack>
            </VStack>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default Signup;
