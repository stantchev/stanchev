import { ImageResponse } from "next/og";

export const runtime = "edge";

const person = {
  name: "Станчев",
  role: "SEO Специалист",
  avatar: "/avatar.jpg",
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Portfolio";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "8rem",
          background: "#151515",
          color: "white",
          flexDirection: "column",
          justifyContent: "center",
          gap: "3rem",
        }}
      >
        <div style={{ fontSize: "80px", fontWeight: "bold" }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
          <img
            src={person.avatar}
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "100%",
              objectFit: "cover",
            }}
          />
          <div>
            <div style={{ fontSize: "40px" }}>{person.name}</div>
            <div style={{ fontSize: "24px", opacity: 0.7 }}>{person.role}</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1280,
      height: 720,
    },
  );
}
