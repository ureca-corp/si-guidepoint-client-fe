import { BaseForm } from "./base-form/BaseForm";
import { useBaseForm } from "./base-form/UseBaseForm";

export const UpdateView = () => {
  const { userId, userPassword } = getData();

  const {
    id,
    handleIdChange,
    pw,
    handlePwChange,
    handleCancel,
    submitButtonDisabled,
    handleSubmit,
  } = useBaseForm(userId, userPassword);

  const handleSubmit2 = () => {
    alert(`update : ${id}, ${pw}`);
  };

  return (
    <div>
      <p>수정하기</p>
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

// 서버에서 데이터 가져오기
const getData = () => {
  return {
    userId: "asd@gmail.com",
    userPassword: "asdasd123!!",
  };
};
