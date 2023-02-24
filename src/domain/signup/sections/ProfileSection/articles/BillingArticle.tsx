import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { Stack, Typography } from "@mui/material";
import { useAddressArticle } from "../hooks/useAddressArticle";

export const BillingArticle = () => {
  const { state } = useAddressArticle();
  const usd = 800;

  return (
    <ArticleTemplate title="Billing Information">
      <Stack direction="row" spacing="1.11vw">
        <Typography width="8vw">{"Consulting Rate"}</Typography>
        <Typography width="100%">
          {usd}
          {" USD / hr"}
        </Typography>
      </Stack>
      <Stack direction="row" spacing="1.11vw">
        <Typography width="8vw" textAlign="right">
          {"Social Security\nNumber / EIN"}
        </Typography>
        <Typography width="100%"></Typography>
      </Stack>
    </ArticleTemplate>
  );
};
