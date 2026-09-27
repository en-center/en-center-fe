import { courses } from "./courses";
export const courseInterests = courses.map((course) => ({
  value: course.id,
  label: course.name,
}));
export const branches = [
  {
    value: "quan-3",
    label: "Bloom Quận 3",
    address: "Quận 3, TP. Hồ Chí Minh",
  },
  {
    value: "binh-thanh",
    label: "Bloom Bình Thạnh",
    address: "Bình Thạnh, TP. Hồ Chí Minh",
  },
  {
    value: "thu-duc",
    label: "Bloom Thủ Đức",
    address: "Thủ Đức, TP. Hồ Chí Minh",
  },
] as const;
