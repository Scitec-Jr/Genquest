import "./globals.css";
import { eirian, barlow } from "./fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt" className={`${eirian.variable} ${barlow.variable}`} suppressHydrationWarning>
			<body>{children}</body>
		</html>
	);
}
