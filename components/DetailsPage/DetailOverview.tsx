import { Container, Stack, HStack, Text } from "@chakra-ui/react";
import SecListOne from "./SecListOne";
import SecListTwo from "./SecListTwo";

export default function DetailOverview() {
  return (
    <Container
      maxW="7xl"
      bg="black"
      border="2px"
      borderRadius="10px"
      borderColor="white"
    >
      <Stack direction="column" w="full" justifyContent="space-between">
        <Text color="white" pb="18px" pt="27px" fontSize="20px">
          Security Overview
        </Text>
        <HStack w="full" justifyContent="space-between">
          <SecListOne />
          <SecListTwo />
        </HStack>
      </Stack>
    </Container>
  );
}
