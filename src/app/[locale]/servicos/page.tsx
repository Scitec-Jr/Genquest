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

					<div className="relative flex flex-col justify-center flex-1 p-4 shadow-[4px_4px_15px_20px_white] z-10">
						<p className="mb-4 text-xl">A GENQUEST é um elo de confiança entre ciência e pacientes. Nosso propósito é humanizar a jornada de acesso a medicamentos para doenças raras, conectando inovação e empatia em cada interação.</p>
					</div>
				</div>
			</section>

            <section className="relative bg-(--main-color) py-8 px-4 md:px-8 z-20">
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
								<h2 className="mb-4 secondary-font text-4xl font-semibold">Suporte em Comércio Internacional</h2>
								<p>Acesso pleno e regulado a terapias por meio da rota de importação no Brasil.</p>
							</div>

							<div className="text-left">
								<ol className="list-decimal">
                                    <li>Para Fabricantes/Exportadores:</li>
                                    <ul className="mb-4 ps-4 list-disc">
                                        <li>Monitoramento da jornada de acesso</li>
                                        <li>Mapeamento da demanda</li>
                                        <li>Acompanhamento individualizado de processos</li>
                                    </ul>

                                    <li>Para importadores:</li>
                                    <ul className="ps-4 list-disc">
                                        <li>Assessoria em comércio internacional</li>
                                        <li>Gestão documental</li>
                                        <li>Coordenação de desembaraço</li>
                                        <li>Garantia de qualidade até a entrega</li>
                                    </ul>
                                </ol>
							</div>
						</div>

                        <div className="flex flex-col md:flex-row items-center gap-8 min-w-full px-4 text-center">
							<div>
								<h2 className="mb-4 secondary-font text-4xl font-semibold">Soft Landing & Estratégia de Entrada</h2>
								<p>Framework modular desenvolvido especificamente para terapias de doenças raras que ingressam no Brasil.</p>
                                <ol className="list-decimal ps-4">
                                    <li>Avaliação do Modelo de Entrada</li>
                                    <li>Configuraçã Operacional</li>
                                    <li>Implementação</li>
                                </ol>
							</div>

							<div>
								<Image src="/assets/images/softLanding.png" alt="Solução 1" width={600} height={400} />
							</div>
						</div>
					</Carousel>
				</div>
			</section>

			<section className="relative py-8 px-4 md:px-8 bg-white z-20">
				<h2 className="mb-4 text-4xl secondary-font text-(--accent-color) text-center">Participe da nossa pesquisa</h2>

                <Image src="/assets/images/qrcode.png" alt="Pesquisa" width={200} height={200} className="p-4 float-left" />

                <p>A Genquest está conduzindo uma pesquisa estruturada para compreender os principais desafios enfrentados por associações de pacientes, profissionais de saúde, pagadores e instituições na importação de medicamentos para doenças raras no Brasil.</p>
                <br />
                <p>O objetivo é dar voz às experiências reais do setor e gerar insumos concretos para o desenvolvimento de soluções mais humanas, transparentes e eficientes para o acesso a terapias raras.</p>
                <br />
                <p>A pesquisa é rápida, confidencial e não exige identificação obrigatória. As respostas serão utilizadas de forma agregada e poderão apoiar análises setoriais e materiais institucionais da Genquest.</p>
                <br />
                <p>👉 Acesse a pesquisa aqui: https://forms.gle/zoBCy9G6Gvpa3JYF6</p>
                <br />
                <p>Sua contribuição é extremamente valiosa para fortalecer o debate e ajudar a melhorar a jornada de acesso no Brasil.</p>
			</section>

            <section className="bg-(--accent-color)">
				<div className="flex flex-col md:flex-row">
					<div className="relative flex flex-col justify-center flex-1 p-4 shadow-[4px_4px_15px_20px_var(--accent-color)] z-10">
                        <h2 className="mb-4 text-4xl secondary-font text-(--main-color)">Pronto para levar sua terapia inovadora aos pacientes brasileiros?</h2>

						<p className="mb-4 text-xl">Trabalhe com a Genquest - a única empresa que oferece soluções reguladas e integradas de ponta a ponta para medicamentos importados no Brasil.</p>
					</div>

					<div className="flex-1">
						<Image src="/assets/images/heroMarketing.png" alt="Genquest" width={700} height={400} className="w-full h-full max-h-120" />
					</div>
				</div>
			</section>
		</main>
	);
}
