import { LinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Icon,
  Center,
  Box,
  Image,
  Link,
  Stack,
  Text,
  HStack,
} from "@chakra-ui/react";

import { BsShieldFillCheck } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
export default function DetsInfo() {
  return (
    <Center>
      <Stack
        w={{ sm: "100%", md: "800px" }}
        height="250px"
        direction={{ md: "row" }}
        bg="black"
        boxShadow={"2xl"}
        padding={""}
        gap="4"
      >
        <Box>
          <Image objectFit="cover" boxSize="160px" src={"./haha.png"} />
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
          <Text fontSize={"17px"} fontFamily={"body"} color="white">
            Web3 Toolbox
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
            <Stack direction={"row"}>
              <Box
                color="#4DBDFF"
                backgroundColor="#161B1F"
                px="3"
                py="1"
                borderRadius="20px"
              >
                <HStack>
                  <Text fontSize="13px">
                    <HStack>
                      <Center>
                        <Icon color="#4DBDFF" px="0" as={BsShieldFillCheck} />
                      </Center>
                      <Text fontSize="13px">A- Shield Score</Text>
                    </HStack>
                  </Text>
                </HStack>
              </Box>
            </Stack>
          </Stack>

          <Text fontSize="13px" color="white">
            HaHa Wallet Is The Number 1 Wallet for Mobile Trading📱🧰, backed by
            Outlier Ventures
          </Text>
        </Stack>
      </Stack>
    </Center>
  );
}
