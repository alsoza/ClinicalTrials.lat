"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FiltersSidebar } from "@/components/filters-sidebar";
import { StudyCard } from "@/components/study-card";
import { Search, X, Loader2 } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { getStudies } from "@/app/actions/studies";

// Mock data updated with keyCriteria
const STUDIES = [
    {
        nctId: "NCT04561234",
        title: "Estudio de Fase 3 para Diabetes Mellitus Tipo 2 con Nuevo Agente Oral",
        condition: "Diabetes Mellitus Tipo 2",
        locations: ["Santiago, Chile", "Buenos Aires, Argentina"],
        status: "Recruiting" as const,
        phases: ["Fase 3"],
        keyCriteria: "Pacientes con HbA1c entre 7% y 10.5% sin uso previo de insulina."
    },
    {
        nctId: "NCT01298765",
        title: "Evaluación de Seguridad de Inmunoterapia en Cáncer de Pulmón Avanzado",
        condition: "Cáncer de Pulmón No Microcítico",
        locations: ["Lima, Perú", "Bogotá, Colombia", "Santiago, Chile"],
        status: "Recruiting" as const,
        phases: ["Fase 2"],
        keyCriteria: "Cáncer de pulmón avanzado etapa IV con expresión de PD-L1 > 1%."
    },
    {
        nctId: "NCT09876543",
        title: "Ensayo Observacional de Hipertensión en Pacientes Geriátricos",
        condition: "Hipertensión Arterial",
        locations: ["Lima, Perú", "Arequipa, Perú"],
        status: "Active, not recruiting" as const,
        phases: ["Fase 4"],
        keyCriteria: "Mayores de 65 años con diagnóstico estable de hipertensión por > 1 año."
    },
    {
        nctId: "NCT05647382",
        title: "Vacuna Preventiva para Virus Respiratorio Sincicial en Lactantes",
        condition: "Infección por VRS",
        locations: ["Santiago, Chile", "Valparaíso, Chile"],
        status: "Completed" as const,
        phases: ["Fase 3"],
        keyCriteria: "Lactantes sanos de 6 a 12 meses de edad sin condiciones preexistentes."
    },
    {
        nctId: "NCT03332211",
        title: "Terapia Génica para Distrofia Muscular de Duchenne",
        condition: "Distrofia Muscular de Duchenne",
        locations: ["Bogotá, Colombia", "Santiago, Chile"],
        status: "Not yet recruiting" as const,
        phases: ["Fase 1", "Fase 2"],
        keyCriteria: "Niños de 4 a 7 años con mutación confirmada en el gen de la distrofina."
    },
    {
        nctId: "NCT07778889",
        title: "Tratamiento para Hígado Graso No Alcohólico (NASH)",
        condition: "Hepatología",
        locations: ["Santiago, Chile", "Concepción, Chile"],
        status: "Recruiting" as const,
        phases: ["Fase 2"],
        keyCriteria: "Diagnóstico de esteatohepatitis confirmado por biopsia o fibroscan."
    }
];

export default function SearchPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialQuery = searchParams.get("q") || "";

    const [searchTerm, setSearchTerm] = useState(initialQuery);
    const [filteredStudies, setFilteredStudies] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchStudies = async () => {
            setIsLoading(true);
            const query = (searchParams.get("q") || "").toLowerCase();
            setSearchTerm(query);

            const results = await getStudies({
                query: query || undefined,
                // Add more filters here if needed
            });

            setFilteredStudies(results);
            setIsLoading(false);
        };

        fetchStudies();
    }, [searchParams]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        if (searchTerm) {
            params.set("q", searchTerm);
        } else {
            params.delete("q");
        }
        router.push(`/search?${params.toString()}`);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <MainNav />

            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <FiltersSidebar />
                    </aside>

                    {/* Results List */}
                    <div className="flex-1">
                        {/* Search Bar at the top of results */}
                        <div className="mb-8 p-1 rounded-2xl bg-white border border-slate-200 shadow-sm">
                            <form onSubmit={handleSearch} className="flex items-center bg-white rounded-xl overflow-hidden p-1">
                                <Search className="w-5 h-5 text-slate-400 ml-4 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Busca por enfermedad, fármaco o ubicación..."
                                    className="w-full h-12 px-4 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {searchTerm && (
                                    <button
                                        type="button"
                                        onClick={() => { setSearchTerm(""); router.push("/search"); }}
                                        className="p-2 text-slate-400 hover:text-slate-600 transition-colors mr-2"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className="h-10 px-6 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-all shadow-md"
                                >
                                    Buscar
                                </button>
                            </form>
                        </div>

                        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900">
                                    Resultados <span className="text-slate-500 font-normal text-lg">({filteredStudies.length})</span>
                                </h1>
                                {initialQuery && (
                                    <p className="text-sm text-slate-500 mt-1">
                                        Mostrando estudios para "<span className="font-medium text-slate-700">{initialQuery}</span>"
                                    </p>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-500 hidden sm:inline">Ordenar por:</span>
                                <select className="bg-white border border-slate-200 text-sm rounded-md px-3 py-2 text-slate-700 outline-none focus:ring-1 focus:ring-primary">
                                    <option>Relevancia</option>
                                    <option>Más recientes</option>
                                    <option>Estado</option>
                                </select>
                            </div>
                        </div>

                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-slate-200">
                                <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                                <p className="text-slate-500 font-medium">Cargando estudios...</p>
                            </div>
                        ) : filteredStudies.length > 0 ? (
                            <div className="grid gap-4">
                                {filteredStudies.map((study) => (
                                    <StudyCard key={study.nctId} {...study} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white p-12 rounded-xl border border-dashed border-slate-300 text-center">
                                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                {searchTerm || initialQuery ? (
                                    <>
                                        <h3 className="text-lg font-medium text-slate-900">No encontramos resultados</h3>
                                        <p className="text-slate-500 mt-2">Intenta ajustar tus términos de búsqueda o filtros.</p>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="text-lg font-medium text-slate-900">Comienza tu búsqueda</h3>
                                        <p className="text-slate-500 mt-2">Ingresa una enfermedad, fármaco o ubicación para ver los estudios disponibles.</p>
                                    </>
                                )}
                                <button
                                    onClick={() => {
                                        setSearchTerm("");
                                        const query = "Diabetes";
                                        setSearchTerm(query);
                                        router.push(`/search?q=${query}`);
                                    }}
                                    className="mt-6 text-primary font-medium hover:underline"
                                >
                                    Ver un ejemplo de estudio
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
