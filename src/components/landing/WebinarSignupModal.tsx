import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BeehiivSubscribeForm from "./BeehiivSubscribeForm";

interface WebinarSignupModalProps {
  variant?: "primary" | "secondary";
  buttonText?: string;
}

const WebinarSignupModal = ({ 
  variant = "primary", 
  buttonText = "Watch The FREE Training Now" 
}: WebinarSignupModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonClass = variant === "primary" 
    ? "btn-primary-cta" 
    : "btn-secondary-cta";

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={buttonClass}
        aria-label={buttonText}
      >
        {buttonText}
        <ArrowRight className="w-6 h-6" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[620px] p-0 overflow-hidden bg-transparent border-none shadow-none">
          <DialogHeader className="sr-only">
            <DialogTitle>Sign Up for Free Webinar</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center">
            <BeehiivSubscribeForm />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WebinarSignupModal;
