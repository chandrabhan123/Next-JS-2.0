
export default async function myArticle({params}) {
const { articleId } = await params
  return (
    <div>This is article {articleId}</div>
  )
}
