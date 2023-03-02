import { MonthModels } from "@/common/models/input.model";
import {
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback } from "react";
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

  const years = () => {
    let years = [];
    let nowYear = +new Date().getFullYear();
    let i = 0;

    for (i; i++; i < 100) {
      years.push(nowYear - i);
      console.log(1);
    }

    return years;
  };

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
