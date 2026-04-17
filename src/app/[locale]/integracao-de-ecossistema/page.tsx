import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import Image from "next/image";
import Carousel from "@/components/Carousel";

export default async function Activity({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<main>
			<section className="bg-(--main-color)">
				<div className="flex flex-col md:flex-row">
					<div className="relative flex flex-col justify-center flex-1 p-4 shadow-[4px_4px_15px_20px_var(--main-color)] z-10">
						<h1 className="mb-4 text3xl md:text-5xl text-(--accent-color) secondary-font">{dict.integration.heroTitle}</h1>

					<p className="mb-4 text-xl text-white">{dict.integration.heroText}</p>
					<ul className="ps-4 text-xl text-white list-disc">
						<li>{dict.integration.heroItem1}</li>
						<li>{dict.integration.heroItem2}</li>
						<li>{dict.integration.heroItem3}</li>
						<li>{dict.integration.heroItem4}</li>
						</ul>
					</div>

					<div className="flex-1">
						<Image src="/assets/images/heroEcosystem.png" alt="Genquest" width={700} height={400} className="w-full h-full max-h-120" />
					</div>
				</div>
			</section>

			<section className="relative py-8 px-4 md:px-8 bg-(--accent-color) z-20">
				<div className="max-w-360 mx-auto">
					<h2 className="mb-8 text-4xl secondary-font text-white text-center">{dict.patientsAndFamily.testimonialTitle}</h2>

					<Carousel showDots={false} leftArrowSrc={"/assets/icons/carouselArrowLeft2.png"} rightArrowSrc={"/assets/icons/carouselArrowRight2.png"}>
						<div className="min-w-full md:min-w-auto md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
							<div className="p-8 bg-white rounded-4xl text-black">
								<p className="mb-8">{dict.patientsAndFamily.testimonialText}</p>

								<h3 className="truncate">{dict.patientsAndFamily.testimonialAuthor}</h3>
								<h3>{dict.integration.testimonialRoleTitle}</h3>
							</div>
						</div>

                        <div className="min-w-full md:min-w-auto md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
							<div className="p-8 bg-white rounded-4xl text-black">
								<p className="mb-8">{dict.patientsAndFamily.testimonialText}</p>

								<h3 className="truncate">{dict.patientsAndFamily.testimonialAuthor}</h3>
								<h3>{dict.integration.testimonialRoleTitle}</h3>
							</div>
						</div>

                        <div className="min-w-full md:min-w-auto md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
							<div className="p-8 bg-white rounded-4xl text-black">
								<p className="mb-8">{dict.patientsAndFamily.testimonialText}</p>

								<h3 className="truncate">{dict.patientsAndFamily.testimonialAuthor}</h3>
								<h3>{dict.integration.testimonialRoleTitle}</h3>
							</div>
						</div>

                        <div className="min-w-full md:min-w-auto md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
							<div className="p-8 bg-white rounded-4xl text-black">
								<p className="mb-8">{dict.patientsAndFamily.testimonialText}</p>

								<h3 className="truncate">{dict.patientsAndFamily.testimonialAuthor}</h3>
								<h3>{dict.integration.testimonialRoleTitle}</h3>
							</div>
						</div>
					</Carousel>

					<a href="" className="block w-fit mt-8 ms-auto py-2 px-4 bg-white rounded-full text-lg">
						{dict.integration.shareStoryButton}
					</a>
				</div>
			</section>

			<section className="relative py-8 px-4 md:px-8 bg-white z-20">
				<div className="max-w-360 mx-auto">
					<h2 className="mb-8 text-4xl secondary-font text-(--accent-color) text-center">{dict.integration.partnersTitle}</h2>

					<Carousel autoplay leftArrowSrc={"/assets/icons/carouselArrowLeft2.png"} rightArrowSrc={"/assets/icons/carouselArrowRight2.png"} showDots={false} align="center">
						<div className="flex md:flex-[0_0_50%] lg:flex-[0_0_33.4%] justify-center min-w-full md:min-w-auto p-4">
							<div className="p-4 rounded-xl shadow-md">
								<Image src="/assets/images/partner1.png" alt={dict.integration.partner1Alt} width={300} height={200} className="w-full mb-4" />
							</div>
						</div>

						<div className="flex md:flex-[0_0_50%] lg:flex-[0_0_33.4%] justify-center min-w-full md:min-w-auto p-4">
							<div className="p-4 rounded-xl shadow-md">
								<Image src="/assets/images/partner2.png" alt={dict.integration.partner2Alt} width={300} height={200} className="w-full mb-4" />
							</div>
						</div>

						<div className="flex md:flex-[0_0_50%] lg:flex-[0_0_33.4%] justify-center min-w-full md:min-w-auto p-4">
							<div className="p-4 rounded-xl shadow-md">
								<Image src="/assets/images/partner3.png" alt={dict.integration.partner3Alt} width={300} height={200} className="w-full mb-4" />
							</div>
						</div>
					</Carousel>
				</div>
			</section>

			<section className="bg-(--accent-color)">
				<div className="flex flex-col md:flex-row">
					<div className="relative flex flex-col justify-center flex-1 px-8 py-4 shadow-[4px_4px_15px_20px_var(--accent-color)] z-10">
						<h1 className="mb-4 text-3xl text-white secondary-font">{dict.integration.contactTitle}</h1>

						<a href="mailto:contato@genquest.com.br" className="text-xl">
							<Image src="/assets/icons/mail2.png" alt={dict.integration.emailAlt} width={16} height={16} className="inline-block mr-1" />
							{dict.integration.emailLink}
						</a>
						<a href="tel:+5511963767888" className="text-xl">
							<Image src="/assets/icons/whatsapp2.png" alt={dict.integration.phoneAlt} width={16} height={16} className="inline-block mr-1" />
							{dict.integration.phoneLink}
						</a>
					</div>

					<div className="flex-1">
						<Image src="/assets/images/heroContact.png" alt={dict.integration.contactImageAlt} width={500} height={200} className="w-full h-full max-h-60" />
					</div>
				</div>
			</section>
		</main>
	);
}
