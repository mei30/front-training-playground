export declare interface Song {
  uid: string | undefined
  display_name: string
  original_name: string
  modified_name: string
  genre: string
  comment_count: number
  url: string
  docID?: string
}

export declare interface Comment {
  content: string
  datePosted: string
  name: string
  sid: string
  uid: string
  docID?: string
}
