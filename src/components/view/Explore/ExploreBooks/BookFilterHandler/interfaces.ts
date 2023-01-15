type categories = 'Biographies' | 'Classics' | 'Fantasy' | 'Horror'
interface IBookFilterHandler {
  BookData: {
    id?: number
    category?: string
    cover: string
    bookName: string
    author: string
  }[]
  setFilteredBook:
      React.Dispatch<
        React.SetStateAction<
          {
            id?: number
            category?: string
            cover: string
            bookName: string
            author: string
          }[]
        >
      >
   
}
export default IBookFilterHandler
