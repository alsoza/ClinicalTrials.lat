import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { ShieldCheck, Lock, Eye, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white selection:bg-blue-100">
            <MainNav />

            <div className="flex-1">
                {/* Hero section shared with site style */}
                <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-2xl text-sm font-bold mb-8">
                                <Lock className="w-4 h-4" />
                                Privacidad Protegida
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                                Política de <span className="text-emerald-400">Privacidad</span>
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed font-light">
                                En ClinicalTrials.lat, la protección de sus datos personales y su historial de salud es nuestra mayor prioridad legal y ética.
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -z-0" />
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-16">

                            {/* Intro and Reference to Legal Page */}
                            <div className="bg-slate-50 p-8 lg:p-12 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <ShieldCheck className="text-primary w-6 h-6" />
                                        Cumplimiento por País
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        Nuestras prácticas de privacidad están adaptadas íntegramente a las legislaciones de **Chile, Argentina, Perú y Colombia**. Puede consultar los detalles específicos de cada país en nuestro aviso legal íntegro.
                                    </p>
                                </div>
                                <Link
                                    href="/legal"
                                    className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2 group whitespace-nowrap"
                                >
                                    Ver Detalle Legal
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Main Sections */}
                            <article className="prose prose-slate prose-lg max-w-none space-y-16 text-slate-700 leading-relaxed">

                                <section className="space-y-6">
                                    <div className="flex items-center gap-3 text-slate-900">
                                        <Eye className="w-6 h-6 text-primary" />
                                        <h2 className="text-2xl font-bold !m-0">1. Información que Recopilamos</h2>
                                    </div>
                                    <p>Recopilamos información que usted nos proporciona voluntariamente para facilitar su participación en ensayos clínicos:</p>
                                    <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                        {[
                                            "Datos de Identificación (Nombre, Email)",
                                            "Ubicación Geográfica",
                                            "Intereses Terapéuticos"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                                <span className="text-sm font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="space-y-6">
                                    <div className="flex items-center gap-3 text-slate-900">
                                        <FileText className="w-6 h-6 text-primary" />
                                        <h2 className="text-2xl font-bold !m-0">2. Uso y Finalidad</h2>
                                    </div>
                                    <p>
                                        La información recopilada se utiliza exclusivamente para conectar al usuario con centros de investigación clínica acreditados. De acuerdo con el principio de **minimización de datos**, nunca solicitamos más información de la necesaria para este fin específico.
                                    </p>
                                    <p className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 text-emerald-900 text-sm">
                                        <strong>Transparencia:</strong> Nunca vendemos, comercializamos ni compartimos sus datos personales con terceros para fines publicitarios. Su información sólo viaja al investigador principal del estudio si usted lo autoriza expresamente.
                                    </p>
                                </section>

                                <section className="space-y-6">
                                    <div className="flex items-center gap-3 text-slate-900">
                                        <Lock className="w-6 h-6 text-primary" />
                                        <h2 className="text-2xl font-bold !m-0">3. Seguridad de los Datos</h2>
                                    </div>
                                    <p>
                                        Implementamos redundancia en seguridad técnica, incluyendo encriptación de datos sensibles y controles de acceso restringidos, siguiendo los estándares internacionales de seguridad en informática de salud.
                                    </p>
                                </section>

                            </article>

                            {/* Summary */}
                            <div className="pt-12 border-t border-slate-100 text-center">
                                <p className="text-sm text-slate-400 uppercase tracking-widest">
                                    Última actualización: 22 de enero, 2026
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
