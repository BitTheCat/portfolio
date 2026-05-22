import { serve } from "https://deno.land/std@0.208.0/http/server.ts";

const PORT = 3000;

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  let filePath = url.pathname === "/" ? "/index.md" : url.pathname;

  // Remove .md extension if present and serve as HTML
  if (filePath.endsWith(".md")) {
    filePath = filePath.replace(".md", ".html");
  }

  try {
    // Try to serve static files from public directory
    if (filePath.startsWith("/assets/")) {
      const file = await Deno.open("." + filePath);
      return new Response(file.readable, {
        headers: {
          "Content-Type": getContentType(filePath),
        },
      });
    }

    // Serve index.html for root
    if (url.pathname === "/" || url.pathname === "") {
      const indexContent = await Deno.readTextFile("./index.md");
      return new Response(indexContent, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      });
    }

    // Try to serve CSS
    if (filePath === "/styles.css") {
      const cssContent = await Deno.readTextFile("./styles.css");
      return new Response(cssContent, {
        headers: {
          "Content-Type": "text/css",
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  } catch {
    return new Response("Internal Server Error", { status: 500 });
  }
}

function getContentType(filePath: string): string {
  if (filePath.endsWith(".svg")) return "image/svg+xml";
  if (filePath.endsWith(".png")) return "image/png";
  if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg"))
    return "image/jpeg";
  if (filePath.endsWith(".gif")) return "image/gif";
  if (filePath.endsWith(".webp")) return "image/webp";
  if (filePath.endsWith(".ico")) return "image/x-icon";
  return "application/octet-stream";
}

console.log(`🚀 Portfolio server running at http://localhost:${PORT}`);
console.log(`📁 Serving from ${Deno.cwd()}`);

serve(handler, { port: PORT });
