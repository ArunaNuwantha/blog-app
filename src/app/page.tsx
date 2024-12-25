import { Grid2 } from "@mui/material";
import PostListItem from "./components/PostListItem";
import { POST_API_URL } from "./constants";
import styles from "./page.module.css";
import { Post } from "./types/types";

export default async function Home() {
  const posts: Post[] = await fetch(POST_API_URL).then((res) => res.json());

  return (
    <div className={styles.page}>
      <h1>Blogs</h1>
      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {posts.map((post, index) => (
          <Grid2 key={index} size={{ xs: 4, sm: 4, md: 6, lg: 4 }}>
            <PostListItem key={post.id} post={post} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}
