'use client'
import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Zap, MessageSquare, Layout, Shield, Star, Laptop, Server, Database, Cloud } from "lucide-react"
import Typewriter from "typewriter-effect"
import Footer from "@/components/ui/footer"
import NavbarSet from "@/components/ui/navbar-set"

export default function SkillSwapProjectPage() {
    return (
        <div className="container mx-auto p-6 space-y-6">
            <div className="flex flex-row justify-center py-4">
                <NavbarSet />
            </div>
            <header className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">SkillSwap</h1>
                <div className="text-xl text-muted-foreground h-8">
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

            <Card>
                <CardHeader>
                    <CardTitle>Project Overview</CardTitle>
                    <CardDescription>
                        SkillSwap is a peer-to-peer learning platform designed to facilitate the exchange of skills and knowledge
                        among students.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        The platform addresses the limitations of traditional educational settings by enabling students to connect
                        with peers who possess complementary skills, promoting cross-disciplinary learning and collaborative growth.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { icon: <Users className="mr-2 h-4 w-4" />, text: "Seamless Skill Matching System" },
                            { icon: <Zap className="mr-2 h-4 w-4" />, text: "Diverse Learning Opportunities" },
                            { icon: <MessageSquare className="mr-2 h-4 w-4" />, text: "Real-Time Interactions" },
                            { icon: <Layout className="mr-2 h-4 w-4" />, text: "User-Friendly Interface" },
                            { icon: <Shield className="mr-2 h-4 w-4" />, text: "Secure and Trustworthy Environment" },
                            { icon: <Star className="mr-2 h-4 w-4" />, text: "Rating and Review System" },
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
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="backend">Backend</TabsTrigger>
                    <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend">
                    <Card>
                        <CardHeader>
                            <CardTitle>Frontend Technology Stack</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Next.js: React framework for server-side rendering</li>
                                <li>TypeScript: Statically typed JavaScript</li>
                                <li>Tailwind CSS: Utility-first CSS framework</li>
                                <li>Framer Motion: Motion library for animations</li>
                                <li>shadcn/ui: Customizable UI component library</li>
                                <li>React Hooks: For state and lifecycle management</li>
                                <li>Lucide Icons: Open-source icon collection</li>
                                <li>Typewriter Effect: For typewriter-style animations</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="backend">
                    <Card>
                        <CardHeader>
                            <CardTitle>Backend Technology Stack</CardTitle>
                        </CardHeader>
                        <CardContent>
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
                    <Card>
                        <CardHeader>
                            <CardTitle>Infrastructure</CardTitle>
                        </CardHeader>
                        <CardContent>
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

            <Card>
                <CardHeader>
                    <CardTitle>System Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                            <Laptop className="mr-2 h-6 w-6" />
                            <div>
                                <h3 className="font-semibold">Client-Side (Frontend)</h3>
                                <p className="text-sm text-muted-foreground">Next.js, TypeScript, Tailwind CSS</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Server className="mr-2 h-6 w-6" />
                            <div>
                                <h3 className="font-semibold">Server-Side (Backend)</h3>
                                <p className="text-sm text-muted-foreground">Node.js, Express.js, RESTful APIs</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Database className="mr-2 h-6 w-6" />
                            <div>
                                <h3 className="font-semibold">Database</h3>
                                <p className="text-sm text-muted-foreground">MongoDB Atlas</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Cloud className="mr-2 h-6 w-6" />
                            <div>
                                <h3 className="font-semibold">Deployment</h3>
                                <p className="text-sm text-muted-foreground">Vercel</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Key Modules</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        {[
                            "User Module: Registration, login, profile management",
                            "Skill Module: Manage, search, and discover skills",
                            "Exchange Module: Offer and request skills with messaging",
                            "Rating Module: Rate and review learning experiences",
                            "Notification Module: Real-time notifications and email alerts",
                        ].map((item, index) => (
                            <li key={index} className="flex items-center">
                                <Badge variant="outline" className="mr-2">
                                    {index + 1}
                                </Badge>
                                {item}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Future Enhancements</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                        <ul className="space-y-2">
                            {[
                                "Mobile application for iOS and Android",
                                "Gamification elements to increase engagement",
                                "Enhanced skill matching algorithm using machine learning",
                                "Expansion of skill categories and subcategories",
                                "Advanced analytics and reporting tools",
                                "Community features such as forums and group discussions",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <Badge variant="outline" className="mr-2">
                                        {index + 1}
                                    </Badge>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </ScrollArea>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Conclusion</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        SkillSwap aims to create a collaborative learning environment, bridging knowledge gaps and fostering
                        academic growth by promoting peer-to-peer skill exchanges. With its modern technology stack, user-friendly
                        interface, and focus on security and scalability, SkillSwap is poised to revolutionize the way students
                        learn and share knowledge.
                    </p>
                </CardContent>
            </Card>
            <Footer />
        </div>
    )
}

