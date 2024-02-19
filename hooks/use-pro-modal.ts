import { create } from "zustand";

type SubscriptionType = "year" | "month";

type Store = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  subscriptionType: SubscriptionType ;
  setSubscriptionType : (subscriptionType : SubscriptionType)=> void
};


export const useStore = create<Store>()((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  subscriptionType: 'month',
  setSubscriptionType: (subscriptionType) => set({ subscriptionType }),
}));
