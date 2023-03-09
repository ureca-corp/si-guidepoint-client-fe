import { ArticleTemplate } from "@/domain/Member/profile/common/components/template";
import { Button, Typography } from "@mui/material";

interface Props {
  props: {
    file: any;
    onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export const ResumeArticle = ({ props }: Props) => {
  return (
    <ArticleTemplate title="Resume">
      <div>
        <Button variant="contained" component="label">
          Upload File
          <input
            id="resume-upload"
            type="file"
            onChange={(e) => props.onClick(e)}
            hidden
          />
        </Button>
      </div>
      <label htmlFor="resume-upload">
        <Typography variant="body2">{props.file}</Typography>
      </label>
    </ArticleTemplate>
  );
};
