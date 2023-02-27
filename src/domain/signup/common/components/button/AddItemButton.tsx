import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

type AddItemButtonType = {
  text: string;
  onClick: () => void;
};

export const AddItemButton = ({ text, onClick }: AddItemButtonType) => {
  return (
    <Button
      onClick={onClick}
      sx={{ display: "flex", alignItems: "center", gap: "8px" }}
    >
      <AddCircleIcon />
      {text}
    </Button>
  );
};
