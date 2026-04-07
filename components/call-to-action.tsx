import { Button } from '@/components/ui/button'
import { ExternalLink, Link2 } from 'lucide-react'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-16">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Axis Design System</h2>
                    <p className="mt-4">Cónoce la herramienta, es totalmente gratuita.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">

                        <Button
                            asChild
                            size="lg"
                            variant="default">
                            <Link href="https://sitedesigner.axis.com/" target="_blank">
                                <ExternalLink className='size-4' />
                                <span>Explorar Axis Design System</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
