import { ArrowRight } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";

export default function ResearchersPage() {
    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <MainNav />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-slate-900 text-white py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Latinoamérica: El Nuevo Hub Global de Investigación Clínica
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Acceda a una población diversa, naïve y comprometida. Reduzca costos y tiempos de reclutamiento con nuestra plataforma de gestión inteligente.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors">
                                    Contáctanos
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                                <button className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
                                    Ver Casos de Éxito
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 border-b border-slate-100 bg-slate-50">
                    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-primary mb-1">+50k</div>
                            <div className="text-sm text-slate-600 font-medium">Pacientes Registrados</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-1">-40%</div>
                            <div className="text-sm text-slate-600 font-medium">Tiempo de Reclutamiento</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-1">98%</div>
                            <div className="text-sm text-slate-600 font-medium">Tasa de Retención</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-1">4</div>
                            <div className="text-sm text-slate-600 font-medium">Países en LatAm</div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Soluciones Integrales</h2>
                        <p className="text-slate-600">
                            Ofrecemos soporte end-to-end para maximizar el éxito de tu estudio clínico en la región.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="p-10 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-primary/30 transition-all group">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b border-primary/10 pb-4">Reclutamiento Inteligente</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Algoritmos de IA para matching preciso de protocolos e identificación de candidatos ideales.
                            </p>
                        </div>

                        <div className="p-10 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-primary/30 transition-all group">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b border-primary/10 pb-4">Feasibility Basado en Datos</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Insights demográficos y epidemiológicos en tiempo real para decisiones estratégicas.
                            </p>
                        </div>

                        <div className="p-10 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-primary/30 transition-all group">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b border-primary/10 pb-4">Soporte Regulatorio</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Asesoría experta en normativas locales de cada país para asegurar el cumplimiento ético y legal.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

