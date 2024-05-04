import { create } from "zustand";

const useconversation = create((set) => {
  return {
    selectedconversation: null,
    setselectconversation: (selectedconversation) =>
      set({ selectedconversation }),
    messages: [],
    setmessages: (messages) => set({ messages }),
  };
});

export default useconversation;
