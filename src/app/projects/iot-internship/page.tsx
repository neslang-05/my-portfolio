import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Camera, Eye, Lock, BarChart, Zap, Layers, UserCheck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ALPRProjectPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
            <Navbar />

            <main className="max-w-3xl mx-auto p-6 space-y-6">
                <header className="text-center space-y-4 py-6 border-b border-zinc-800">
                    <h1 className="text-4xl font-bold tracking-tight font-sans uppercase">Automated License Plate Recognition (ALPR) System</h1>
                    <p className="text-xl font-sans text-zinc-400">Smart Parking Management Solution</p>
                </header>

                <Card className="bg-zinc-950 border border-zinc-800">
                    <CardHeader>
                        <CardTitle className="font-sans uppercase text-white">Project Overview</CardTitle>
                        <CardDescription className="text-zinc-400">
                            An innovative system designed to enhance smart parking management using Raspberry Pi 4, integrating camera,
                            IR sensor, and servo motor for barrier control.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-zinc-300 text-sm">
                        <p>
                            The ALPR system captures vehicle images, isolates license plates, and uses Optical Character Recognition
                            (OCR) to extract text. Data is logged and displayed on a dynamic web dashboard.
                        </p>
                    </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-zinc-950 border border-zinc-800">
                        <CardHeader>
                            <CardTitle className="font-sans uppercase text-white">Key Features</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-xs font-sans text-zinc-300">
                                {[
                                    { icon: <Camera className="mr-2 h-4 w-4 text-zinc-400" />, text: "Automated Vehicle Identification" },
                                    { icon: <Zap className="mr-2 h-4 w-4 text-zinc-400" />, text: "Real-time Data Tracking" },
                                    { icon: <Lock className="mr-2 h-4 w-4 text-zinc-400" />, text: "Enhanced Security" },
                                    { icon: <Eye className="mr-2 h-4 w-4 text-zinc-400" />, text: "Real-time Monitoring" },
                                    { icon: <BarChart className="mr-2 h-4 w-4 text-zinc-400" />, text: "Cost-Effectiveness" },
                                    { icon: <Layers className="mr-2 h-4 w-4 text-zinc-400" />, text: "Scalability" },
                                    { icon: <UserCheck className="mr-2 h-4 w-4 text-zinc-400" />, text: "User-Friendly Design" },
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        {item.icon}
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-950 border border-zinc-800">
                        <CardHeader>
                            <CardTitle className="font-sans uppercase text-white">Technical Details</CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs font-sans text-zinc-300">
                            <h3 className="font-semibold mb-2 text-zinc-200">Hardware Components:</h3>
                            <ul className="list-disc list-inside mb-4 space-y-1">
                                <li>Raspberry Pi 4</li>
                                <li>USB Camera</li>
                                <li>IR Sensor</li>
                                <li>Servo Motor</li>
                            </ul>
                            <h3 className="font-semibold mb-2 text-zinc-200">Software Components:</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Raspberry Pi OS</li>
                                <li>Python 3</li>
                                <li>Node.js</li>
                                <li>Google Cloud Platform (GCP)</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <Card className="bg-zinc-950 border border-zinc-800">
                    <CardHeader>
                        <CardTitle className="font-sans uppercase text-white">Workflow</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs font-sans text-zinc-300">
                        <ol className="list-decimal list-inside space-y-2">
                            <li>Vehicle Detection: IR sensor triggers the Raspberry Pi</li>
                            <li>Image Capture: Camera captures vehicle image</li>
                            <li>Image Upload: Image uploaded to Google Cloud Storage</li>
                            <li>License Plate Isolation: Image processing isolates plate region</li>
                            <li>OCR: Google Cloud Vision API extracts license plate text</li>
                            <li>Data Logging: Extracted data logged to CSV file</li>
                            <li>Data Transfer: Data sent to Node.js server</li>
                            <li>Dashboard Updates: Real-time dashboard update</li>
                            <li>Action Triggering: System controls servo motor for barrier</li>
                        </ol>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-950 border border-zinc-800">
                    <CardHeader>
                        <CardTitle className="font-sans uppercase text-white">Google Cloud Vision API Integration</CardTitle>
                    </CardHeader>
                    <CardContent className="text-zinc-300 text-sm">
                        <p>
                            The system leverages Google Cloud Vision API for superior OCR capabilities, ensuring high accuracy and
                            scalability. The API handles heavy processing, enabling fast execution times with minimal setup required.
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-950 border border-zinc-800">
                    <CardHeader>
                        <CardTitle className="font-sans uppercase text-white">Future Improvements</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[250px] w-full border border-zinc-800 p-4">
                            <ul className="space-y-2 font-sans text-xs text-zinc-300">
                                {[
                                    "Database Integration",
                                    "Enhanced User Interface",
                                    "Advanced Analytics",
                                    "Real-time Alerts",
                                    "Integration with Other Systems",
                                    "Cloud Functions",
                                    "Security Enhancements",
                                    "User Authentication",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <Badge variant="outline" className="mr-2 border-zinc-800 text-zinc-400">
                                            {index + 1}
                                        </Badge>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </main>

            <Footer />
        </div>
    )
}
