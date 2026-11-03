export const EMAIL_PARTS = ["seo", "stanchev", "bg"] as const;
export const PHONE_GROUPS = ["0898", "509", "650"] as const;

const BACKSLASH = String.fromCharCode(92);
const email = `${EMAIL_PARTS[0]}@${EMAIL_PARTS.slice(1).join(".")}`;
const phoneLocal = PHONE_GROUPS.join("");
const phoneIntl = `+359${phoneLocal.slice(1)}`;

const esc = (s: string) =>
  s
    .split("")
    .map((c) => `${BACKSLASH}u${c.charCodeAt(0).toString(16).padStart(4, "0")}`)
    .join("");

export function protectJson(json: string): string {
  return json
    .split(email)
    .join(`${EMAIL_PARTS[0]}${esc("@")}${EMAIL_PARTS.slice(1).join(".")}`)
    .split(phoneIntl)
    .join(esc(phoneIntl))
    .split(phoneLocal)
    .join(esc(phoneLocal));
}
