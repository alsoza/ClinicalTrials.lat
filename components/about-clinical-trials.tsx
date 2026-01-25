import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VideoEmbed } from "./video-embed";

export function AboutClinicalTrials() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                ¿Qué es un estudio clínico?
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Un estudio clínico o ensayo clínico es una investigación médica que se realiza con personas.
                                Es el paso final antes de que un nuevo tratamiento pueda ser aprobado para su uso general.
                            </p>
                            <div className="space-y-4">
                                <p className="text-slate-600 leading-relaxed">
                                    A través de estos estudios, los investigadores buscan responder preguntas importantes sobre:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                        <span>Si el nuevo tratamiento es seguro y efectivo.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                        <span>Cómo se compara con los tratamientos ya existentes.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                        <span>La dosis adecuada y posibles efectos secundarios.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <Link
                            href="/patients"
                            className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all group"
                        >
                            Ver más información para pacientes
                            <ArrowRight className="ml-1 w-5 h-5 group-hover:ml-2 transition-all" />
                        </Link>
                    </div>

                    {/* Video Embed */}
                    <div className="flex-1 w-full max-w-2xl">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50">
                            <VideoEmbed videoId="7Xp2R6GvR-g" /> {/* Placeholder ID for a clinical trial explainer video */}
                        </div>
                        <p className="text-sm text-slate-400 mt-4 text-center italic">
                            Video explicativo sobre la importancia de la investigación clínica.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
