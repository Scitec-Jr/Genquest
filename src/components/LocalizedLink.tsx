"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { ReactNode } from "react";

type Props = Omit<LinkProps, "href"> & {
	locale: Locale;
	href: string;
	children: ReactNode;
	activeClassName?: string;
	className?: string;
};

export default function LocalizedLink({ locale, href, children, activeClassName = "text-(--accent-color)", className = "", ...props }: Props) {
	const pathname = usePathname();

	const localizedHref = `/${locale}${href === "/" ? "" : href}`;

	const isHome = href === "/";

	const isActive = isHome ? pathname === `/${locale}` || pathname === `/${locale}/` : pathname === localizedHref || pathname.startsWith(`${localizedHref}/`);

	const finalClassName = `
    ${className}
    ${isActive ? activeClassName : ""}
  `.trim();

	return (
		<Link href={localizedHref} className={finalClassName} {...props}>
			{children}
		</Link>
	);
}
