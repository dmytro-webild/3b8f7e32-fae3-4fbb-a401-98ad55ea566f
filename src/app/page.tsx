"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="inset"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Prenota",
          id: "contact",
        },
        {
          name: "Galleria",
          id: "gallery",
        },
        {
          name: "Recensioni",
          id: "testimonials",
        },
        {
          name: "Contatti",
          id: "footer",
        },
      ]}
      brandName="Osteria Alla Ghiacciaia"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Osteria Alla Ghiacciaia"
      description="Cucina tipica friulana nel cuore di Udine. Frico, cjarsons e i piatti storici del nostro territorio."
      buttons={[
        {
          text: "Prenota un Tavolo",
          href: "#contact",
        },
        {
          text: "Chiama Ora",
          href: "tel:0432502471",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-lula-kebab-with-fried-tomato-table_140725-11989.jpg?_wi=1",
          imageAlt: "Patio sul canale al tramonto",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-lula-kebab-with-fried-tomato-table_140725-11989.jpg?_wi=2",
          imageAlt: "Vista panoramica patio",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-lula-kebab-with-fried-tomato-table_140725-11989.jpg?_wi=3",
          imageAlt: "Atmosfera ristorante patio",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-lula-kebab-with-fried-tomato-table_140725-11989.jpg?_wi=4",
          imageAlt: "Dettaglio tavoli esterni",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-lula-kebab-with-fried-tomato-table_140725-11989.jpg?_wi=5",
          imageAlt: "Tramonto sul canale udine",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-lula-kebab-with-fried-tomato-table_140725-11989.jpg?_wi=6",
          imageAlt: "Osteria al calar del sole",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="La Nostra Storia"
      description="Antica osteria dall'atmosfera rétro, con patio sul canale e piatti tradizionali del Nord Italia. Un locale amato da generazioni di udinesi e visitatori."
      bulletPoints={[
        {
          title: "Cucina Tipica",
          description: "Piatti storici del Friuli",
        },
        {
          title: "Patio sul Canale",
          description: "Location suggestiva",
        },
        {
          title: "Atmosfera Rétro",
          description: "Tradizione dal 1900",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/confident-chef-wearing-uniform-posing-with-his-arms-crossed-looking-camera-restaurant-kitchen_613910-21352.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Frico e Polenta",
          price: "14,00 €",
          imageSrc: "http://img.b2bpic.net/free-photo/raclette-dish-made-with-cheese-assortment-delicious-food_23-2149514119.jpg",
        },
        {
          id: "p2",
          name: "Tagliolini al San Daniele",
          price: "16,00 €",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-fork-with-pasta-with-tomato-sauce-parmesan-cheese_140725-12887.jpg",
        },
        {
          id: "p3",
          name: "Cjarsons Tradizionali",
          price: "13,00 €",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-maasdam-cheese-with-green-olives-bowls-stand-cucumber-with-tomato_141793-51721.jpg",
        },
      ]}
      title="Piatti Popolari"
      description="Scopri le specialità della nostra cucina friulana tradizionale."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Marco Rossi",
          handle: "@mrossi",
          testimonial: "Il miglior frico di Udine, atmosfera magica sul canale.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-people-spending-time-together_23-2149152906.jpg?_wi=1",
        },
        {
          id: "2",
          name: "Elena Bianchi",
          handle: "@ebianchi",
          testimonial: "Cjarsons fatti a mano spettacolari, assolutamente da provare!",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-friends-date_23-2149073428.jpg",
        },
        {
          id: "3",
          name: "Luca Verdi",
          handle: "@lverdi",
          testimonial: "Ottima selezione di vini, staff cordiale e professionale.",
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-service_1098-16131.jpg",
        },
        {
          id: "4",
          name: "Giulia Neri",
          handle: "@gneri",
          testimonial: "Location incantevole e cibo della tradizione autentico.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiling-young-woman-gesturing_23-2147910322.jpg",
        },
        {
          id: "5",
          name: "Paolo Fabbri",
          handle: "@pfabbri",
          testimonial: "Un tuffo nella storia di Udine con piatti fatti a regola d'arte.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-people-spending-time-together_23-2149152906.jpg?_wi=2",
        },
      ]}
      title="Cosa dicono i nostri ospiti"
      description="Segnalati da guide locali e amati dai clienti."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      title="Prenota il Tuo Tavolo"
      description="Compila il form per prenotare o chiamaci direttamente per richieste urgenti."
      mediaAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/side-view-lula-kebab-with-fried-tomato-table_140725-11989.jpg?_wi=7"
      tag="Prenotazioni"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Contatti",
          items: [
            {
              label: "Via Antonio Zanon, 13",
              href: "#",
            },
            {
              label: "Tel: 0432 502471",
              href: "tel:0432502471",
            },
            {
              label: "info@osteriaallaghiacciaia.com",
              href: "mailto:info@osteriaallaghiacciaia.com",
            },
          ],
        },
        {
          title: "Orari",
          items: [
            {
              label: "Lun-Dom: 12:00 - 23:00",
              href: "#",
            },
            {
              label: "Chiuso il martedì",
              href: "#",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Facebook",
              href: "#",
            },
            {
              label: "Instagram",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Osteria Alla Ghiacciaia. Tutti i diritti riservati."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
