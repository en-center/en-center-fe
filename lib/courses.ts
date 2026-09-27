export type Grade = "cap-1" | "cap-2" | "cap-3";
export const programs: { id: Grade; label: string }[] = [
  { id: "cap-1", label: "Tiểu học" },
  { id: "cap-2", label: "THCS" },
  { id: "cap-3", label: "THPT" },
];
export type Course = {
  id: string;
  slug: string;
  name: string;
  grade: Grade;
  grades: Grade[];
  level: string;
  image: string;
  tagline: string;
  description: string;
  entry: string;
  goal: string;
  format: string;
  contents: { title: string; description: string }[];
  stages: { title: string; description: string }[];
  duration: string;
  schedule: string;
  tuition: string;
  faq: { question: string; answer: string }[];
};
const faq: Course["faq"] = [
  {
    question: "Con sẽ được xếp lớp như thế nào?",
    answer:
      "Giáo viên trao đổi về mục tiêu, đánh giá các kỹ năng hiện tại và đề xuất lớp phù hợp với độ tuổi, năng lực của con.",
  },
  {
    question: "Phụ huynh theo dõi việc học ra sao?",
    answer:
      "Giáo viên cập nhật nội dung đã học, kỹ năng cần luyện thêm và gợi ý hoạt động tại nhà sau mỗi giai đoạn.",
  },
  {
    question: "Khóa học có bảo đảm kết quả chứng chỉ không?",
    answer:
      "Không. Cambridge và IELTS chỉ là định hướng học tập. Tiến độ phụ thuộc nền tảng, mức độ thực hành và đánh giá thực tế; không cam kết điểm số hoặc thời gian đạt chứng chỉ.",
  },
];
const shared = {
  format: "Trực tiếp tại cơ sở · nhóm theo năng lực",
  tuition: "Liên hệ tư vấn",
  faq,
};
export const courses: Course[] = [
  {
    ...shared,
    id: "superkids",
    slug: "tieng-anh-tieu-hoc",
    name: "Tiếng Anh Tiểu học",
    grade: "cap-1",
    grades: ["cap-1"],
    level: "6–11 tuổi · Lớp 1–5",
    image: "/images/cartoon-classroom.png",
    tagline: "Tự tin nghe, nói và xây nền đọc, viết qua những chủ đề gần gũi.",
    description:
      "Con làm quen tiếng Anh qua câu chuyện, trò chơi ngôn ngữ và hoạt động nhóm. Nội dung đi từ gia đình, trường học đến thế giới tự nhiên, giúp con sử dụng điều vừa học trong tình huống quen thuộc.",
    entry:
      "Dành cho người mới bắt đầu hoặc đã học tiếng Anh cơ bản; đánh giá trước khi xếp lớp.",
    goal: "Hỏi đáp đơn giản, đọc đoạn ngắn và viết câu có nghĩa; làm quen định hướng Cambridge khi phù hợp.",
    contents: [
      {
        title: "Nghe & phát âm",
        description:
          "Nhận diện âm, nghe chỉ dẫn và luyện phát âm qua bài hát, câu chuyện.",
      },
      {
        title: "Nói & tương tác",
        description:
          "Giới thiệu bản thân, hỏi đáp và đóng vai trong tình huống hằng ngày.",
      },
      {
        title: "Đọc & từ vựng",
        description:
          "Đọc truyện ngắn có tranh, tìm ý chính và mở rộng từ theo chủ đề.",
      },
      {
        title: "Viết & sáng tạo",
        description: "Từ viết câu đến làm thiệp, poster và kể câu chuyện nhỏ.",
      },
    ],
    stages: [
      {
        title: "Làm quen",
        description:
          "Khơi gợi sự hứng thú; nhận biết âm và dùng các mẫu câu đơn giản.",
      },
      {
        title: "Thực hành",
        description:
          "Kết nối nghe, nói, đọc, viết qua chủ đề và hoạt động nhóm.",
      },
      {
        title: "Vận dụng",
        description:
          "Giới thiệu một dự án nhỏ và đánh giá kỹ năng để chọn bước học tiếp theo.",
      },
    ],
    duration: "Dự kiến 12 tuần / học phần; điều chỉnh sau đánh giá.",
    schedule: "Dự kiến: thứ Ba & thứ Năm, 17:30–19:00.",
  },
  {
    ...shared,
    id: "young-leaders",
    slug: "tieng-anh-thcs",
    name: "Tiếng Anh THCS",
    grade: "cap-2",
    grades: ["cap-2"],
    level: "11–15 tuổi · Lớp 6–9",
    image: "/images/cartoon-teens.png",
    tagline:
      "Củng cố bốn kỹ năng, trình bày ý kiến và dùng tiếng Anh trong học tập.",
    description:
      "Chương trình kết nối kiến thức trên lớp với giao tiếp thực tế. Con học cách đọc có mục đích, trình bày quan điểm và hợp tác trong dự án phù hợp tuổi thiếu niên.",
    entry:
      "Đã làm quen tiếng Anh; đánh giá nền tảng để bổ sung kiến thức còn thiếu.",
    goal: "Hiểu nội dung quen thuộc, trình bày ý kiến và viết đoạn mạch lạc; định hướng Cambridge A2/B1 khi phù hợp.",
    contents: [
      {
        title: "Nghe & trao đổi",
        description: "Nghe hội thoại, đặt câu hỏi và phản hồi ý kiến của bạn.",
      },
      {
        title: "Đọc hiểu",
        description:
          "Tìm thông tin chính, đọc suy luận và mở rộng vốn từ trong ngữ cảnh.",
      },
      {
        title: "Viết đoạn",
        description:
          "Tổ chức ý, dùng câu nối và chỉnh sửa đoạn văn theo góp ý.",
      },
      {
        title: "Dự án & thuyết trình",
        description:
          "Tìm hiểu chủ đề, làm việc nhóm và trình bày sản phẩm bằng tiếng Anh.",
      },
    ],
    stages: [
      {
        title: "Củng cố",
        description: "Rà soát ngữ pháp, từ vựng và kỹ năng cần bồi dưỡng.",
      },
      {
        title: "Phát triển",
        description: "Luyện bốn kỹ năng qua chủ đề đời sống và học đường.",
      },
      {
        title: "Chủ động",
        description:
          "Thuyết trình dự án, tự đánh giá và chuẩn bị bước chuyển cấp.",
      },
    ],
    duration: "Dự kiến 12 tuần / học phần; tùy năng lực đầu vào.",
    schedule: "Dự kiến: thứ Tư & thứ Sáu, 18:00–19:30.",
  },
  {
    ...shared,
    id: "ielts-expert",
    slug: "ielts-hoc-thuat",
    name: "IELTS Học thuật",
    grade: "cap-3",
    grades: ["cap-3"],
    level: "15+ tuổi · THPT",
    image: "/images/cartoon-teens.png",
    tagline: "Xây nền tiếng Anh học thuật và làm quen bốn kỹ năng IELTS.",
    description:
      "Khóa học giúp học sinh THPT tiếp cận văn bản, bài nghe và cách diễn đạt trong môi trường học thuật. Giáo viên hướng dẫn từng kỹ năng, phản hồi bài làm và cùng học sinh điều chỉnh kế hoạch học.",
    entry:
      "Có nền tảng tiếng Anh cơ bản; đánh giá bốn kỹ năng để xác định điểm bắt đầu.",
    goal: "Hiểu cấu trúc IELTS, phát triển cách lập luận và tự nhận diện điểm cần cải thiện.",
    contents: [
      {
        title: "Listening",
        description: "Luyện nghe ý chính, chi tiết và ghi chú thông tin.",
      },
      {
        title: "Reading",
        description:
          "Đọc lướt, đọc tìm thông tin và hiểu lập luận trong văn bản.",
      },
      {
        title: "Writing",
        description:
          "Mô tả thông tin, lập dàn ý và phát triển luận điểm có dẫn chứng.",
      },
      {
        title: "Speaking",
        description:
          "Trả lời có cấu trúc, mở rộng ý và luyện diễn đạt rõ ràng.",
      },
    ],
    stages: [
      {
        title: "Đánh giá & xây nền",
        description:
          "Xác định khoảng trống từ vựng, ngữ pháp và kỹ năng học thuật.",
      },
      {
        title: "Luyện từng kỹ năng",
        description: "Học cách tiếp cận dạng bài và nhận phản hồi cụ thể.",
      },
      {
        title: "Kết nối & đánh giá",
        description:
          "Thực hành bài tổng hợp và xác định kế hoạch học tiếp dựa trên kết quả.",
      },
    ],
    duration: "Dự kiến 16 tuần / học phần; không phải thời hạn đạt điểm thi.",
    schedule: "Dự kiến: thứ Ba & thứ Năm, 19:00–21:00.",
  },
  {
    ...shared,
    id: "ielts-express",
    slug: "ielts-tang-toc",
    name: "IELTS Tăng tốc",
    grade: "cap-3",
    grades: ["cap-3"],
    level: "15+ tuổi · THPT",
    image: "/images/cartoon-teens.png",
    tagline:
      "Tập trung kỹ năng còn yếu, chữa bài và rèn cách quản lý thời gian.",
    description:
      "Dành cho học sinh đã quen cấu trúc IELTS và cần một giai đoạn ôn tập tập trung. Nội dung ưu tiên lỗi thường gặp của từng học sinh, thực hành có giới hạn thời gian và phân tích bài làm.",
    entry: "Đã học nền tảng IELTS; cần đánh giá bài làm trước khi chọn lớp.",
    goal: "Cải thiện cách xử lý dạng bài, tính rõ ràng khi nói và viết, cùng khả năng tự sửa lỗi.",
    contents: [
      {
        title: "Nghe có chiến lược",
        description:
          "Nhận diện bẫy thông tin và kiểm tra đáp án theo ngữ cảnh.",
      },
      {
        title: "Đọc có thời gian",
        description: "Chọn cách đọc phù hợp từng dạng câu hỏi.",
      },
      {
        title: "Chữa bài viết",
        description: "Phân tích lập luận, liên kết và độ chính xác ngôn ngữ.",
      },
      {
        title: "Thực hành nói",
        description:
          "Phản hồi theo tiêu chí, luyện triển khai ý và diễn đạt tự nhiên.",
      },
    ],
    stages: [
      {
        title: "Khoanh vùng",
        description: "Phân tích bài đầu vào và chọn các kỹ năng ưu tiên.",
      },
      {
        title: "Luyện tập tập trung",
        description: "Làm bài, nhận phản hồi và sửa lỗi theo từng tuần.",
      },
      {
        title: "Đánh giá lại",
        description:
          "Thực hành bài tổng hợp và trao đổi về mức độ sẵn sàng dự thi.",
      },
    ],
    duration: "Dự kiến 8 tuần / học phần; tiến độ tùy nền tảng.",
    schedule: "Dự kiến: thứ Hai, Tư & Sáu, 19:00–20:30.",
  },
  {
    ...shared,
    id: "math-science",
    slug: "toan-khoa-hoc-tieng-anh",
    name: "Toán & Khoa học bằng tiếng Anh",
    grade: "cap-1",
    grades: ["cap-1", "cap-2"],
    level: "6–15 tuổi · chia nhóm theo cấp học",
    image: "/images/cartoon-science.png",
    tagline:
      "Học từ vựng, đặt câu hỏi và giải thích điều con khám phá bằng tiếng Anh.",
    description:
      "Chương trình bổ trợ dùng chủ đề Toán và Khoa học phù hợp độ tuổi để thực hành tiếng Anh. Học sinh quan sát, so sánh, giải quyết vấn đề đơn giản và trình bày kết quả; nội dung được chia riêng cho Tiểu học và THCS.",
    entry:
      "Hiểu chỉ dẫn tiếng Anh cơ bản; xếp nhóm theo độ tuổi và khả năng ngôn ngữ.",
    goal: "Sử dụng từ vựng Toán, Khoa học và diễn đạt quá trình quan sát, suy luận bằng tiếng Anh.",
    contents: [
      {
        title: "Ngôn ngữ Toán học",
        description: "Số, hình, phép đo và cách giải thích cách làm.",
      },
      {
        title: "Khám phá Khoa học",
        description: "Quan sát thế giới tự nhiên và đặt câu hỏi có mục đích.",
      },
      {
        title: "Tư duy & giải quyết vấn đề",
        description: "So sánh dữ liệu, dự đoán và kiểm tra ý tưởng.",
      },
      {
        title: "Báo cáo dự án",
        description: "Ghi chép, mô tả kết quả và giới thiệu sản phẩm nhóm.",
      },
    ],
    stages: [
      {
        title: "Làm quen ngôn ngữ",
        description: "Nhận diện từ vựng và hiểu hướng dẫn theo chủ đề.",
      },
      {
        title: "Khám phá có hướng dẫn",
        description:
          "Dùng tiếng Anh trong hoạt động quan sát và giải quyết vấn đề.",
      },
      {
        title: "Chia sẻ khám phá",
        description:
          "Trình bày dự án nhỏ và giải thích kết quả bằng ngôn ngữ phù hợp.",
      },
    ],
    duration: "Dự kiến 10 tuần / học phần; tùy nhóm tuổi.",
    schedule: "Dự kiến: thứ Bảy, 09:00–10:30.",
  },
];
export function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/gi, "d")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}
export function filterCourses(
  grade: Grade | undefined,
  query: string,
): Course[] {
  const words = normalizeSearch(query).split(" ").filter(Boolean);
  return courses.filter(
    (c) =>
      (!grade || c.grades.includes(grade)) &&
      words.every((w) =>
        normalizeSearch(
          [
            c.name,
            c.tagline,
            c.goal,
            c.level,
            c.id,
            c.grades
              .map((g) => programs.find((p) => p.id === g)?.label)
              .join(" "),
          ].join(" "),
        ).includes(w),
      ),
  );
}
export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}
