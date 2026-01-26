'use client';

import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <MainNav />

            <div className="flex-1">
                {/* Header Section */}
                <section className="bg-slate-900 py-20 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Estamos aquí para ayudarte</h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Si tienes dudas sobre un estudio, necesitas ayuda técnica o quieres colaborar con nosotros, no dudes en escribirnos.
                        </p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">

                            {/* Info Cards */}
                            <div className="space-y-6">
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                        <Mail className="text-primary w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Escríbenos</h3>
                                    <p className="text-slate-600 mb-4">Nuestro equipo responde en menos de 24 horas hábiles.</p>
                                    <a href="mailto:info@clinicaltrials.lat" className="text-primary font-bold hover:underline">
                                        info@clinicaltrials.lat
                                    </a>
                                </div>

                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                        <Phone className="text-primary w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Llámanos</h3>
                                    <p className="text-slate-600 mb-4">Línea gratuita para Latinoamérica.</p>
                                    <span className="text-slate-900 font-bold">+1 (800) 123-4567</span>
                                </div>

                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                        <Clock className="text-primary w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Horario</h3>
                                    <p className="text-slate-600">Lunes a Viernes</p>
                                    <p className="text-slate-900 font-bold">9:00 AM - 6:00 PM (GMT-5)</p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-2">
                                <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                        <MessageSquare className="text-primary w-6 h-6" />
                                        Envíanos un mensaje
                                    </h2>

                                    <form className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700">Nombre Completo</label>
                                                <input
                                                    type="text"
                                                    placeholder="Tu nombre"
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700">Correo Electrónico</label>
                                                <input
                                                    type="email"
                                                    placeholder="tu@email.com"
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Asunto</label>
                                            <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none">
                                                <option>Duda sobre un estudio específico</option>
                                                <option>Problemas técnicos en la web</option>
                                                <option>Información para investigadores</option>
                                                <option>Prensa y colaboraciones</option>
                                                <option>Otro motivo</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Mensaje</label>
                                            <textarea
                                                rows={5}
                                                placeholder="¿En qué podemos ayudarte?"
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            className="w-full py-5 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/30 hover:bg-blue-700 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <Send className="w-5 h-5" />
                                            Enviar Mensaje
                                        </button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
