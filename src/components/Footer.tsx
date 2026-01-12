import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Footer({ dict }: any) {
	return (
		<footer className="py-4 px-4 md:px-8 lg:px-16 bg-(--main-color) text-(--accent-color) text-sm">
			<div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 max-w-360 mx-auto">
				<div className="flex flex-col items-center">
					<Image src="/assets/global/logo2.png" alt="Genquest" width={150} height={150} />

					<div className="flex gap-4">
						<a href="" className="inline">
                            <Image src="/assets/global/twitter.png" alt="Twitter(X)" width={20} height={20} />
                        </a>
						<a href="">
                            <Image src="/assets/global/instagram.png" alt="Instagram" width={20} height={20} />
                        </a>
						<a href="">
                            <Image src="/assets/global/youtube.png" alt="Youtube" width={20} height={20} />
                        </a>
						<a href="">
                            <Image src="/assets/global/linkedin.png" alt="Linkedin" width={20} height={20} />
                        </a>
					</div>
				</div>

				<div className="flex flex-col min-[448px]:flex-row gap-4 md:gap-8">
					<div className="flex flex-col gap-2">
						<h2 className="font-bold">{dict.politcs}</h2>
						<a href="">{dict.privacyPolicy}</a>
						<a href="">{dict.termsOfUse}</a>
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
