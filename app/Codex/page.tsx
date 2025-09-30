import CodexTitle from "@/components/Codex/CodexTitle";
import CodexBentoGrid from "@/components/Codex/CodexBentoGrid";
import Stats from "@/components/Codex/Stats";
import CodexJoin from "@/components/Codex/CodexJoin";
import CodexEvents from "@/components/Codex/CodexEvents";
import Resources from "@/components/Codex/Resources";
import { data, events } from "@/app/Codex/constants";

export default function Codex() {
  return (
    <div className="font-title colour-bg min-h-screen">
      <CodexTitle />
      <CodexBentoGrid data={data} />
      <Stats />
      <CodexJoin />
      <Resources />
      <CodexEvents events={events} />
    </div>
  );
}
