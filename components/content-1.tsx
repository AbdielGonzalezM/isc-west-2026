import Image from 'next/image'

export default function ContentSection() {
    return (
        <section id="assa-abloy" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Lo que dejó Assa Abloy en ISC West</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-auto relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image
                                src="/images/img1.jpg"
                                className="rounded-[15px]"
                                alt="payments illustration dark"
                                width={1207}
                                height={929}
                            />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">En una de las conferencias de Assa Abloy durante ISC West, su director de desarrollo de producto, Ricardo Miralha, dejó una idea que define muy bien hacia dónde se está moviendo la industria:</p>
                    <blockquote className="border-l-4 pl-4">
                        <p>“Seguimos buscando ser un producto de <span className="text-accent-foreground font-bold">bajo costo y alto impacto</span>.”
                        </p>

                        <div className="mt-6 space-y-3">
                            <cite className="block font-medium">Ricardo Miralha, Director de Desarrollo de Producto.</cite>
                            <Image src="/assa-abloy.svg" className='w-25' alt="Assa Abloy Logo" width={808} height={116} />
                        </div>
                    </blockquote>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-10 max-w-5xl px-6">

                <p className="text-muted-foreground">Al cierre de la conferencia, surgió una pregunta clave:</p>
                <p><span className="text-accent-foreground font-bold">¿Cómo se ve la industria en los próximos 5 años?</span></p>
                
                <p className="text-muted-foreground mt-2">La respuesta fue consistente entre los panelistas:
                    la inteligencia artificial ya no es el futuro, es el presente.</p>

                <div className="pt-6">
                    <blockquote className="border-l-4 pl-4">
                        <p>"Yo ya doy por hecho que la IA ya está embebida en nuestras herramientas y haciéndonos más eficientes hoy en día.
                            Lo interesante será <span className="text-accent-foreground font-bold">cómo presentamos y explotamos la información</span> que nos brindará."</p>

                        <div className="mt-6 space-y-3">
                            <cite className="block font-medium">Luis Ángel De León Almazán, Director de Centro de Comandos.</cite>
                            <Image src="/Banorte_logo.svg" className='w-25' alt="Banorte Logo" width={808} height={116} />
                        </div>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}
