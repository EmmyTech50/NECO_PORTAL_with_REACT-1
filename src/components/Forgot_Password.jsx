import React from 'react';
import {
  Grid,
  Box,
  Image,
  Heading,
  Text,
  FormControl,
  Input,
  Link,
  Button,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  Stack,
  VStack,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { ArrowBackIcon, LockIcon } from '@chakra-ui/icons';

function Forgot_Password() {
  // State for email input
  const [input, setInput] = React.useState('');
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === '';

  return (
    <Flex
      align="center"
      justify="center"
      minH="100vh"
      p={[4, 6]}
      bg="gray.50"
    >
      <Box
        w={['90%', '400px']}
        p={[4, 6]}
        bg="white"
        borderRadius="md"
        boxShadow="md"
      >
        <VStack spacing={4} textAlign="center">
          <IconButton
            icon={<LockIcon />}
            variant="outline"
            colorScheme="green"
            aria-label="Lock Icon"
          />

          <Heading as="h4" size="md">
            Reset Password
          </Heading>

          <Text fontSize="sm">
            Enter the email associated with your account, and we will send an
            email with instructions to reset your password.
          </Text>
        </VStack>

        {/* Email Input Field */}
        <FormControl isInvalid={isError} mt={6}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={input}
            onChange={handleInputChange}
            w="100%"
            variant="filled"
            placeholder="emmagospelnews@gmail.com"
          />
          {!isError ? (
            <FormHelperText>
              Enter the email you'd like to receive the instructions on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>

        {/* Reset Password Button */}
        <Button
          colorScheme="green"
          w="100%"
          mt={4}
          variant="solid"
        >
          <Link href="#" color="white">
            Reset Password
          </Link>
        </Button>

        {/* Back to Login Link */}
        <Flex mt={4} align="center" justify="center">
          <ArrowBackIcon color="green.500" />
          <Link href="/login" color="green.500" ml={2}>
            Back To Login
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Forgot_Password;
