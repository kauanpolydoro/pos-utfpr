import { Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Board } from "../components/Board";

export default function Home() {
  return (
    <>
      <Head>
        <title>Term Clone</title>
      </Head>
      <Flex
        backgroundColor="#6e5c62"
        minHeight="100vh"
        alignItems="center"
        flexDirection="column"
      >
        <Text fontFamily="Mitr" fontWeight="600" fontSize="4vh" color="white">
          TERMO
        </Text>
        <Board />
      </Flex>
    </>
  );
}
