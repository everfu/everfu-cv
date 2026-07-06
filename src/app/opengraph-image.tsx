import { ImageResponse } from "next/og";

import { getResumeData } from "@/lib/resume";
import { getSiteUrl } from "@/lib/site";

type OgVariant = "terminal" | "editor" | "resume-card";

type OgModel = {
  name: string;
  role: string;
  stack: string[];
  siteLabel: string;
  description: string;
};

const DEFAULT_OG_VARIANT: OgVariant = "terminal";
const STACK = ["React", "TypeScript", "Next.js"];

export const alt = `${getResumeData().name} 的简历分享预览`;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

const mono = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
const sans =
  "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif";

function getOgModel(): OgModel {
  const resume = getResumeData();
  const role =
    resume.contacts.find((item) => item.label === "目标")?.value ??
    "前端开发实习";

  return {
    name: resume.name,
    role,
    stack: STACK,
    siteLabel: new URL(getSiteUrl()).host,
    description: resume.description
  };
}

function Background({
  children,
  accent = "#7dd3fc"
}: Readonly<{ children: React.ReactNode; accent?: string }>) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background: "#0b0c0d",
        color: "#f4f4f5",
        fontFamily: sans
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 22%, rgba(148, 163, 184, 0.14), transparent 27%), radial-gradient(circle at 76% 72%, rgba(20, 184, 166, 0.12), transparent 26%), linear-gradient(135deg, #111214 0%, #090a0b 58%, #121416 100%)"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.34,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "44px 44px"
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 560,
          height: 560,
          right: -210,
          top: -260,
          borderRadius: "999px",
          background: accent,
          opacity: 0.08,
          filter: "blur(16px)"
        }}
      />
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%"
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Token({
  children,
  color = "#e5e7eb"
}: Readonly<{ children: React.ReactNode; color?: string }>) {
  return <span style={{ color }}>{children}</span>;
}

function CodeLine({
  children,
  muted = false
}: Readonly<{ children: React.ReactNode; muted?: boolean }>) {
  return (
    <div
      style={{
        display: "flex",
        whiteSpace: "pre",
        color: muted ? "rgba(244, 244, 245, 0.46)" : "#cfd3d8"
      }}
    >
      {children}
    </div>
  );
}

function StackArray({ stack }: Readonly<{ stack: string[] }>) {
  return (
    <>
      <Token color="#cfd3d8">[</Token>
      {stack.map((item, index) => (
        <span key={item}>
          <Token color="#8ee27b">'{item}'</Token>
          {index < stack.length - 1 ? <Token color="#cfd3d8">, </Token> : null}
        </span>
      ))}
      <Token color="#cfd3d8">]</Token>
    </>
  );
}

function TerminalVariant({ model }: Readonly<{ model: OgModel }>) {
  return (
    <Background accent="#8ee27b">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "176px 96px 54px 136px",
          fontFamily: mono
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            fontSize: 38,
            lineHeight: 1.24,
            letterSpacing: 0
          }}
        >
          <CodeLine muted>// Personal Resume Interface</CodeLine>
          <CodeLine>
            <Token color="#8f949b">const </Token>
            <Token>name</Token>
            <Token color="#cfd3d8"> = </Token>
            <Token color="#f4f4f5">'{model.name}'</Token>
            <Token color="#cfd3d8">;</Token>
          </CodeLine>
          <CodeLine>
            <Token color="#8f949b">let   </Token>
            <Token>role</Token>
            <Token color="#cfd3d8"> = </Token>
            <Token color="#7cc7ff">'{model.role}'</Token>
            <Token color="#cfd3d8">;</Token>
          </CodeLine>
          <CodeLine>
            <Token color="#8f949b">const </Token>
            <Token>stack</Token>
            <Token color="#cfd3d8"> = </Token>
            <StackArray stack={model.stack} />
            <Token color="#cfd3d8">;</Token>
          </CodeLine>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 22,
            color: "#f4f4f5",
            fontSize: 36,
            fontWeight: 800
          }}
        >
          <div
            style={{
              width: 22,
              height: 48,
              background: "rgba(244, 244, 245, 0.82)",
              boxShadow: "0 0 30px rgba(255,255,255,0.22)"
            }}
          />
          <div style={{ fontSize: 44, lineHeight: 1 }}>→</div>
          <div>{model.siteLabel}</div>
        </div>
      </div>
    </Background>
  );
}

