import { useState } from "react";
import { FullSelection } from "../../common/components/selection/FullSelection";
import { ArticleTemplate } from "../../common/components/template";
import { EmploymentContainer } from "./components";

export const EmploymentSection = () => {
  const [test, setTest] = useState("");
  const handleTestChange = (v: string) => {
    setTest(v);
  };
  return (
    <ArticleTemplate title="Employment History">
      <FullSelection
        label={"Years of Sector Experience"}
        value={test}
        onChange={handleTestChange}
      />
      <EmploymentContainer />
    </ArticleTemplate>
  );
};
