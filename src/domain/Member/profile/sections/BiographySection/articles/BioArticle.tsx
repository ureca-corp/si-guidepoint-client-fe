import { ArticleWithDescTemplate } from "@/domain/Member/profile/common/components/template/ArticleWithDescTemplate";
import { TextField, Typography } from "@mui/material";

type ArticleProps = {
  props: {
    value: string;
    onChange: (v: string) => void;
    remainedTextCount: () => number;
  };
};

export const BioArticle = ({ props }: ArticleProps) => {
  return (
    <ArticleWithDescTemplate
      title="*Biography"
      desc={`Please adhere to the following bio format.\n\nJohn Smith is the Chief Credit Officer at XXX, a regional bank in Illinois. In the position, he is responsible for reviewing the bank&apos;s loan portfolio to prevent or reduce losses, assuring documentation is in compliance with loan committee approvals. State and Federal Regulations, and assisting in the detection of deterioration in loan quality. Mr. Smith has over 25 years experience in bank lending, loan review and compliance, working at A,B & C banks. He has served as an advisor to banks and governments nationally on all aspects of bank lending. He has authored various bestsellig books inclluding "XXX" and "XXX".`}
    >
      <TextField
        inputProps={{ maxLength: 2000 }}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        multiline
        rows={8}
      />
      <Typography>Characters Remaining {props.remainedTextCount()}</Typography>
    </ArticleWithDescTemplate>
  );
};
