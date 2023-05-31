import {create} from "zustand";
interface PlayerStore {
	ids: string[];
	activeId?: string;
	setId: (ids: string) => void;
	setIds: (ids: string[]) => void;
	reset: () => void;
};
const userPlayer = create<PlayerStore>((set) => ({
	ids: [],
	activeId: undefined,
	setId: (id) => set({activeId: id}),
	setIds: (ids) => set({ids}),
	reset: () => set({ids: [], activeId: undefined}),
}));
export default userPlayer;