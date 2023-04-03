import {
  Container,
  Box,
  Stack,
  Center,
  Heading,
  Text,
  Divider,
  VStack,
} from "@chakra-ui/react";
import HahaWallet from "@/components/companies/HahaWalllet";
import MMWallet from "@/components/companies/MetamaskWallet";
import RainWallet from "@/components/companies/RainbowWallet";
import CastleWallet from "@/components/companies/CastleWallet";
import ListProject from "@/components/mainpage/ListProject";
import Filters from "@/components/mainpage/Filters";
import OnTopWallets from "@/components/mainpage/Heading";
import Head from "next/head";
import PagePicker from "@/components/mainpage/PagePicker";
import Search from "@/components/mainpage/Search";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shield Marketplace</title>
        <meta
          name="description"
          content="The Marketplace for Shield Certified Projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="100%" h="230vh" bg="black">
        <Stack direction="column" maxW="4xl" pb="40px" pt="170px" px="30">
          <Heading textColor="white" fontSize="50px" pb="8px">
            View how safe your favorite web3 projects are
          </Heading>
          <Text textColor="white" fontSize="16px">
            We provide detailed reports on the security of web3 projects,
            including the potential risks associated with their use. Stay
            up-to-date on the latest securityupdates and trends to ensure your
            web3 projects are as safe as possible.
          </Text>
        </Stack>

        <Search />

        <Stack
          direction="row"
          borderTop="2px"
          pt="66px"
          borderColor="white"
          px="30"
        >
          <Filters />

          <Box>
            <OnTopWallets />
            <VStack gap="20px">
              <HahaWallet />
              <MMWallet />
              <RainWallet />
              <CastleWallet />
            </VStack>
          </Box>
          <Box>
            <ListProject />
          </Box>
        </Stack>
        <Center>
          <PagePicker />
        </Center>
      </Container>
    </>
  );
}
