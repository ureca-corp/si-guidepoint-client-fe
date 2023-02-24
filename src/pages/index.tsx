import { Link, Stack } from "@mui/material";
import { NextPage } from "next";

const BusinessPage: NextPage = () => {
  return (
    <Stack paddingY="40px" spacing="20px">
      <Link href="/login">로그인</Link>
      <Link href="/signup">회원가입</Link>
    </Stack>
  );
};

export default BusinessPage;
