export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  it: number;
  name: string;
  email: string;
  body: string;
}
