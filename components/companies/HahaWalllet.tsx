import { LinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  HStack,
  Icon,
  Stack,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsShieldFillCheck } from "react-icons/bs";

export default function HahaWallet() {
  return (
    <Center>
      <Link href="/detailed" isExternal>
        <Stack
          w={{ sm: "100%", md: "800px" }}
          height="250px"
          direction={{ md: "row" }}
          bg="#282828"
          border="2px"
          borderRadius="20"
          boxShadow={"2xl"}
          p="20px"
          gap="4"
        >
          <Box>
            <Image objectFit="cover" boxSize="80px" src="./haha.png" />
          </Box>
          <Stack flex={1} flexDirection="column" pt={2} spacing="2">
            <Text
              fontSize={"13px"}
              fontFamily={"body"}
              bgGradient="linear(to-l, #90BBD4
      , #5865F2)"
              bgClip="text"
            >
              TOP 10 WALLET BY SHIELD
            </Text>

            <HStack>
              <Text fontSize="20px" color={"white"} mr="4">
                HaHa Wallet
              </Text>
              <Text
                textColor="#7D5AE2"
                fontSize="13px"
                backgroundColor="#0C0917"
                borderRadius="8px"
                p="1"
                display={{ base: "none", sm: "contents" }}
              >
                New project
              </Text>
            </HStack>

            <Stack
              direction={{ base: "column", md: "row" }}
              w={{ sm: "50%", md: "100%" }}
            >
              <HStack>
                <Text fontSize="13px" color="#BEBEBE">
                  <LinkIcon /> Ethereum
                </Text>
              </HStack>
              <HStack gap="0">
                <Center>
                  <Icon color="#03DA25" px="0" as={AiOutlineCheckCircle} />{" "}
                  <Text fontSize="13px" color="#03DA25" px="1">
                    Verified Safe
                  </Text>
                </Center>
              </HStack>
            </Stack>

            <Text fontSize="13px" color="white">
              Haha Wallet is an Ethereum wallet that offers portfolio tracking
              and investment tools for staying informed on the go. It supports a
              wide range of cryptocurrencies and exchanges, and emphasizes
              safety and security for its users.
            </Text>
          </Stack>
        </Stack>
      </Link>
    </Center>
  );
}
