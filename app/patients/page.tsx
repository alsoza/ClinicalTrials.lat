import Link from "next/link";
import {
    ArrowRight,
    HelpCircle,
    BookOpen,
    ShieldCheck,
    Heart,
    Users,
    Sparkles,
    CheckCircle2,
    Info,
    ChevronDown
} from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";

export default function PatientsPage() {
    const faqs = [
        {
            q: "¿Qué es ClinicalTrials.lat?",
            a: "Somos una plataforma dedicada a conectar pacientes con ensayos clínicos en toda Latinoamérica, facilitando el acceso a la medicina de vanguardia de forma gratuita y segura."
        },
        {
            q: "¿Tiene algún costo participar?",
            a: "No. La participación en un ensayo clínico es 100% gratuita para el voluntario. El patrocinador del estudio cubre todos los gastos médicos, exámenes y medicamentos relacionados."
        },
        {
            q: "¿Es seguro participar en un estudio?",
            a: "Absolutamente. Todos los estudios son revisados por comités de ética e instituciones regulatorias nacionales para garantizar la máxima seguridad y bienestar de los participantes."
        },
        {
            q: "¿Puedo retirarme del estudio si lo deseo?",
            a: "Sí, la participación es totalmente voluntaria. Puedes retirarte en cualquier momento, por cualquier motivo, sin que esto afecte tu atención médica regular ni tu relación con los médicos."
        }
    ];

    const glossary = [
        {
            term: "Consentimiento Informado",
            def: "Proceso mediante el cual un participante confirma voluntariamente su deseo de participar después de ser informado de todos los riesgos, beneficios y procedimientos del estudio."
        },
        {
            term: "Ensayo Clínico",
            def: "Investigación médica rigurosa realizada con personas para evaluar la seguridad y eficacia de nuevos tratamientos antes de que estén disponibles para el público general."
        },
        {
            term: "Criterios de Inclusión",
            def: "Características específicas (como edad, tipo de enfermedad o historial médico) que deben cumplir las personas para poder participar en un estudio determinado."
        },
        {
            term: "Placebo",
            def: "Sustancia inactiva utilizada en estudios clínicos para comparar los efectos de un nuevo tratamiento, asegurando que los resultados sean producto de la nueva terapia."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col selection:bg-blue-100 selection:text-primary">
            <MainNav />

            <main className="flex-1">
                {/* Premium Hero Section */}
                <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)]" />
                    <div className="container mx-auto px-4 relative z-10 py-20">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1 space-y-10">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary border border-blue-100 rounded-2xl text-sm font-bold animate-fade-in">
                                        <Sparkles className="w-4 h-4" />
                                        Tu camino hacia la medicina del futuro
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                                        Sé parte de la <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                            Innovación Médica
                                        </span>
                                    </h1>
                                    <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-light">
                                        Los estudios clínicos ofrecen una vía hacia tratamientos de vanguardia y un cuidado médico de excelencia. Descubre cómo tu participación puede cambiar tu vida y la de millones.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Link
                                        href="/search"
                                        className="inline-flex items-center px-8 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-primary/30 hover:-translate-y-1"
                                    >
                                        Explorar estudios abiertos
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="#recursos"
                                        className="inline-flex items-center px-8 py-5 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all hover:border-slate-300"
                                    >
                                        Aprender más
                                    </Link>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                                    <div className="space-y-1">
                                        <div className="text-3xl font-bold text-slate-900">+1200</div>
                                        <div className="text-sm text-slate-500 font-medium">Estudios Activos</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-3xl font-bold text-slate-900">100%</div>
                                        <div className="text-sm text-slate-500 font-medium">Gratuito</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-3xl font-bold text-slate-900">24/7</div>
                                        <div className="text-sm text-slate-500 font-medium">Soporte Ético</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 relative">
                                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] transform rotate-2 hover:rotate-0 transition-transform duration-700">
                                    <img
                                        src="/patient_care_header_1769113445520.png"
                                        alt="Cuidado médico profesional"
                                        className="w-full h-full object-cover scale-105"
                                    />
                                </div>
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
                                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-700" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section - Impact Cards */}
                <section className="py-32 bg-slate-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-white">¿Por qué dar el primer paso?</h2>
                            <p className="text-slate-400 text-lg">Participar no es solo recibir un tratamiento, es liderar el progreso de la salud en nuestra región.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Heart className="w-8 h-8" />,
                                    title: "Vanguardia Terapéutica",
                                    desc: "Accede a terapias biotecnológicas y medicamentos innovadores años antes de que lleguen a farmacias.",
                                    color: "bg-rose-500/20 text-rose-400"
                                },
                                {
                                    icon: <Users className="w-8 h-8" />,
                                    title: "Equipos Médicos de Élite",
                                    desc: "Sé atendido por los mejores especialistas e investigadores en centros médicos certificados internacionalmente.",
                                    color: "bg-blue-500/20 text-blue-400"
                                },
                                {
                                    icon: <ShieldCheck className="w-8 h-8" />,
                                    title: "Protección Absoluta",
                                    desc: "Cada estudio sigue los protocolos éticos más estrictos del mundo. Tu bienestar es legalmente la prioridad absoluta.",
                                    color: "bg-emerald-500/20 text-emerald-400"
                                }
                            ].map((feature, i) => (
                                <div key={i} className="group p-12 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 ${feature.color} group-hover:scale-110 transition-transform`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-6 leading-tight">{feature.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-lg">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Educational Hub - FAQ & Glossary */}
                <section className="py-32 bg-white" id="recursos">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-20">

                            {/* Left: FAQ with Accordion-like feel */}
                            <div className="flex-1 space-y-12">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase">
                                        <HelpCircle className="w-5 h-5" />
                                        Resolviendo tus dudas
                                    </div>
                                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Preguntas Frecuentes</h2>
                                    <p className="text-slate-500 text-lg">Entendemos que la investigación clínica puede generar preguntas. Aquí tienes las respuestas más comunes.</p>
                                </div>

                                <div className="space-y-6">
                                    {faqs.map((f, i) => (
                                        <div key={i} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all group">
                                            <h4 className="font-bold text-xl text-slate-900 mb-4 flex items-start gap-4">
                                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                    {i + 1}
                                                </div>
                                                {f.q}
                                            </h4>
                                            <p className="text-slate-600 leading-relaxed pl-12 text-lg">{f.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Glossary as a modern sidebar card list */}
                            <div className="lg:w-[450px]">
                                <div className="sticky top-24 space-y-8">
                                    <div className="p-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white shadow-2xl shadow-blue-500/20">
                                        <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-6">
                                            <BookOpen className="w-3 h-3" />
                                            CONCEPTOS CLAVE
                                        </div>
                                        <h3 className="text-3xl font-bold mb-8 leading-tight">Glosario Clínico</h3>

                                        <div className="space-y-8">
                                            {glossary.map((g, i) => (
                                                <div key={i} className="space-y-2 border-b border-white/10 pb-6 last:border-0 last:pb-0">
                                                    <h4 className="font-bold text-blue-200 flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4" />
                                                        {g.term}
                                                    </h4>
                                                    <p className="text-sm text-blue-50/80 leading-relaxed">{g.def}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-10 pt-10 border-t border-white/10 italic text-sm text-blue-100/60">
                                            ¿No encuentras un término? Escríbenos y nuestro equipo médico te ayudará.
                                        </div>
                                    </div>

                                    {/* Action Box */}
                                    <div className="bg-slate-900 p-10 rounded-[2.5rem] relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <Info className="w-32 h-32 -mr-10 -mt-10 text-white" />
                                        </div>
                                        <h4 className="text-white font-bold text-xl mb-4 relative z-10">¿Listo para buscar?</h4>
                                        <p className="text-slate-400 mb-8 text-sm relative z-10">Usa nuestro buscador inteligente para encontrar estudios en tu ciudad.</p>
                                        <Link
                                            href="/search"
                                            className="inline-flex items-center text-blue-400 font-bold hover:text-white transition-colors gap-2 group relative z-10"
                                        >
                                            Ir al buscador
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-32 bg-slate-50 relative">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <h2 className="text-3xl md:text-6xl font-bold text-slate-900 leading-tight">
                                Hagamos historia <br />
                                <span className="text-primary italic">juntos.</span>
                            </h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                Tu valentía y compromiso son el motor del descubrimiento médico en Latinoamérica.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link
                                    href="/search"
                                    className="px-12 py-6 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 hover:bg-blue-700 hover:-translate-y-1 transition-all text-lg"
                                >
                                    Encontrar un ensayo hoy
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
