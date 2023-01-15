type categories = 'Biographies' | 'Classics' | 'Fantasy' | 'Horror'
interface IOwnersData {
  ownersData:{
    id:number
    distance: string
    owner: string
    avatar: string
    bookDescription?: string
  }[]
}
export default IOwnersData
