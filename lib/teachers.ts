export type Teacher = {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  image: string;
  focus: string;
};
export const teachers: Teacher[] = [
  {
    id: "emma",
    name: "Nguyễn Hoài Mai",
    role: "Tiếng Anh Tiểu học",
    qualification: "Cử nhân sư phạm · TESOL",
    experience: "8 năm giảng dạy",
    image: "/images/teacher-vn-mai.png",
    focus: "Khơi gợi trí tò mò qua kể chuyện, trò chơi và những dự án nhỏ.",
  },
  {
    id: "minh",
    name: "Nguyễn Minh Anh",
    role: "THPT & IELTS",
    qualification: "IELTS 8.5 · TESOL",
    experience: "6 năm giảng dạy",
    image: "/images/teacher-vn-minh.png",
    focus:
      "Hướng dẫn tư duy học thuật, chữa bài chi tiết và theo sát mục tiêu cá nhân.",
  },
  {
    id: "james",
    name: "Trần Quốc Huy",
    role: "Tiếng Anh THCS",
    qualification: "Cử nhân Anh ngữ · TESOL / CELTA",
    experience: "10 năm giảng dạy",
    image: "/images/teacher-vn-huy.png",
    focus:
      "Giúp học sinh tự tin thảo luận, làm việc nhóm và trình bày ý tưởng.",
  },
  {
    id: "linh",
    name: "Trần Khánh Linh",
    role: "Cambridge Kids & Teens",
    qualification: "TESOL · IELTS 8.5",
    experience: "5 năm giảng dạy",
    image: "/images/teacher-vn-linh.png",
    focus: "Xây nền bốn kỹ năng và tạo thói quen học tập tích cực cho con.",
  },
  {
    id: "david",
    name: "Phạm Minh Khang",
    role: "Giao tiếp & dự án",
    qualification: "Thạc sĩ giáo dục · TESOL / CELTA",
    experience: "7 năm giảng dạy",
    image: "/images/teacher-vn-khang.png",
    focus:
      "Đưa tiếng Anh vào đời sống qua những dự án sáng tạo, phù hợp lứa tuổi.",
  },
  {
    id: "ha",
    name: "Lê Thu Hà",
    role: "Chuyển cấp & THPT",
    qualification: "MA TESOL · IELTS 8.5",
    experience: "9 năm giảng dạy",
    image: "/images/teacher-vn-ha.png",
    focus:
      "Hệ thống kiến thức và giúp học sinh chủ động chuẩn bị cho các kỳ thi.",
  },
];
