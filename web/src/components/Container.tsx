import { useColorMode } from "@chakra-ui/react";
import { Box, FlexProps } from "@chakra-ui/layout";

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return <Box bg={bgColor[colorMode]} color={color[colorMode]} {...props} />;
};
