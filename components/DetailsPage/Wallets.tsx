import {
  HStack,
  Icon,
  Text,
  Button,
  Card,
  Center,
  Container,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineWallet } from "react-icons/ai";
import { MdCheckCircle } from "react-icons/md";
import { BsNewspaper, BsArrowRight } from "react-icons/bs";

export default function Wallets() {
  return (
    <>
      <Container w="full">
        <Card w="400px" bg="#282828B2" px="15px" h="200px">
          <HStack gap="0" pt="30px" pb="15px" fontWeight={700}>
            <Center>
              <Text fontSize="16px" color="white" px="1">
                Wallets and Contracts
              </Text>
            </Center>
          </HStack>
          <HStack color="white" w="full" justifyContent="space-between">
            <Icon as={AiOutlineWallet} />
            <Stack direction="column" spacing="0" w="50%" pb="25px">
              <Text fontSize="10px" textAlign="left">
                Main Wallet
              </Text>
              <Text fontSize="13px">6d98y76Z73...AtUPj</Text>
            </Stack>
            <HStack color="orange" border="1px" borderRadius="8px" p="1">
              {/* <Icon as={MdCheckCircle} /> */}
              <Text fontSize="13px">Pending</Text>
            </HStack>
          </HStack>
          <HStack color="white" w="full" justifyContent="space-between">
            <Icon as={BsNewspaper} />
            <Stack direction="column" spacing="0" w="50%">
              <Text fontSize="10px" textAlign="left">
                Contract
              </Text>
              <Text fontSize="13px">3J98t1WpEZ73...WrN</Text>
            </Stack>
            <HStack color="orange" border="1px" borderRadius="8px" p="1">
              {/* <Icon as={MdCheckCircle} /> */}
              <Text fontSize="13px">Pending</Text>
            </HStack>
          </HStack>
          {/* <HStack gap="0" pt="30px" pb="15px" fontWeight={700}>
              <Center>
                <Text fontSize="10px" color="white" px="1">
                  View More
                </Text>
                <Icon color="white" px="0" as={BsArrowRight} />{" "}
              </Center>
            </HStack> */}
        </Card>{" "}
      </Container>
      ;
    </>
  );
}
