import { Select, Stack, Heading } from "@chakra-ui/react";

export default function OnTopWallets() {
  return (
    <Stack direction="row" justifyContent="space-between" pb="20px">
      <Heading textColor="white">312 Wallets</Heading>
      <Select
        color="white"
        bg="#282828"
        placeholder="Filer By: Wallets"
        borderRadius="10"
        borderColor="#282828"
        w="35%"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Stack>
  );
}
