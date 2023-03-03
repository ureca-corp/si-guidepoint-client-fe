import { TextInput } from "@/domain/signup/common/components/input/TextInput";
import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { TextArea } from "@/domain/signup/common/components/textarea";
import { useAddressArticle } from "../hooks/useAddressArticle";

export const PhysicalArticle = () => {
  const { state } = useAddressArticle();

  return (
    <ArticleTemplate title="Physical / Residence Address">
      <TextArea
        label={"Sheet1"}
        value={state.sheet1.value}
        onChange={state.sheet1.onChange}
      />
      <TextArea
        label={"Sheet2"}
        value={state.sheet2.value}
        onChange={state.sheet2.onChange}
      />
      <TextArea
        label={"Sheet3"}
        value={state.sheet3.value}
        onChange={state.sheet3.onChange}
      />

      <TextArea
        label={"City"}
        value={state.city.value}
        onChange={state.city.onChange}
      />
      <TextArea
        label={""}
        value={state.cityOption.value}
        onChange={state.cityOption.onChange}
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
