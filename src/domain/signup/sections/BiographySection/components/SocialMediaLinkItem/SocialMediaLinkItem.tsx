import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import { MediaItem } from "../../types/item.type";
import { SnsModels } from "@/common/models/input.model";

interface Props {
  itemState: MediaItem;
  onChangeState: {
    sns: (id: number, v: string) => void;
    address: (id: number, v: string) => void;
  };
  onDelete: (itemId: number) => void;
}

export const SocialMediaLinkItem = ({
  itemState,
  onChangeState,
  onDelete,
}: Props) => {
  return (
    <Stack direction={"row"} spacing="1.11vw">
      <FormControl sx={{ width: "200px" }}>
        <Select
          id="demo-simple-select"
          value={itemState.sns}
          onChange={(e) => onChangeState.sns(itemState.id, e.target.value)}
        >
          {SnsModels.map((it) => (
            <MenuItem key={it} value={it}>
              {it}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        value={itemState.address}
        onChange={(e) => onChangeState.address(itemState.id, e.target.value)}
      />
      <IconButton onClick={() => onDelete(itemState.id)}>
        <DisabledByDefaultRoundedIcon color="error" />
      </IconButton>
    </Stack>
  );
};

const sx = {};
