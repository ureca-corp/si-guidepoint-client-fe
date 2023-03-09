import { css } from "@emotion/react";
import { IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { ButtonProps } from "../../types/input.type";

export const DeleteButton = ({ onClick }: ButtonProps) => {
  return (
    <IconButton onClick={onClick} css={sx.deleteIcon}>
      <RemoveCircleIcon sx={{ fill: "red" }} />
    </IconButton>
  );
};

const sx = {
  deleteIcon: css`
    position: absolute;
    top: 0.2vw;
    right: 0.2vw;
  `,
};
