import {
  HStack,
  Icon,
  Text,
  Link,
  Card,
  Center,
  Container,
  Stack,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { TbFaceId } from "react-icons/tb";
import { AiFillApple } from "react-icons/ai";
import { MdCheckCircle } from "react-icons/md";
import { BsGooglePlay, BsArrowRight } from "react-icons/bs";

export default function Product() {
  return (
    <>
      <Container w="full">
        <Card w="400px" bg="#282828B2" px="15px" h="200px">
          <HStack gap="0" pt="30px" pb="15px" fontWeight={700}>
            <Center>
              <Text fontSize="16px" color="white" px="1">
                Product Links{" "}
              </Text>
            </Center>
          </HStack>
          <HStack
            color="white"
            w="full"
            justifyContent="space-between"
            pb="25px"
          >
            <Icon as={AiFillApple} />
            <Text fontSize="12px" w="full">
              <Link
                href="https://apps.apple.com/us/app/haha-crypto-portfolio-tracker/id1591158244"
                isExternal
              >
                Apple Store
              </Link>
            </Text>
          </HStack>
          <HStack color="white" w="full" justifyContent="space-between">
            <Icon as={BsGooglePlay} />
            <Text fontSize="12px" w="full">
              <Link
                href="https://play.google.com/store/apps/details?id=com.permutize.haha"
                isExternal
              >
                Play Store
              </Link>
            </Text>
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
