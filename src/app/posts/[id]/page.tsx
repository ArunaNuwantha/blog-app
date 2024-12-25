import CommentItem from "@/app/components/CommentItem";
import { COMMENT_API_URL, POST_API_URL } from "@/app/constants";
import React from "react";
import { Grid2, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Post, Comment } from "@/app/types/types";

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts: Post[] = await fetch(POST_API_URL).then((res) => res.json());
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post: Post = await fetch(`${POST_API_URL}/${id}`).then((res) =>
    res.json()
  );

  const comments: Comment[] = await fetch(COMMENT_API_URL).then((res) =>
    res.json()
  );
  const filteredComments = comments.filter(
    (comment) => comment.postId === parseInt(id)
  );

  return (
    <div className="postitem">
      <Typography variant="h2" component="h2">
        {post.title}
      </Typography>
      <Typography variant="body1">{post.body}</Typography>

      <Divider />

      <h2>comments</h2>
      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {filteredComments.map((comment, index) => (
          <Grid2 key={index} size={{ xs: 11, sm: 11, md: 11, lg: 11 }}>
            <CommentItem key={comment.it} comment={comment} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}
