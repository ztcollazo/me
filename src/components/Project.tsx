import type { FC } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { RiGithubLine } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

export interface ProjectType {
	slug: string;
	title: string;
	description: string;
	body: string;
	public: boolean;
	github: string;
	url: string;
	topics: string[];
}

export const Project: FC<{ project: ProjectType }> = ({ project }) => {
	const owner = project.github.split("/").at(-2);

	return (
		<Card className="md:grow hover:translate-x-1 hover:-translate-y-1 delay-200 duration-400 transition flex flex-col justify-between">
			<CardHeader>
				<CardTitle>
					<a href={`/projects/${project.slug}`}>{project.title}</a>
				</CardTitle>
				<CardDescription className="text-gray-500 font-extralight line-clamp-2 dark:text-gray-400">
					{project.description}
				</CardDescription>
				{owner !== "ztcollazo" ? (
					<CardAction>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<Avatar>
										<AvatarImage
											src={`https://github.com/${owner}.png`}
											alt={owner}
										/>
										<AvatarFallback>
											{owner[0].toLocaleUpperCase()}
										</AvatarFallback>
									</Avatar>
								</TooltipTrigger>
								<TooltipContent>
									<p>{owner}</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</CardAction>
				) : null}
			</CardHeader>
			<CardContent className="flex flex-col gap-2 items-start">
				{project.topics && (
					<div className="flex flex-row mt-2 gap-2 md:flex-wrap justify-start">
						{project.topics.map((t) => (
							<a
								key={t}
								target="_blank"
								rel="noopener noreferrer"
								href={`https://github.com/topics/${t}`}
							>
								<Badge>{t}</Badge>
							</a>
						))}
					</div>
				)}
			</CardContent>
			<CardFooter className="flex flex-col gap-2">
				{project.url && (
					<Button
						nativeButton={false}
						is="div"
						variant="outline"
						className="w-full"
					>
						<a
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Open page"
							className="flex flex-row gap-2 items-center"
							href={
								["http", "https", "//"].some((s) => project.url.startsWith(s))
									? project.url
									: "https://".concat(project.url)
							}
						>
							<HiOutlineExternalLink data-icon="inline-start" size={18} />
							View Website
						</a>
					</Button>
				)}
				{project.public && (
					<Button
						nativeButton={false}
						is="div"
						variant="outline"
						className="w-full"
					>
						<a
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Open github repository"
							className="flex flex-row gap-2 items-center"
							href={project.github}
						>
							<RiGithubLine data-icon="inline-start" size={18} /> View GitHub
						</a>
					</Button>
				)}
			</CardFooter>
		</Card>
	);
};

export default Project;
