import { Mail, Phone, CalendarCheck } from "lucide-react";

export function ContactWidget() {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg sticky top-24">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
                ¿Interesado en participar?
            </h3>
            <p className="text-slate-600 mb-6 text-sm">
                Conéctate directamente con el equipo de investigación para saber si eres elegible.
            </p>

            <div className="space-y-4">
                <button className="w-full h-12 flex items-center justify-center gap-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/10 active:scale-95">
                    <CalendarCheck className="w-5 h-5" />
                    Verificar Elegibilidad
                </button>

                <button className="w-full h-12 flex items-center justify-center gap-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 group">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-white border border-slate-100 group-hover:border-slate-200 transition-all">
                        <Mail className="w-4 h-4 text-primary" />
                    </div>
                    Enviar Mensaje
                </button>

                <button className="w-full h-12 flex items-center justify-center gap-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 group">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-white border border-slate-100 group-hover:border-slate-200 transition-all">
                        <Phone className="w-4 h-4 text-primary" />
                    </div>
                    Solicitar Llamada
                </button>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-500 text-center">
                    Tu información es confidencial y segura. ClinicalTrials.lat cumple con normativas de privacidad de datos en salud.
                </p>
            </div>
        </div>
    );
}
