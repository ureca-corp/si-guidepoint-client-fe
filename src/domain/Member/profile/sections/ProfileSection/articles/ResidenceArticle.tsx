import { TextInput } from "@/domain/Member/profile/common/components/input/TextInput";
import { ArticleTemplate } from "@/domain/Member/profile/common/components/template";
import { TextArea } from "@/domain/Member/profile/common/components/textarea";
import { useResidenceArticle } from "../hooks/useResidenceArticle";

export const ResidenceArticle = () => {
  const { state } = useResidenceArticle();

  return (
    <ArticleTemplate title="Physical / Residence Address">
      <TextArea
        label={"Street1"}
        value={state.street1.value}
        onChange={state.street1.onChange}
      />
      <TextArea
        label={"Street2"}
        value={state.street2.value}
        onChange={state.street2.onChange}
      />
      <TextArea
        label={"Street3"}
        value={state.street3.value}
        onChange={state.street3.onChange}
      />
      <TextArea
        label={"City"}
        value={state.city.value}
        onChange={state.city.onChange}
      />
      <TextInput
        label={"Postal Code"}
        value={state.postalCode.value}
        onChange={state.postalCode.onChange}
      />
      <TextInput
        label={"Country"}
        value={state.country.value}
        onChange={state.country.onChange}
      />
      <TextInput
        label={"Time Zone"}
        value={state.timeZone.value}
        onChange={state.timeZone.onChange}
        isNecessary
      />
    </ArticleTemplate>
  );
};
