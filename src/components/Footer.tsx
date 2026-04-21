import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Footer({ dict }: any) {
	return (
		<footer id="footer" className="relative py-4 px-4 md:px-8 lg:px-16 bg-(--main-color) text-(--accent-color) text-sm z-20">
			<div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 max-w-360 mx-auto">
				<div className="flex flex-col items-center">
					<Image src="/assets/global/logo2.png" alt="Genquest" width={150} height={150} />

					<div className="flex gap-4 w-3/4 text-center">
						<p>{dict.slogan}</p>
					</div>
				</div>

				<div className="flex flex-col min-[448px]:flex-row gap-4 md:gap-8">
                    <div className="flex flex-col gap-2">
						<h2 className="font-bold">{dict.contact}</h2>
						<a href="mailto:contato@genquest.com.br">
                            <Image src="/assets/icons/mail.png" alt="Email" width={16} height={16} className="inline-block mr-1" />
                            contato@genquest.com.br
                        </a>
						<a href="https://wa.me/5511963767888" target="_blank" rel="noopener noreferrer">
                            <Image src="/assets/icons/whatsapp.png" alt="Phone" width={16} height={16} className="inline-block mr-1" />
                            +55 (11) 96376-7888
                        </a>
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="font-bold">{dict.politcs}</h2>
						<a href="/files/politica-privacidade-genquest.pdf">{dict.privacyPolicy}</a>
						<a href="/files/termos-de-uso-genquest.pdf">{dict.termsOfUse}</a>
						<a href="">{dict.legalNotice}</a>
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="font-bold">{dict.compliance}</h2>
						<a href="">{dict.codeOfConduct}</a>
						<a href="">{dict.transparency}</a>
						<a href="">{dict.complaint}</a>
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="font-bold">{dict.fastAccess}</h2>
						<a href="">{dict.solutions}</a>
						<a href="">{dict.access}</a>
						<a href="">{dict.results}</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
