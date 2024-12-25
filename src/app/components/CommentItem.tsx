import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Comment } from "../types/types";

interface CommentProps {
  comment: Comment;
}

const CommentItem = ({ comment }: CommentProps) => {
  return (
    <Card sx={{ minWidth: 300, height: 100 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }}>{comment.email}</Typography>
        <Typography variant="body2">{comment.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default CommentItem;
