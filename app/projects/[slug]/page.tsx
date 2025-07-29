"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import RevealAnimation from "@/components/reveal-animation"

// Remove the generateMetadata export - it's now in metadata.ts

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const { slug } = params
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [slug])

  // Find the project by slug
  const project = projects.find((p) => p.slug === slug) || null

  // If project not found, show a message
  if (!project || typeof project !== "object") {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => router.push("/#work")} className="dark:bg-white dark:text-black dark:hover:bg-gray-200">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to projects
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Button variant="ghost" size="sm" onClick={() => router.push("/#work")} className="dark:hover:bg-white/10">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to projects
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-hidden" role="main">
        {/* Hero Section */}
        <section className="bg-muted/30" aria-labelledby="project-title">
          <div className="container py-12 md:py-20">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 id="project-title" className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              {project.liveLink && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button asChild className="dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Project Image */}
        <section className="container py-12">
          <RevealAnimation>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} - UI Design project by Aaron McGrath`}
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>
          </RevealAnimation>
        </section>

        {/* Project Details */}
        <section className="container py-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <RevealAnimation>
                <h2 className="text-2xl font-bold">Project Overview</h2>
              </RevealAnimation>
              <div className="space-y-4">
                {project.content?.map((paragraph, index) => (
                  <RevealAnimation key={index} delay={0.1 * index}>
                    <p className="text-lg">{paragraph}</p>
                  </RevealAnimation>
                ))}
                {!project.content && (
                  <>
                    <RevealAnimation delay={0.1}>
                      <p className="text-lg">
                        This project involved a complete redesign of the user interface to improve usability and visual
                        appeal. The goal was to create a more intuitive experience while maintaining brand consistency.
                      </p>
                    </RevealAnimation>
                    <RevealAnimation delay={0.2}>
                      <p className="text-lg">
                        I conducted user research to understand pain points with the existing interface and created
                        wireframes and prototypes to test new design solutions. After several iterations based on user
                        feedback, the final design was implemented.
                      </p>
                    </RevealAnimation>
                    <RevealAnimation delay={0.3}>
                      <p className="text-lg">
                        The result was a 40% increase in user engagement and positive feedback from both clients and
                        users.
                      </p>
                    </RevealAnimation>
                  </>
                )}
              </div>

              {/* Project Gallery - Optional */}
              {project.gallery && (
                <div className="mt-12">
                  <RevealAnimation>
                    <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                  </RevealAnimation>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((image, index) => (
                      <RevealAnimation key={index} delay={0.1 * index} direction={index % 2 === 0 ? "left" : "right"}>
                        <div className="rounded-lg overflow-hidden bg-muted/20">
                          <div className="relative w-full aspect-[3/2]">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt || `${project.title} gallery image ${index + 1} by Aaron McGrath`}
                              fill
                              className="object-contain object-center cursor-pointer transition-transform hover:scale-105 p-2"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              onClick={() => setLightboxImage(image.src || "/placeholder.svg")}
                            />
                          </div>
                        </div>
                      </RevealAnimation>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <RevealAnimation direction="right">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-muted-foreground">Client</dt>
                      <dd className="font-medium">{project.client || "Confidential"}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Timeline</dt>
                      <dd className="font-medium">{project.timeline || "4 weeks"}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Role</dt>
                      <dd className="font-medium">{project.role || "UI Designer"}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Tools Used</dt>
                      <dd className="font-medium">{project.tools?.join(", ") || "Figma, Adobe XD, Illustrator"}</dd>
                    </div>
                  </dl>
                </div>
              </RevealAnimation>

              {/* Next Project - Optional */}
              <RevealAnimation direction="right" delay={0.2}>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">More Projects</h3>
                  <div className="space-y-4">
                    {projects
                      .filter((p) => p.slug !== project.slug)
                      .slice(0, 2)
                      .map((relatedProject, index) => (
                        <Link
                          key={index}
                          href={`/projects/${relatedProject.slug}`}
                          className="block group"
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                              <Image
                                src={relatedProject.image || "/placeholder.svg"}
                                alt={relatedProject.title}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium group-hover:text-primary transition-colors">
                                {relatedProject.title}
                              </h4>
                              <p className="text-sm text-muted-foreground line-clamp-1">{relatedProject.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-muted/30 py-16">
          <div className="container text-center">
            <RevealAnimation>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in working together?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects and creative ideas. Let's create something amazing together.
              </p>
              <Button size="lg" asChild className="dark:bg-white dark:text-black dark:hover:bg-gray-200">
                <a href="/#contact">Get in Touch</a>
              </Button>
            </RevealAnimation>
          </div>
        </section>
      </main>

      <footer className="border-t py-8" role="contentinfo">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aaron McGrath (ByMcgrath). All rights reserved.
          </p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold z-10"
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <Image
              src={lightboxImage || "/placeholder.svg"}
              alt="Full size image"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}
