import { css } from "@emotion/react";
import { UseDialogOpen } from "@/common/hooks/UseDialogOpen";
import { Button, Dialog, DialogTitle, Stack } from "@mui/material";
import { useRouter } from "next/router";

export const BasicDialog = () => {
  const router = useRouter();
  const { openState, msgState, hrefState } = UseDialogOpen();
  return (
    <Dialog onClose={() => openState.onClose()} open={openState.value}>
      <Stack css={sx.inner}>
        <DialogTitle variant="subtitle1">{msgState.value}</DialogTitle>
        <Button
          onClick={
            hrefState.value == ""
              ? () => openState.onClose()
              : () => {
                  openState.onClose();
                  router.push(hrefState.value);
                }
          }
        >
          {"확인"}
        </Button>
      </Stack>
    </Dialog>
  );
};

const sx = {
  inner: css`
    width: 100%;
  `,
};
