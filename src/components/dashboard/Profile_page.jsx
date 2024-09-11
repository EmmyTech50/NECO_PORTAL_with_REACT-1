import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, Search2Icon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react';
import Logo from '../../assets/neco_logo.svg';
import Dashboard from '../../assets/dashboard.svg';
import MyT from '../../assets/mytoken.svg';
import CheckR from '../../assets/checkresult.svg';
import ResultH from '../../assets/resulthistory.svg';
import Transaction from '../../assets/transaction.svg';
import Profile from '../../assets/profile.svg';

function Profile_page() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box>
      <Grid h="100vh" templateRows="1fr" templateColumns="1fr" width="100%">
        <GridItem h="100vh" width="100%">
          <Box mt={10}>
            <Heading as="h6" size="md" px={4}>
              Profile
            </Heading>
          </Box>

          <Box mx={4} mt="40px">
            <Box>Profile Information</Box>
            <Box borderBottom="2px solid lavender" mt="20px"></Box>

            <Box>
              <Text>Full Name</Text>
              <Flex
                wrap="wrap"
                justifyContent="center"
                alignItems="center"
                mx="20px"
                gap={2}
              >
                <Input
                  variant="filled"
                  placeholder="Sur Name"
                  w={['100%', '141px']}
                  h="50px"
                />
                <Input
                  variant="filled"
                  placeholder="Middle Name"
                  w={['100%', '145px']}
                  h="50px"
                />
                <Input
                  variant="filled"
                  placeholder="Last Name"
                  w={['100%', '144px']}
                  h="50px"
                />
              </Flex>
              <Box borderBottom="2px solid lavender" mt="20px"></Box>
            </Box>

            <Box>
              <Text>Email</Text>
              <Flex justifyContent="center" alignItems="center" mx="20px">
                <Input
                  variant="filled"
                  placeholder="emmagospelnews@gmail.com"
                  w={['100%', '450px']}
                  h="50px"
                  mx="10px"
                />
              </Flex>
              <Box borderBottom="2px solid lavender" mt="20px"></Box>
            </Box>

            <Box>
              <Text>Phone Number</Text>
              <Flex justifyContent="center" alignItems="center" mx="20px">
                <Input
                  variant="filled"
                  placeholder="09136852845"
                  w={['100%', '450px']}
                  h="50px"
                  mx="10px"
                />
              </Flex>

              <Heading as="h6" size="md" mb="5px">
                Change Password
              </Heading>
              <Text>You can change your password here</Text>
              <Box borderBottom="2px solid lavender" mt="20px"></Box>
            </Box>

            <Box>
              <Text>Current Password</Text>
              <Flex justifyContent="center" alignItems="center" mx="20px">
                <InputGroup size="md" variant="filled" w={['100%', '450px']} h="50px" mx="10px">
                  <Input type={show ? 'text' : 'password'} placeholder="Enter password" />
                  <InputRightElement width="4.5rem">
                    <Button size="sm" onClick={handleClick}>
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
              <Box borderBottom="2px solid lavender" mt="20px"></Box>
            </Box>

            <Box>
              <Text>New Password</Text>
              <Flex justifyContent="center" alignItems="center" mx="20px">
                <InputGroup size="md" variant="filled" w={['100%', '450px']} h="50px" mx="10px">
                  <Input type={show ? 'text' : 'password'} placeholder="Enter password" />
                  <InputRightElement width="4.5rem">
                    <Button size="sm" onClick={handleClick}>
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
              <Box borderBottom="2px solid lavender" mt="20px"></Box>
            </Box>

            <Box>
              <Text>Confirm Password</Text>
              <Flex justifyContent="center" alignItems="center" mx="20px">
                <InputGroup size="md" variant="filled" w={['100%', '450px']} h="50px" mx="10px">
                  <Input type={show ? 'text' : 'password'} placeholder="Enter password" />
                  <InputRightElement width="4.5rem">
                    <Button size="sm" onClick={handleClick}>
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
              <Box borderBottom="2px solid lavender" mt="20px"></Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Profile_page;
