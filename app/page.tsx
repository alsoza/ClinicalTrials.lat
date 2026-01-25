import { AboutClinicalTrials } from "@/components/about-clinical-trials";
import { Hero } from "@/components/hero";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <MainNav transparent />

      <Hero />

      {/* Patient Benefits Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">
              Beneficios de participar en un estudio clínico
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="/innovation_clinical_lab_1768702005673.png"
                    alt="Innovación Médica"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-primary">Tratamientos de Vanguardia</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Accede antes que nadie a terapias innovadoras que están redefiniendo el cuidado de la salud.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="/empathetic_medical_care_1768702019102.png"
                    alt="Atención Especializada"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-primary">Cuidado Médico Premium</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Recibe atención personalizada de equipos médicos de élite y seguimiento continuo de tu salud.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="/medical_research_progress_1768702031930.png"
                    alt="Contribución a la Salud"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-primary">Legado de Vida</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Tu participación es la llave para encontrar las curas que salvarán a las futuras generaciones.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 p-8 bg-blue-50/50 rounded-2xl border border-blue-100 text-center shadow-sm">
              <p className="text-slate-700 text-base font-medium mb-2">
                Importante: La participación es <span className="text-primary font-bold">100% gratuita</span> para el voluntario.
              </p>
              <p className="text-slate-600 text-sm italic">
                La atención médica, los exámenes, procedimientos y medicamentos del estudio son cubiertos íntegramente por el patrocinador, sin costo para el paciente. Todo bajo estrictos controles éticos y regulatorios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutClinicalTrials />

      <Footer />
    </main >
  );
}

