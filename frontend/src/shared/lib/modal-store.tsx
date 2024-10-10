import { create } from "zustand";

interface ModalState {
  isOpenCallMeModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpenCallMeModal: false,
  openModal: () => set({ isOpenCallMeModal: true }),
  closeModal: () => set({ isOpenCallMeModal: false }),
}));

export default useModalStore;