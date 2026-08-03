'use client'
import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Zap, MessageSquare, Layout, Shield, Star, Laptop, Server, Database, Cloud } from "lucide-react"
import Typewriter from "typewriter-effect"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function SkillSwapProjectPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
            <Navbar />
            <main className="max-w-3xl mx-auto p-6 space-y-6">
                <header className="text-center space-y-4 py-6 border-b border-zinc-800">
                    <h1 className="text-4xl font-bold tracking-tight font-sans uppercase">SkillSwap Platform</h1>
                    <div className="text-xl font-sans text-zinc-400 h-8">
                        <Typewriter
                            options={{
                                strings: [
                                    "Peer-to-Peer Learning Platform",
                                    "Exchange Skills and Knowledge",
                                    "Connect with Fellow Students",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </header>

                <Card className="bg-zinc-950 border border-zinc-800">
                    <CardHeader>
                        <CardTitle className="font-sans uppercase text-white">Project Overview</CardTitle>
                        <CardDescription className="text-zinc-400">
                            SkillSwap is a peer-to-peer learning platform designed to facilitate the exchange of skills and knowledge
                            among students.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-zinc-300 text-sm">
                        <p>
                            The platform addresses the limitations of traditional educational settings by enabling students to connect
                            with peers who possess complementary skills, promoting cross-disciplinary learning and collaborative growth.
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-950 border border-zinc-800">
                    <CardHeader>
                        <CardTitle className="font-sans uppercase text-white">Key Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans text-zinc-300">
                            {[
                                { icon: <Users className="mr-2 h-4 w-4 text-zinc-400" />, text: "Seamless Skill Matching System" },
                                { icon: <Zap className="mr-2 h-4 w-4 text-zinc-400" />, text: "Diverse Learning Opportunities" },
                                { icon: <MessageSquare className="mr-2 h-4 w-4 text-zinc-400" />, text: "Real-Time Interactions" },
                                { icon: <Layout className="mr-2 h-4 w-4 text-zinc-400" />, text: "User-Friendly Interface" },
                                { icon: <Shield className="mr-2 h-4 w-4 text-zinc-400" />, text: "Secure and Trustworthy Environment" },
                                { icon: <Star className="mr-2 h-4 w-4 text-zinc-400" />, text: "Rating and Review System" },
                            ].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    {item.icon}
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Tabs defaultValue="frontend">
                    <TabsList className="grid w-full grid-cols-3 bg-zinc-950 border border-zinc-800">
                        <TabsTrigger value="frontend" className="font-sans text-xs">Frontend</TabsTrigger>
                        <TabsTrigger value="backend" className="font-sans text-xs">Backend</TabsTrigger>
                        <TabsTrigger value="infrastructure" className="font-sans text-xs">Infrastructure</TabsTrigger>
                    </TabsList>
                    <TabsContent value="frontend">
                        <Card className="bg-zinc-950 border border-zinc-800">
                            <CardHeader>
                                <CardTitle className="font-sans text-sm uppercase text-zinc-200">Frontend Technology Stack</CardTitle>
                            </CardHeader>
                            <CardContent className="text-xs font-sans text-zinc-300">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Next.js: React framework for server-side rendering</li>
                                    <li>TypeScript: Statically typed JavaScript</li>
                                    <li>Tailwind CSS: Utility-first CSS framework</li>
                                    <li>Framer Motion: Motion library for animations</li>
                                    <li>React Hooks: For state and lifecycle management</li>
                                    <li>Lucide Icons: Open-source icon collection</li>
                                    <li>Typewriter Effect: For typewriter-style animations</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="backend">
                        <Card className="bg-zinc-950 border border-zinc-800">
                            <CardHeader>
                                <CardTitle className="font-sans text-sm uppercase text-zinc-200">Backend Technology Stack</CardTitle>
                            </CardHeader>
                            <CardContent className="text-xs font-sans text-zinc-300">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Node.js: JavaScript runtime for server-side applications</li>
                                    <li>Express.js: Flexible Node.js web application framework</li>
                                    <li>Prisma: ORM tool for database access</li>
                                    <li>JSON Web Tokens (JWT): For secure authentication</li>
                                    <li>MongoDB Atlas: Fully managed cloud database service</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="infrastructure">
                        <Card className="bg-zinc-950 border border-zinc-800">
                            <CardHeader>
                                <CardTitle className="font-sans text-sm uppercase text-zinc-200">Infrastructure</CardTitle>
                            </CardHeader>
                            <CardContent className="text-xs font-sans text-zinc-300">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Vercel: Cloud platform for deploying and scaling Next.js applications</li>
                                    <li>MongoDB Atlas: Cloud-hosted database service</li>
                                    <li>Load Balancing: For distributing traffic across servers</li>
                                    <li>Caching Mechanisms: To reduce database load</li>
                                    <li>Content Delivery Network (CDN): For efficient static asset delivery</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <Card className="bg-zinc-950 border border-zinc-800">
                    <CardHeader>
                        <CardTitle className="font-sans uppercase text-white">System Architecture</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs font-sans text-zinc-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <Laptop className="mr-2 h-6 w-6 text-zinc-400" />
                                <div>
                                    <h3 className="font-semibold text-white">Client-Side (Frontend)</h3>
                                    <p className="text-zinc-500">Next.js, TypeScript, Tailwind CSS</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Server className="mr-2 h-6 w-6 text-zinc-400" />
                                <div>
                                    <h3 className="font-semibold text-white">Server-Side (Backend)</h3>
                                    <p className="text-zinc-500">Node.js, Express.js, RESTful APIs</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Database className="mr-2 h-6 w-6 text-zinc-400" />
                                <div>
                                    <h3 className="font-semibold text-white">Database</h3>
                                    <p className="text-zinc-500">MongoDB Atlas</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Cloud className="mr-2 h-6 w-6 text-zinc-400" />
                                <div>
                                    <h3 className="font-semibold text-white">Deployment</h3>
                                    <p className="text-zinc-500">Vercel</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-950 border border-zinc-800">
                    <CardHeader>
                        <CardTitle className="font-sans uppercase text-white">Conclusion</CardTitle>
                    </CardHeader>
                    <CardContent className="text-zinc-300 text-sm">
                        <p>
                            SkillSwap aims to create a collaborative learning environment, bridging knowledge gaps and fostering
                            academic growth by promoting peer-to-peer skill exchanges. With its modern technology stack, user-friendly
                            interface, and focus on security and scalability, SkillSwap is poised to revolutionize the way students
                            learn and share knowledge.
                        </p>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    )
}
