import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Post } from "../types/types";

interface PostListItemProps {
  post: Post;
}

const PostListItem = ({ post }: PostListItemProps) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <Card sx={{ minWidth: 300, height: 100 }}>
        <CardContent>
          <Typography variant="subtitle1" component="div">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {`${post.body.substring(0, 50)}...`}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostListItem;
