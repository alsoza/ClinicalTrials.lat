import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { FileText, Scale, ShieldAlert, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white selection:bg-blue-100">
            <MainNav />

            <div className="flex-1">
                {/* Hero section shared with site style */}
                <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/20 text-slate-300 border border-slate-500/30 rounded-2xl text-sm font-bold mb-8">
                                <FileText className="w-4 h-4" />
                                Marco Regulatorio
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                                Términos y <span className="text-slate-400">Condiciones</span>
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed font-light">
                                Normas y responsabilidades que rigen el uso de ClinicalTrials.lat para garantizar un entorno informativo seguro y ético.
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-600/10 rounded-full blur-[120px] -z-0" />
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-16">

                            {/* Main Article */}
                            <article className="prose prose-slate prose-lg max-w-none space-y-16 text-slate-700 leading-relaxed">

                                <section className="space-y-6">
                                    <div className="flex items-center gap-3 text-slate-900">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                        <h2 className="text-2xl font-bold !m-0">1. Aceptación</h2>
                                    </div>
                                    <p>
                                        Al acceder y utilizar ClinicalTrials.lat, usted acepta cumplir y estar sujeto a estos Términos y Condiciones, junto con nuestra <Link href="/privacy" className="text-primary hover:underline font-medium">Política de Privacidad</Link> y <Link href="/legal" className="text-primary hover:underline font-medium">Aviso Legal</Link>.
                                    </p>
                                </section>

                                <section className="space-y-6">
                                    <div className="flex items-center gap-3 text-slate-900">
                                        <Scale className="w-6 h-6 text-primary" />
                                        <h2 className="text-2xl font-bold !m-0">2. Naturaleza del Servicio</h2>
                                    </div>
                                    <p>
                                        ClinicalTrials.lat es un facilitador de información. No proporcionamos asesoramiento médico ni garantizamos la inclusión en ningún ensayo clínico. Nuestra labor se limita a conectar de manera transparente a participantes potenciales con centros acreditados de investigación en Latinoamérica.
                                    </p>
                                </section>

                                <section className="space-y-8">
                                    <div className="flex items-center gap-3 text-slate-900">
                                        <ShieldAlert className="w-6 h-6 text-primary" />
                                        <h2 className="text-2xl font-bold !m-0">3. Limitación de Responsabilidad</h2>
                                    </div>
                                    <div className="bg-slate-900 text-slate-100 p-10 rounded-[2.5rem] shadow-xl space-y-6">
                                        <p className="text-lg font-light leading-relaxed">
                                            La información en este sitio no sustituye la consulta médica profesional. Siempre debe consultar con su médico tratante antes de tomar decisiones sobre su salud o participar en investigaciones.
                                        </p>
                                        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                            <Link
                                                href="/legal"
                                                className="text-white hover:text-blue-400 font-bold flex items-center gap-2 group transition-colors"
                                            >
                                                Consultar marco ético de investigación
                                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </section>

                                <section className="space-y-6">
                                    <div className="flex items-center gap-3 text-slate-900">
                                        <FileText className="w-6 h-6 text-primary" />
                                        <h2 className="text-2xl font-bold !m-0">4. Propiedad Intelectual</h2>
                                    </div>
                                    <p>
                                        Todo el contenido, bases de datos y diseño son propiedad de ClinicalTrials.lat. El uso no autorizado de nuestros recursos legales o contenidos informativos está estrictamente prohibido.
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
