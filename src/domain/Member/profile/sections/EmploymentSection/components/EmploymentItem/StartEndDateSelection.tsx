import { MonthModels } from "@/common/models/input.model";
import { ProfileReadonlyAtom } from "@/recoil/Profile/readonly/readonly.atom";
import {
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { YearDateProps } from "../../types/item.type";

type StartEndDateSelectionProps = {
  id: number;
  startDateState: YearDateProps;
  endDateState: YearDateProps;
  isVertical: boolean;
};

export const StartEndDateSelection = ({
  id,
  startDateState,
  endDateState,
  isVertical,
}: StartEndDateSelectionProps) => {
  const nowYear = +new Date().getFullYear();
  const isReadOnly = useRecoilValue(ProfileReadonlyAtom);

  return (
    <Stack
      direction={isVertical ? "column" : "row"}
      width={isVertical ? "100%" : "40%"}
      spacing={isVertical ? "20px" : "1.11vw"}
    >
      <Stack
        id="1111"
        width={"100%"}
        alignItems={"flex-start"}
        spacing="0.55vw"
      >
        <Typography whiteSpace={"pre"}>{"Start Date"}</Typography>
        <Stack
          direction="row"
          width="100%"
          spacing={isVertical ? "12px" : "0.5vw"}
        >
          <FormControl sx={{ flex: 2 }}>
            <Select
              value={startDateState.month.value}
              onChange={(e) =>
                startDateState.month.onChange(id, e.target.value)
              }
              inputProps={{ "aria-label": "Without label" }}
              readOnly={isReadOnly}
            >
              {MonthModels.map((it) => (
                <MenuItem key={it} value={it}>
                  {it}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ flex: 3 }}>
            <Select
              value={startDateState.year.value}
              onChange={(e) => startDateState.year.onChange(id, e.target.value)}
              inputProps={{ "aria-label": "Without label" }}
              readOnly={isReadOnly}
            >
              {Array.from(new Array(100), (v, i) => (
                <MenuItem key={i} value={(nowYear - i).toString()}>
                  {(nowYear - i).toString()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Stack width={"100%"} alignItems={"flex-start"} spacing="0.55vw">
        <Typography whiteSpace={"pre"}>{"End Date"}</Typography>
        <Stack
          direction="row"
          width="100%"
          spacing={isVertical ? "12px" : "0.5vw"}
        >
          <FormControl sx={{ flex: 2 }}>
            <Select
              value={endDateState.month.value}
              onChange={(e) => endDateState.month.onChange(id, e.target.value)}
              inputProps={{ "aria-label": "Without label" }}
              readOnly={isReadOnly}
            >
              {MonthModels.map((it) => (
                <MenuItem key={it} value={it}>
                  {it}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ flex: 3 }}>
            <Select
              value={endDateState.year.value}
              onChange={(e) => endDateState.year.onChange(id, e.target.value)}
              inputProps={{ "aria-label": "Without label" }}
              readOnly={isReadOnly}
            >
              {Array.from(new Array(100), (v, i) => (
                <MenuItem key={i} value={(nowYear - i).toString()}>
                  {(nowYear - i).toString()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  );
};
