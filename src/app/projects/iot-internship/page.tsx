import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Camera, Cpu, Eye, Lock, BarChart, Zap, Layers, UserCheck } from "lucide-react"
import NavbarSet from "@/components/ui/navbar-set"
import Footer from "@/components/ui/footer"


export default function ALPRProjectPage() {
    return (
        <div className="container mx-auto p-6 space-y-6 max-w-3xl">
            <div className="flex flex-row justify-center py-4">
                <NavbarSet />
            </div>

            <header className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Automated License Plate Recognition (ALPR) System</h1>
                <p className="text-xl text-muted-foreground">Smart Parking Management Solution</p>
            </header>

            <Card>
                <CardHeader>
                    <CardTitle>Project Overview</CardTitle>
                    <CardDescription>
                        An innovative system designed to enhance smart parking management using Raspberry Pi 4, integrating camera,
                        IR sensor, and servo motor for barrier control.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        The ALPR system captures vehicle images, isolates license plates, and uses Optical Character Recognition
                        (OCR) to extract text. Data is logged and displayed on a dynamic web dashboard.
                    </p>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <Card>

                    <CardHeader>
                        <CardTitle>Key Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {[
                                { icon: <Camera className="mr-2 h-4 w-4" />, text: "Automated Vehicle Identification" },
                                { icon: <Zap className="mr-2 h-4 w-4" />, text: "Real-time Data Tracking" },
                                { icon: <Lock className="mr-2 h-4 w-4" />, text: "Enhanced Security" },
                                { icon: <Eye className="mr-2 h-4 w-4" />, text: "Real-time Monitoring" },
                                { icon: <BarChart className="mr-2 h-4 w-4" />, text: "Cost-Effectiveness" },
                                { icon: <Layers className="mr-2 h-4 w-4" />, text: "Scalability" },
                                { icon: <UserCheck className="mr-2 h-4 w-4" />, text: "User-Friendly Design" },
                            ].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    {item.icon}
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Technical Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-semibold mb-2">Hardware Components:</h3>
                        <ul className="list-disc list-inside mb-4">
                            <li>Raspberry Pi 4</li>
                            <li>USB Camera</li>
                            <li>IR Sensor</li>
                            <li>Servo Motor</li>
                        </ul>
                        <h3 className="font-semibold mb-2">Software Components:</h3>
                        <ul className="list-disc list-inside">
                            <li>Raspberry Pi OS</li>
                            <li>Python 3</li>
                            <li>Node.js</li>
                            <li>Google Cloud Platform (GCP)</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Workflow</CardTitle>
                </CardHeader>
                <CardContent>
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

            <Card>
                <CardHeader>
                    <CardTitle>Google Cloud Vision API Integration</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        The system leverages Google Cloud Vision API for superior OCR capabilities, ensuring high accuracy and
                        scalability. The API handles heavy processing, enabling fast execution times with minimal setup required.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Future Improvements</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                        <ul className="space-y-2">
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
                        This ALPR system provides a practical and effective solution for smart parking management, offering
                        real-time vehicle identification, efficient data logging, and enhanced security. Future improvements will
                        focus on expanding its capabilities and integrating it with other systems.
                    </p>
                </CardContent>
            </Card>
            <Footer />
        </div>
    )
}

