import { Search2Icon, LinkIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  Input,
  InputRightAddon,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";

export default function Search() {
  return (
    <Box px="30">
      <InputGroup size="lg" textColor="white" pb="66px">
        <InputLeftElement
          display="flex"
          alignItems="center"
          pointerEvents="none"
        >
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input type="value" placeholder="Search Projects" />
        <InputRightAddon bg="#3575E2" w="10%">
          Search
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
}
