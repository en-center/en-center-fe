import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Course } from "@/lib/courses";
export default function CourseCard({ course }: { course: Course }) {
  return (
    <Reveal as="div" hover className="h-full">
      <Link
        href={`/khoa-hoc/${course.slug}`}
        className="card course-card flex h-full flex-col overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
      >
        <div className="course-visual card-thumbnail">
          <Image
            src={course.image}
            alt={`Hoạt động học tập trong ${course.name}`}
            width={800}
            height={520}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="h-full w-full object-cover"
          />
          <span className="course-number" aria-hidden="true">
            {course.grade === "cap-1"
              ? "01"
              : course.grade === "cap-2"
                ? "02"
                : "03"}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm font-bold text-brand-700">{course.level}</p>
          <h3 className="mt-2 text-[1.4rem] font-bold leading-snug tracking-tight">
            {course.name}
          </h3>
          <p className="mt-3 flex-1 leading-7 text-slate-700">
            {course.tagline}
          </p>
          <span className="mt-5 inline-flex min-h-11 items-center justify-between gap-2 border-t border-brand-100 pt-4 font-bold text-brand-700">
            Xem chi tiết <ArrowRight size={18} />
            <span className="sr-only"> {course.name}</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
