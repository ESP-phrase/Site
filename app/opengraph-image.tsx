import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TaskDudes — Shopify Break Fixes, Fast";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#171717",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
          <span style={{ fontSize: 48, fontWeight: 700, color: "#ffffff" }}>Task</span>
          <span style={{ fontSize: 48, fontWeight: 700, color: "#f97316" }}>Dudes</span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: 900,
          }}
        >
          Shopify Problem?{" "}
          <span style={{ color: "#f97316" }}>We Fix It In Hours.</span>
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 800,
            marginBottom: "48px",
          }}
        >
          Checkout errors, theme bugs, app conflicts, payment failures — resolved by eCommerce experts fast.
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { value: "2,000+", label: "Stores Fixed" },
            { value: "2hr", label: "Avg Response" },
            { value: "98%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 36, fontWeight: 900, color: "#f97316" }}>{stat.value}</span>
              <span style={{ fontSize: 18, color: "rgba(255,255,255,0.5)" }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #f97316, #fb923c)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
