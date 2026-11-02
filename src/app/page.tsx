import type { CSSProperties } from "react";
import PixelField from "./PixelField";

const PROJECTS = [
  {
    name: "BITprep",
    status: "live",
    desc: "Study platform for BIT students: quizzes, past papers and notes.",
    href: "https://bitprep.tech",
    color: "#21c800",
  },
  {
    name: "Gripper",
    status: "building",
    desc: "Gym management software: member check-in, payments and renewals.",
    href: "https://gripper.me",
    color: "#ff6a00",
  },
];

const LINKS = [
  { label: "github", href: "https://github.com/deelaka-ransilu" },
  { label: "linkedin", href: "https://www.linkedin.com/in/deelaka-ransilu" },
];

const v = (name: string, value: string | number) =>
  ({ [name]: value }) as CSSProperties;

export default function Home() {
  return (
    <main className="frame">
      <div className="row two tags">
        <div className="cell pop" style={v("--i", 0)}>
          <p className="tag">web-developer</p>
        </div>
        <div className="cell pop" style={v("--i", 1)}>
          <p className="tag">devops-sre</p>
        </div>
      </div>

      <div className="row two">
        <div className="cell hero pop" style={v("--i", 2)}>
          <h1 className="name">
            <span className="line">
              <span style={v("--d", 0)}>Deelaka</span>
            </span>
            <span className="line">
              <span style={v("--d", 1)}>Ransilu</span>
            </span>
          </h1>
        </div>
        <div className="cell hero grid-angle pop" style={v("--i", 3)}>
          <p className="intro">
            Full-stack web developer. Building things with Next.js, aiming
            for DevOps and SRE.
          </p>
        </div>
      </div>

      <div className="field">
        <PixelField />
      </div>

      <div className="row two projects pop" style={v("--i", 5)}>
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            className="project"
            href={p.href}
            target="_blank"
            rel="noreferrer"
            style={v("--hover", p.color)}
          >
            <p className="tag status">
              <i className={`dot ${p.status}`} aria-hidden="true" />
              {p.status}
            </p>
            <span className="project-title">
              <span className="label">{p.name}</span>
              <span className="arrow">↗</span>
            </span>
            <p className="project-desc">{p.desc}</p>
          </a>
        ))}
      </div>

      <nav className="row two links pop" style={v("--i", 6)}>
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
            <span className="label">{l.label}</span> <span>↗</span>
          </a>
        ))}
      </nav>
    </main>
  );
}