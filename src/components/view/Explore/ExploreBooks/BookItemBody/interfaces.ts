type categories = 'Biographies' | 'Classics' | 'Fantasy' | 'Horror'
interface IBookCategories {
  id?:number
  category?: string
  cover: string
  bookName: string
  author: string
}
export default IBookCategories
