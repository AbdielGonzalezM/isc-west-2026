import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="@container overflow-x-hidden">
                <section id="home">
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">Lo más relevante de ISC West</h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">Un resumen práctico de tecnologías, tendencias y oportunidades reales para Bnext.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="https://www.discoverisc.com/west/en-us.html" target="_blank">
                                            <span className="text-nowrap">Sitio Oficial</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base">
                                        <Link href="https://youtu.be/hLjdJofOlYE?si=dcpMsWvfIF4ACoaP" target="_blank">
                                            <span className="text-nowrap">Acerca del evento</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div id="mobile" className="relative left-1/2 block w-screen px-5 max-w-screen -translate-x-1/2 order-first mb-5 mt-10 md:hidden">
                                <div className="z-1 absolute inset-0 opacity-80" />
                                <Image
                                    className="mx-auto h-auto w-full max-w-full object-cover object-center"
                                    src="/ISCWEST.png"
                                    alt="Abstract Object"
                                    height="1212"
                                    width="671"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    loading='eager'
                                />
                            </div>
                            <div className="hidden md:block lg:w-166 @max-lg:-translate-x-5 max-lg:size-120 max-lg:order-first max-lg:mx-auto max-lg:-mb-20 lg:absolute lg:inset-0 lg:-inset-y-20 lg:ml-auto lg:translate-x-28">
                                <div className="z-1 absolute inset-0 opacity-80" />
                                <Image
                                    className="object-cover object-right lg:w-full"
                                    src="/ISCWEST.png"
                                    alt="Abstract Object"
                                    height="1212"
                                    width="671"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    loading='eager'
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background border-t pb-16 pt-4 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Principales Stands visitados</p>
                            </div>
                            <div className="**:fill-foreground relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    className='items-center'
                                    gap={112}>
                                    <Image
                                        src={'/verkada.png'}
                                        alt="verkada logo"
                                        width={3977}
                                        height={1136}
                                        className='w-32 h-10'
                                    />
                                    <Image
                                        src={'/rhombus.png'}
                                        alt="rhombus logo"
                                        width={113}
                                        height={444}
                                        className='w-32 h-8'
                                    />
                                    <Image
                                        src={'/bolide.png'}
                                        alt="bolide logo"
                                        className='w-32 h-10'
                                        width={113}
                                        height={444}
                                    />
                                    <Image
                                        src={'/motorola.png'}
                                        alt="motorola logo"
                                        className='w-45 h-6'
                                        width={1280}
                                        height={147}
                                    />
                                    <Image
                                        src={'/johnson.png'}
                                        alt="johnson logo"
                                        className='w-25 h-10'
                                        width={1280}
                                        height={589}
                                    />
                                    <Image
                                        src={'/genetec.png'}
                                        alt="genetec logo"
                                        className='w-25 h-5'
                                        width={520}
                                        height={97}
                                    />
                                    <Image
                                        src={'/axis.png'}
                                        alt="axis logo"
                                        className='w-25 h-8'
                                        width={960}
                                        height={346}
                                    />
                                    <Image
                                        src={'/bosch.png'}
                                        alt="bosch logo"
                                        className='w-32 h-8'
                                        width={960}
                                        height={346}
                                    />
                                    <Image
                                        src={'/milestone.png'}
                                        alt="milestone logo"
                                        className='w-42 h-7'
                                        width={960}
                                        height={346}
                                    />
                                </InfiniteSlider>

                                <div
                                    aria-hidden
                                    className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"
                                />
                                <div
                                    aria-hidden
                                    className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
