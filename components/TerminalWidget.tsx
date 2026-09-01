"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function TerminalWidget() {
  const router = useRouter();

  const [input, setInput] = useState("");

  const [lines, setLines] = useState<string[]>([
    "varun@portfolio:~$ welcome to Varun's portfolio.",
    "Type 'help' to see available commands.",
  ]);

  function runCommand(event: FormEvent) {
    event.preventDefault();

    const command = input.trim().toLowerCase();

    if (!command) {
      return;
    }

    if (command === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    if (command === "contact") {
      router.push("/contact");
      return;
    }

    if (command === "projects") {
      router.push("/projects");
      return;
    }

    let response = "";

    switch (command) {
      case "help":
        response =
          "Commands: whoami, skills, projects, contact, clear";
        break;

      case "whoami":
        response =
          "Varun Nair — MCA @ VESIT Mumbai — DevOps / Cloud / DevSecOps";
        break;

      case "skills":
        response =
          "Linux · Git · Docker · Kubernetes · Cloud · CI/CD · Security · MLOps";
        break;

      default:
        response = `Command not found: ${command}`;
    }

    setLines((current) => [
      ...current,
      `varun@portfolio:~$ ${command}`,
      response,
    ]);

    setInput("");
  }

  return (
    <div className="widget">
      <div className="widget-header">
        <span className="terminal-dot dot-red" />
        <span className="terminal-dot dot-yellow" />
        <span className="terminal-dot dot-green" />
        <span className="widget-title">
          varun@portfolio — terminal
        </span>
      </div>

      <div className="terminal-body">
        <div className="terminal-lines">
          {lines.map((line, index) => (
            <p className="terminal-line" key={`${line}-${index}`}>
              {line}
            </p>
          ))}
        </div>

        <form className="terminal-form" onSubmit={runCommand}>
          <span className="terminal-prompt">
            varun@portfolio:~$
          </span>

          <input
            className="terminal-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command"
          />
        </form>
      </div>
    </div>
  );
}