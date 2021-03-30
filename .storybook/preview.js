import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "../src/theme/";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const withMaterialUI = (StoryFn) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoryFn />
    </ThemeProvider>
  );
};

export const decorators = [withMaterialUI];
