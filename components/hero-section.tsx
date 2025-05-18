'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { ArrowRight, Menu, Rocket, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const menuItems = [
    
]

export default function HeroSection() {
    const [menuState, setMenuState] = React.useState(false)

    return (
        <>
            <header>
                <nav
                    data-state={menuState && 'active'}
                    className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent">
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            <div className="flex w-full justify-between lg:w-auto">
                                
                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>

                            {/* Remove or comment out this entire block to remove the menu container */}
{/*
                            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                <div className="lg:pr-4">
                                    <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={item.href}
                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                    <span>{item.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
*/}

                        </div>
                    </div>
                </nav>
            </header>
            <main className="overflow-hidden">
                <section className="relative">
                    <div className="relative py-24 lg:py-28">
                        <div className="mx-auto max-w-7xl px-6 md:px-12">
                            <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                                <Image
                                    src="/icons/profile-photo.jpeg"
                                    alt="Foto de perfil de Pedro Nunes"
                                    width={120}
                                    height={120}
                                    className="mx-auto mb-6 rounded-full"
                                    priority
                                />

                                <h1 className="mt-8 text-4xl font-semibold md:text-5xl xl:text-5xl xl:[line-height:1.125]">
                                    Pedro Nunes <br /> 
                                </h1>
                                <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">Espero poder voltar a integrar o time Fenasbac, agora contribuindo na área de Tecnologia e Desenvolvimento.</p>
                                <p className="mx-auto mt-6 max-w-2xl text-wrap sm:hidden">Highly customizable components for building modern websites and applications, with your personal spark.</p>

                                <div className="mt-8">
                                    <Button
                                        size="lg"
                                        asChild>
                                        <Link href="https://www.linkedin.com/in/pedro-nunesdelima/">
                                            <Rocket className="relative size-4" />
                                            <span className="text-nowrap">Perfil no LinkedIn</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="x-auto relative mx-auto mt-8 max-w-lg sm:mt-12">
                                <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:opacity-10"></div>
                                <div className="absolute inset-x-0 top-12 -z-[1] mx-auto h-1/3 w-2/3 rounded-full bg-blue-300 blur-3xl dark:bg-white/20"></div>

                                <Swiper
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    loop
                                    autoplay={{ delay: 5000 }}
                                    modules={[Autoplay, EffectCoverflow]}>
                                    <SwiperSlide className="px-2">
                                        <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-9">
                                            <div className="mx-auto h-fit w-full">
                                               
                                            </div>
                                            <p className="mt-6 text-center text-lg font-medium">Inglês Fluente (Score 643/677 no teste TOEFL ITP Masterclass Global)</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="px-2">
                                        <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-9">
                                            <div className="mx-auto h-fit w-full">
                                                
                                            </div>
                                            <p className="mt-6 text-center text-lg font-medium">Análise e Desenvolvimento de Sistemas (incompleto) no UniCEUB</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="px-2">
                                        <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-9">
                                            <div className="mx-auto h-fit w-full">
                                        
                                            </div>
                                            <p className="mt-6 text-center text-lg font-medium">Experiência com Gestão de Ativos e Microsoft PowerApps na EloGroup (Experiência passada)</p>
                                        </div>
                                    </SwiperSlide>
                                    
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const WorkOsLogo = () => {
    return (
        <svg
            className="m-auto h-8"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 251.8 48">
            <g>
                <path
                    fill="currentColor"
                    className="text-[#29363D] dark:text-white"
                    d="M73,7.2h7l5,20.6c0.9,3.9,1.1,6.2,1.1,6.2h0.1c0,0,0.3-2.3,1.3-6.2l4.8-20.6h7.9l5.1,20.6   c1,4,1.2,6.2,1.2,6.2h0.1c0,0,0.1-2.2,1-6.2l4.8-20.6h7l-8.8,33.9h-7.7l-5.3-20.5c-1.1-4.5-1.2-6.4-1.2-6.4h-0.1c0,0-0.1,2-1.1,6.4   l-5,20.5h-8C82,41.1,73,7.2,73,7.2z M118.2,28.8c0-7.7,5-12.8,12.6-12.8c7.5,0,12.5,5,12.5,12.8c0,7.8-5,12.8-12.5,12.8   C123.2,41.6,118.2,36.6,118.2,28.8L118.2,28.8z M136.8,28.8c0-5-2.4-7.8-6-7.8c-3.9,0-6.1,3.2-6.1,7.8c0,5.1,2.4,7.9,6.1,7.9   C134.6,36.7,136.8,33.6,136.8,28.8L136.8,28.8z M146.4,16.4h6.2V21h0.1c1.1-2.4,3.6-4.7,8-4.7c0.7,0,1.2,0.1,1.5,0.2v6.2H162   c0,0-0.6-0.2-2.1-0.2c-4.8,0-7.4,2.8-7.4,8.1v10.6h-6.2V16.4z M165.1,7.2h6.2v10.9c0,6.4-0.1,7.6-0.1,7.6h0.1l9.2-9.2h7.7   l-10.8,10.7l12.5,14h-7.3l-9-10.2l-2.3,2.3v7.9H165L165.1,7.2L165.1,7.2z M189.9,24.3c0-10.4,6.5-17.4,16.2-17.4s16.2,7,16.2,17.4   s-6.5,17.4-16.2,17.4C196.4,41.7,189.9,34.7,189.9,24.3z M215.7,24.3c0-7.1-3.8-11.9-9.5-11.9c-5.7,0-9.5,4.8-9.5,11.9   s3.8,11.9,9.5,11.9C211.8,36.2,215.7,31.4,215.7,24.3z M224.7,29.8h7.1c0,4,2.7,6.2,6.9,6.2c3.5,0,5.9-1.8,5.9-4.3   c0-2.8-1.9-3.6-7.7-4.7c-5.4-1.1-11.1-2.9-11.1-9.9c0-5.9,5-10.3,12.7-10.3c8,0,12.9,4.2,12.9,10.5h-7.1c0-3.1-2.4-5-5.8-5   c-3.5,0-5.7,1.7-5.7,4.2c0,2.6,1.5,3.7,6.3,4.6c7,1.5,12.8,2.3,12.8,10.1c0,6.2-5.4,10.3-13.3,10.3   C230.4,41.5,224.7,36.9,224.7,29.8z"></path>
                <path
                    fill="#6363F1"
                    d="M0,24c0,1.1,0.3,2.1,0.8,3l9.7,16.8c1,1.7,2.5,3.1,4.4,3.7c3.6,1.2,7.5-0.3,9.4-3.5l2.3-4.1   l-9.2-16l9.8-16.9L29.5,3c0.7-1.2,1.6-2.2,2.7-3H17.2c-2.6,0-5.1,1.4-6.4,3.7L0.8,21C0.3,21.9,0,22.9,0,24z"></path>
                <path
                    fill="#6363F1"
                    d="M55.4,24c0-1.1-0.3-2.1-0.8-3l-9.8-17c-1.9-3.3-5.8-4.7-9.4-3.5c-1.9,0.6-3.4,2-4.4,3.7   L28.7,8L38,24l-9.8,16.9L25.9,45c-0.7,1.2-1.6,2.2-2.7,3h15.1c2.6,0,5.1-1.4,6.4-3.7l10-17.3C55.1,26.1,55.4,25.1,55.4,24z"></path>
            </g>
        </svg>
    )
}

const AstroLogo = () => {
    return (
        <svg
            className="mx-auto h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 460 160"
            fill="none"
        >
        </svg>
    );
};
