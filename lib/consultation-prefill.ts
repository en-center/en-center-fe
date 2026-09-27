import { branches, courseInterests } from "./consultation-options";
export function consultationPrefill(params: {
  course_interest?: string | string[];
  branch?: string | string[];
}) {
  return {
    course_interest:
      typeof params.course_interest === "string" &&
      courseInterests.some((x) => x.value === params.course_interest)
        ? params.course_interest
        : "",
    branch:
      typeof params.branch === "string" &&
      branches.some((x) => x.value === params.branch)
        ? params.branch
        : "",
  };
}
