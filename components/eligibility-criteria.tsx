import { PlusCircle, MinusCircle } from "lucide-react";

interface EligibilityCriteriaProps {
    structured_eligibility_json: any;
    key_eligibility_es?: string | null;
    raw_criteria?: string | null;
}

export function EligibilityCriteria({ structured_eligibility_json, key_eligibility_es, raw_criteria }: EligibilityCriteriaProps) {
    let inclusion: string[] = Array.isArray(structured_eligibility_json?.inclusion) ? structured_eligibility_json.inclusion : [];
    let exclusion: string[] = Array.isArray(structured_eligibility_json?.exclusion) ? structured_eligibility_json.exclusion : [];
    let isFallback = false;

    // Fallback parser if structured data is missing or empty
    if (inclusion.length === 0 && exclusion.length === 0 && raw_criteria) {
        isFallback = true;
        const parseCriteria = (text: string) => {
            const lines = text.split('\n');
            let currentSection: 'none' | 'inclusion' | 'exclusion' = 'none';
            const inc: string[] = [];
            const exc: string[] = [];

            lines.forEach(line => {
                const trimmed = line.trim();
                if (trimmed.toLowerCase().includes('inclusion criteria')) {
                    currentSection = 'inclusion';
                } else if (trimmed.toLowerCase().includes('exclusion criteria')) {
                    currentSection = 'exclusion';
                } else if (trimmed.startsWith('*') || trimmed.startsWith('-')) {
                    const content = trimmed.substring(1).trim();
                    if (content) {
                        if (currentSection === 'inclusion') inc.push(content);
                        else if (currentSection === 'exclusion') exc.push(content);
                    }
                }
            });
            return { inc, exc };
        };

        const parsed = parseCriteria(raw_criteria);
        if (parsed.inc.length > 0) inclusion = parsed.inc;
        if (parsed.exc.length > 0) exclusion = parsed.exc;
    }

    return (
        <div className="space-y-10">
            {key_eligibility_es && (
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 shadow-sm">
                    <p className="text-slate-700 leading-relaxed text-[17px]">
                        <span className="font-bold text-blue-900 block mb-2 uppercase text-xs tracking-wider">Resumen de Elegibilidad:</span>
                        {key_eligibility_es}
                    </p>
                </div>
            )}

            {isFallback && (
                <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-4 py-2 rounded-lg border border-amber-100 w-fit">
                    <span className="text-xs font-medium italic">Nota: La lista detallada se muestra en el idioma original por falta de traducción estructurada.</span>
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex items-center gap-2.5 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl border border-emerald-100 shadow-sm">
                            <PlusCircle className="w-5 h-5 text-emerald-600" />
                            <span className="text-sm font-bold uppercase tracking-wider">Criterios de Inclusión</span>
                        </div>
                    </div>
                    {inclusion.length > 0 ? (
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
                    ) : (
                        <p className="text-slate-500 italic">No se especificaron criterios de inclusión.</p>
                    )}
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex items-center gap-2.5 bg-rose-50 text-rose-700 px-4 py-2 rounded-xl border border-rose-100 shadow-sm">
                            <MinusCircle className="w-5 h-5 text-rose-600" />
                            <span className="text-sm font-bold uppercase tracking-wider">Criterios de Exclusión</span>
                        </div>
                    </div>
                    {exclusion.length > 0 ? (
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
                    ) : (
                        <p className="text-slate-500 italic">No se especificaron criterios de exclusión.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
