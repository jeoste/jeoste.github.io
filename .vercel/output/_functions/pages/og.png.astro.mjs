import { Resvg } from '@resvg/resvg-js';
import '../chunks/_astro_content_D-55IOiQ.mjs';
import satori from 'satori';
import { S as SITE } from '../chunks/config_JJhEf13K.mjs';
export { renderers } from '../renderers.mjs';

async function loadGoogleFont(font, text, weight) {
  const API = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(API, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1"
    }
  })).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  );
  if (!resource) throw new Error("Failed to download dynamic font");
  const res = await fetch(resource[1]);
  if (!res.ok) {
    throw new Error("Failed to download dynamic font. Status: " + res.status);
  }
  return res.arrayBuffer();
}
async function loadGoogleFonts(text) {
  const fontsConfig = [
    {
      name: "JetBrains Mono",
      font: "JetBrains+Mono",
      weight: 400,
      style: "normal"
    },
    {
      name: "Inter",
      font: "Inter",
      weight: 700,
      style: "bold"
    }
  ];
  const fonts = await Promise.all(
    fontsConfig.map(async ({ name, font, weight, style }) => {
      const data = await loadGoogleFont(font, text, weight);
      return { name, data, weight, style };
    })
  );
  return fonts;
}

const siteOgImage = async () => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          background: "#fefbfb",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "-1px",
                right: "-1px",
                border: "4px solid #000",
                background: "#ecebeb",
                opacity: "0.9",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                margin: "2.5rem",
                width: "88%",
                height: "80%",
              },
            },
          },
          {
            type: "div",
            props: {
              style: {
                border: "4px solid #000",
                background: "#fefbfb",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                margin: "2rem",
                width: "88%",
                height: "80%",
              },
              children: {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    margin: "20px",
                    width: "90%",
                    height: "90%",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "90%",
                          maxHeight: "90%",
                          overflow: "hidden",
                          textAlign: "center",
                        },
                        children: [
                          {
                            type: "p",
                            props: {
                              style: { fontSize: 72, fontWeight: "bold" },
                              children: SITE.title,
                            },
                          },
                          {
                            type: "p",
                            props: {
                              style: { fontSize: 28 },
                              children: SITE.desc,
                            },
                          },
                        ],
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          justifyContent: "flex-end",
                          width: "100%",
                          marginBottom: "8px",
                          fontSize: 28,
                        },
                        children: {
                          type: "span",
                          props: {
                            style: { overflow: "hidden", fontWeight: "bold" },
                            children: new URL(SITE.website).hostname,
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(SITE.title + SITE.desc + SITE.website),
    }
  );
};

function svgBufferToPngBuffer(svg) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}
async function generateOgImageForSite() {
  const svg = await siteOgImage();
  return svgBufferToPngBuffer(svg);
}

const GET = async () => {
  const imageBuffer = await generateOgImageForSite();
  return new Response(new Uint8Array(imageBuffer), {
    headers: { "Content-Type": "image/png" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
