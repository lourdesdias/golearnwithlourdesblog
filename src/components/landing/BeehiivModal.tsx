import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import BeehiivSubscribeForm from "./BeehiivSubscribeForm";
import { ArrowRight } from "lucide-react";

interface BeehiivModalProps {
    formId: string;
    buttonText: string;
    title?: string;
    variant?: "primary" | "secondary";
}

const BeehiivModal = ({
    formId,
    buttonText,
    title = "Join the Movement",
    variant = "primary"
}: BeehiivModalProps) => {
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
                </DialogHeader>
                <div className="py-4">
                    <BeehiivSubscribeForm formId={formId} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BeehiivModal;
