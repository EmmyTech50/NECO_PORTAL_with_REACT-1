import React from 'react';
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from '@chakra-ui/react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/neco_logo.svg';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Dashboard from '../../assets/dashboard.svg';
import MyT from '../../assets/mytoken.svg';
import Profile from '../../assets/profile.svg';
import CheckR from '../../assets/checkresult.svg';
import ResultH from '../../assets/resulthistory.svg';
import Transaction from '../../assets/transaction.svg';

function DashboardHome() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const Logout = () => {
    navigate('/');
  };

  return (
    <Box>
      <Grid
        h="100vh"
        templateRows="1fr"
        templateColumns={['1fr', '1fr 4fr']}
        gap={4}
        width="100%"
      >
        <GridItem h="100vh" bg="#51b55f" px={4}>
          <Box>
            <Stack spacing={4}>
              <Box py={4}>
                <Image src={Logo} />
              </Box>

              <HStack py={4}>
                <Link to="/app/home">
                  <Image src={Dashboard} />
                </Link>
                <Link to="/app/home" color="white">
                  Dashboard
                </Link>
              </HStack>

              <HStack py={4}>
                <Link to="/app/my-token">
                  <Image src={MyT} />
                </Link>
                <Link to="/app/my-token" color="white">
                  MyToken
                </Link>
              </HStack>

              <HStack py={4} onClick={onOpen} style={{ cursor: 'pointer' }}>
                <Image src={CheckR} />
                <Text color="white">Check Result</Text>
              </HStack>

              <HStack py={4}>
                <Link to="/app/result_history">
                  <Image src={ResultH} />
                </Link>
                <Link to="/app/result_history" color="white">
                  Result History
                </Link>
              </HStack>

              <HStack py={4}>
                <Link to="/app/transaction">
                  <Image src={Transaction} />
                </Link>
                <Link to="/app/transaction" color="white">
                  Transaction
                </Link>
              </HStack>

              <HStack py={4}>
                <Link to="/app/profile">
                  <Image src={Profile} />
                </Link>
                <Link to="/app/profile" color="white">
                  Profile
                </Link>
              </HStack>
            </Stack>
          </Box>
        </GridItem>

        <GridItem h="100vh" width="100%" colSpan={4}>
          <Flex
            height={16}
            bg="lavender"
            px={4}
            justifyContent="space-between"
            alignItems="center"
            flexDirection={['column', 'row']}
          >
            <Text>RESULT PORTAL</Text>
            <Menu>
              <MenuButton bgColor="lavender" as={Button} rightIcon={<ChevronDownIcon />}>
                Onogwu Emmanuel
                <br />
                emmagospelnews@gmail.com
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/app/profile">Profile</Link>
                </MenuItem>
                <MenuItem onClick={Logout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>

          <HStack py={4}>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <Heading as="h4" size="md">
                    Check Result
                  </Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Box>
                    <Text fontSize="15px">
                      Each token can be used with only one result for a specific
                      <br />
                      number of views
                    </Text>
                    <FormControl mt="10px">
                      <FormLabel>Token Number</FormLabel>
                      <Input
                        type="Number"
                        placeholder="Token eg(0000 0000 0000)"
                        variant="filled"
                      />
                      <FormLabel>Examination Number</FormLabel>
                      <Input type="Number" placeholder="Registration Number" variant="filled" />
                      <FormLabel>Examination Year</FormLabel>
                      <Input type="Number" placeholder="Examination Year" variant="filled" />
                      <FormLabel>Examination Type</FormLabel>
                      <Input type="Text" placeholder="Examination Type" variant="filled" />
                    </FormControl>
                  </Box>
                </ModalBody>

                <ModalFooter>
                  <Stack spacing={4} width="100%">
                    <HStack>
                      <Button
                        width="100%"
                        variant="outline"
                        colorScheme="green"
                        onClick={onClose}
                      >
                        Cancel
                      </Button>
                      <Button width="100%" bg="#51b55f" color="white">
                        Check Result
                      </Button>
                    </HStack>
                  </Stack>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </HStack>

          {/* This is where the children of this route would load */}
          <Outlet />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default DashboardHome;
