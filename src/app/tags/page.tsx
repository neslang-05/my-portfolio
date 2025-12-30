import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Tags derived from projects and blog topics
const tags = [
    "IoT",
    "React",
    "Next.js",
    "Firebase",
    "Python",
    "TypeScript",
    "JavaScript",
    "LoRa",
    "Raspberry Pi",
    "Machine Learning",
    "AI",
    "Computer Vision",
    "Cloud",
    "AWS",
    "GCP",
    "Web Development",
    "Mobile",
    "Arduino",
    "ESP32",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Node.js",
    "FastAPI",
    "Flask",
    "TensorFlow",
    "OpenCV",
    "Linux",
    "Docker",
    "Git",
    "HTML",
    "CSS",
    "Tailwind",
    "LaTeX",
    "Embedded Systems",
    "Hardware",
]

export default function TagsPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <main className="max-w-3xl mx-auto px-6 py-24">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Explore</span>
                    <h1 className="text-4xl font-bold tracking-tight mt-2">Tags</h1>
                    <p className="text-zinc-400 mt-4">
                        Browse all topics I&apos;ve worked with and written about.
                    </p>
                </div>

                {/* Tags Grid */}
                <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                        <a
                            key={tag}
                            href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
                            className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-zinc-400 text-sm font-mono hover:bg-zinc-900 hover:text-white hover:border-zinc-700 transition-colors"
                        >
                            {tag}
                        </a>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-16 pt-8 border-t border-zinc-900">
                    <div className="flex gap-12 text-sm">
                        <div>
                            <span className="text-2xl font-bold">{tags.length}</span>
                            <p className="text-zinc-500 font-mono text-xs mt-1">Topics</p>
                        </div>
                        <div>
                            <span className="text-2xl font-bold">15+</span>
                            <p className="text-zinc-500 font-mono text-xs mt-1">Projects</p>
                        </div>
                        <div>
                            <span className="text-2xl font-bold">3+</span>
                            <p className="text-zinc-500 font-mono text-xs mt-1">Years Experience</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

