import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Target, Users, Globe, Shield, Heart, Award } from "lucide-react";

export default function AboutPage() {
    const values = [
        {
            title: "Integridad",
            desc: "Mantenemos los más altos estándares éticos en cada interacción.",
            icon: <Shield className="w-8 h-8 text-white" />
        },
        {
            title: "Compasión",
            desc: "El bienestar del paciente es el corazón de nuestro trabajo.",
            icon: <Heart className="w-8 h-8 text-white" />
        },
        {
            title: "Excelencia",
            desc: "Buscamos la perfección en la conexión entre ciencia e individuos.",
            icon: <Award className="w-8 h-8 text-white" />
        }
    ];

    return (
        <main className="flex min-h-screen flex-col">
            <MainNav />

            <div className="flex-1">
                {/* Hero Section */}
                <section className="relative py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Nuestra Misión</span>
                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                                Aceleramos la medicina del futuro en <span className="text-primary">Latinoamérica</span>.
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10">
                                ClinicalTrials.lat nace con el propósito de cerrar la brecha entre los avances médicos globales y la población latinoamericana, facilitando un acceso seguro, ético y transparente a la investigación clínica.
                            </p>
                        </div>
                    </div>
                    {/* Abstract background shapes */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full -z-0 opacity-50" />
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-primary">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-12 text-white text-center">
                            <div className="space-y-2">
                                <h3 className="text-5xl font-bold italic opacity-30 leading-none">01</h3>
                                <p className="text-3xl font-bold uppercase tracking-tighter">Acceso Directo</p>
                                <p className="text-blue-100 opacity-80">A estudios de fase I a IV.</p>
                            </div>
                            <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/20 py-12 md:py-0">
                                <h3 className="text-5xl font-bold italic opacity-30 leading-none">02</h3>
                                <p className="text-3xl font-bold uppercase tracking-tighter">Región Unida</p>
                                <p className="text-blue-100 opacity-80">Presentes en Chile, Argentina, Colombia y Perú.</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-5xl font-bold italic opacity-30 leading-none">03</h3>
                                <p className="text-3xl font-bold uppercase tracking-tighter">Ética Primero</p>
                                <p className="text-blue-100 opacity-80">Cumplimiento 100% regulatorio.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <img
                                    src="/medical_research_progress_1768702031930.png"
                                    alt="Investigación médica"
                                    className="rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700"
                                />
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Target className="text-primary w-6 h-6" />
                                        <h2 className="text-2xl font-bold text-slate-900">¿Por qué ClinicalTrials.lat?</h2>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        América Latina representa una oportunidad única para la investigación clínica debido a su diversidad genética y excelencia de sus centros médicos. Sin embargo, encontrar información confiable sobre estos estudios suele ser difícil para el paciente común.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        Nuestra plataforma sistematiza esta información, ofreciendo un punto de encuentro donde pacientes encuentran esperanza e investigadores encuentran el talento necesario para validar sus descubrimientos.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                                    <div className="p-6 bg-white rounded-2xl shadow-sm">
                                        <Users className="text-primary w-8 h-8 mb-4" />
                                        <h4 className="font-bold text-slate-900 mb-2">+10k Voluntarios</h4>
                                        <p className="text-sm text-slate-500">Han encontrado opciones terapéuticas a través de ClinicalTrials.lat.</p>
                                    </div>
                                    <div className="p-6 bg-white rounded-2xl shadow-sm">
                                        <Globe className="text-primary w-8 h-8 mb-4" />
                                        <h4 className="font-bold text-slate-900 mb-2">Red Latam</h4>
                                        <p className="text-sm text-slate-500">Conectando los principales centros de investigación de la región.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-16 underline decoration-primary decoration-4 underline-offset-8">
                            Nuestros Valores Fundamentales
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((v, i) => (
                                <div key={i} className="group p-10 bg-slate-50 rounded-3xl hover:bg-primary transition-colors duration-500">
                                    <div className="w-16 h-16 bg-primary group-hover:bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors">
                                        {v.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-4 transition-colors">{v.title}</h3>
                                    <p className="text-slate-600 group-hover:text-blue-100 transition-colors">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
