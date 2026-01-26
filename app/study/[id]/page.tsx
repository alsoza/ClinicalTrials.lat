import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { StudyHeader } from "@/components/study-header";
import { EligibilityCriteria } from "@/components/eligibility-criteria";
import { ContactWidget } from "@/components/contact-widget";
import { VideoEmbed } from "@/components/video-embed";

import { getStudyById } from "@/app/actions/studies";
import { notFound } from "next/navigation";

export default async function StudyDetailsPage({ params }: { params: { id: string } }) {
    const study = await getStudyById(params.id);

    if (!study) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-20">
            <MainNav />

            <StudyHeader
                nctId={study.nct_id}
                title={study.title_es || ""}
                sponsor={study.lead_sponsor_name || "Sponsor no especificado"}
                status={study.overall_status || "Desconocido"}
            />

            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <section className="bg-white p-6 rounded-xl border border-slate-200 p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Resumen del Estudio</h2>
                            <p className="text-slate-700 whitespace-pre-line leading-relaxed text-lg">
                                {study.brief_summary_es || "No hay resumen disponible para este estudio."}
                            </p>
                        </section>

                        {(study.video_url) && (
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Video Explicativo</h2>
                                <VideoEmbed videoId={study.video_url} />
                            </section>
                        )}

                        <section className="bg-white p-6 rounded-xl border border-slate-200 p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Criterios de Elegibilidad</h2>
                            <EligibilityCriteria
                                structured_eligibility_json={study.structured_eligibility_json}
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
