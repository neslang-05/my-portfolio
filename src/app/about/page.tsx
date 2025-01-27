import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import NavbarSet from "@/components/ui/navbar-set"
import Footer from "@/components/ui/footer"

export default function AboutPage() {
    return (
        <div className="container mx-auto p-6 space-y-6">
            <div className="flex flex-row justify-center py-4">
                <NavbarSet />
            </div>

            <div className="max-w-3xl mx-auto pt-6 space-y-6">
                <header className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
                    <ModeToggle />
                </header>
                <Card>
                    <CardHeader>
                        <CardTitle>Nilambar Elangbam</CardTitle>
                        <CardDescription>Web Developer & Designer</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row gap-6">
                        <Image
                            src="/placeholder.svg?height=300&width=300"
                            alt="Nilambar Elangbam"
                            width={300}
                            height={300}
                            className="rounded-full"
                        />
                        <div className="space-y-4">
                            <p>
                                I'm a passionate web developer and designer with a focus on creating beautiful, responsive, and
                                user-friendly websites. My portfolio showcases my skills in modern web technologies and my ability to
                                bring designs to life.
                            </p>
                            <div className="flex space-x-4">
                                <Button variant="outline" asChild>
                                    <a href="https://github.com/neslang-05" target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" /> GitHub
                                    </a>
                                </Button>
                                <Button variant="outline" asChild>
                                    <a
                                        href="https://www.linkedin.com/in/nilambar-elangbam-524617247/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                    </a>
                                </Button>
                                <Button variant="outline" asChild>
                                    <a href="mailto:neslang.in@gmail.com">
                                        <Mail className="mr-2 h-4 w-4" /> Email
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Skills & Technologies</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {["Next.js", "React", "Tailwind CSS", "JavaScript", "TypeScript", "HTML", "CSS", "Git"].map((skill) => (
                                <Badge key={skill} variant="secondary" className="justify-center">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>About This Portfolio</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            This portfolio website is built using modern web technologies to showcase my projects, skills, and contact
                            information. It features a responsive design and a light/dark mode toggle.
                        </p>
                        <h3 className="text-lg font-semibold">Key Features:</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Light/Dark mode toggle</li>
                            <li>Responsive design</li>
                            <li>Project showcase</li>
                            <li>Contact information</li>
                            <li>Links to social media profiles</li>
                        </ul>
                        <Separator />
                        <p className="text-sm text-muted-foreground">
                            Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind
                            CSS, deployed with Vercel. All text is set in the Inter typeface.
                        </p>
                    </CardContent>
                </Card>

            </div>

            <Footer />
        </div>
    )
}

