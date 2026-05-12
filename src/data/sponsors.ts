import type { Sponsor } from "@/types/sponsors";

import Omhero from "@/assets/sponsors/omhero.svg";
import Esss from "@/assets/sponsors/esss.svg";
import Batemo from "@/assets/sponsors/batemo.svg";
import Hexagon from "@/assets/sponsors/hexagon.svg";
import Nigrelli from "@/assets/sponsors/nigrelli.svg";
import Pirelli from "@/assets/sponsors/pirelli.svg";
import Tesla from "@/assets/sponsors/tesla.svg";
import Loctite from "@/assets/sponsors/loctite.svg";
import Rosenberger from "@/assets/sponsors/rosenberger.svg";
import Pitarresi from "@/assets/sponsors/pitarresi.png";
import Hypertec from "@/assets/sponsors/hypertec.svg";
import Fenice from "@/assets/sponsors/fenice.svg";
import Qnap from "@/assets/sponsors/qnap.svg";
import Crg from "@/assets/sponsors/crg.svg";
import Sensata from "@/assets/sponsors/sensata.svg";
import Bender from "@/assets/sponsors/bender.svg";
import Michelangelo from "@/assets/sponsors/michelangelo.png";

export const sponsors: readonly Sponsor[] = [
  // Main
  {
    name: "Omhero",
    href: "https://www.omhero.tech/",
    tier: "main",
    kind: "svg",
    component: Omhero,
  },
  // Diamond
  {
    name: "ESSS",
    href: "https://www.esss.com/it",
    tier: "diamond",
    kind: "svg",
    component: Esss,
  },
  {
    name: "Batemo",
    href: "https://www.batemo.com",
    tier: "diamond",
    kind: "svg",
    component: Batemo,
  },
  {
    name: "Hexagon",
    href: "https://www.hexagon.com",
    tier: "diamond",
    kind: "svg",
    component: Hexagon,
  },
  // Platinum
  {
    name: "Nigrelli",
    href: "https://grupponigrelli.it",
    tier: "platinum",
    kind: "svg",
    component: Nigrelli,
  },
  // Gold
  {
    name: "Pirelli",
    href: "https://pirelli.com",
    tier: "gold",
    kind: "svg",
    component: Pirelli,
  },
  {
    name: "Tesla",
    href: "https://www.tesla.com",
    tier: "gold",
    kind: "svg",
    component: Tesla,
  },
  {
    name: "Michelangelo",
    href: "https://www.formazionemichelangelo.it/",
    tier: "gold",
    kind: "png",
    src: Michelangelo,
    alt: "Michelangelo",
  },
  // Silver
  {
    name: "Loctite",
    href: "https://www.loctite.com",
    tier: "silver",
    kind: "svg",
    component: Loctite,
  },
  {
    name: "Rosenberger",
    href: "https://www.rosenberger.com/",
    tier: "silver",
    kind: "svg",
    component: Rosenberger,
  },
  // Bronze
  {
    name: "Pitarresi",
    href: "https://www.cialdapitarresi.com/",
    tier: "bronze",
    kind: "png",
    src: Pitarresi,
    alt: "Pitarresi",
  },
  {
    name: "Hypertec",
    href: "https://hypertec.it",
    tier: "bronze",
    kind: "svg",
    component: Hypertec,
  },
  {
    name: "Fenice",
    href: "https://fenicepalermo.it",
    tier: "bronze",
    kind: "svg",
    component: Fenice,
  },
  {
    name: "Qnap",
    href: "https://www.qnap.com",
    tier: "bronze",
    kind: "svg",
    component: Qnap,
  },
  {
    name: "Crg",
    href: "https://kartcrg.com",
    tier: "bronze",
    kind: "svg",
    component: Crg,
  },
  {
    name: "Sensata",
    href: "https://sensata.com",
    tier: "bronze",
    kind: "svg",
    component: Sensata,
  },
  {
    name: "Bender",
    href: "https://bender-it.com",
    tier: "bronze",
    kind: "svg",
    component: Bender,
  },
];

export const bannerSponsors: readonly Sponsor[] = [
  ...sponsors.filter((s) => s.tier === "silver"),
  ...sponsors.filter((s) => s.tier === "bronze"),
  ...sponsors.filter((s) => s.tier === "main"),
  ...sponsors.filter((s) => s.tier === "diamond"),
  ...sponsors.filter((s) => s.tier === "platinum"),
  ...sponsors.filter((s) => s.tier === "gold"),
];
