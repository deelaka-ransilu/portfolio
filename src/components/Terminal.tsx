"use client";

import { useEffect, useRef, useState } from "react";
import { commands, motd } from "@/lib/commands";

type Entry = { id: number; cmd: string; lines: string[] };

export default function Terminal() {
  const [log, setLog] = useState<Entry[]>([]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") return setLog([]);
    const found = commands.find((c) => c.name === cmd);
    const lines = found ? found.output : [`${cmd}: command not found. Try "help".`];
    setLog((l) => [...l, { id: nextId.current++, cmd, lines }]);
  };

  useEffect(() => {
    if (log.length) endRef.current?.scrollIntoView({ block: "end" });
  }, [log]);

  return (
    <div className="term">
      <header className="motd">
        <p className="dim">login: deelaka</p>
        {motd.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </header>

      <nav className="cmds" aria-label="Commands">
        {commands.map((c) => (
          <button key={c.name} className="cmd" onClick={() => run(c.name)}>
            {c.name}
          </button>
        ))}
        <button className="cmd" onClick={() => run("clear")}>clear</button>
      </nav>

      <div className="out" aria-live="polite">
        {log.map((e) => (
          <section key={e.id} className="entry">
            <p><span className="prompt">deelaka@portfolio:~$</span> {e.cmd}</p>
            {e.lines.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </section>
        ))}
      </div>

      <form
        className="form"
        onSubmit={(ev) => {
          ev.preventDefault();
          run(input);
          setInput("");
        }}
      >
        <label htmlFor="cmd-input" className="prompt">$</label>
        <input
          id="cmd-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='type a command, or "help"'
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
        />
      </form>
      <div ref={endRef} />
    </div>
  );
}