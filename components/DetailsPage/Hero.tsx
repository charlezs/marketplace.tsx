import { Container, Flex, Stack } from "@chakra-ui/react";
import DetsInfo from "./DetsInfo";
import ShareInfo from "./ShareInfo";

export default function Hero() {
  return (
    <>
      <Container maxW="" p="0">
        <Flex flex={1} align={"center"} justify={"center"}>
          <Stack
            w={"6xl"}
            direction={{ base: "column", md: "row" }}
            justify="space-between"
          >
            <DetsInfo />
            <ShareInfo />
          </Stack>
        </Flex>
      </Container>
    </>
  );
}
