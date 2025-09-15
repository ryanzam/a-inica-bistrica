import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import { useTranslation } from 'react-i18next';
import ReactFlagsSelect from "react-flags-select";

const NavBar = () => {
  const locale = navigator.language.split("-")[0];

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [selected, setSelected] = useState(locale === "en" ? "US" : "BA");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);


    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: t("nav.menu"), href: "#menu" },
    { name: t("nav.reservation"), href: "#reservations" },
    { name: t("nav.contact"), href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const onSelectedChange = (flag: string) => {
    setSelected(flag);
    i18n.changeLanguage(flag === "US" ? "en" : "ba");
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/30 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="container-max px-6">
        <div className="grid place-items-center grid-cols-3 h-16 md:h-20">

          <div className="flex items-center space-x-4">
            <span className={`font-display font-bold transition-colors ${isScrolled ? 'text-primary' : 'text-orange-300'
              }`}>
              +38761224016
            </span>
            <ReactFlagsSelect
              className=""
              selected={selected}
              onSelect={(flag) => onSelectedChange(flag)}
              countries={["US", "BA"]}
              customLabels={{ US: " ", BA: " ", }}
            />
          </div>

          {/* Logo */}
          <div className="flex justify-center flex-col items-center">
            <h1 className={`cursor-pointer font-display text-xl md:text-2xl font-bold transition-colors ${isScrolled ? 'text-primary' : 'text-white'
              }`}>
              Aščinica
            </h1>
            <span className="block text-xl text-orange-300">
              BISTRICA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`cursor-pointer font-medium transition-colors hover:text-accent-gold ${isScrolled ? 'text-primary' : 'text-orange-300'
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/50 border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-primary hover:bg-secondary/50 rounded-md font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;