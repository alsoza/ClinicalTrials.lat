import { BadgeCheck, Building2 } from "lucide-react";

interface StudyHeaderProps {
    nctId: string;
    title: string;
    sponsor: string;
    status: string;
}

export function StudyHeader({ nctId, title, sponsor, status }: StudyHeaderProps) {
    return (
        <div className="bg-white border-b border-slate-200 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-4 max-w-4xl">
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                {nctId}
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                {status}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                            {title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-slate-600">
                            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                <Building2 className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-slate-700">
                                    Patrocinado por: <span className="text-slate-900 font-bold">{sponsor}</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-blue-50/50 px-3 py-1.5 rounded-lg border border-blue-100/50 text-blue-700">
                                <BadgeCheck className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Verificado por CT.lat</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
