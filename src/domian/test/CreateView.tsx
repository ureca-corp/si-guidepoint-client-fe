import { BaseForm } from "./base-form/BaseForm";
import { useBaseForm } from "./base-form/UseBaseForm";

export const CreateView = () => {
  const {
    id,
    handleIdChange,
    pw,
    handlePwChange,
    handleCancel,
    submitButtonDisabled,
    handleSubmit,
  } = useBaseForm();

  const handleSubmit2 = () => {
    alert(`create : ${id}, ${pw}`);
  };

  return (
    <div>
      <p>생성하기</p>
      <BaseForm
        id={id}
        handleIdChange={handleIdChange}
        pw={pw}
        handlePwChange={handlePwChange}
        handleCancel={handleCancel}
        submitButtonDisabled={submitButtonDisabled}
        handleSubmit={handleSubmit2}
      />
    </div>
  );
};
