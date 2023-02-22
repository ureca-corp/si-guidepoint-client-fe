import { Stack } from "@mui/material";
import { css } from "@emotion/react";

export const PasswordRequestView = () => {
  return (
    <div>
      <Stack css={sx.box}>
        <div>비밀번호 재설정</div>
        <div>
          <p>
            {" "}
            계정으로 사용하시는 이메일 주소를 입력하시면 <br />
            비밀번호를 설정하실 수 있는 메일을 전송해 드립니다.
          </p>
        </div>
      </Stack>
    </div>
  );
};

const sx = {
  box: css`
    width: 750px;
    height: 540px;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-shadow: 0 4px 10px rgba(165, 165, 165, 0.2);
  `,
};
