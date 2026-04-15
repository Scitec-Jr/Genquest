import "./globals.css";
import { orbitron, barlow } from "./fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt" className={`${orbitron.variable} ${barlow.variable}`} suppressHydrationWarning>
			<body>{children}</body>
		</html>
	);
}
