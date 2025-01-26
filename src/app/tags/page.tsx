
import { Footer } from "@/components/ui/footer"
import NavbarSet from "@/components/ui/navbar-set"

const tags = [
    "gatsby",
    "react",
    "firebase",
    "dreamscape",
    "blog",
    "react native",
    "slackbot",
    "domain names",
    "book review",
    "privacy",
    "nextjs",
    "mdx",
    "ios",
    "swift",
    "uikit",
    "macos",
    "javascript",
    "chatgpt",
    "automation",
    "astro",
    "goodreads",
    "hugo",
    "swiftui",
    "typography",
    "accessibility",
    "git",
    "tailwind",
    "storybook",
    "digitalocean",
    "zsh",
    "fish",
    "shell",
]

export default function TagsPage() {
    return (
        <div className="min-h-screen">
            <div className="flex flex-row justify-center py-4">
                <NavbarSet />
            </div>
            <main className="max-w-2xl mx-auto px-4 py-12">
                <h1 className="text-2xl font-normal text-gray-900 mb-4">All of the topics I&apos;ve written about</h1>
                <p className="text-gray-600 mb-8">You can also use the search bar above to search on this website.</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <a
                            key={tag}
                            href={`/tags/${tag}`}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            {tag}
                        </a>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

