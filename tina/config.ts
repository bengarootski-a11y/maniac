import { defineConfig } from "tinacms";

// On Vercel the branch is provided automatically; locally it falls back to main.
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const singleton = { create: false, delete: false };

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ---------------------------------------------------------------- Home
      {
        name: "home",
        label: "Home Page",
        path: "content/home",
        format: "json",
        ui: { allowedActions: singleton },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "label", label: "Eyebrow label" },
              { type: "string", name: "titleLine1", label: "Title line 1" },
              { type: "string", name: "titleLine2", label: "Title line 2" },
              { type: "string", name: "paragraph", label: "Paragraph", ui: { component: "textarea" } },
              { type: "string", name: "ctaLabel", label: "Button label" },
            ],
          },
          {
            type: "object",
            name: "studio",
            label: "Studio Section",
            fields: [
              { type: "string", name: "label", label: "Eyebrow label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "rich-text", name: "body", label: "Body" },
              {
                type: "object",
                name: "facts",
                label: "Fact list",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.k }),
                },
                fields: [
                  { type: "string", name: "k", label: "Label" },
                  { type: "string", name: "v", label: "Value" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "closing",
            label: "Closing / Contact",
            fields: [
              { type: "string", name: "label", label: "Eyebrow label" },
              { type: "string", name: "headingLine1", label: "Heading line 1" },
              { type: "string", name: "headingLine2", label: "Heading line 2 (italic)" },
              { type: "string", name: "paragraph", label: "Paragraph", ui: { component: "textarea" } },
              { type: "string", name: "ctaLabel", label: "Button label" },
            ],
          },
        ],
      },

      // ------------------------------------------------------------- Founder
      {
        name: "founder",
        label: "Founder",
        path: "content/founder",
        format: "json",
        ui: { allowedActions: singleton },
        fields: [
          { type: "string", name: "label", label: "Eyebrow label" },
          { type: "string", name: "name", label: "Name" },
          { type: "rich-text", name: "bioHome", label: "Bio (home section)" },
          { type: "rich-text", name: "bioPage", label: "Bio (founder page)" },
          {
            type: "object",
            name: "creditStrip",
            label: "Credit strip",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.text }) },
            fields: [{ type: "string", name: "text", label: "Credit" }],
          },
        ],
      },

      // ------------------------------------------------------------ Projects
      {
        name: "projects",
        label: "Selected Work",
        path: "content/projects",
        format: "json",
        ui: { allowedActions: singleton },
        fields: [
          {
            type: "object",
            name: "items",
            label: "Projects",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "meta", label: "Network / Year" },
              { type: "string", name: "role", label: "Role" },
              { type: "string", name: "copy", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "poster", label: "Poster" },
              { type: "string", name: "alt", label: "Poster alt text" },
              { type: "string", name: "href", label: "Watch / Trailer URL" },
              { type: "string", name: "cta", label: "Link label (Watch / Trailer)" },
            ],
          },
        ],
      },

      // ---------------------------------------------------------------- News
      {
        name: "news",
        label: "News & Press",
        path: "content/news",
        format: "json",
        ui: { allowedActions: singleton },
        fields: [
          {
            type: "object",
            name: "items",
            label: "Press items",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "date", label: "Date label" },
              { type: "string", name: "source", label: "Source" },
              { type: "string", name: "title", label: "Headline" },
              { type: "string", name: "href", label: "Article URL" },
            ],
          },
        ],
      },

      // ------------------------------------------------------------ Settings
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: { allowedActions: singleton },
        fields: [
          { type: "string", name: "instagram", label: "Instagram URL" },
          { type: "string", name: "twitter", label: "X / Twitter URL" },
          { type: "string", name: "contactHref", label: "Contact link (e.g. WME)" },
          { type: "string", name: "copyright", label: "Footer copyright" },
          { type: "string", name: "footerTagline", label: "Footer tagline" },
        ],
      },
    ],
  },
});
