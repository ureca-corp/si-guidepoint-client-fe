import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { UserRouterPath } from "@/common/router/RouterPath";
import { css } from "@emotion/react";

export const CustomAppbar = () => {
  return (
    <Stack
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "skyblue",
      }}
    >
      <nav css={sx.nav}>
        <ul css={sx.ul}>
          <Link
            href={UserRouterPath.Profile}
            style={{ textDecoration: "none" }}
          >
            <Typography variant={"subtitle1"}>My Profile</Typography>
          </Link>
          <Link
            href={UserRouterPath.EditProfile}
            style={{ textDecoration: "none" }}
          >
            <Typography variant={"subtitle1"}>Edit Profile</Typography>
          </Link>
        </ul>
      </nav>
    </Stack>
  );
};

const sx = {
  nav: css`
    width: 100%;
    height: 100%;
    padding: 1.11vw;
    display: flex;
    align-items: center;
  `,
  ul: css`
    display: flex;
    align-items: center;
    gap: 1.11vw;
  `,
};
