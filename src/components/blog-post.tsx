interface Post {
    date: string
    tags: string[]
    title: string
    description: string
  }
  
  const posts: Post[] = [
    {
      date: "Dec 31, 2024",
      tags: ["dreamscape", "blog"],
      title: "My 2024 In Programming",
      description: "A summary the programming projects I worked on in 2024.",
    },
    {
      date: "Nov 24, 2024",
      tags: ["dreamscape", "blog", "book review", "privacy"],
      title: "Giveaway and a Book Review",
      description: "A review of Why Privacy Matters by Neil Richards",
    },
    {
      date: "Nov 7, 2024",
      tags: ["swiftui", "typography", "accessibility"],
      title: "How to use the dynamicTypeSize modifier in SwiftUI",
      description:
        "In this article, I will show you how to restrict text size increasing using the dynamicTypeSize modifier.",
    },
  ]
  
  export function BlogPosts() {
    return (
      <div className="space-y-12">
        {posts.map((post, index) => (
          <article key={index} className="space-y-2">
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <time>{post.date}</time>
              <div className="flex gap-2">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="hover:text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-xl text-gray-900 hover:text-gray-600">
              <a href="#">{post.title}</a>
            </h3>
            <p className="text-gray-600">{post.description}</p>
          </article>
        ))}
      </div>
    )
  }
 export default BlogPosts;