function EditorVariant({ model }: Readonly<{ model: OgModel }>) {
  return (
    <Background accent="#7cc7ff">
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "58px 74px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 18,
            background: "rgba(15, 18, 22, 0.82)",
            boxShadow: "0 28px 110px rgba(0, 0, 0, 0.42)",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 62,
              padding: "0 26px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.035)",
              fontFamily: mono
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              {["#ff5f57", "#ffbd2e", "#28c840"].map((color) => (
                <div
                  key={color}
                  style={{ width: 13, height: 13, borderRadius: "50%", background: color }}
                />
              ))}
            </div>
            <div style={{ color: "rgba(244,244,245,0.64)", fontSize: 18 }}>
              resume.ts
            </div>
            <div style={{ color: "rgba(244,244,245,0.42)", fontSize: 18 }}>
              {model.siteLabel}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              padding: "46px 54px 40px",
              fontFamily: mono,
              fontSize: 32,
              lineHeight: 1.5
            }}
          >
            <CodeLine muted>type Resume = {"{"}</CodeLine>
            <CodeLine>
              <Token color="#7cc7ff">  name</Token>
              <Token color="#cfd3d8">: </Token>
              <Token color="#f4f4f5">"{model.name}"</Token>
              <Token color="#cfd3d8">;</Token>
            </CodeLine>
            <CodeLine>
              <Token color="#7cc7ff">  target</Token>
              <Token color="#cfd3d8">: </Token>
              <Token color="#f4f4f5">"{model.role}"</Token>
              <Token color="#cfd3d8">;</Token>
            </CodeLine>
            <CodeLine>
              <Token color="#7cc7ff">  stack</Token>
              <Token color="#cfd3d8">: </Token>
              <StackArray stack={model.stack} />
              <Token color="#cfd3d8">;</Token>
            </CodeLine>
            <CodeLine muted>{"}"}</CodeLine>

            <div
              style={{
                display: "flex",
                marginTop: "auto",
                alignItems: "center",
                justifyContent: "space-between",
                color: "rgba(244,244,245,0.7)",
                fontFamily: sans,
                fontSize: 24
              }}
            >
              <div>{model.description}</div>
              <div style={{ color: "#7cc7ff", fontWeight: 700 }}>OpenGraph()</div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}

function ResumeCardVariant({ model }: Readonly<{ model: OgModel }>) {
  return (
    <Background accent="#facc15">
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "70px 82px",
          gap: 46
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "56%",
            fontFamily: mono,
            fontSize: 31,
            lineHeight: 1.48
          }}
        >
          <CodeLine muted>// Build-ready resume</CodeLine>
          <CodeLine>
            <Token color="#8f949b">export default </Token>
            <Token color="#f4f4f5">{model.name}</Token>
          </CodeLine>
          <CodeLine>
            <Token color="#8f949b">  .role(</Token>
            <Token color="#7cc7ff">"{model.role}"</Token>
            <Token color="#8f949b">)</Token>
          </CodeLine>
          <CodeLine>
            <Token color="#8f949b">  .ship(</Token>
            <Token color="#8ee27b">"{model.stack.join(" + ")}"</Token>
            <Token color="#8f949b">)</Token>
          </CodeLine>
          <CodeLine>
            <Token color="#8f949b">  .deploy()</Token>
            <Token color="#cfd3d8">;</Token>
          </CodeLine>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "44%",
            padding: 34,
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 20,
            background: "rgba(255,255,255,0.055)"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                color: "rgba(244,244,245,0.56)",
                fontSize: 18,
                letterSpacing: 2.2,
                textTransform: "uppercase"
              }}
            >
              Personal Resume
            </div>
            <div style={{ fontSize: 62, lineHeight: 1, fontWeight: 850 }}>
              {model.name}
            </div>
            <div style={{ color: "#7cc7ff", fontSize: 30, fontWeight: 760 }}>
              {model.role}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {model.stack.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    padding: "8px 12px",
                    borderRadius: 8,
                    background: "rgba(142,226,123,0.12)",
                    color: "#8ee27b",
                    fontSize: 18,
                    fontWeight: 700
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "#f4f4f5",
                fontFamily: mono,
                fontSize: 25,
                fontWeight: 800
              }}
            >
              <span>→</span>
              <span>{model.siteLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}

function renderVariant(variant: OgVariant, model: OgModel) {
  switch (variant) {
    case "editor":
      return <EditorVariant model={model} />;
    case "resume-card":
      return <ResumeCardVariant model={model} />;
    case "terminal":
    default:
      return <TerminalVariant model={model} />;
  }
}

export default function OpenGraphImage() {
  return new ImageResponse(renderVariant(DEFAULT_OG_VARIANT, getOgModel()), size);
}
