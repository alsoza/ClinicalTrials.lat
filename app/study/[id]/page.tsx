import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { StudyHeader } from "@/components/study-header";
import { EligibilityCriteria } from "@/components/eligibility-criteria";
import { ContactWidget } from "@/components/contact-widget";
import { VideoEmbed } from "@/components/video-embed";

// Mock Data for the details page
const STUDY_DATA = {
    nctId: "NCT04561234",
    title: "Estudio de Fase 3 para Diabetes Mellitus Tipo 2 con Nuevo Agente Oral",
    sponsor: "PharmaLatAm Research Group",
    status: "Reclutando",
    summary: `Este estudio evalúa la eficacia y seguridad de un nuevo medicamento oral en pacientes con Diabetes Mellitus Tipo 2 que no han logrado un control adecuado con metformina sola. 
  
  El objetivo principal es medir la reducción de HbA1c después de 24 semanas de tratamiento. Los participantes recibirán el medicamento de estudio o un placebo, además de su tratamiento habitual.`,
    videoId: "dQw4w9WgXcQ", // Placeholder ID, realistically would be a study explanation
    inclusion: [
        "Diagnóstico de Diabetes Mellitus Tipo 2 por al menos 6 meses.",
        "Hombres y mujeres entre 18 y 75 años.",
        "HbA1c entre 7.5% y 10.0%.",
        "Tratamiento estable con metformina por al menos 3 meses."
    ],
    exclusion: [
        "Diabetes Mellitus Tipo 1.",
        "Historia de cetoacidosis diabética.",
        "Enfermedad renal crónica severa.",
        "Embarazo o lactancia.",
        "Participación en otro ensayo clínico en los últimos 30 días."
    ]
};

export default function StudyDetailsPage({ params }: { params: { id: string } }) {
    // In a real app, fetch data based on params.id

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-20">
            <MainNav />

            <StudyHeader
                nctId={STUDY_DATA.nctId}
                title={STUDY_DATA.title}
                sponsor={STUDY_DATA.sponsor}
                status={STUDY_DATA.status}
            />

            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <section className="bg-white p-6 rounded-xl border border-slate-200 p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Resumen del Estudio</h2>
                            <p className="text-slate-700 whitespace-pre-line leading-relaxed text-lg">
                                {STUDY_DATA.summary}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Video Explicativo</h2>
                            <VideoEmbed videoId={STUDY_DATA.videoId} />
                        </section>

                        <section className="bg-white p-6 rounded-xl border border-slate-200 p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Criterios de Elegibilidad</h2>
                            <EligibilityCriteria
                                inclusion={STUDY_DATA.inclusion}
                                exclusion={STUDY_DATA.exclusion}
                            />
                        </section>
                    </div>

                    {/* Right Column: Sidebar */}
                    <aside className="lg:col-span-1">
                        <ContactWidget />
                    </aside>
                </div>
            </main>
        </div>
    );
}
