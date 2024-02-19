import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useStore } from "@/hooks/use-pro-modal";
import { CheckCircle2, ShieldCheckIcon } from "lucide-react";

const ProModal = () => {
  const { isOpen, onClose } = useStore();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-50 px-4 py-8 text-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl text-indigo-800 font-bold mb-2">
            Upgrade Geniuswriter
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-700 text-justify">
            Unlock unlimited generations and access advanced features by
            upgrading to our Pro version today!
          </DialogDescription>
        </DialogHeader>
        <div className="mt-8 flex justify-center">
          <button className="bg-indigo-600  focus:border-0   text-white px-6 py-3 rounded-[.4rem] hover:bg-indigo-500">
            Upgrade to pro
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
