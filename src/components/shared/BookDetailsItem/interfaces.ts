type categories = 'Biographies' | 'Classics' | 'Fantasy' | 'Horror'
interface IBookDetailsItem  {
  isCategoryHidden?:boolean
    category?: string
    cover: string
    bookName: string
    author: string
    id?: number
 
}
export default IBookDetailsItem
