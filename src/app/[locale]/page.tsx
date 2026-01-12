import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<main>
			<section className="w-full bg-(--main-color)">
				<div className="flex flex-col-reverse md:flex-row max-w-360 mx-auto">
					<div className="flex flex-col items-center justify-center flex-1 py-8">
						<Image src="/assets/global/logo2.png" alt="Logo" width={200} height={200} className="hidden md:block" />
						<h1 className="text-(--accent-color)">{dict.home.slogan}</h1>
					</div>

					<div className="flex flex-1">
						<div className="relative w-full">
							<Image src="/assets/images/client.png" alt="Cliente" width={200} height={200} className="w-full h-full" />
							<a href="" className="absolute bottom-8 left-1/2 -translate-x-1/2 w-max p-4 bg-white border-2 rounded-full">
								{dict.home.clientButton}
							</a>
						</div>

						<div className="relative w-full">
							<Image src="/assets/images/partner.png" alt="Parceiro" width={200} height={200} className="w-full h-full" />
							<a href="" className="absolute bottom-8 left-1/2 -translate-x-1/2 w-max p-4 bg-white border-2 rounded-full">
								{dict.home.partnerButton}
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="relative z-10 pb-8 px-4 md:px-8 lg:px-16 bg-(--main-color)">
				<div className="max-w-360 mx-auto">
					<div className="shadow-[4px_4px_15px_20px_var(--main-color)]">
						<Image src="/assets/icons/arrowDown.png" alt="Seta para baixo" width={44} height={44} className="mb-4 mx-auto" />
					</div>

					<div className="flex flex-col md:flex-row gap-16 items-center text-(--accent-color) text-2xl">
						<Image src="/assets/images/heroInovation.png" alt="Ilustração" width={400} height={350} />

						<div>
							<h2>{dict.home.heroInovationTitle}</h2>
							<p>{dict.home.heroInovationText}</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-8 px-4 md:px-8 lg:px-16 bg-(--accent-color)">
				<div className="max-w-360 mx-auto">
					<div className="flex flex-col-reverse md:flex-row gap-16 items-center text-black text-2xl">
						<div>
							<h2>{dict.home.heroReceptionTitle}</h2>
							<p>{dict.home.heroReceptionText}</p>
						</div>

						<Image src="/assets/images/heroReception.png" alt="Ilustração" width={400} height={350} />
					</div>
				</div>
			</section>

			<section className="py-8 px-4 md:px-8 lg:px-16">
				<div className="max-w-360 mx-auto">
					<div className="flex flex-col md:flex-row gap-16 items-center text-(--main-color) text-2xl">
						<Image src="/assets/images/heroEthic.png" alt="Ilustração" width={400} height={350} />

						<div>
							<h2>{dict.home.heroEthicTitle}</h2>
							<p>{dict.home.heroEthicText}</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
