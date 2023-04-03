import {
  Stack,
  HStack,
  Icon,
  Text,
  Box,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { MdCheckCircle, MdOutlineCancel } from "react-icons/md";

export default function SecList() {
  return (
    <>
      <List
        fontSize={{ sm: "10x", md: "13px" }}
        fontWeight="500"
        color="white"
        spacing="20px"
        px="30px"
        pb="56px"
        maxW="full"
      >
        <Stack direction="row" justify="space-between" spacing="4">
          <HStack>
            <ListItem>Smart contract audit completed </ListItem>
          </HStack>
          <ListIcon as={MdOutlineCancel} color="red" />
        </Stack>

        <Stack direction="row" justify="space-between" spacing="4">
          <HStack>
            <ListItem>Founders using 2FA across all infrastructure </ListItem>
          </HStack>
          <ListIcon as={MdCheckCircle} color="green.500" />
        </Stack>

        <Stack direction="row" justify="space-between" spacing="4">
          <HStack>
            <ListItem>Founders using 2FA across all social platforms </ListItem>
          </HStack>
          <ListIcon as={MdCheckCircle} color="green.500" />
        </Stack>

        <Stack direction="row" justify="space-between" spacing="4">
          <HStack>
            <ListItem>Discord server protections </ListItem>
          </HStack>
          <ListIcon as={MdCheckCircle} color="green.500" />
        </Stack>
      </List>
    </>
  );
}
