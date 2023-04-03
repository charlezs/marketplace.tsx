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

export default function ShareInfo() {
  return (
    <Container>
      <Card w="300px" bg="#282828B2" px="15px">
        <HStack gap="0" pt="30px" pb="15px" fontWeight={700}>
          <Center>
            <Icon color="white" px="0" as={RiShareForwardLine} />{" "}
            <Text fontSize="md" color="white" px="1">
              Share Certification
            </Text>
          </Center>
        </HStack>
        <Text size="md" pb="18px" color="white">
          Share your Shield certification to build trust with your communities!
        </Text>
        <Center>
          <HStack pb="30px" w="full" justifyContent="space-between">
            <a
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fcertification.getshield.xyz/hahawallet%2F&text=Just%20got%20Certified%20by%20@Shield_xyz!%20Check%20it%20out%20here:%20&hashtags=Certified%2CSecure%20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button p="15px" size="xs" bg="#3575E2" color="white">
                Share to Twitter
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=certification.getshield.xyz%2Fhahawallet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button p="15px" size="xs" bg="#3575E2" color="white">
                Share to LinkedIn
              </Button>
            </a>
          </HStack>
        </Center>
      </Card>{" "}
    </Container>
  );
}
