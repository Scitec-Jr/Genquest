import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import Image from "next/image";
import Carousel from "@/components/Carousel";

export default async function Portfolio({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<main>
			<section className="relative bg-(--main-color) p-8 z-20">
				<div className="max-w-360 mx-auto">
					<h1 className="text-6xl secondary-font text-(--accent-color) text-center">{dict.portfolio.title}</h1>
				</div>
			</section>

			<section className="bg-white">
				<div className="flex flex-col md:flex-row">
					<div className="flex-1">
						<Image src="/assets/images/heroSolution.png" alt="Genquest" width={700} height={400} className="w-full h-full max-h-120" />
					</div>

					<div className="relative flex flex-col justify-center flex-1 p-4 md:pe-8 lg:pe-16 shadow-[4px_4px_15px_20px_white] z-10">
						<p className="mb-4 text-xl">{dict.services.heroText}</p>
					</div>
				</div>
			</section>

            <section className="relative bg-(--main-color) py-8 px-4 md:px-8 lg:px-16 z-20">
				<div className="max-w-360 mx-auto text-(--accent-color)">
					<Carousel>
						<div className="flex flex-col md:flex-row items-center gap-8 min-w-full px-4 text-center">
							<div>
								<h2 className="mb-4 secondary-font text-4xl font-semibold">{dict.portfolio.carouselTitle1}</h2>
								<p>{dict.portfolio.carouselText1}</p>
							</div>

							<div>
								<Image src="/assets/images/accessConsulting.png" alt="Solução 1" width={600} height={400} />
							</div>
						</div>

						<div className="flex flex-col md:flex-row items-center gap-8 min-w-full px-4 text-center">
							<div>
								<h2 className="mb-4 secondary-font text-4xl font-semibold">{dict.services.carouselTitle2}</h2>
								<p>{dict.services.carouselText2}</p>
							</div>

							<div className="text-left">
								<ol className="list-decimal">
                                    <li>{dict.services.manufacturersTitle}</li>
                                    <ul className="mb-4 ps-4 list-disc">
                                        <li>{dict.services.manufacturersItem1}</li>
                                        <li>{dict.services.manufacturersItem2}</li>
                                        <li>{dict.services.manufacturersItem3}</li>
                                    </ul>

                                    <li>{dict.services.importersTitle}</li>
                                    <ul className="ps-4 list-disc">
                                        <li>{dict.services.importersItem1}</li>
                                        <li>{dict.services.importersItem2}</li>
                                        <li>{dict.services.importersItem3}</li>
                                        <li>{dict.services.importersItem4}</li>
                                    </ul>
                                </ol>
							</div>
						</div>

                        <div className="flex flex-col md:flex-row items-center gap-8 min-w-full px-4 text-left">
							<div>
								<h2 className="mb-4 secondary-font text-4xl font-semibold">{dict.services.carouselTitle3}</h2>
								<p>{dict.services.carouselText3}</p>
                                <ol className="list-decimal ps-4">
                                    <li>{dict.services.softLandingItem1}</li>
                                    <li>{dict.services.softLandingItem2}</li>
                                    <li>{dict.services.softLandingItem3}</li>
                                </ol>
							</div>

							<div>
								<Image src="/assets/images/softLanding.png" alt="Solução 1" width={600} height={400} />
							</div>
						</div>
					</Carousel>
				</div>
			</section>

			<section className="relative py-8 px-4 md:px-8 lg:px-16 bg-white z-20">
			<h2 className="mb-4 text-4xl secondary-font text-(--accent-color) text-center">{dict.services.researchTitle}</h2>

                <Image src="/assets/images/qrcode.png" alt={dict.services.researchAlt} width={200} height={200} className="p-4 float-left" />

                <p>{dict.services.researchText1}</p>
                <br />
                <p>{dict.services.researchText2}</p>
                <br />
                <p>{dict.services.researchText3}</p>
                <br />
                <p>{dict.services.researchLink}</p>
                <br />
                <p>{dict.services.researchText4}</p>
            </section>

            <section className="bg-(--accent-color)">
				<div className="flex flex-col md:flex-row">
					<div className="relative flex flex-col justify-center flex-1 p-4 md:ps-8 lg:ps-16 shadow-[4px_4px_15px_20px_var(--accent-color)] z-10">
                        <h2 className="mb-4 text-4xl secondary-font text-(--main-color)">{dict.services.ctaTitle}</h2>

					<p className="mb-4 text-xl">{dict.services.ctaText}</p>
					</div>

					<div className="flex-1">
						<Image src="/assets/images/heroMarketing.png" alt="Genquest" width={700} height={400} className="w-full h-full max-h-120" />
					</div>
				</div>
			</section>
		</main>
	);
}
