"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterSectionProps {
    title: string;
    options: string[];
    scrollable?: boolean;
}

function FilterSection({ title, options, scrollable }: FilterSectionProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="border-b border-slate-100 py-4 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between text-left font-medium text-slate-900 mb-2 focus:outline-none"
            >
                <span>{title}</span>
                {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-slate-500" />
                ) : (
                    <ChevronDown className="h-4 w-4 text-slate-500" />
                )}
            </button>
            {isOpen && (
                <div className={`space-y-2 mt-2 ${scrollable ? 'max-h-40 overflow-y-auto pr-2 custom-scrollbar' : ''}`}>
                    {options.map((option) => (
                        <label key={option} className="flex items-center space-x-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/25"
                            />
                            <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">
                                {option}
                            </span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}

export function FiltersSidebar() {
    return (
        <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm sticky top-24">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900">Filtros</h3>
                <button className="text-xs text-primary font-medium hover:underline">
                    Limpiar
                </button>
            </div>

            <FilterSection
                title="Estado"
                options={["Reclutando", "Aún no recluta", "Activo", "Completado"]}
            />

            <FilterSection
                title="Fase"
                options={["Fase 1", "Fase 2", "Fase 3", "Fase 4"]}
            />

            <FilterSection
                title="País"
                options={["🇨🇱 Chile", "🇦🇷 Argentina", "🇨🇴 Colombia", "🇵🇪 Perú"]}
            />

            <FilterSection
                title="Condición"
                scrollable
                options={[
                    "Oncología",
                    "Cardiología",
                    "Neurología",
                    "Diabetes",
                    "Pediatría",
                    "Hepatología",
                    "Dermatología",
                    "Infectología",
                    "Gastroenterología",
                    "Reumatología"
                ]}
            />
        </div>
    );
}
