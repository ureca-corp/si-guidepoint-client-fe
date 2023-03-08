import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import { SnsModels } from "@/common/models/input.model";
import { SocialMediaProfile } from "@/recoil/Profile/biography.atom";

interface Props {
  id: number;
  itemState: SocialMediaProfile;
  onChangeState: {
    type: (id: number, v: string) => void;
    link: (id: number, v: string) => void;
  };
  onDelete: (itemId: number) => void;
}

export const SocialMediaLinkItem = ({
  id,
  itemState,
  onChangeState,
  onDelete,
}: Props) => {
  return (
    <Stack direction={"row"} spacing="1.11vw">
      <FormControl sx={{ width: "200px" }}>
        <Select
          id="demo-simple-select"
          value={itemState.type}
          onChange={(e) => onChangeState.type(id, e.target.value)}
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
        value={itemState.link}
        onChange={(e) => onChangeState.link(id, e.target.value)}
      />
      <IconButton onClick={() => onDelete(id)}>
        <DisabledByDefaultRoundedIcon color="error" />
      </IconButton>
    </Stack>
  );
};

const sx = {};
