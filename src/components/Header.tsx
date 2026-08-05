import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
	{ label: "About", href: "/#about" },
	{ label: "Projects", href: "/projects" },
];

export function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed inset-x-0 top-0 z-50">
			{/* backdrop blur strip */}
			<div className="border-b border-border/60 bg-background/80 backdrop-blur-md">
				<nav
					className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
					aria-label="Primary"
				>
					{/* wordmark */}
					<a
						href="/"
						className="font-header text-sm font-semibold tracking-widest text-foreground uppercase"
						aria-label="Zachary Collazo — home"
					>
						Zachary Collazo
					</a>

					{/* desktop links */}
					<ul className="hidden gap-8 md:flex">
						{links.map(({ label, href }) => (
							<li key={label}>
								<a
									href={href}
									className="text-sm text-muted-foreground transition-colors hover:text-foreground"
								>
									{label}
								</a>
							</li>
						))}
					</ul>

					{/* desktop CTA */}
					<a
						href="mailto:zacharytcollazo@gmail.com"
						className="hidden rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
					>
						Contact me
					</a>

					{/* mobile menu toggle */}
					<button
						type="button"
						className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
						onClick={() => setOpen((v) => !v)}
						aria-expanded={open}
						aria-controls="mobile-menu"
						aria-label="Toggle navigation menu"
					>
						{open ? <X size={20} /> : <Menu size={20} />}
					</button>
				</nav>

				{/* mobile menu */}
				{open && (
					<div id="mobile-menu" className="border-t border-border/60 md:hidden">
						<ul className="flex flex-col gap-1 px-6 py-4">
							{links.map(({ label, href }) => (
								<li key={label}>
									<a
										href={href}
										onClick={() => setOpen(false)}
										className="block py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
									>
										{label}
									</a>
								</li>
							))}
							<li className="pt-3">
								<a
									href="mailto:zacharytcollazo@gmail.com"
									className="inline-flex rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
								>
									Contact me
								</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</header>
	);
}
