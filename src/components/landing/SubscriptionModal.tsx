import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import BeehiivSubscribeForm from "./BeehiivSubscribeForm";
import EmailOctopusSubscribeForm from "./EmailOctopusSubscribeForm";
import { ArrowRight } from "lucide-react";

interface SubscriptionModalProps {
    provider?: "beehiiv" | "email-octopus";
    formId: string;
    buttonText: string;
    title?: string;
    description?: string;
    variant?: "primary" | "secondary";
}

const SubscriptionModal = ({
    provider = "beehiiv",
    formId,
    buttonText,
    title = "Join the Movement",
    description,
    variant = "primary"
}: SubscriptionModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    className={`w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${variant === "primary"
                        ? "bg-gradient-to-r from-yellow-500 to-cyan-400 text-slate-950 hover:scale-105"
                        : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
                        }`}
                >
                    {buttonText}
                    <ArrowRight className="w-5 h-5" />
                </button>
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
                    {provider === "beehiiv" ? (
                        <BeehiivSubscribeForm formId={formId} />
                    ) : (
                        <EmailOctopusSubscribeForm formId={formId} />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SubscriptionModal;
