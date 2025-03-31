export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  coverImage {
    asset->{
      _id,
      url
    }
  }
}`
