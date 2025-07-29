import { projects } from "@/data/projects"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug) || null

  if (!project) {
    return {
      title: "Project Not Found | Aaron McGrath",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | Aaron McGrath Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Aaron McGrath Portfolio`,
      description: project.description,
      type: "article",
      images: [
        {
          url: project.image || "/placeholder.svg",
          width: 800,
          height: 600,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Aaron McGrath Portfolio`,
      description: project.description,
      images: [project.image || "/placeholder.svg"],
    },
  }
}
