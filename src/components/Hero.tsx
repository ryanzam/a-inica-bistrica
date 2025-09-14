import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ascinica bistrica.jpg";
import heroImage1 from "@/assets/bistinica.jpg";
import heroImage2 from "@/assets/ascinica bis.jpg";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react";

const Hero = () => {

    const scrollToReservations = () => {
        const reservationsSection = document.getElementById('reservations');
        reservationsSection?.scrollIntoView({ behavior: 'smooth' });
    };

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            >
                <Carousel
                    plugins={[plugin.current]}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <img src={heroImage} alt="" />
                        </CarouselItem>
                        <CarouselItem>
                            <img src={heroImage1} alt="" />
                        </CarouselItem>
                        <CarouselItem>
                            <img src={heroImage2} alt="" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>


            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90" />

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                    Aščinica BISTRICA
                </h1>
                <p className="text-xl md:text-2xl font-light mb-8 text-white/90 max-w-2xl mx-auto">
                    A charming restaurant that offers a delightful dining experience reflecting the rich culinary traditions of the region.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        onClick={scrollToReservations}
                        className="btn-gold text-lg px-8 py-4 min-w-[200px]"
                    >
                        Reserve a Table
                    </Button>
                    <Button
                        variant="outline"
                        className="text-lg px-8 py-4 min-w-[200px] border-white/30 bg-transparent hover:bg-white/10 hover:border-white/50 hover:text-white/40"
                        onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Menu
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default Hero;