import { Logo } from '@/components/logo'
import Link from 'next/link'

const links = [
    { name: 'Inicio', href: '#home' },
    { name: 'Assa Abloy', href: '#assa-abloy' },
    { name: 'Axis', href: '#axis' },
    { name: 'Mejoras', href: '#mejoras' },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <Logo />
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>
                <span className="text-muted-foreground block text-center text-sm"> © {2026} Bnext, Todos los derechos reservados.</span>
            </div>
        </footer>
    )
}
