import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { ChangeEvent } from "react";

/**
 * A slider component for controlling volume.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.value - The current value of the slider.
 * @param {Function} props.onVolumeChange - The callback function to be called when the slider value changes.
 * @param {string} props.className - The CSS class name for the component.
 * @returns {JSX.Element} The rendered slider component.
 */

interface Props {
  value: number,
  onVolumeChange: (event: ChangeEvent<{}>, newValue: number)=> void,
  className: string
}

function ContinuousSlider(props: Props): JSX.Element {
  const handleChange = (event: Event, newValue: number) => {
    props.onVolumeChange(event, newValue);
  };

  return (
    <Box sx={{ width: 150 }} className={props.className}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Slider
          aria-label="Volume"
          value={props.value}
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
}

export default ContinuousSlider;