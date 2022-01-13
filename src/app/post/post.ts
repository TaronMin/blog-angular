export interface PostModel {
  id?: number,
  tile: string,
  body: string,
  user_id?: number
}

export interface PostEditModel {
  tile: string,
  body: string,
}
