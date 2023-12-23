import { useState } from "react";

export function useModal() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return { modalOpen, toggleModal }
}