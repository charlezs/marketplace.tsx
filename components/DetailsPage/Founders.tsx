import {
  HStack,
  Icon,
  Text,
  Button,
  Card,
  Center,
  Container,
  Stack,
  Avatar,
  Link,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { BsTwitter, BsLinkedin, BsArrowRight } from "react-icons/bs";

export default function Founders() {
  return (
    <>
      <Container w="full">
        <Card w="400px" bg="#282828B2" px="15px" h="200px">
          <HStack gap="0" pt="30px" pb="15px" fontWeight={700}>
            <Center>
              <Text fontSize="16px" color="white" px="1">
                Founders/Team{" "}
              </Text>
            </Center>
          </HStack>
          <HStack
            color="white"
            w="full"
            justifyContent="space-between"
            pb="15px"
          >
            <Avatar size="sm" name="Mu Li" src="./Mu.png" />
            <HStack direction="row" w="full">
              <Center>
                <Text fontSize="12px" w="full">
                  Mu Li{" "}
                  <Link href="https://twitter.com/muli2048" isExternal>
                    <Icon
                      color="#1DA1F2
  "
                      as={BsTwitter}
                    />
                  </Link>{" "}
                  <Link href="https://www.linkedin.com/in/muli2048/" isExternal>
                    <Icon
                      color="#1DA1F2
  "
                      as={BsLinkedin}
                    />
                  </Link>
                </Text>
              </Center>
            </HStack>
            <HStack>
              <Text color="#03DA25" fontSize="12px">
                Verified
              </Text>
              <Icon as={MdCheckCircle} color="#03DA25" />
            </HStack>
          </HStack>
          <HStack color="white" w="full" justifyContent="space-between">
            <Avatar size="sm" name="0xYungGucci" src="./0x.png" />
            <HStack direction="row" w="full">
              <Center>
                <Text fontSize="12px" w="full">
                  Max Taylor{" "}
                  <Link href="https://twitter.com/0xYungGucci" isExternal>
                    <Icon
                      color="#1DA1F2
  "
                      as={BsTwitter}
                    />
                  </Link>{" "}
                  <Link
                    href="https://www.linkedin.com/in/max-taylor-791aa8170/"
                    isExternal
                  >
                    <Icon
                      color="#1DA1F2
  "
                      as={BsLinkedin}
                    />
                  </Link>
                </Text>
              </Center>
            </HStack>
            <HStack>
              <Text color="#03DA25" fontSize="12px">
                Verified
              </Text>
              <Icon as={MdCheckCircle} color="#03DA25" />
            </HStack>{" "}
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
