"use client";
import Link from "next/link"

import { cn } from "@/lib/utils"
import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Github, Linkedin, Sun, Moon, Divide, Instagram } from "lucide-react";
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
import NavbarSet from "@/components/ui/navbar-set";
import Footer from "@/components/ui/footer";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 px-top-1 sm:px-6 lg:px-8">
      <NavbarSet />
      <div className="max-w-4xl mx-auto overflow-hidden">
        <div className="px-6 py-8">

          <header className="border-b pb-8">
            <div className="flex flex-col justify-between py-8">
              <div>
                <h1 className="text-3xl font-bold">Nilambar Elangbam</h1>
                <p className="text-xl">Computer Science Engineering Student</p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center text-gray-600-bold  hover:text-[#164d40] hover:-translate-y-1.5 transition-transform duration-300 ease-in-out">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:neslang.in@gmail.com" target="_blank" rel="noopener noreferrer">neslang.in@gmail.com</a>
              </div>
              <div className="flex items-center text-gray-600-bold  hover:text-[#164d40] hover:-translate-y-1.5 transition-transform duration-300 ease-in-out">
                <Phone className="w-5 h-5 mr-2" />
                <a href="https://wa.me/919366462995" target="_blank" rel="noopener noreferrer">+91 9366462995</a>
              </div>
              <div className="flex items-center text-gray-600-bold  hover:text-[#164d40] hover:-translate-y-1.5 transition-transform duration-300 ease-in-out">
                <Github className="w-5 h-5 mr-2" />
                <a href="https://github.com/neslang-05" target="_blank" rel="noopener noreferrer">neslang-05</a>
              </div>
              <div className="flex items-center text-gray-600-bold  hover:text-[#164d40] hover:-translate-y-1.5 transition-transform duration-300 ease-in-out">
                <Linkedin className="w-5 h-5 mr-2" />
                <a href="https://www.linkedin.com/in/nilambar-elangbam-524617247/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div className="flex items-center text-gray-600-bold  hover:text-[#164d40] hover:-translate-y-1.5 transition-transform duration-300 ease-in-out">
                <Instagram className="w-5 h-5 mr-2" />
                <a href="https://www.instagram.com/nilambar_e/" target="_blank" rel="noopener noreferrer">nilambar_e</a>
              </div>
              <div className=" cursor-pointer flex items-center text-gray-600-bold  hover:text-[#164d40] ">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Imphal, Manipur, India</span>
              </div>
            </div>
          </header>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4" id="about">About Me</h2>
            <p className="text-gray-600">
              I’m a developer passionate about creating impactful solutions that seamlessly integrate robust engineering with thoughtful design. My expertise lies at the intersection of IoT, cloud computing, and web development, where I enjoy turning innovative ideas into practical applications. Whether it’s crafting user-friendly interfaces, optimizing backend systems, or building intelligent IoT solutions, I aim to deliver work that is both effective and meaningful.
              <br />
              <br />
              Currently, I’m a third-year Computer Science and Engineering student at Manipur Technical University, focusing on building IoT-powered systems and web platforms. I’ve worked on projects like automatic license plate recognition using Raspberry Pi and Google Cloud, and I’m currently developing a skill barter platform for students. Through these projects, I’ve honed my skills in Python, cloud platforms, MongoDB, and embedded systems, while emphasizing performance, usability, and scalability.
              <br />
              <br />
              In the past, I’ve delved into architecture design using SketchUp, explored automation, and worked on research projects involving database optimization and statistical analysis. My curiosity has led me to blend creative pursuits like drawing and exploring maps with my technical expertise.
              <br />
              <br />
              When I’m not coding, you’ll find me sketching, walking long trails, or planning new adventures—like my upcoming solo trip across Southeast Asia. I’m eager to learn, grow, and build solutions that make a difference.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4" id="about">Education</h2>
            <div className=" cursor-pointer mb-4 p-3 transition-all duration-300 hover:bg-green-100/60 hover:-translate-y-[5px] hover:shadow-sm rounded-lg"  >
              <h3 className="text-lg font-medium text-gray-900">Bachelor of Technology in Computer Science and Engineering</h3>
              <p className="text-gray-600">Manipur Technical University</p>
              <p className="text-gray-600">Expected Graduation: May 2026</p>
            </div>
            <div className=" cursor-pointer mb-4 p-3 transition-all duration-300 hover:bg-green-100/60 hover:-translate-y-[5px] hover:shadow-sm rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">12th Standard</h3>
              <p className="text-gray-600">Herbert School, Changangei</p>
              <p className="text-gray-600">Year: 2022</p>
            </div>


            <div className=" cursor-pointer mb-4 p-3 transition-all duration-300 hover:bg-green-100/60 hover:-translate-y-[5px] hover:shadow-sm rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">10th Standard</h3>
              <p className="text-gray-600">Don Bosco School, Imphal</p>
              <p className="text-gray-600">Year: 2020</p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "Python", "React", "Node.js", "SQL", "Git", "Data Structures", "Algorithms"].map(
                (skill) => (
                  <span key={skill} className="cursor-pointer mb-4 p-3 transition-all duration-300 hover:bg-green-100/60 hover:-translate-y-[5px] hover:shadow-sm rounded-lg">
                    {skill}
                  </span>
                ),
              )}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h2>
            <div className="space-y-4">
              <Link href="/projects/iot-internship">
                <div className=" cursor-pointer mb-4 p-3 transition-all duration-300 hover:bg-green-100/60 hover:-translate-y-[5px] hover:shadow-sm rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900">ALPR(Automatic License Plate Recognition) System</h3>
                  <p className="text-gray-600">Implemented a real-time ALPR system using Python, OpenCV and Google Cloud Vision API</p>
                </div>
              </Link>

              <Link href="/projects/skill-barter">
                <div className=" cursor-pointer mb-4 p-3 transition-all duration-300 hover:bg-green-100/60 hover:-translate-y-[5px] hover:shadow-sm rounded-lg" >
                  <h3 className="text-lg font-medium text-gray-900">Skill-Barter Website</h3>
                  <p className="text-gray-600">Developed a full-stack Skill-Barting platform using React and Node.js</p>
                </div>
              </Link>
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
          <Footer />
        </div>
      </div>
    </div>
  )
}


