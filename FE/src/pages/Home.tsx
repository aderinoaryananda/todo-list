import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      justifyItems={"center"}
      justifySelf={"center"}
      alignContent={"center"}
      alignItems={"center"}
      alignSelf={"center"}
    >
      <Box p="1em" textAlign={"center"}>
        <Heading mb="1em">To-Do List</Heading>
        <Box
          display="flex"
          flexDirection={"column"}
          bgColor={"yellow"}
          p="1em"
          gap={"1em"}
        >
          <Text>Write your list below !</Text>
          <Input bgColor={"whitesmoke"} />
          <Button
            bgColor={"green.400"}
            _hover={{ bgColor: "red.500" }}
            textDecor={"underline"}
            textShadow={"1px 1px 1px white"}
          >
            <em>Submit</em>
          </Button>
        </Box>
      </Box>

      <Box bgColor={"yellow"} p="1em">
        <Heading mb="0.4em">Here is your list</Heading>
        <Box bgColor={"whitesmoke"} py={"0.5em"} px="2em">
          <ul style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <li>
              <Box
              p='0.6em'
              bgColor={'gray.300'}
                _hover={{
                  backgroundColor: "red",
                  textColor: "yellow",
                  textShadow: "1px 1px 1px black",
                }}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={"2em"}
              >
                <Text>List 1</Text>
                <Box
                gap={'0.4em'}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"flex-end"}
                  alignContent={"flex-end"}
                  justifyItems={"flex-end"}
                  alignItems={"flex-end"}
                  alignSelf={"flex-end"}
                >
                  <Button
                    bgColor="green.400"
                    _hover={{ bgColor: "yellow.500" }}
                    textAlign={"end"}
                    w="100px"
                    h="fit-content"
                  >
                    Edit
                  </Button>
                  <Button
                    bgColor="green.400"
                    _hover={{ bgColor: "yellow.500" }}
                    textAlign={"end"}
                    w="100px"
                    h="fit-content"
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
