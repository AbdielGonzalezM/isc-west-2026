import { Activity, DraftingCompass, Eye, IdCard, Mail, Puzzle, Search, Zap } from 'lucide-react'
import Image from 'next/image'
import CallToAction from './call-to-action'

export default function FeaturesSection() {
    return (
        <section id="axis" className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">AXIS: De la planeación a la implementación real</h2>
                            <p className="mt-6 text-sm">Durante las charlas con AXIS, presentaron una herramienta que destaca por su enfoque práctico:</p>
                            <p className='mt-3 text-sm'><span className='font-bold'>Axis Design System</span>, una solución gratuita para diseñar, estimar y validar proyectos de videovigilancia.</p>

                            <p className='mt-3 text-sm'>Permite calcular de forma precisa variables clave como ancho de banda, almacenamiento y selección de dispositivos, integrándose con soluciones de partners como <span className="font-bold">Genetec</span> y <span className="font-bold">Milestone</span>.</p>

                            <p className='mt-3 text-sm'>Pero lo más interesante es que no se queda en la planeación:
                                una vez definido el proyecto, AXIS puede encargarse de la implementación, entregando los dispositivos ya configurados conforme a la proyección.</p>
                        </div>
                        <ul className="mt-8 divide-y text-sm border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Eye className="size-5" />
                                <span><span className='font-bold'>D</span>etección</span>
                            </li>
                            <li>
                                <Search className="size-5" />
                                <span><span className='font-bold'>O</span>bservación</span>
                            </li>
                            <li>
                                <Puzzle className="size-5" />
                                <span><span className='font-bold'>R</span>econocimiento</span>
                            </li>
                            <li>
                                <IdCard className="size-5" />
                                <span><span className='font-bold'>I</span>dentificación</span>
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-auto relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/images/axis-design-system.png" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                        <CallToAction />
                    </div>
                </div>
            </div>
        </section>
    )
}
