import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import type { Teacher } from "@/lib/teachers";
export default function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <Reveal as="article" hover className="overflow-hidden">
      <div className="card-thumbnail !aspect-[5/4]">
        <Image
          src={teacher.image}
          alt={`Chân dung ${teacher.name}`}
          width={600}
          height={480}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="h-full w-full object-cover object-[center_30%]"
        />
      </div>
      <div className="px-1 py-6">
        <p className="text-sm font-bold text-brand-700">{teacher.role}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">
          {teacher.name}
        </h3>
        <p className="mt-3 text-slate-700">{teacher.qualification}</p>
        <p className="mt-1 text-slate-700">{teacher.experience}</p>
        <p className="mt-3 leading-7 text-slate-700">{teacher.focus}</p>
      </div>
    </Reveal>
  );
}
