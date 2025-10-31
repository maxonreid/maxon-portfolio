export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading font-bold text-5xl text-textPrimary mb-8">
          Blog Post: {params.slug}
        </h1>
        <p className="text-textSecondary text-xl">
          Coming soon...
        </p>
      </div>
    </div>
  )
}
