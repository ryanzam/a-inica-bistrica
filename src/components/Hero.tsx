import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
    const scrollToReservations = () => {
        const reservationsSection = document.getElementById('reservations');
        reservationsSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70" />

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                    Cafe Che
                </h1>
                <p className="text-xl md:text-2xl font-light mb-8 text-white/90 max-w-2xl mx-auto">
                    Right after visiting National Museum of Bosnia and Herzegovina, come here for a meal. Great coffee is among the best drinks to order
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