import { sanityClient }
import { allPostsQuery } 
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await sanityClient.fetch(allPostsQuery)

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post: any) => (
          <li key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <div className="text-2xl text-blue-600 hover:underline">
                {post.title}
              </div>
            </Link>
            <p className="text-gray-600">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
