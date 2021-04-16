import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Button,
  Tooltip,
  useColorMode,
  VisuallyHidden,
} from '@chakra-ui/react';

/**
 * toggle component that handles logic for toggling colorMode used throughout application
 */
export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Tooltip hasArrow label="toggle color mode">
      <Button
        bg=""
        position="fixed"
        top="1rem"
        right="1rem"
        onClick={toggleColorMode}
      >
        <VisuallyHidden>Color Mode Toggle</VisuallyHidden>
        {isDark ? <SunIcon color="white" /> : <MoonIcon color="gray.300" />}
      </Button>
    </Tooltip>
  );
};
