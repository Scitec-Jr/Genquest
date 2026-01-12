import "./globals.css";
import {saira} from "./fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR" className={saira.variable}>
			<body>{children}</body>
		</html>
	);
}
