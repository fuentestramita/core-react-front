import { Button, Flex, Input, Text } from "@chakra-ui/react";

const Filtro = () => {
  return (
    <Flex justifyContent="space-between" width="100%">
      <Flex alignItems="center" gap="8px">
        <Text fontWeight="bold">PPU</Text>
        <Input size="sm" type="text" width="150px" />
        <Text fontWeight="bold">N° Factura</Text>
        <Input size="sm" type="text" width="150px" />
        <Text fontWeight="bold">RUT Factura</Text>
        <Input size="sm" type="text" width="150px" />
      </Flex>
      <Flex gap="8px">
        <Button>Guardar</Button>
        <Button>Nuevo</Button>
        <Button>Salir</Button>
      </Flex>
    </Flex>
  );
};

export default Filtro;
