// Runs `tinacms build` only when Tina Cloud credentials are present.
// This keeps Vercel deploys from hard-failing before the env vars are set:
// the site still builds and renders from committed content; /admin becomes
// available once NEXT_PUBLIC_TINA_CLIENT_ID and TINA_TOKEN are configured.
import { execSync } from "node:child_process";

const hasCreds =
  !!process.env.NEXT_PUBLIC_TINA_CLIENT_ID && !!process.env.TINA_TOKEN;

if (hasCreds) {
  console.log("TinaCMS: credentials found — running `tinacms build`.");
  execSync("npx tinacms build", { stdio: "inherit" });
} else {
  console.warn(
    [
      "",
      "⚠  TinaCMS: NEXT_PUBLIC_TINA_CLIENT_ID / TINA_TOKEN not set — skipping `tinacms build`.",
      "   The site will deploy and render from committed content in /content,",
      "   but /admin will be unavailable until you add these env vars in Vercel.",
      "   See .env.example for the required variables.",
      "",
    ].join("\n")
  );
}
