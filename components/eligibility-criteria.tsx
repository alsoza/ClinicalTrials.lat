import { PlusCircle, MinusCircle } from "lucide-react";

interface EligibilityCriteriaProps {
    inclusion: string[];
    exclusion: string[];
}

export function EligibilityCriteria({ inclusion, exclusion }: EligibilityCriteriaProps) {
    return (
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="flex items-center gap-2.5 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl border border-emerald-100 shadow-sm">
                        <PlusCircle className="w-5 h-5 text-emerald-600" />
                        <span className="text-sm font-bold uppercase tracking-wider">Criterios de Inclusión</span>
                    </div>
                </div>
                <ul className="space-y-5">
                    {inclusion.map((item, index) => (
                        <li key={index} className="flex items-start gap-4 group">
                            <div className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-200">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:bg-white" />
                            </div>
                            <span className="text-slate-700 leading-relaxed font-medium text-[16px]">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="flex items-center gap-2.5 bg-rose-50 text-rose-700 px-4 py-2 rounded-xl border border-rose-100 shadow-sm">
                        <MinusCircle className="w-5 h-5 text-rose-600" />
                        <span className="text-sm font-bold uppercase tracking-wider">Criterios de Exclusión</span>
                    </div>
                </div>
                <ul className="space-y-5">
                    {exclusion.map((item, index) => (
                        <li key={index} className="flex items-start gap-4 group">
                            <div className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-200">
                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 group-hover:bg-white" />
                            </div>
                            <span className="text-slate-600 leading-relaxed font-medium text-[16px]">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
