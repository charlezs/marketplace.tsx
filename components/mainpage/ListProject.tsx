import {
  Container,
  Card,
  HStack,
  Center,
  Icon,
  Button,
  Text,
} from "@chakra-ui/react";
import { RiShareForwardLine } from "react-icons/ri";

export default function ListProject() {
  return (
    <Container>
      <Card w="250px" bg="#282828B2" px="15px">
        <HStack gap="0" pt="30px" pb="15px" fontWeight={700}>
          <Center>
            <Text>🚀</Text>
            <Text fontSize="md" color="white" px="1">
              {""}
              {""}List My Project
            </Text>
          </Center>
        </HStack>
        <Text size="md" pb="18px" color="white">
          Once approved your project will be listed on the shield certification
          website.
        </Text>
        <Center>
          <Button mb="30px" w="100%" size="md" bg="#3575E2" color="white">
            Sign Up for Shield
          </Button>
        </Center>
      </Card>{" "}
    </Container>
  );
}
