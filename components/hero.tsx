"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function Hero() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <section className="relative w-full py-24 md:py-40 lg:py-52 overflow-hidden flex items-center min-h-[85vh]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-modern-medical.png"
                    alt="Clinical Research Excellence"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/20 z-10" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-20">
                <div className="flex flex-col items-start text-left space-y-10 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl text-white leading-[1.1]">
                            Innovación Médica al <br />
                            Alcance de <span className="text-blue-400">Todos en LatAm</span>
                        </h1>
                        <p className="max-w-[700px] text-slate-200 md:text-2xl font-light leading-relaxed">
                            Accede a tratamientos de vanguardia y contribuye al avance de la ciencia. Conectamos pacientes con los estudios clínicos más importantes de la región.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-full max-w-2xl"
                    >
                        <div className="relative group p-1 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                            <div className="relative flex items-center bg-white rounded-xl overflow-hidden shadow-sm p-1">
                                <Search className="w-6 h-6 text-slate-400 ml-4 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Busca una enfermedad (ej. Diabetes) o ciudad..."
                                    className="w-full h-14 px-4 text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                <button
                                    onClick={() => handleSearch()}
                                    className="h-12 px-8 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95"
                                >
                                    Buscar
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-4 text-white/70 text-sm font-medium pl-2">
                            <span>Temas populares:</span>
                            <button className="hover:text-blue-400 transition-colors">Oncología</button>
                            <button className="hover:text-blue-400 transition-colors">Diabetes</button>
                            <button className="hover:text-blue-400 transition-colors">Cardiología</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
