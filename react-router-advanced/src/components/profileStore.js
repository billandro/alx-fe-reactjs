import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

const useProfileStore = create(persist((set) => ({
    profiles: [],
    addProfile: (profile) => {
        try {
            set((state) => ({ profiles: [...state.profiles, profile] }))
        } catch (error) {
            console.error("Failed adding new profile", error)
        }
    },
    removeProfile: (id) => {
        try {
            set((state) => ({ profiles: state.profiles.filter(item => item.id != id) }))
        } catch (error) {
            console.error("Failuire deleting profile", error)
        }
    },
}),
{
    name: "profile store",
    storage: createJSONStorage(() => localStorage),
},
));

export default useProfileStore;