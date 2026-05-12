import type { ImageMetadata } from "astro";

export type SponsorTier = "main" | "diamond" | "platinum" | "gold" | "silver" | "bronze";

export type SponsorKind = "svg" | "png";

export type SvgComponent = (props: Record<string, unknown>) => unknown;

interface BaseSponsor {
  readonly name: string;
  readonly href: string;
  readonly tier: SponsorTier;
}

export interface SvgSponsor extends BaseSponsor {
  readonly kind: "svg";
  readonly component: SvgComponent;
}

export interface PngSponsor extends BaseSponsor {
  readonly kind: "png";
  readonly src: ImageMetadata;
  readonly alt: string;
}

export type Sponsor = SvgSponsor | PngSponsor;
