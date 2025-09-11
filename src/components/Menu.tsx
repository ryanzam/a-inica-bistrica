import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import menuImage from "@/assets/cafe.jpg";

const menuData = {
    appetizers: [
        {
            name: "Kafa",
            description: "Fresh Blue Point oysters with creamed spinach, herbs, and Pernod",
            price: "1,50 KM",
            dietary: []
        },
        {
            name: "Kafa Velika",
            description: "House-made terrine with cherry compote and brioche toast",
            price: "2,00 KM",
            dietary: []
        },
        {
            name: "Cappuccino",
            description: "Creamy burrata with heirloom tomatoes, basil oil, and aged balsamic",
            price: "3,00 KM",
            dietary: []
        },
        {
            name: "Nescafe",
            description: "Creamy burrata with heirloom tomatoes, basil oil, and aged balsamic",
            price: "2,00 KM",
            dietary: []
        }
    ],
    mains: [
        {
            name: "Wagyu Beef Tenderloin",
            description: "8oz A5 Wagyu with truffle potato gratin and seasonal vegetables",
            price: "5,00 KM",
            dietary: ["gf"]
        },
        {
            name: "Chilean Sea Bass",
            description: "Miso-glazed sea bass with forbidden rice and bok choy",
            price: "9,00 KM",
            dietary: ["gf"]
        },
        {
            name: "Duck Confit",
            description: "Slow-cooked duck leg with cherry gastrique and wild mushroom risotto",
            price: "8,00 KM",
            dietary: ["gf"]
        },
        {
            name: "Lobster Thermidor",
            description: "Maine lobster with cognac cream sauce and herbed breadcrumbs",
            price: "10,00 KM",
            dietary: []
        }
    ],
    desserts: [
        {
            name: "Chocolate Soufflé",
            description: "Dark chocolate soufflé with vanilla bean ice cream (allow 20 minutes)",
            price: "7,00 KM",
            dietary: ["v"]
        },
        {
            name: "Crème Brûlée",
            description: "Classic vanilla custard with caramelized sugar and fresh berries",
            price: "6,00 KM",
            dietary: ["v", "gf"]
        },
        {
            name: "Tiramisu",
            description: "Traditional Italian dessert with espresso and mascarpone",
            price: "5,00 KM",
            dietary: ["v"]
        }
    ]
};

const getDietaryBadge = (dietary: string) => {
    const badges = {
        v: { label: "Vegetarian", className: "bg-green-100 text-green-800" },
        gf: { label: "Gluten Free", className: "bg-blue-100 text-blue-800" }
    };
    return badges[dietary as keyof typeof badges];
};

const MenuSection = ({ title, items }: { title: string; items: any[] }) => (

    <div className="mb-12">
        <h3 className="font-display text-3xl font-semibold text-white mb-8 text-center uppercase">
            {title}
        </h3>
        <div className="grid gap-6 md:grid-cols-2"  data-aos="fade-right">
            {items.map((item, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                            <h4 className="font-display text-xl font-semibold text-primary">
                                {item.name}
                            </h4>
                            <span className="text-accent-gold font-semibold text-lg ml-4">
                                {item.price}
                            </span>
                        </div>
                        <p className="text-muted-foreground mb-3 leading-relaxed">
                            {item.description}
                        </p>
                        {item.dietary.length > 0 && (
                            <div className="flex gap-2">
                                {item.dietary.map((diet: string) => {
                                    const badge = getDietaryBadge(diet);
                                    return (
                                        <Badge key={diet} className={badge?.className}>
                                            {badge?.label}
                                        </Badge>
                                    );
                                })}
                            </div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
);

const Menu = () => {
    return (
        <section id="menu" className="relative section-padding bg-secondary/40">

            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${menuImage})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />

            <div className="relative z-10 container-max">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Menu
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Crafted with the finest ingredients and inspired by both traditional and contemporary culinary techniques
                    </p>
                </div>

                <MenuSection title="Topli Napici" items={menuData.appetizers} />
                <MenuSection title="Hladni Napici" items={menuData.mains} />
                <MenuSection title="Desserts" items={menuData.desserts} />
            </div>
        </section>
    );
};

export default Menu;