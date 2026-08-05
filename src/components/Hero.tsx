import { ArrowRight } from "lucide-react";

const roles = ["Computer Science Student"];

function GitHubIcon({ size = 18 }: { size?: number }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
		>
			<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
		</svg>
	);
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
		>
			<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
		</svg>
	);
}

const socials = [
	{ icon: GitHubIcon, label: "GitHub", href: "https://github.com/ztcollazo" },
	{
		icon: LinkedInIcon,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/zachary-collazo",
	},
];

export function Hero() {
	return (
		<section
			className="flex flex-col justify-center min-h-screen h-full my-auto"
			aria-labelledby="hero-heading"
		>
			<div className="relative mx-auto w-full max-w-6xl">
				<div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
					{/* ── Left: text ── */}
					<div className="flex flex-1 flex-col gap-8">
						{/* availability badge */}
						<div className="animate-fade-up delay-100 flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
							<span
								aria-hidden="true"
								className="h-2 w-2 rounded-full bg-primary"
								style={{ boxShadow: "0 0 6px oklch(0.65 0.22 250 / 0.8)" }}
							/>
							<span className="font-mono text-xs text-muted-foreground">
								Open for work
							</span>
						</div>

						{/* heading */}
						<div className="animate-fade-up delay-200 flex flex-col gap-3">
							<p className="font-mono text-sm uppercase tracking-widest text-primary">
								Hello, I&apos;m
							</p>
							<h1
								id="hero-heading"
								className="text-balance text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl"
							>
								Zachary Collazo
							</h1>

							{/* animated role line */}
							<div className="flex items-baseline gap-2">
								<span className="text-2xl font-light text-muted-foreground sm:text-3xl">
									{roles[0]}
								</span>
								<span
									aria-hidden="true"
									className="cursor-blink inline-block h-7 w-0.5 translate-y-0.5 rounded-full bg-primary sm:h-8"
								/>
							</div>
						</div>

						{/* description */}
						<p className="animate-fade-up delay-300 max-w-xl text-pretty leading-relaxed text-muted-foreground">
							I'm a student at Duke University studying Computer Science and
							Cybersecurity. I have a background in full-stack
							development, cybersecurity, and robotics.
						</p>

						{/* CTAs */}
						<div className="animate-fade-up delay-400 flex flex-wrap gap-4">
							<a
								href="/projects"
								className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-[0_0_24px_oklch(0.65_0.22_250/0.4)]"
							>
								View my work
								<ArrowRight
									size={16}
									className="transition-transform group-hover:translate-x-1"
									aria-hidden="true"
								/>
							</a>
							<a
								href="/resume.pdf"
								className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
							>
								Download CV
							</a>
						</div>

						{/* socials */}
						<div className="animate-fade-up delay-500 flex items-center gap-5">
							<span className="text-xs text-muted-foreground">Find me on</span>
							<div className="flex gap-4">
								{socials.map(({ icon: Icon, label, href }) => (
									<a
										key={label}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={label}
										className="text-muted-foreground transition-colors hover:text-primary"
									>
										<Icon size={18} />
									</a>
								))}
							</div>
						</div>
					</div>

					{/* ── Right: photo + stats ── */}
					<div className="animate-fade-up delay-300 flex flex-col items-center gap-8 lg:items-start">
						{/* avatar frame */}
						<div className="relative">
							{/* decorative ring */}
							<div
								aria-hidden="true"
								className="absolute -inset-1 rounded-2xl"
								style={{
									background:
										"linear-gradient(135deg, oklch(0.65 0.22 250 / 0.5), transparent 60%)",
								}}
							/>
							<div className="relative overflow-hidden rounded-2xl border border-border">
								<img
									src="/photo.jpg"
									alt="Zachary Collazo"
									className="h-80 w-70 object-cover sm:h-95 sm:w-[320px]"
								/>
								{/* subtle overlay */}
								<div
									aria-hidden="true"
									className="absolute inset-0"
									style={{
										background:
											"linear-gradient(to top, oklch(0.10 0.005 260 / 0.5) 0%, transparent 50%)",
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
