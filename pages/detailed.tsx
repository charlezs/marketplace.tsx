import DetailOverview from "@/components/DetailsPage/DetailOverview";
import Founders from "@/components/DetailsPage/Founders";
import Hero from "@/components/DetailsPage/Hero";
import Product from "@/components/DetailsPage/Product";
import Wallets from "@/components/DetailsPage/Wallets";
import { Container, Stack, Flex } from "@chakra-ui/react";
import Head from "next/head";

export default function CallToActionWithIllustration() {
  return (
    <Container
      maxW="full"
      bg="black"
      pt="30px"
      px="3"
      h={{ base: "250vh", sm: "220vh", md: "150vh" }}
    >
      <Head>
        <title>HaHa Wallet Certification</title>
        <meta
          name="description"
          content="Haha Wallet prioritizes security by implementing secure server infrastructure, user authentication, and data encryption."
        />
        <link rel="icon" href="" />
      </Head>{" "}
      <Hero />
      <DetailOverview />
      <Flex flex={1} align={"center"} justify={"center"} pt="90px">
        <Stack
          w={"7xl"}
          direction={{ base: "column", md: "row" }}
          justify="space-between"
        >
          <Wallets />
          <Founders />
          <Product />
        </Stack>
      </Flex>
    </Container>
  );
}
