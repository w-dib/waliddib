import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";
import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: "tbcelk7e",
  dataset: "production",
  title: "Blog",
  apiVersion: "2023-06-22",
  basePath: "/admin",
  plugins: [deskTool(), codeInput(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

export default config;
