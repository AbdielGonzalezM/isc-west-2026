export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-4xl space-y-3 text-center">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Optimización de video con AV1</h2>
                    <p>En conversaciones con el equipo de Axis, surgió una recomendación clave para optimizar proyectos de videovigilancia:</p>
                    <p>Utilizar el mismo estándar de compresión que ya emplean plataformas como Netflix y grandes servicios de streaming.</p>

                    <p>El formato AV1 permite reducir significativamente el tamaño de los videos sin sacrificar calidad, optimizando tanto almacenamiento como consumo de ancho de banda.</p>
                </div>

                <div className="grid gap-0.5 *:text-center md:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
                    <div className="bg-muted rounded-(--radius) space-y-4 py-4 md:py-12">
                        <div className="text-2xl font-bold">50%</div>
                        <p className="text-sm">Hasta 50% menos tamaño</p>
                    </div>
                    <div className="bg-muted rounded-(--radius) space-y-4  py-4 md:py-12">
                        <div className="text-2xl font-bold">100 MB → ~50–70 MB</div>
                        <p className="text-sm">Compresión usando AV1</p>
                    </div>
                    <div className="bg-muted rounded-(--radius) space-y-4  py-4 md:py-12">
                        <div className="text-2xl font-bold">Menos ancho de banda</div>
                        <p className="text-sm">Optimización en transmisión de video</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
