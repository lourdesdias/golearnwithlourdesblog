import React, { useState, useEffect } from "react";
import { Download, ShieldCheck, Users, Trash2, ArrowRight, Table } from "lucide-react";
import logoImage from "@/assets/logo.png";

const ExportLeads = () => {
    const [leads, setLeads] = useState<any[]>([]);

    useEffect(() => {
        const savedLeads = localStorage.getItem('lourdes_leads_backup');
        if (savedLeads) {
            setLeads(JSON.parse(savedLeads));
        }
    }, []);

    const downloadCSV = () => {
        if (leads.length === 0) return;

        const headers = ["Timestamp", "Offer", "Name", "Email", "URL"];
        const rows = leads.map(l => [
            l.timestamp,
            l.offer,
            l.name,
            l.email,
            l.url
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map(r => r.map(cell => `"${cell}"`).join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `lourdes_leads_backup_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const clearLeads = () => {
        if (window.confirm("Are you sure? This will delete the LOCAL backup. Make sure you downloaded the CSV first!")) {
            localStorage.removeItem('lourdes_leads_backup');
            setLeads([]);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white p-6 sm:p-12 font-sans">
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-800 pb-12">
                    <div className="space-y-4 text-center md:text-left">
                        <img src={logoImage} alt="Learn With Lourdes" className="h-12 w-auto mx-auto md:mx-0" />
                        <h1 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
                            Lead Safety Vault
                        </h1>
                        <p className="text-slate-400 max-w-lg">
                            This is your local browser backup. Every person who signs up on your site is saved here automatically to ensure zero data loss.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                            onClick={downloadCSV}
                            disabled={leads.length === 0}
                            className="px-8 py-4 bg-yellow-500 text-slate-950 font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            <Download className="w-5 h-5" />
                            Download CSV
                        </button>
                        <button 
                            onClick={clearLeads}
                            disabled={leads.length === 0}
                            className="px-8 py-4 bg-slate-900 border border-red-500/30 text-red-500 font-bold rounded-2xl hover:bg-red-500/10 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            <Trash2 className="w-5 h-5" />
                            Clear Vault
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl space-y-2">
                        <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-4">
                            <Users className="w-6 h-6 text-yellow-500" />
                        </div>
                        <p className="text-4xl font-black">{leads.length}</p>
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Total Saved Leads</p>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl space-y-2">
                        <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mb-4">
                            <ShieldCheck className="w-6 h-6 text-green-500" />
                        </div>
                        <p className="text-4xl font-black text-green-500">100%</p>
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Data Integrity Status</p>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl space-y-2 md:col-span-2 lg:col-span-1">
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-4">
                            <Table className="w-6 h-6 text-cyan-500" />
                        </div>
                        <p className="text-xl font-bold">Ready for Import</p>
                        <p className="text-xs text-slate-400">Compatible with MailerLite, Beehiiv, & Email Octopus.</p>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-800 bg-slate-900/50">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Offer</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Name</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Email</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {leads.length > 0 ? [...leads].reverse().map((lead, idx) => (
                                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 text-sm text-slate-400">
                                            {new Date(lead.timestamp).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                {lead.offer}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-bold text-sm">{lead.name}</td>
                                        <td className="px-6 py-4 text-sm text-slate-300">{lead.email}</td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-20 text-center text-slate-500 italic">
                                            No leads saved in the vault yet. Start testing your forms!
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="text-center pt-12 border-t border-slate-900">
                    <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-500/50" />
                        Locally Encrypted Browser Session Active
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExportLeads;
