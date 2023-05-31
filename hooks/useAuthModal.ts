import {create} from "zustand";
interface AuthModalsState {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};
const useAuthModals = create<AuthModalsState>((set) => ({
	isOpen: false,
	onOpen: () => set({isOpen: true}),
	onClose: () => set({isOpen: false}),
}));
export default useAuthModals;