import { ImageResponse } from "next/og";

import { getSiteUrl } from "@/lib/site";

export const alt = "Everfu CV share preview";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  const siteLabel = new URL(getSiteUrl()).host;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "56px",
          color: "#f5f7fb",
          background:
            "linear-gradient(140deg, #0f172a 0%, #172554 45%, #0f766e 100%)",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "40px",
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: "32px",
            background: "rgba(15, 23, 42, 0.32)",
            boxShadow: "0 24px 80px rgba(15, 23, 42, 0.28)"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              height: "100%"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "72px",
                  height: "72px",
                  borderRadius: "24px",
                  background: "rgba(255,255,255,0.12)",
                  fontSize: "26px",
                  fontWeight: 700,
                  letterSpacing: "0.08em"
                }}
              >
                CV
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px"
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(226, 232, 240, 0.8)"
                  }}
                >
                  Print-friendly Resume
                </div>
                <div
                  style={{
                    fontSize: "64px",
                    fontWeight: 800,
                    letterSpacing: "-0.04em"
                  }}
                >
                  Everfu CV
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "22px",
                maxWidth: "760px"
              }}
            >
              <div
                style={{
                  fontSize: "28px",
                  lineHeight: 1.4,
                  color: "rgba(241, 245, 249, 0.9)"
                }}
              >
                Frontend resume built with Next.js, TypeScript, and a clean layout
                optimized for online sharing and printing.
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  fontSize: "20px",
                  color: "rgba(191, 219, 254, 0.92)"
                }}
              >
                <div>Next.js 16</div>
                <div>React 19</div>
                <div>TypeScript</div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "20px",
                color: "rgba(226, 232, 240, 0.76)"
              }}
            >
              <div>{siteLabel}</div>
              <div>Open Graph Preview</div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
