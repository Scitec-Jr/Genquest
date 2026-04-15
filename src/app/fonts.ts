import { Barlow_Semi_Condensed, Orbitron } from "next/font/google";

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  display: "swap",
  variable: "--font-orbitron",
});

export const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  display: "swap",
  variable: "--font-barlow",
});