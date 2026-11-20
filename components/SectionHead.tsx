import { Reveal } from "@/components/Motion";
import { eyebrow, h2 } from "@/lib/ui";

type Props = { index: string; label: string; title: string };

export default function SectionHead({ index, label, title }: Props) {
  return (
    <Reveal className="flex flex-col gap-5">
      <div className={eyebrow}>
        ( {index} ) {label}
      </div>
      <h2 className={h2}>{title}</h2>
    </Reveal>
  );
}
