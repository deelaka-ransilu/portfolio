export type Command = { name: string; output: string[] };

// Everything the visitor reads lives here. Replace each TODO in your own words.
export const motd = [
  "TODO: one line on who you are.",
  "TODO: one line on the roles you want.",
  "Click a command below to explore.",
];

export const commands: Command[] = [
  { name: "help", output: ["Click a command above or type one and press Enter.", "Type clear to reset the screen."] },
  { name: "whoami", output: ["TODO: 2-3 lines about you, in your own voice."] },
  { name: "ls projects", output: ["bitprep.md", "fyp.md"] },
  { name: "cat bitprep", output: ["TODO: problem, what you built, what broke, what you learned."] },
  { name: "cat fyp", output: ["TODO: the bridal management software, same structure."] },
  { name: "systemctl status bitprep", output: ["Placeholder. Live data arrives in Phase 3 (Cloudflare Worker)."] },
  { name: "contact", output: ["email: TODO", "linkedin: TODO", "github: TODO", "cv: TODO"] },
];