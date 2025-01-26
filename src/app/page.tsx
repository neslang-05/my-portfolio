"use client";
import Link from "next/link"

import { cn } from "@/lib/utils"
import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Github, Linkedin, Sun, Moon, Divide } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 px-top-1 sm:px-6 lg:px-8">
      <NavigationMenu >
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent className="p-3 space-y-2 width-y-48" >
              <ul className="gap-3 p-1 md:w-[200px] ">
                <div className="text-sm-bold">
                  <li><a className="hover:font-bold hover:text-green-900" href="#about">My Projects</a></li>
                  <li><a className="hover:font-bold hover:text-green-900" href="#about">Work Experience</a></li>
                  <li><a className="hover:font-bold hover:text-green-900" href="#about">Education</a></li>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="cursor-pointer">Blog</div>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="cursor-pointer">Tag</div>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="cursor-pointer">About</div>
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8">

          <header className="border-b pb-8">
            <div className="flex flex-col justify-between py-8">
              <div>
                <h1 className="text-3xl font-bold">Nilambar Elangbam</h1>
                <p className="text-xl">Computer Science Engineering Student</p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:neslang.in@gmail.com" target="_blank" rel="noopener noreferrer">neslang.in@gmail.com</a>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-2" />
                <a href="https://wa.me/919366462995" target="_blank" rel="noopener noreferrer">+91 9366462995</a>
              </div>
              <div className="flex items-center text-gray-600">
                <Github className="w-5 h-5 mr-2" />
                <a href="https://github.com/neslang-05" target="_blank" rel="noopener noreferrer">GitHub/neslang-05</a>
              </div>
              <div className="flex items-center text-gray-600">
                <Linkedin className="w-5 h-5 mr-2" />
                <a href="https://www.linkedin.com/in/nilambar-elangbam-524617247/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Imphal, Manipur, India</span>
              </div>
            </div>
          </header>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900">Bachelor of Technology in Computer Science and Engineering</h3>
              <p className="text-gray-600">Manipur Technical University</p>
              <p className="text-gray-600">Expected Graduation: May 2026</p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "Python", "React", "Node.js", "SQL", "Git", "Data Structures", "Algorithms"].map(
                (skill) => (
                  <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ),
              )}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Skill-Barter Website</h3>
                <p className="text-gray-600">Developed a full-stack Skill-Barting platform using React and Node.js</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">ALPR(Automatic License Plate Recognition) System</h3>
                <p className="text-gray-600">Implemented a real-time ALPR system using Python, OpenCV and Google Cloud Vision API</p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Work Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">IoT Intern</h3>
                <p className="text-gray-600">CubeTen Technologies | August 2024</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Assisted in developing and testing IoT devices and systems</li>
                  <li>Collaborated with developers to improve code quality and efficiency</li>
                </ul>
              </div>
            </div>
          </section>
          <footer className="mt-8 py-4 border-t border-gray-200 text-center text-gray-600">
            Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.
          </footer>
        </div>
      </div>
    </div>
  )
}