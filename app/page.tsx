"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Download, Mail, Linkedin, Moon, Sun } from "lucide-react"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { useThemeToggle } from "@/hooks/use-theme-toggle"
import AnimatedHeroText from "@/components/animated-hero-text"
import BlobBackground from "@/components/blob-background"
import RevealAnimation from "@/components/reveal-animation"
import TextMorph from "@/components/text-morph"
import ParallaxSection from "@/components/parallax-section"
import SmoothScroll from "@/components/smooth-scroll"

export default function Home() {
  const [availabilityStatus, setAvailabilityStatus] = useState(true)
  const { theme, toggleTheme, mounted } = useThemeToggle()
  const router = useRouter()

  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col overflow-hidden">
        <header
          className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          role="banner"
        >
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="font-semibold text-xl" aria-label="Aaron McGrath - Home">
              ByMcgrath
            </Link>
            <nav className="hidden md:flex gap-6 items-center" role="navigation" aria-label="Main Navigation">
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#work" className="text-sm font-medium hover:text-primary transition-colors">
                Work
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button asChild className="dark:bg-white dark:text-black dark:hover:bg-gray-200">
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-hidden" role="main">
          {/* Hero Section */}
          <section className="container py-24 md:py-32 space-y-8" aria-labelledby="hero-heading">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div className="flex-1 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center gap-2 rounded-lg px-3 py-1 text-sm transition-colors ${
                    availabilityStatus
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                  }`}
                >
                  <div
                    className={`h-2 w-2 rounded-full ${availabilityStatus ? "bg-green-500 animate-pulse" : "bg-red-500 animate-pulse"}`}
                  ></div>
                  {availabilityStatus ? "Available for work" : "Currently busy"}
                </motion.div>

                <AnimatedHeroText firstName="I'm" lastName="Aaron McGrath" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="h-[1.5em] flex items-center"
                >
                  <TextMorph
                    words={["design modern interfaces", "create engaging experiences", "build functional solutions"]}
                    prefix="I "
                    className="text-xl text-muted-foreground"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Button size="lg" className="dark:bg-white dark:text-black dark:hover:bg-gray-200" asChild>
                    <a href="#work">
                      View my work <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="dark:border-white dark:text-white dark:hover:bg-white/10"
                    asChild
                  >
                    <a href="/resume.pdf" download aria-label="Download Aaron McGrath's Resume">
                      Download Resume <Download className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </div>

              <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div
                  className="relative w-72 h-72 md:w-96 md:h-96 group cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={toggleTheme}
                  role="button"
                  tabIndex={0}
                  aria-label={`Toggle dark mode, currently in ${theme || "default"} mode`}
                >
                  <BlobBackground />
                  <div className="absolute inset-0 rounded-full overflow-hidden z-10 border-4 border-transparent shadow-xl">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center z-10">
                      <div className="bg-background/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {mounted && (theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />)}
                      </div>
                    </div>
                    <Image
                      src="https://hv8zuk1grpspivwy.public.blob.vercel-storage.com/profilepicture-BWDkJlJsbuMKstppuUgrsODUm01N6E"
                      alt="Aaron McGrath - UI Designer and Developer portrait"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <ParallaxSection className="bg-muted/50 py-16 md:py-24" speed={0.1}>
            <section id="about" aria-labelledby="about-heading">
              <div className="container space-y-12">
                <RevealAnimation>
                  <div className="space-y-4 text-center max-w-3xl mx-auto">
                    <h2 id="about-heading" className="text-3xl font-bold tracking-tight">
                      About Aaron McGrath
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      I'm a UI designer with a passion for creating beautiful, functional interfaces that enhance user
                      experiences.
                    </p>
                  </div>
                </RevealAnimation>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <RevealAnimation direction="left" delay={0.2}>
                    <div className="space-y-6">
                      <p className="text-lg">
                        I studied computing at university in 2016, but my interest in design led me to take a graphic
                        design course in Brighton in 2022. That experience helped me develop a more structured approach
                        to design thinking. Not long after, I moved to Iceland and later studied Web Development at
                        Reykjavík Academy (Vefskólinn). At the end of the course, I had the opportunity to do an
                        internship at a design studio called Metall, where I gained hands-on experience working in the
                        industry.
                      </p>
                      <p className="text-lg">
                        My design style leans toward minimalism, but I like to experiment with abstract concepts to keep
                        things visually interesting. I focus more on UI design but have a solid understanding of UX as
                        well. For me, great design should feel effortless—something that not only looks good but also
                        functions seamlessly.
                      </p>
                      <p className="text-lg">
                        Lately, I've also been learning Icelandic in my spare time, which has been an interesting
                        challenge. Outside of work, I'm always looking for new sources of inspiration, whether through
                        art, design trends, or exploring new creative ideas.
                      </p>
                    </div>
                  </RevealAnimation>
                  <RevealAnimation direction="right" delay={0.4}>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Aaron McGrath at work designing interfaces"
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=400&width=600"
                        }}
                      />
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </section>
          </ParallaxSection>

          {/* Work Section */}
          <section id="work" className="py-16 md:py-24 container" aria-labelledby="work-heading">
            <RevealAnimation>
              <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
                <h2 id="work-heading" className="text-3xl font-bold tracking-tight">
                  Selected Work
                </h2>
                <p className="text-xl text-muted-foreground">A showcase of my recent projects and collaborations.</p>
              </div>
            </RevealAnimation>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <RevealAnimation key={index} delay={0.1 * index} direction={index % 2 === 0 ? "left" : "right"}>
                  <ProjectCard project={project} />
                </RevealAnimation>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <ParallaxSection className="bg-muted/50 py-16 md:py-24" speed={0.1} direction="down">
            <section id="skills" aria-labelledby="skills-heading">
              <div className="container space-y-12">
                <RevealAnimation>
                  <div className="space-y-4 text-center max-w-3xl mx-auto">
                    <h2 id="skills-heading" className="text-3xl font-bold tracking-tight">
                      Skills & Expertise
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      The tools and technologies I use to bring ideas to life.
                    </p>
                  </div>
                </RevealAnimation>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {skillCategories.map((category, index) => (
                    <RevealAnimation key={index} delay={0.1 * index}>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                        <ul className="space-y-2">
                          {category.skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-primary"></div>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </section>
          </ParallaxSection>

          {/* Super Simple Let's Work Together Section */}
          <section id="contact" className="py-24 md:py-32" aria-labelledby="contact-heading">
            <div className="container max-w-4xl">
              <RevealAnimation>
                <div className="space-y-16 md:space-y-24">
                  <div className="space-y-4 text-center">
                    <h2 id="contact-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                      Let's Work Together
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                    <RevealAnimation direction="left" delay={0.2}>
                      <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Contact Aaron McGrath</h3>
                        <ul className="space-y-4">
                          <li>
                            <a
                              href="mailto:contact@bymcgrath.com"
                              className="text-xl hover:text-primary transition-colors flex items-center gap-2"
                              aria-label="Email Aaron McGrath"
                            >
                              <Mail className="h-5 w-5" />
                              contact@bymcgrath.com
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/aaron-mcgrath-b5618511b/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xl hover:text-primary transition-colors flex items-center gap-2"
                              aria-label="Aaron McGrath's LinkedIn Profile"
                            >
                              <Linkedin className="h-5 w-5" />
                              LinkedIn
                            </a>
                          </li>
                        </ul>
                      </div>
                    </RevealAnimation>

                    <RevealAnimation direction="right" delay={0.3}>
                      <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Availability</h3>
                        <p className="text-xl">I'm currently available for freelance projects and new opportunities.</p>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            size="lg"
                            className="text-lg px-8 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                            asChild
                          >
                            <a
                              href="mailto:contact@bymcgrath.com"
                              aria-label="Email Aaron McGrath to discuss a project"
                            >
                              Get in Touch
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </RevealAnimation>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </section>
        </main>
        <footer className="border-t py-8" role="contentinfo">
          <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ByMcgrath. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Work
              </Link>
              <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  )
}

// Sample skills data
const skillCategories = [
  {
    name: "Design",
    skills: ["UI Design", "UX Design", "Interaction Design", "Wireframing", "Prototyping"],
  },
  {
    name: "Tools",
    skills: ["Figma", "Illustrator", "Photoshop", "InDesign", "After Effects"],
  },
  {
    name: "Development",
    skills: ["HTML/CSS", "JavaScript (Basic)", "React (Basic)", "Design Systems"],
  },
  {
    name: "Soft Skills",
    skills: ["Communication", "Collaboration", "Creative Problem Solving", "Adaptability", "Presentation"],
  },
]

// Project Card Component
function ProjectCard({ project }) {
  const router = useRouter()

  // Function to scroll to top and navigate
  const navigateToProject = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    router.push(`/projects/${project.slug}`)
  }

  return (
    <div
      onClick={navigateToProject}
      className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg block cursor-pointer"
    >
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} - UI Design project by Aaron McGrath`}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          <Button
            variant="ghost"
            className="p-0 dark:hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation() // Prevent the parent div's onClick from firing
              navigateToProject()
            }}
          >
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          {project.liveLink && (
            <Button
              variant="ghost"
              className="p-0 dark:hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation() // Prevent the parent div's onClick from firing
                window.open(project.liveLink, "_blank", "noopener,noreferrer")
              }}
            >
              Live Project <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
