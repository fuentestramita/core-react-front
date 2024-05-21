import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Input } from "@chakra-ui/react";
import { StyledInput } from "../../../components/input";
import { useLoginMutation } from "../../../hooks/use-login";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
const ValidationCodeModal = ({ isOpen, closeModal, user, onError }: { isOpen: boolean; closeModal: () => void; user: Optional<string>; onError: (string) => void }) => {
  const mutation = useLoginMutation({ onError });
  const [code, setCode] = React.useState("");
  const initialRef = React.useRef(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleSubmit = () => {
    mutation.mutation({
      user: user,
      code: code,
    });
  };
  return (
    <Modal isOpen={isOpen} onClose={closeModal} size="xl" isCentered initialFocusRef={initialRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="x-large">Ingresa el código que enviamos al correo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <StyledInput ref={initialRef} size="lg" width="100%" type="text" value={code} onChange={(e) => handleChange(e)} placeholder="Ejemplo: 1111111111" />
        </ModalBody>

        <ModalFooter>
          <Button type="submit" colorScheme="blue" isLoading={mutation.isLoading} mr="10px" onClick={handleSubmit} size="lg" rightIcon={<FaArrowRight />}>
            Ingresar
          </Button>
          <Button colorScheme="blue" mr={3} onClick={closeModal} size="lg" variant="outline">
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ValidationCodeModal;
