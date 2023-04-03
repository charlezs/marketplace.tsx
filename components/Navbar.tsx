import { ReactNode } from "react";
import {
  Box,
  Flex,
  Image,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
export default function Simple() {
  return (
    <>
      <Box bg="black" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* main shield image */}
          <HStack spacing={8} alignItems={"right"}>
            <Link href="/">
              <Flex
                align={"center"}
                width={{ base: "140px", md: "auto" }}
                mr={{ base: 0, md: 2 }}
              >
                <Image src="./shield.png" height={"42px"} alt="shield logo" />
              </Flex>
            </Link>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
