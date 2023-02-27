import {
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

type StartEndDateSelectionProps = {
  isVertical: boolean;
};

export const StartEndDateSelection = ({
  isVertical,
}: StartEndDateSelectionProps) => {
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
              value={"Mr"}
              onChange={(e) => e.target.value}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ flex: 3 }}>
            <Select
              value={"Mr"}
              onChange={(e) => e.target.value}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
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
              value={"Mr"}
              onChange={(e) => e.target.value}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ flex: 3 }}>
            <Select
              value={"Mr"}
              onChange={(e) => e.target.value}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  );
};
