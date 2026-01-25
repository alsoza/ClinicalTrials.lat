"use client";

import { MapPin, Activity } from "lucide-react";
import Link from "next/link";

interface StudyCardProps {
    nctId: string;
    title: string;
    condition: string;
    locations: string[];
    status: string;
    phases: string[];
    keyCriteria?: string | null;
    isFeatured?: boolean;
}

export function StudyCard({ nctId, title, condition, locations, status, phases, keyCriteria, isFeatured }: StudyCardProps) {
    const statusColors: Record<string, string> = {
        "Recruiting": "bg-emerald-500 text-white shadow-sm shadow-emerald-200",
        "RECRUITING": "bg-emerald-500 text-white shadow-sm shadow-emerald-200",
        "Not yet recruiting": "bg-amber-400 text-white shadow-sm shadow-amber-200",
        "NOT_YET_RECRUITING": "bg-amber-400 text-white shadow-sm shadow-amber-200",
        "Active, not recruiting": "bg-blue-500 text-white shadow-sm shadow-blue-200",
        "ACTIVE_NOT_RECRUITING": "bg-blue-500 text-white shadow-sm shadow-blue-200",
        "Completed": "bg-slate-400 text-white shadow-sm shadow-slate-200",
        "COMPLETED": "bg-slate-400 text-white shadow-sm shadow-slate-200",
    };

    const statusLabel: Record<string, string> = {
        "Recruiting": "Reclutando",
        "RECRUITING": "Reclutando",
        "Not yet recruiting": "Aún no recluta",
        "NOT_YET_RECRUITING": "Aún no recluta",
        "Active, not recruiting": "Activo (sin reclutamiento)",
        "ACTIVE_NOT_RECRUITING": "Activo (sin reclutamiento)",
        "Completed": "Completado",
        "COMPLETED": "Completado"
    }

    const currentStatusColor = statusColors[status] || "bg-slate-400 text-white";
    const currentStatusLabel = statusLabel[status] || status;

    return (
        <div className="group relative block p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-200">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded">
                        {nctId}
                    </span>
                    {isFeatured && (
                        <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-100 uppercase tracking-wider">
                            Destacado
                        </span>
                    )}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${currentStatusColor}`}>
                    {currentStatusLabel}
                </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                <Link href={`/study/${nctId}`} className="before:absolute before:inset-0">
                    {title}
                </Link>
            </h3>

            <div className="space-y-4 mb-5">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                        <Activity className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-base font-bold text-slate-900 leading-tight">{condition}</span>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2.5 pl-0.5">
                    {locations.slice(0, 3).map((loc, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[13px] text-slate-500 font-semibold">
                            <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                <MapPin className="w-3 h-3 text-blue-500" />
                            </div>
                            <span>{loc}</span>
                        </div>
                    ))}
                    {locations.length > 3 && (
                        <span className="text-[12px] text-slate-400 font-bold bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-100 uppercase tracking-tight">+{locations.length - 3} sedes</span>
                    )}
                </div>
            </div>

            {keyCriteria && (
                <div className="mb-4 p-3 bg-slate-50 rounded-lg border-l-2 border-primary/30">
                    <p className="text-xs text-slate-700 leading-relaxed">
                        <span className="font-bold text-slate-900">Criterio clave:</span> {keyCriteria}
                    </p>
                </div>
            )}

            <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-100 mt-4">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Fase:</span>
                    <div className="flex gap-1">
                        {phases.map(p => (
                            <span key={p} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">
                                {p}
                            </span>
                        ))}
                    </div>
                </div>

                <Link
                    href={`/study/${nctId}`}
                    className="relative z-10 inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-white bg-primary rounded-md hover:bg-blue-700 transition-colors shadow-sm"
                >
                    Ver detalles
                </Link>
            </div>
        </div>
    );
}
