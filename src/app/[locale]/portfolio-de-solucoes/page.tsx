import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import Image from "next/image";
import Carousel from "@/components/Carousel";

export default async function Portfolio({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<main>
			<section className="bg-(--main-color) p-8">
				<div className="max-w-360 mx-auto">
					<h1 className="text-6xl text-(--accent-color) text-center">{dict.portfolio.title}</h1>
				</div>
			</section>

			<section className="py-8 px-4 md:pe-8 md:ps-0">
				<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center max-w-360 mx-auto">
					<Image src="/assets/images/heroPortfolio.png" alt="Portfolio de Soluções" width={600} height={400} className="md:w-1/2" />

					<div className="flex-1">
						<h2 className="text-2xl font-semibold text-center">{dict.portfolio.heroTitle}</h2>
						<p className="text-lg">{dict.portfolio.heroText}</p>
					</div>
				</div>
			</section>

			<section className="bg-(--main-color) py-8 px-4 md:px-8">
				<div className="max-w-360 mx-auto text-(--accent-color)">
					<Carousel >
						<div className="flex flex-col md:flex-row items-center gap-8 min-w-full px-12">
							<div>
								<h2 className="mb-4 text-4xl font-semibold">{dict.portfolio.carouselTitle1} 1</h2>
								<p>{dict.portfolio.carouselText1}</p>
							</div>

							<div>
								<Image src="/assets/images/placeholderPortfolioCarousel1.png" alt="Solução 1" width={600} height={400} />
							</div>
						</div>

						<div className="flex flex-col md:flex-row items-center gap-8 min-w-full px-12">
							<div>
								<h2 className="mb-4 text-4xl font-semibold">{dict.portfolio.carouselTitle1} 2</h2>
								<p>{dict.portfolio.carouselText1}</p>
							</div>

							<div>
								<Image src="/assets/images/placeholderPortfolioCarousel1.png" alt="Solução 1" width={600} height={400} />
							</div>
						</div>

						<div className="flex flex-col md:flex-row items-center gap-8 min-w-full px-12">
							<div>
								<h2 className="mb-4 text-4xl font-semibold">{dict.portfolio.carouselTitle1} 3</h2>
								<p>{dict.portfolio.carouselText1}</p>
							</div>

							<div>
								<Image src="/assets/images/placeholderPortfolioCarousel1.png" alt="Solução 1" width={600} height={400} />
							</div>
						</div>
					</Carousel>
				</div>
			</section>

			<section className="py-8 px-4 md:px-8">
				<div className="flex flex-wrap gap-8 justify-center max-w-360 mx-auto">
					<div className="flex gap-4 w-96 p-4 sm:p-6 bg-(--main-color) rounded-xl text-(--accent-color)">
						<div className="flex items-center flex-1">
							<Image src="/assets/icons/representation.png" alt="Solução 1" width={80} height={80} className="w-full" />
						</div>

						<div className="flex-5">
							<h2 className="text-xl">{dict.portfolio.accessCard}</h2>
							<p>Lorem ipsum dolor sit amet consectetur.</p>
						</div>
					</div>

					<div className="flex gap-4 w-96 p-4 sm:p-6 bg-(--main-color) rounded-xl text-(--accent-color)">
						<div className="flex items-center flex-1">
							<Image src="/assets/icons/representation.png" alt="Solução 1" width={80} height={80} className="w-full" />
						</div>

						<div className="flex-5">
							<h2 className="text-xl">{dict.portfolio.accessCard}</h2>
							<p>Lorem ipsum dolor sit amet consectetur.</p>
						</div>
					</div>

					<div className="flex gap-4 w-96 p-4 sm:p-6 bg-(--main-color) rounded-xl text-(--accent-color)">
						<div className="flex items-center flex-1">
							<Image src="/assets/icons/representation.png" alt="Solução 1" width={80} height={80} className="w-full" />
						</div>

						<div className="flex-5">
							<h2 className="text-xl">{dict.portfolio.accessCard}</h2>
							<p>Lorem ipsum dolor sit amet consectetur.</p>
						</div>
					</div>

					<div className="flex gap-4 w-96 p-4 sm:p-6 bg-(--main-color) rounded-xl text-(--accent-color)">
						<div className="flex items-center flex-1">
							<Image src="/assets/icons/representation.png" alt="Solução 1" width={80} height={80} className="w-full" />
						</div>

						<div className="flex-5">
							<h2 className="text-xl">{dict.portfolio.accessCard}</h2>
							<p>Lorem ipsum dolor sit amet consectetur.</p>
						</div>
					</div>
				</div>

				<a href="" className="block w-fit mt-8 mx-auto p-4 px-8 bg-(--main-color) rounded-full text-xl text-(--accent-color)">
					{dict.portfolio.contactButton}
				</a>
			</section>
		</main>
	);
}
