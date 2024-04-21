"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { usePracticeModal } from "@/store/use-practice-modal";
import { Button } from "../ui/button";

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);

  const { isOpen, close } = usePracticeModal();

  // the following HAS TO BE ADDED to remove the possibility of a hydration error
  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={close}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image
              src="/heart.svg"
              alt="heart"
              height={100}
              width={100}
            />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Practice lesson
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Use practice lessons to regain hearts and points. You cannot lose
            hearts or points in practice lessons.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="primary"
              className="w-full"
              size="lg"
              onClick={close}
            >
              Start Practicing
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
