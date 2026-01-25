import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { ShieldCheck, ExternalLink, Globe, FileText, Scale } from "lucide-react";

export default function LegalPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white selection:bg-blue-100">
            <MainNav />

            <div className="flex-1">
                {/* Hero section shared with site style */}
                <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-2xl text-sm font-bold mb-8">
                                <ShieldCheck className="w-4 h-4" />
                                Transparencia Institucional
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                                Aviso <span className="text-blue-400">Legal y Ético</span>
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed font-light">
                                Operamos bajo los marcos legales de protección de datos y ética médica más exigentes de Latinoamérica y estándares internacionales.
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-0" />
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-16">

                            {/* Verbatim Content Section */}
                            <article className="prose prose-slate prose-lg max-w-none space-y-12 text-slate-700 leading-relaxed">

                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-slate-900 !mt-0">Política de Privacidad y Cumplimiento Ético</h2>
                                    <p>
                                        ClinicalTrials.lat se compromete plenamente con la <strong>ética médica</strong>, la <strong>transparencia</strong> y el <strong>cumplimiento normativo</strong> en todos los países donde opera. Nuestro sitio difunde información sobre ensayos clínicos en Latinoamérica, conectando potenciales voluntarios con centros de investigación, <strong>sin reemplazar el consentimiento informado formal</strong> de cada estudio. A continuación detallamos nuestra política de privacidad y las medidas de cumplimiento ético, destacando cómo cumplimos con las <strong>Buenas Prácticas Clínicas (GCP)</strong> internacionales y las leyes específicas de <strong>protección de datos personales</strong>, <strong>secreto médico</strong> y <strong>regulación de investigación clínica</strong> en Chile, Argentina, Perú y Colombia.
                                    </p>
                                    <p>
                                        <strong>Recopilación y uso de datos personales:</strong> ClinicalTrials.lat recoge datos personales mínimos (nombre, correo electrónico, teléfono, etc.) exclusivamente para facilitar el contacto con los centros de investigación correspondientes. Estos datos <strong>no se comercializan ni venden</strong> a terceros, y su tratamiento se realiza con <strong>consentimiento expreso del usuario</strong>, de acuerdo con la finalidad declarada (derivación a un estudio clínico). Nos adherimos al principio de minimización y finalidad: los datos se utilizan <strong>sólo para los fines para los cuales fueron recolectados</strong>, y con estrictas medidas de seguridad. Asimismo, todo el personal y los asociados que manejan información de usuarios están obligados contractualmente a mantener la <strong>confidencialidad</strong> de dichos datos.
                                    </p>
                                    <p>
                                        <strong>Buenas Prácticas Clínicas (GCP):</strong> Todos los ensayos clínicos difundidos en nuestra plataforma cumplen con las GCP, un estándar ético y científico internacional derivado de la Declaración de Helsinki e implementado a través de la guía ICH E6. Esto asegura que los estudios estén aprobados por comités de ética, que los participantes otorguen consentimiento informado y que sus derechos, seguridad y bienestar sean protegidos en todo momento. <em>ClinicalTrials.lat</em> verifica que los estudios promocionados cuenten con aprobación ética y regulatoria local antes de difundirlos, y promueve el entendimiento público de lo que implica la participación en una investigación clínica de manera <strong>clara y accesible</strong>.
                                    </p>
                                    <p className="text-slate-500 italic">
                                        A continuación, describimos la normativa específica de cada país y cómo la cumplimos, incluyendo enlaces oficiales a dichas regulaciones:
                                    </p>
                                </div>

                                {/* Chile */}
                                <div className="space-y-8 pt-12">
                                    <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                                        <Globe className="w-8 h-8 text-primary" />
                                        Chile
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                            <p className="mb-4">
                                                <strong>Protección de Datos Personales (Chile):</strong> Chile cuenta con la <a href="https://digital.gob.cl/biblioteca/regulacion/ley-n-19628-sobre-proteccion-de-la-vida-privada/#:~:text=Define%20los%20datos%20personales%20y,mal%20uso%20de%20dicha%20informaci%C3%B3n" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Ley Nº 19.628 sobre Protección de la Vida Privada<ExternalLink className="w-3 h-3" /></a>, que define los datos personales y sensibles que deben ser resguardados para garantizar la privacidad de las personas. Conforme a esta ley, el tratamiento de datos personales en Chile requiere el consentimiento expreso del titular y un propósito legítimo (<a href="https://www.bcn.cl/leychile/navegar?idNorma=141599#:~:text=Art%C3%ADculo%204%C2%B0.,titular%20consienta%20expresamente%20en%20ello)" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bcn.cl</a>). En <em>ClinicalTrials.lat</em> cumplimos estrictamente esta normativa: solicitamos autorización explícita a los usuarios chilenos para recolectar sus datos, informando claramente el propósito (conectar con un centro de investigación) y <strong>no divulgamos datos a terceros</strong> sin base legal ni consentimiento.
                                            </p>
                                            <p>
                                                Respetamos los derechos ARCO (acceso, rectificación, cancelación y oposición) garantizados por la ley chilena, permitiendo a los usuarios chilenos actualizar o eliminar su información en cualquier momento. Además, reconocemos la sensibilidad especial de los datos de salud (considerados “datos sensibles” por la ley) y los manejamos con altos estándares de seguridad y confidencialidad, tal como exige la legislación chilena (<a href="https://www.suseso.cl/612/w3-propertyvalue-130626.html#:~:text=Toda%20la%20informaci%C3%B3n%20que%20surja%2C,628" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">suseso.cl</a>).
                                            </p>
                                        </div>

                                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                            <p className="mb-4">
                                                <strong>Secreto Médico y Confidencialidad (Chile):</strong> La <a href="https://www.suseso.cl/612/w3-propertyvalue-130626.html#:~:text=Art%C3%ADculo%2012.,contenido%20y%20de%20los%20cambios" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Ley Nº 20.584 (2012)<ExternalLink className="w-3 h-3" /></a> regula los derechos y deberes de las personas en atención de salud en Chile, e impone deberes de <strong>confidencialidad estricta</strong> sobre la información clínica de los pacientes. En particular, el artículo 12 de dicha ley exige que la ficha clínica (historia médica) y todos los antecedentes de salud del paciente sean tratados de forma confidencial, asegurando la reserva de los datos y considerándolos información sensible cubierta por la ley de datos personales.
                                            </p>
                                            <p>
                                                <em>ClinicalTrials.lat</em> respeta plenamente este principio: aunque no proveemos atención médica directa, cualquier información relacionada con la salud o preferencias de un usuario es tratada como confidencial. No divulgamos públicamente ni compartimos con los centros de investigación más que los datos necesarios y autorizados para el posible enrolamiento en un estudio, y siempre bajo acuerdos de confidencialidad.
                                            </p>
                                        </div>

                                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                            <p>
                                                <strong>Normativa Ética de Investigación Clínica (Chile):</strong> Chile posee un marco legal robusto para asegurar la ética en la investigación con seres humanos. La <a href="https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0717-75262007000200013#:~:text=riesgo%20de%20destrucci%C3%B3n%2C%20muerte%20o,que%20corresponda%2C%20seg%C3%BAn%20el%20reglamento" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Ley Nº 20.120 (2006)<ExternalLink className="w-3 h-3" /></a> sobre investigación científica en el ser humano establece que toda investigación biomédica debe respetar la vida e integridad de las personas y contar con aprobación previa de un <strong>Comité Ético Científico acreditado</strong>, además del consentimiento informado del participante. <em>ClinicalTrials.lat</em> cumple con estas disposiciones: solo difundimos ensayos clínicos en Chile que cuenten con la aprobación del comité ético científico correspondiente y la autorización de la autoridad regulatoria (ISP/Ministerio de Salud).
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Argentina */}
                                <div className="space-y-8 pt-12">
                                    <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                                        <Globe className="w-8 h-8 text-primary" />
                                        Argentina
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                            <p>
                                                <strong>Protección de Datos Personales (Argentina):</strong> Argentina fue pionera en la región con la <a href="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/datos-personales" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Ley Nº 25.326 de Protección de los Datos Personales (2000)<ExternalLink className="w-3 h-3" /></a>, conocida también como la Ley de Habeas Data. Esta ley protege la integridad y privacidad de los datos personales de todos los ciudadanos argentinos, otorgando a los titulares derechos como conocer, actualizar, rectificar y suprimir sus datos, y exigiendo el <strong>consentimiento informado</strong> para su recolección y tratamiento. En <em>ClinicalTrials.lat</em> cumplimos con la Ley 25.326 al procesar datos de usuarios argentinos: requerimos consentimiento previo para cualquier uso de sus datos y únicamente con la finalidad declarada.
                                            </p>
                                        </div>
                                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                            <p>
                                                <strong>Secreto Médico y Confidencialidad (Argentina):</strong> Los pacientes en Argentina están amparados por la <a href="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/derechos-del-paciente" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Ley Nº 26.529 de Derechos del Paciente (2009)<ExternalLink className="w-3 h-3" /></a>, que establece, entre otros derechos, la <strong>confidencialidad de la información médica</strong> y el acceso restringido a la historia clínica. Esta ley dispone que toda persona tiene derecho a la <strong>intimidad sobre su estado de salud</strong>. <em>ClinicalTrials.lat</em> adhiere a estos principios: lo hacemos transmitiendo únicamente la información necesaria (y con su permiso), asegurándonos de que el centro receptor trate esos datos bajo obligación de secreto médico y en cumplimiento de la Ley 26.529.
                                            </p>
                                        </div>
                                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                            <p>
                                                <strong>Regulación Ética de Investigación Clínica (Argentina):</strong> En Argentina, la autoridad regulatoria ANMAT y el Ministerio de Salud establecen las normas para los ensayos clínicos. La normativa vigente es la <a href="https://www.argentina.gob.ar/noticias/nueva-normativa-sobre-buenas-practicas-clinicas-para-estudios-de-farmacologia-clinica" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Disposición ANMAT Nº 7516/2025<ExternalLink className="w-3 h-3" /></a>, que aprueba un nuevo Régimen de BPC adoptando la guía ICH-GCP E6(R3). <em>ClinicalTrials.lat</em> solamente publica ensayos clínicos en Argentina que estén debidamente autorizados por ANMAT o la autoridad sanitaria competente y que cuenten con aprobación de un Comité de Ética de Investigación registrado.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Perú */}
                                <div className="space-y-8 pt-12">
                                    <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                                        <Globe className="w-8 h-8 text-primary" />
                                        Perú
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                            <p>
                                                <strong>Protección de Datos Personales (Perú):</strong> Perú tutela la privacidad de la información personal mediante la <a href="https://www.minsa.gob.pe/Recursos/OGTI/SINADEF/Ley-29733.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Ley Nº 29733 – Ley de Protección de Datos Personales (2011)<ExternalLink className="w-3 h-3" /></a>. Esta ley garantiza el derecho fundamental a la protección de los datos personales. En <em>ClinicalTrials.lat</em> acatamos plenamente la Ley 29733 al manejar datos de usuarios peruanos: obtenemos su consentimiento libre, previo e informado para cualquier recolección de datos, informándoles sobre la finalidad y sus derechos.
                                            </p>
                                        </div>
                                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                            <p>
                                                <strong>Secreto Médico y Confidencialidad (Perú):</strong> El marco legal peruano reconoce el <strong>derecho a la privacidad y confidencialidad</strong> de los pacientes. La <strong>Ley General de Salud (Ley Nº 26842)</strong> establece que toda persona usuaria de los servicios de salud tiene derecho a la reserva de la información relacionada con el acto médico. <em>ClinicalTrials.lat</em> actúa conforme a estas obligaciones, preservando siempre la <strong>privacidad</strong> del usuario.
                                            </p>
                                        </div>
                                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                            <p>
                                                <strong>Regulación Ética de Investigación Clínica (Perú):</strong> Los ensayos clínicos se regulan bajo el Reglamento aprobado por el <a href="https://ensayosclinicos-repec.ins.gob.pe/images/Reglamento_de_EC.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Decreto Supremo Nº 021-2017-SA<ExternalLink className="w-3 h-3" /></a>. <em>ClinicalTrials.lat</em> asegura que los estudios difundidos para Perú cumplan con este marco legal: únicamente listamos ensayos que han sido aprobados por el INS y por un Comité de Ética en Investigación.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Colombia */}
                                <div className="space-y-8 pt-12">
                                    <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                                        <Globe className="w-8 h-8 text-primary" />
                                        Colombia
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                            <p>
                                                <strong>Protección de Datos Personales (Colombia):</strong> Colombia protege los datos personales mediante la <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Ley Estatutaria Nº 1581 de 2012<ExternalLink className="w-3 h-3" /></a>. <em>ClinicalTrials.lat</em> cumple a cabalidad con esta normativa para usuarios de Colombia: solo tratamos datos personales con autorización previa y explícita del titular, informándole de manera clara sobre la finalidad específica.
                                            </p>
                                        </div>
                                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                            <p>
                                                <strong>Secreto Médico y Confidencialidad (Colombia):</strong> La <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=68760" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Ley 23 de 1981 (Ética Médica)<ExternalLink className="w-3 h-3" /></a> establece que la historia clínica es un documento <strong>privado, sometido a reserva</strong>. <em>ClinicalTrials.lat</em> adhiere rigurosamente al secreto médico: cualquier información de salud o identificación de un usuario colombiano se mantiene <strong>confidencial</strong>.
                                            </p>
                                        </div>
                                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                            <p>
                                                <strong>Regulación Ética de Investigación Clínica (Colombia):</strong> La piedra angular es la <a href="https://www.minsalud.gov.co/sites/rid/lists/bibliotecadigital/ride/de/dij/resolucion-8430-de-1993.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Resolución Nº 8430 de 1993 del Ministerio de Salud<ExternalLink className="w-3 h-3" /></a>. <em>ClinicalTrials.lat</em> únicamente difunde ensayos clínicos en Colombia que cumplen estas normativas, contando con aprobación de un Comité de Ética y, en caso de ensayos farmacológicos, con autorización de INVIMA.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* International Standards */}
                                <div className="space-y-8 pt-12">
                                    <h2 className="text-3xl font-bold text-slate-900 border-t border-slate-100 pt-12">Estándares Internacionales (HIPAA, GDPR)</h2>
                                    <p>
                                        Si bien <em>ClinicalTrials.lat</em> se enfoca en Latinoamérica y se rige primordialmente por las leyes locales antes descritas, también reconocemos la importancia de los <strong>estándares internacionales de privacidad y seguridad de la información en salud</strong>. En particular, tomamos en consideración:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100">
                                            <h4 className="font-bold text-slate-900 mb-4 flex items-center justify-between">
                                                GDPR (UE)
                                                <a href="https://gdpr-info.eu/" target="_blank" rel="noopener noreferrer" className="text-primary transition-colors">
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            </h4>
                                            <p className="text-sm">
                                                Adoptamos principios compatibles con GDPR, tales como transparencia en el procesamiento de datos, consentimiento inequívoco, minimización de datos y derechos robustos para los usuarios. Esto asegura que nuestros usuarios disfruten de un nivel de protección de datos <strong>alto y consistente</strong>.
                                            </p>
                                        </div>
                                        <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100">
                                            <h4 className="font-bold text-slate-900 mb-4 flex items-center justify-between">
                                                HIPAA (USA)
                                                <a href="https://www.hhs.gov/hipaa/index.html" target="_blank" rel="noopener noreferrer" className="text-primary transition-colors">
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            </h4>
                                            <p className="text-sm">
                                                Nos esforzamos por cumplir con las <strong>mejores prácticas de seguridad y confidencialidad</strong> congruentes con HIPAA al manejar datos relacionados con la salud. Esto incluye encriptación de datos sensibles, control de accesos estrictos y políticas internas de no divulgación.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Summary */}
                                <div className="pt-12 border-t border-slate-100 text-center">
                                    <p className="text-lg text-slate-600 font-light italic max-w-2xl mx-auto">
                                        En resumen, <em>ClinicalTrials.lat</em> opera dentro del marco legal de Chile, Argentina, Perú y Colombia, garantizando el cumplimiento de todas las obligaciones en <strong>protección de datos personales, secreto médico y regulación ética de ensayos clínicos</strong>. Nuestro compromiso central es <strong>proteger la privacidad</strong> de los participantes y <strong>fomentar una investigación clínica ética</strong>.
                                    </p>
                                    <p className="mt-8 text-slate-400 text-sm uppercase tracking-widest">
                                        Última actualización: 22 de enero, 2026
                                    </p>
                                </div>

                            </article>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
