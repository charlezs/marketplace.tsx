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
            <ListItem>Founders using anti-malware software </ListItem>
          </HStack>
          <ListIcon as={MdCheckCircle} color="green.500" />
        </Stack>

        <Stack direction="row" justify="space-between" spacing="4">
          <HStack>
            <ListItem>
              Founders and staff using anti-phishing software{" "}
            </ListItem>
          </HStack>
          <ListIcon as={MdCheckCircle} color="green.500" />
        </Stack>

        <Stack direction="row" justify="space-between" spacing="4">
          <HStack>
            <ListItem>
              Founders and staff completed KYC and/or confidentiality agreements
              in last year{" "}
            </ListItem>
          </HStack>
          <ListIcon as={MdCheckCircle} color="green.500" />
        </Stack>

        <Stack direction="row" justify="space-between" spacing="4">
          <HStack>
            <ListItem>
              Founders and staff have completed any security training or
              awareness programs?{" "}
            </ListItem>
          </HStack>
          <ListIcon as={MdCheckCircle} color="green.500" />
        </Stack>
        <Stack direction="row" justify="space-between" spacing="4">
          <HStack>
            <ListItem>Full Penetration Test passed in the last year </ListItem>
          </HStack>
          <ListIcon as={MdOutlineCancel} color="red" />
        </Stack>
      </List>
    </>
  );
}
