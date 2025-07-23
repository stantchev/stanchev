import { baseURL, llmsRules } from "@/resources";

export async function GET() {
  let text = "";

  llmsRules.forEach(rule => {
    text += `User-agent: ${rule.userAgent}\n`;

    if (rule.allow) {
      (Array.isArray(rule.allow) ? rule.allow : [rule.allow]).forEach(path => {
        text += `Allow: ${path}\n`;
      });
    }

    if (rule.disallow) {
      (Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow]).forEach(path => {
        text += `Disallow: ${path}\n`;
      });
    }

    text += `\n`;
  });

  // 🔗 Добавяме линк към самия llms.txt (добра практика за AI)
  text += `Sitemap: ${baseURL}/llms.txt\n`;

  return new Response(text.trim(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
