import localFont from "next/font/local"
import { Barlow_Semi_Condensed } from "next/font/google";

export const eirian = localFont({
	src: [
		{
			path: "../../public/fonts/Eirian-Regular.ttf",
			weight: "400",
			style: "normal",
		}
	],
	display: "swap",
	variable: "--font-eirian",
});

export const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  display: "swap",
  variable: "--font-barlow",
});