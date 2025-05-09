import {
  Courier_Prime,
  Cormorant_Upright,
  Merriweather,
  Space_Mono,
  Alexandria
} from "next/font/google";

export const cormorantFont = Cormorant_Upright({
  weight: "700",
  subsets: ["latin"],
});

export const sansFont = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
});

export const monoFont = Space_Mono({
  weight: "400",
  subsets: ["latin-ext"],
});

export const NormalTextFont = Merriweather({
  weight: "400",
  subsets: ["latin-ext"],
});

export const styledFont = Alexandria({
  weight: "400",
  subsets: ["latin-ext"],
});
