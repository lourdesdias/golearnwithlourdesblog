import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import BeehiivSubscribeForm from "./BeehiivSubscribeForm";
import EmailOctopusSubscribeForm from "./EmailOctopusSubscribeForm";
import LeadSafetyForm from "./LeadSafetyForm";
import { ArrowRight } from "lucide-react";

interface SubscriptionModalProps {
    provider?: "beehiiv" | "email-octopus" | "safety-bridge";
    formId?: string;
    offerName?: string;
    buttonText?: string;
    title?: string;
    description?: string;
    variant?: "primary" | "secondary" | "ghost";
    successUrl?: string;
    successButtonText?: string;
    successDescription?: string;
    children?: React.ReactNode;
}

const SubscriptionModal = ({
    provider = "beehiiv",
    formId,
    offerName = "General Inquiry",
    buttonText = "Subscribe",
    title = "Join the Movement",
    description,
    variant = "primary",
    successUrl,
    successButtonText,
    successDescription,
    children
}: SubscriptionModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children ? children : (
                    <button
                        className={`w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${variant === "primary"
                            ? "bg-gradient-to-r from-yellow-500 to-cyan-400 text-slate-950 hover:scale-105"
                            : variant === "secondary"
                                ? "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
                                : "bg-transparent p-0 shadow-none hover:shadow-none"
                            }`}
                    >
                        {buttonText}
                        {variant !== "ghost" && <ArrowRight className="w-5 h-5" />}
                    </button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-slate-900 border-slate-800 text-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-400">
                        {title}
                    </DialogTitle>
                    {description && (
                        <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                            {description}
                        </p>
                    )}
                </DialogHeader>

                <div className="py-4">
                    {provider === "safety-bridge" ? (
                        <LeadSafetyForm 
                            offerName={offerName} 
                            successUrl={successUrl}
                            successButtonText={successButtonText}
                            successDescription={successDescription}
                        />
                    ) : provider === "beehiiv" ? (
                        <BeehiivSubscribeForm formId={formId || ""} />
                    ) : (
                        <EmailOctopusSubscribeForm formId={formId || ""} />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SubscriptionModal;
