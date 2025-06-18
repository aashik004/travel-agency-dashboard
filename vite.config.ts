import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "aashik-2o",
  project: "travel_agency",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};



export default defineConfig(config => {
  return {
    plugins: [tailwindcss(),reactRouter(), tsconfigPaths(),sentryReactRouter(sentryConfig, config)],
    sentryConfig,

    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});
