import { Cpu, Drone, ExternalLink, Eye, IdCard, Lock, Radar, Search, Siren, Sparkles, UserSearch, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Features7Section() {
    return (
        <section id="mejoras" className="overflow-hidden py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Oportunidades para nuestras soluciones</h2>
                    <p className="mt-6 text-lg">A partir de lo observado en ISC West, estas son algunas capacidades que podríamos integrar para llevar nuestras soluciones a un siguiente nivel en seguridad, operación y analítica.</p>
                </div>
                <div className="relative -mx-4 pr-3 pt-3 md:-mx-12">
                    <div className="perspective-midrange">
                        <div className="">
                            <div className="aspect-auto relative">
                                <Image
                                    src="/images/nfc-bnext.png"
                                    className="absolute inset-0 z-10 rounded-lg"
                                    alt="payments illustration dark"
                                    width={2797}
                                    height={1137}
                                />
                                <Image
                                    src="/images/nfc-bnext.png"
                                    className="hidden dark:block rounded-lg"
                                    alt="payments illustration dark"
                                    width={2797}
                                    height={1137}
                                />
                                <Image
                                    src="/images/nfc-bnext.png"
                                    className="dark:hidden rounded-lg"
                                    alt="payments illustration light"
                                    width={2797}
                                    height={1137}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <IdCard className="size-4" />
                            <h3 className="text-sm font-medium">Accesos con NFC</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Credenciales digitales desde el celular para accesos rápidos y seguros.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Eye className="size-4" />
                            <h3 className="text-sm font-medium">Seguimiento de personas</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Visualización del recorrido de clientes y detección por dispositivo o zona.
                            <Link href="https://echarts.apache.org/examples/en/editor.html?c=geo-svg-lines" target="_blank" rel="noopener noreferrer" className="font-semibold flex flex-row items-center gap-1"><ExternalLink className='size-4' /> Más información</Link>
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Detección de fallas eléctricas</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Monitoreo preventivo para anticipar interrupciones operativas.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Radar className="size-4" />

                            <h3 className="text-sm font-medium">Lidar 3D radar inteligente</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Detección de movimiento y formas sin depender de iluminación o condiciones climáticas. 
                            <Link href="https://www.rbtec.com/es/sensores-perimetrales-y-proteccion-subterranea/sistema-de-seguridad-lidar-de-estado-solido-pulsevi-3d/" target="_blank" rel="noopener noreferrer" className="font-semibold flex flex-row items-center gap-1"><ExternalLink className='size-4' /> Más información</Link>
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Drone className="size-4" />

                            <h3 className="text-sm font-medium">Detección de drones</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Identificación de objetos aéreos no autorizados en zonas sensibles. 
                            <Link href="https://www.robinradar.com/products/iris-radar" target="_blank" rel="noopener noreferrer" className="font-semibold flex flex-row items-center gap-1"><ExternalLink className='size-4' /> Más información</Link>
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Siren className="size-4" />

                            <h3 className="text-sm font-medium">Alertas de desastres naturales</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Integración con sistemas de alerta temprana para respuesta inmediata. </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Search className="size-4" />

                            <h3 className="text-sm font-medium">Búsqueda de imágenes inteligente</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Búsqueda utilizando metadata y descripciones con modelos de reconocimiento de prendas y/o objetos.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <UserSearch className="size-4" />

                            <h3 className="text-sm font-medium">Logs de auditoría por sesión</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Trazabilidad completa de acciones realizadas dentro del sistema.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
