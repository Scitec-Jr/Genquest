import "./globals.css";
import { saira } from "./fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt" className={saira.variable} suppressHydrationWarning>
			<body>{children}</body>
		</html>
	);
}
