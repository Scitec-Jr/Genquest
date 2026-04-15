import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<main>
			<section className="bg-(--dark-color) h-120">
				<div className="relative h-full">
					<Image src="/assets/images/heroHome.png" alt="Genquest" width={1400} height={400} className="w-full max-w-180 h-full ms-auto" />
					<div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white">
						<h1 className="mb-6 text-3xl md:text-4xl secondary-font w-84 md:w-100">{dict.home.slogan}</h1>

						<a href="#" className="px-4 py-1 bg-(--accent-color) rounded-full">
							{dict.home.contactButton}
						</a>
					</div>
				</div>
			</section>

			<section className="relative z-10 pb-16">
				<div className="max-w-360 mx-auto">
					<div className="shadow-[4px_4px_15px_20px_white]">
						<Image src="/assets/icons/arrowDown.png" alt="Seta para baixo" width={44} height={44} className="mb-4 mx-auto" />
					</div>

					<div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center px-4 md:px-8 lg:px-16">
						<div className="flex-2">
							<h2 className="mb-2 text-(--main-color) secondary-font font-medium text-3xl">Por que?</h2>

							<p className="text-2xl font-medium">A genquest nasce com o propósito verdadeiro e compromisso com impacto real na vida das pessoas.</p>
						</div>

						<div className="flex-1 px-4 py-6 bg-(--accent-color) rounded-3xl border">
							<h2 className="mb-2 text-2xl secondary-font text-center">Visão</h2>

							<p className="text-lg">Construir um cenário em que as necessidades médicas não atendidas se tornem raras, conectando a inovação ao paciente de forma cada vez mais eficiente, segura e sustentável, no Brasil.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-8 px-4 md:px-8 lg:px-16 bg-(--accent-color)">
				<div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 items-center px-4 md:px-8 lg:px-16">
                    <div className="flex-1 px-4 py-6 bg-white rounded-3xl border">
						<h2 className="mb-2 text-2xl secondary-font text-center">Missão</h2>

						<p className="text-lg">Humanizar a jornada de acesso à inovação em saúde, oferecendo soluções completas para viabilizar terapias com responsabilidade, excelência, sensibilidade e foco no acolhimento do paciente.</p>
					</div>

					<div className="flex-2 text-right">
						<h2 className="mb-2 text-white secondary-font font-medium text-3xl">O que?</h2>

						<p className="text-2xl font-medium">Cuidado e suporte centrados no paciente. Compromisso com as pessoas e suas jornadas.</p>
					</div>
				</div>
			</section>

            <section className="py-8 px-4 md:px-8 lg:px-16 bg-(--main-color)">
				<div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center px-4 md:px-8 lg:px-16">
                    <div className="flex-2 w-full">
						<h2 className="mb-2 text-(--accent-color) secondary-font font-medium text-3xl text-left">Como?</h2>

						<p className="text-white text-2xl font-medium">Cada dia importa.</p>
					</div>

                    <div className="flex-1 w-full px-4 py-6 bg-white rounded-3xl border">
						<h2 className="mb-2 text-2xl text-(--main-color) secondary-font text-center">Valores</h2>

						<ul className="list-disc ps-6">
                            <li>Humanização e acolhimento ao paciente;</li>
                            <li>Responsabilidade, excelência e sensibilidade;</li>
                            <li>Ética e compromisso com impacto real na vida das pessoas.</li>
                        </ul>
					</div>
				</div>
			</section>

			<section className="py-8 px-4 md:px-8 lg:px-16">
				<div>
                    <h2 className="mb-16 text-3xl secondary-font font-medium text-(--accent-color) text-center uppercase">Leadership Section</h2>

                    <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-center justify-center h-53 mb-4">
                        <div className="relative w-50 h-full pt-12 p-4 bg-(--main-color) rounded-xl text-white text-center shadow-md">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-5 border-white rounded-full">
                                <Image src="/assets/images/gustavo.png" alt="Gustavo" width={70} height={70} />
                            </div>

                            <h3 className="text-xl text-(--accent-color) secondary-font font-medium">Gustavo</h3>

                            <p>Especialista em acesso a mercado de advocacy, conectando ciência, regulação e impacto social.</p>
                        </div>

                        <div className="relative w-50 h-full pt-12 p-4 rounded-xl text-(--main-color) text-center shadow-md">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-5 border-white rounded-full">
                                <Image src="/assets/images/milton.png" alt="Milton" width={70} height={70} />
                            </div>

                            <h3 className="text-xl text-(--accent-color) secondary-font font-medium">Milton</h3>

                            <p>Expert em processos regulatórios, logística, compliance e comércio internacional farmacêutico.</p>
                        </div>

                        <div className="relative w-50 h-full pt-12 p-4 bg-(--accent-color) rounded-xl text-black text-center shadow-md">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-5 border-white rounded-full">
                                <Image src="/assets/images/eli.png" alt="Eli" width={70} height={70} />
                            </div>

                            <h3 className="text-xl text-(--main-color) secondary-font font-medium">Eli</h3>

                            <p>Liderança em relacionamento com clientes e excelência operacional.</p>
                        </div>
                    </div>

                    <h3>Competências principais:</h3>
                    <p>Acesso ao Mercado | Advocacy | Assuntos Regulatórios | Garantia de Qualidade | Farmacovigilância | Cadeia de Suprimentos | Comércio Internacional | Relações Institucionais</p>
                </div>
			</section>
		</main>
	);
}
