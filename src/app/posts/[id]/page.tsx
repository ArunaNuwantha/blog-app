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
    <div
      className="postitem"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" component="div" padding={2}>
        {post.title}
      </Typography>
      <Typography variant="body1" component="div" padding={2}>
        {post.body}
      </Typography>

      <Divider />

      <Typography variant="h4" component="div">
        Comments
      </Typography>
      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {filteredComments.map((comment, index) => (
          <Grid2
            key={index}
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            paddingX={2}
          >
            <CommentItem key={comment.it} comment={comment} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}
