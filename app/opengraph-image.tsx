import { ImageResponse } from "next/og";

export const alt = "Onlynazril — High School Tech Enthusiast";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#131313",
          color: "#f4f2ed",
          fontFamily: "sans-serif",
          fontWeight: 700,
          padding: 56,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              background: "#adff2f",
              border: "5px solid #0a0a0a",
              boxShadow: "6px 6px 0 0 #0a0a0a",
            }}
          >
            <svg viewBox="15 16 34 34" width="34" height="34">
              <path
                d="M18 44 V20 h9 c7 0 11 3 11 10 c0 7 -4 10 -11 10 Z"
                fill="#131313"
                stroke="#0a0a0a"
                strokeWidth="3"
              />
              <circle cx="43" cy="42" r="3" fill="#131313" />
            </svg>
          </div>
          <span style={{ fontSize: 28, letterSpacing: 8, color: "#adff2f" }}>
            STATUS: ONLINE
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 128,
            letterSpacing: 2,
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          <span style={{ marginRight: 16 }}>ONLY</span>
          <span style={{ color: "#adff2f" }}>NAZRIL</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "rgba(244,242,237,0.9)",
          }}
        >
          <span>
            HIGH SCHOOL TECH ENTHUSIAST&nbsp;
            <span
              style={{
                background: "#adff2f",
                color: "#0a0a0a",
                padding: "0 12px",
              }}
            >
              ~4 YEARS
            </span>
            &nbsp;IN THE GAME
          </span>
        </div>
      </div>
    ),
    size,
  );
}