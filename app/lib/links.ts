// Site-wide links are managed by TinaCMS in content/settings/index.json.
import settings from "../../content/settings/index.json";

export const SOCIAL = {
  instagram: settings.instagram,
  twitter: settings.twitter,
};

export const CONTACT_HREF = settings.contactHref;
export const COPYRIGHT = settings.copyright;
export const FOOTER_TAGLINE = settings.footerTagline;
