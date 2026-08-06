const timeline = [
	{
		year: 2026,
		role: "Student",
		company: "Future Business Leaders of America",
		description:
			"Awarded 1st in the state of Virginia in Cybersecurity and 3rd in Coding & Programming for my AI local business discovery app.",
	},
	{
		year: "2025",
		role: "Robotics Intern",
		company: "Jefferson Lab",
		description:
			"Designed, built, and presented visualization software for the remote control of a UR20 robot in a cleanroom environment.",
	},
	{
		year: "2024",
		role: "Programming Captain",
		company: "ARGS Robotics Team",
		description:
			"Led the team to the state championship and taught 15+ high school students how to code.",
	},
	{
		year: "2023",
		role: "Team Captain",
		company: "ARGS Cybersecurity Team",
		description:
			"Taught 10+ high school students cybersecurity and helped three secure scholarships. I was awarded the National Cyber Scholarship and Virginia Cyber Defender award.",
	},
];

// ── Section label ─────────────────────────────────────────────────────────────

export function SectionLabel({ children }: { children: React.ReactNode }) {
	return (
		<p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
			{children}
		</p>
	);
}

// ── Main component ────────────────────────────────────────────────────────────

export function AboutSection() {
	return (
		<section
			id="about"
			className="relative px-6 py-28"
			aria-labelledby="about-heading"
		>
			{/* Right-side glow */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-40 top-1/3 h-125 w-125 rounded-full"
				style={{
					background:
						"radial-gradient(circle, oklch(0.65 0.22 250 / 0.09) 0%, transparent 70%)",
				}}
			/>

			<div className="relative mx-auto w-full max-w-6xl">
				{/* ── TOP: Intro split ──────────────────────────────────────────────── */}
				<div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-0">
					{/* Left — narrative */}
					<div className="flex flex-col gap-8 lg:pr-16">
						<div>
							<SectionLabel>About me</SectionLabel>
							<h2 className="text-3xl font-semibold tracking-tight text-foreground">
								Who am I?
							</h2>
						</div>

						<div className="space-y-4 leading-relaxed text-muted-foreground">
							<p>
								I&apos;m a student at Duke University pursuing a career in
								secure software systems. Throughout high school, I gained
								experience in several different fields of software development.
								I have receieved awards related to some of my full-stack
								projects and mobile apps. I also have experience with robotics
								and automated systems as well as cybersecurity.
							</p>
							<p>
								Outside of work I enjoy music and playing guitar, reading, and
								fitness. I'm also a lifelong learner and strong Christian.
							</p>
						</div>
					</div>
					<div>
						<div className="mb-10">
							<SectionLabel>Journey</SectionLabel>
							<h2 className="text-3xl font-semibold tracking-tight text-foreground w-max">
								Career timeline
							</h2>
						</div>

						<div className="relative">
							{/* vertical line */}
							<div
								aria-hidden="true"
								className="absolute left-1.75 top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block"
							/>

							<ol className="flex flex-col gap-0">
								{timeline.map((item) => (
									<li
										key={item.role}
										className="group flex flex-col gap-1 sm:flex-row sm:gap-8 relative"
									>
										{/* dot */}
										<div
											aria-hidden="true"
											className="absolute left-0 top-2 hidden h-3.75 w-3.75 items-center justify-center sm:flex"
										>
											<div className="h-2.5 w-2.5 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary" />
										</div>

										{/* content */}
										<div className="flex flex-col gap-3 pt-2 pb-7 sm:ml-10 sm:flex-row sm:items-start sm:gap-10 w-full">
											{/* year */}
											<div className="flex shrink-0 items-center gap-3 sm:w-12 sm:flex-col sm:items-start sm:gap-0">
												<span className="font-mono text-xs font-semibold text-primary">
													{item.year}
												</span>
											</div>

											{/* role + company */}
											<div className="-m-1">
												<div className="flex flex-col gap-1">
													<div className="flex flex-wrap items-baseline gap-2">
														<h3 className="text-base font-semibold text-foreground">
															{item.role}
														</h3>
														<span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
															{item.company}
														</span>
													</div>
													<p className="text-sm text-muted-foreground">
														{item.description}
													</p>
												</div>
											</div>
										</div>
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
