"use client";

import { useState } from "react";
import LocalizedLink from "@/components/LocalizedLink";
import Image from "next/image";
import Dropdown from "./Dropdown";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Header({ locale, dict }: any) {
	const [open, setOpen] = useState(false);

	return (
		<header className="relative py-2 px-4 md:px-8 lg:px-16 bg-(--main-color) text-(--inactive-color) text-sm z-50">
			<nav className="flex items-center max-w-360 mx-auto">
				<LocalizedLink locale={locale} href="/" className="mr-auto">
					<Image src="/assets/global/logo.png" alt="Genquest" width={150} height={50} />
				</LocalizedLink>

				<button type="button" onClick={() => setOpen((prev) => !prev)} className="sm:hidden" aria-expanded={open} aria-label="Abrir menu">
					<Image
                        src="/assets/global/menu.png"
                        alt="Menu"
                        width={44}
                        height={44}
                        className="cursor-pointer"
                    />
				</button>

				<div className="hidden sm:flex gap-4 items-center">
					<LocalizedLink locale={locale} href="/">
						{dict.home}
					</LocalizedLink>

					<Dropdown trigger={dict.servicesAndPerformance}>
						<div className="flex flex-col gap-2">
							<LocalizedLink locale={locale} href="/about">
								{dict.portfolio}
							</LocalizedLink>

							<LocalizedLink locale={locale} href="/performance">
								{dict.performance}
							</LocalizedLink>
						</div>
					</Dropdown>

					<Dropdown trigger={dict.informations}>
						<div className="flex flex-col gap-2">
							<LocalizedLink locale={locale} href="/about">
								{dict.about}
							</LocalizedLink>

							<LocalizedLink locale={locale} href="/performance">
								{dict.articles}
							</LocalizedLink>

							<LocalizedLink locale={locale} href="/performance">
								{dict.patientsAndFamily}
							</LocalizedLink>
						</div>
					</Dropdown>

					<LocalizedLink locale={locale} href="/performance">
						{dict.contact}
					</LocalizedLink>
				</div>
			</nav>

			<div
				className={`
                    sm:hidden
                    absolute left-0 right-0 top-full z-50
                    bg-(--main-color)

                    transition-all duration-300 ease-out
                    ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
                `}
			>
				<div className="flex flex-col gap-4 p-4">
					<LocalizedLink locale={locale} href="/">
						{dict.home}
					</LocalizedLink>

					<Dropdown trigger={dict.servicesAndPerformance}>
						<div className="flex flex-col gap-2">
							<LocalizedLink locale={locale} href="/about">
								{dict.portfolio}
							</LocalizedLink>

							<LocalizedLink locale={locale} href="/performance">
								{dict.performance}
							</LocalizedLink>
						</div>
					</Dropdown>

					<Dropdown trigger={dict.informations}>
						<div className="flex flex-col gap-2">
							<LocalizedLink locale={locale} href="/about">
								{dict.about}
							</LocalizedLink>

							<LocalizedLink locale={locale} href="/performance">
								{dict.articles}
							</LocalizedLink>

							<LocalizedLink locale={locale} href="/performance">
								{dict.patientsAndFamily}
							</LocalizedLink>
						</div>
					</Dropdown>

					<LocalizedLink locale={locale} href="/performance">
						{dict.contact}
					</LocalizedLink>
				</div>
			</div>
		</header>
	);
}
