import {
  RadioGroup,
  Radio,
  Container,
  Text,
  Stack,
  Heading,
} from "@chakra-ui/react";

export default function Filters() {
  return (
    <Container bg="#282828" h="50vh" borderRadius="8" w="15%" textColor="white">
      <Heading py="10px" fontSize="20px">
        Filters
      </Heading>
      <Stack direction="column">
        <Text fontSize="18px">Chains</Text>
        <RadioGroup defaultValue="1">
          <Stack>
            <Radio value="1">Arbitrum</Radio>
            <Radio value="2">Avalanche</Radio>
            <Radio value="3">BNB Chain</Radio>
            <Radio value="4">Cosmos</Radio>
            <Radio value="5">Cronos</Radio>
            <Radio value="6">Ethereum</Radio>
          </Stack>
        </RadioGroup>
        <Text fontSize="18px">Verified</Text>
        <RadioGroup defaultValue="1">
          <Stack>
            <Radio value="1">No</Radio>
            <Radio value="2">Yes</Radio>
          </Stack>
        </RadioGroup>
      </Stack>
    </Container>
  );
}
