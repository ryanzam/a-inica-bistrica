import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import contactImage from "@/assets/bistinica.jpg"

const Contacts = () => {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Address",
            details: ["Bravadžiluk 24, Sarajevo 71000, Bosnia ja Hertsegovina"]
        },
        {
            icon: Phone,
            title: "Phone",
            details: ["Reservations: +38761224016", "General Inquiries: +38761224016"]
        },
        {
            icon: Clock,
            title: "Hours",
            details: [
                "Monday - Friday: 6:30 AM - 3:00 PM",
                "Saturday : 6:30 AM - 1:30 PM",
                "Sunday - Closed"
            ]
        }
    ];

    return (
        <section id="contact" className="relative section-padding">

            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${contactImage})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />


            <div className="relative container-max z-10">
                <div className="text-center mb-16">
                    <h2 data-aos="fade-left" className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                        Visit Us
                    </h2>
                    <p data-aos="fade-right" className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Right after visiting National Museum of Bosnia and Herzegovina, come here for to enjoy meal.
                    </p>
                </div>

                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start" >
                    {/* Contact Information */}
                    <div className="space-y-6">
                        {contactInfo.map((item, index) => (
                            <Card key={index} className="shadow-elegant border-0 bg-white hover:shadow-xl transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-accent-gold/10 p-3 rounded-full">
                                            <item.icon className="w-6 h-6 text-accent-gold" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-display text-xl font-semibold text-primary mb-2">
                                                {item.title}
                                            </h3>
                                            <div className="space-y-1">
                                                {item.details.map((detail, detailIndex) => (
                                                    <p key={detailIndex} className="text-muted-foreground">
                                                        {detail}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Map Placeholder */}
                    <div className="relative">
                        <Card className="shadow-elegant border-0 overflow-hidden">
                            <CardContent className="p-0">
                                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center relative">
                                    <div className="text-center">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.8485722268756!2d18.4314891!3d43.858967199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8c84b96832f%3A0xf59ffa68e6beedac!2zQcWhxI1pbmljYSBCSVNUUklDQQ!5e0!3m2!1sen!2sfi!4v1757839803096!5m2!1sen!2sfi" width="600" height="450" loading="lazy"></iframe>                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Direction Button */}
                        <div className="mt-6 text-center">
                            <a
                                href="https://maps.app.goo.gl/LSmmB8CkSaQoVWTq8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 btn-elegant"
                            >
                                <MapPin className="w-4 h-4" />
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="mt-16 text-center">
                    <Card className="shadow-elegant border-0 bg-primary text-primary-foreground">
                        <CardContent className="p-8">
                            <h3 className="font-display text-2xl font-semibold mb-4">
                                Private Events & Catering
                            </h3>
                            <p className="text-lg mb-6 opacity-90">
                                Host your special occasion at Bella Vista. Our private dining rooms and catering services
                                are perfect for corporate events, celebrations, and intimate gatherings.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:events@cafeche.com"
                                    className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    events@ascinica-bistrica.com
                                </a>
                                <a
                                    href="tel:+15551234568"
                                    className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    +38761224016
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contacts;