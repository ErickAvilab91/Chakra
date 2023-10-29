import { Box, Button, Heading, Stack } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bgImage="url('https://i.pinimg.com/736x/55/78/bb/5578bb70d5a0b6177f84ae68aa5fd458.jpg')" bgSize="cover" color="white">
      <Stack direction={["column", "row"]} p={50} spacing={400} align="center">
        <Heading size="lg">DOMINA EL TERRENO</Heading>
        <Button colorScheme="teal">VER DETALLES</Button>
        <Button colorScheme="teal">VER VIDEO</Button>
      </Stack>
    </Box>
  
  );
};

export default Header;
