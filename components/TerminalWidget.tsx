"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const commands: Record<string, string> = {
  whoami: "Varun Nair — MCA @ VESIT Mumbai — DevOps / Cloud / DevSecOps",
  skills: "DevOps · Cloud · DevSecOps · MLOps · AIOps · Linux · Git · Docker",
  contact: "Opening contact page...",
  projects: "Opening project index...",
  clear: "",
};

export function TerminalWidget() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([
    "varun@portfolio:~$ type 'help' to see commands.",
  ]);
  const router = useRouter();

  function runCommand(raw: string) {
    const command = raw.trim().toLowerCase();
    if (!command) return;

    if (command === "contact") {
      router.push("/contact");
      return;
    }
    if (command === "projects") {
      router.push("/projects");
      return;
    }
    if (command === "help") {
      setLines((v) => [
        ...v,
        `varun@portfolio:~$ ${command}`,
        "Available: whoami, skills, projects, contact, clear",
      ]);
      return;
    }
    if (command === "clear") {
      setLines([]);
      return;
    }

    setLines((v) => [
      ...v,
      `varun@portfolio:~$ ${command}`,
      commands[command] ?? `Command not found: ${command}`,
    ]);
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/35 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
        <span className="ml-3 font-mono text-xs text-slate-500">terminal</span>
      </div>

      <div className="h-64 overflow-y-auto p-5 font-mono text-xs leading-6">
        {lines.map((line, i) => (
          <p key={`${line}-${i}`} className="text-slate-400">
            {line}
          </p>
        ))}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            runCommand(input);
            setInput("");
          }}
          className="mt-2 flex items-center gap-2"
        >
          <span className="text-cyan-400">varun@portfolio:~$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-w-0 flex-1 bg-transparent text-white outline-none"
            autoComplete="off"
            aria-label="Terminal command"
          />
        </form>
      </div>
    </div>
  );
}
