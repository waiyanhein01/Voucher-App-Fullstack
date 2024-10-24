import { create } from "zustand";

const useProfileStore = create((set) => ({
    user: {},
    setUser: (user) => set(() => ({ user })),
    // resetProfile: () => set(() => ({ profile: {} })),
}));

export default useProfileStore;