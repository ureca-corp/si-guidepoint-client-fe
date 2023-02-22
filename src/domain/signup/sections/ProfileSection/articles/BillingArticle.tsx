import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { useAddressArticle } from "../hooks/useAddressArticle";

export const BillingArticle = () => {
  const { state } = useAddressArticle();

  return (
    <ArticleTemplate title="Billing Information">
      <div></div>
    </ArticleTemplate>
  );
};
