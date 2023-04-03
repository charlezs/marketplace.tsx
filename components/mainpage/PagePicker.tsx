import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Stack, Box, Text, Center, Icon, Button } from "@chakra-ui/react";

export default function PagePicker() {
  return (
    <Center>
      <Stack direction="row" color="" textColor="white" pt="10">
        <Button
          size="md"
          boxSize="50px"
          bg="#282828B2"
          borderRadius="8px"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon as={ChevronLeftIcon} />
        </Button>{" "}
        <Button
          size="md"
          boxSize="50px"
          bg="#3575E2"
          borderRadius="8px"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          1
        </Button>{" "}
        <Button
          size="md"
          boxSize="50px"
          bg="#282828B2"
          borderRadius="8px"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          2
        </Button>{" "}
        <Button
          size="md"
          boxSize="50px"
          bg="#282828B2"
          borderRadius="8px"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          3
        </Button>{" "}
        <Button
          size="md"
          boxSize="50px"
          bg="#282828B2"
          borderRadius="8px"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          4
        </Button>{" "}
        <Button
          size="md"
          boxSize="50px"
          bg="#282828B2"
          borderRadius="8px"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          5
        </Button>{" "}
        <Button
          size="md"
          boxSize="50px"
          bg="#282828B2"
          borderRadius="8px"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon as={ChevronRightIcon} />
        </Button>
      </Stack>
    </Center>
  );
}
