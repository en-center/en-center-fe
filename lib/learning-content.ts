export type Article = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  image: string;
  date: string;
  readingTime: string;
  sections: { title: string; paragraphs: string[] }[];
};
export const articles: Article[] = [
  {
    slug: "15-phut-tieng-anh-moi-ngay",
    title: "15 phút tiếng Anh mỗi ngày: bắt đầu cùng con từ đâu?",
    summary:
      "Một lịch thực hành ngắn, dễ áp dụng để ba mẹ cùng con nghe, nói và khám phá từ mới tại nhà.",
    category: "Góc phụ huynh",
    image: "/images/cartoon-classroom.png",
    date: "2026-09-26",
    readingTime: "3 phút đọc",
    sections: [
      {
        title: "Chọn một chủ đề thật gần",
        paragraphs: [
          "Bắt đầu bằng đồ dùng học tập, món ăn hoặc những người trong gia đình. Với mỗi buổi, ba mẹ chỉ cần chọn ba đến năm từ và một mẫu câu ngắn. Ví dụ: a book, a pen, a bag và câu ‘This is my book.’",
          "Để con chọn chủ đề yêu thích sẽ giúp buổi học có ý nghĩa hơn. Không cần hoàn thành thật nhiều từ trong một lần; điều quan trọng là con có cơ hội dùng lại từ đã biết.",
        ],
      },
      {
        title: "Chia 15 phút thành ba hoạt động",
        paragraphs: [
          "Trong năm phút đầu, cùng con đọc to các từ hoặc nghe một đoạn ngắn từ học liệu phù hợp. Nếu có âm thanh, hãy nghe lại trước khi yêu cầu con lặp lại.",
          "Năm phút tiếp theo dành cho trò chơi: chỉ đồ vật, đoán từ hoặc thay phiên hỏi ‘What is this?’. Năm phút cuối, con chọn một đồ vật để nói hoặc viết một câu. Ba mẹ có thể hỏi thêm màu sắc: ‘What colour is it?’",
        ],
      },
      {
        title: "Ghi nhận điều con làm được",
        paragraphs: [
          "Thay vì sửa mọi lỗi ngay lập tức, hãy ghi nhận một điều cụ thể: con đã nói trọn câu, nhớ một từ mới hoặc chủ động hỏi lại. Khi cần sửa, ba mẹ có thể nói lại mẫu đúng và mời con thử thêm lần nữa.",
          "Cuối tuần, cùng xem lại những câu đã thực hành. Nếu con thấy khó hoặc mệt, giảm số từ và giữ buổi học nhẹ nhàng. Đây là gợi ý sinh hoạt học tập, có thể điều chỉnh theo độ tuổi và nhịp học của từng con.",
        ],
      },
    ],
  },
  {
    slug: "tu-vung-qua-du-an-nho",
    title: "Biến từ vựng thành một dự án nhỏ của con",
    summary:
      "Từ một tấm poster đến phần giới thiệu ngắn: gợi ý hoạt động giúp học sinh dùng tiếng Anh có mục đích.",
    category: "Cách học tiếng Anh",
    image: "/images/cartoon-science.png",
    date: "2026-09-26",
    readingTime: "3 phút đọc",
    sections: [
      {
        title: "Chọn một sản phẩm đơn giản",
        paragraphs: [
          "Một poster về con vật yêu thích là điểm bắt đầu dễ thực hiện. Con có thể vẽ hoặc chọn hình có sẵn, ghi tên con vật và thêm ba thông tin: nơi sống, thức ăn và khả năng của nó.",
          "Với học sinh nhỏ, dùng các câu như ‘It is a cat.’, ‘It can jump.’ Với học sinh lớn hơn, thêm lý do yêu thích và so sánh với một con vật khác. Mức độ ngôn ngữ nên vừa với năng lực hiện tại.",
        ],
      },
      {
        title: "Chuẩn bị ngôn ngữ trước khi trình bày",
        paragraphs: [
          "Cùng con lập một bảng từ khóa ngắn. Chẳng hạn: habitat — môi trường sống, food — thức ăn, can — có thể. Khuyến khích con viết câu bằng lời của mình thay vì chép nguyên đoạn dài.",
          "Ba mẹ hoặc bạn học đóng vai người nghe và đặt một câu hỏi đơn giản. Nếu chưa biết trả lời, con có thể nói ‘Let me think.’ rồi xem lại từ khóa. Việc dừng để suy nghĩ là một phần bình thường của giao tiếp.",
        ],
      },
      {
        title: "Chia sẻ và tự nhìn lại",
        paragraphs: [
          "Cho con trình bày trong khoảng một phút, chỉ vào poster khi cần. Sau đó hỏi: câu nào con nói rõ nhất, từ nào còn khó và lần sau con muốn bổ sung điều gì?",
          "Giữ lại sản phẩm để so sánh với dự án tiếp theo. Mục đích của hoạt động là tạo cơ hội sử dụng tiếng Anh, không phải làm một tấm poster hoàn hảo.",
        ],
      },
    ],
  },
  {
    slug: "chuan-bi-phan-noi-tieng-anh",
    title: "Chuẩn bị một phần nói tiếng Anh rõ ý, tự nhiên",
    summary:
      "Gợi ý khung trả lời và cách tự luyện cho học sinh THCS, THPT khi nói về chủ đề quen thuộc.",
    category: "Kỹ năng học tập",
    image: "/images/cartoon-teens.png",
    date: "2026-09-26",
    readingTime: "3 phút đọc",
    sections: [
      {
        title: "Bắt đầu bằng câu trả lời trực tiếp",
        paragraphs: [
          "Khi được hỏi về sở thích, hãy trả lời ý chính trước: ‘I enjoy reading.’ Sau đó thêm lý do: ‘It helps me relax.’ Cuối cùng đưa một ví dụ cụ thể: ‘I usually read short stories before bed.’",
          "Khung ý chính — lý do — ví dụ giúp người học dễ tổ chức câu trả lời. Đây là một cách luyện tập linh hoạt, không phải công thức bắt buộc cho mọi câu hỏi.",
        ],
      },
      {
        title: "Dùng từ mình hiểu rõ",
        paragraphs: [
          "Chọn từ quen thuộc mà con có thể phát âm và sử dụng đúng. Một câu ngắn, rõ nghĩa thường hữu ích hơn một câu dài có nhiều từ chưa hiểu.",
          "Nếu lặp một từ quá nhiều, thử thay đổi cách diễn đạt bằng ví dụ hoặc chi tiết mới. Tránh học thuộc cả đoạn: thay đổi câu hỏi hoặc thứ tự ý sẽ giúp con luyện phản hồi thực sự.",
        ],
      },
      {
        title: "Tự luyện với bản ghi âm",
        paragraphs: [
          "Chuẩn bị ba từ khóa, nói trong 30–60 giây và ghi âm bằng thiết bị sẵn có. Khi nghe lại, chỉ chọn một điểm cần sửa, chẳng hạn nói chậm hơn hoặc làm rõ âm cuối.",
          "Lặp lại với một câu hỏi khác về cùng chủ đề. Nếu đang học theo định hướng IELTS, trao đổi với giáo viên để nhận phản hồi theo tiêu chí phù hợp; hoạt động này không bảo đảm một mức điểm cụ thể.",
        ],
      },
    ],
  },
];
export type LearningResource = {
  slug: string;
  title: string;
  summary: string;
  grade: "cap-1" | "cap-2" | "cap-3";
  audience: string;
  duration: string;
  image: string;
  objectives: string[];
  guidance: string;
  vocabulary: { word: string; meaning: string }[];
  exercises: {
    title: string;
    instruction: string;
    questions: string[];
    answers: string[];
  }[];
};
export const resources: LearningResource[] = [
  {
    slug: "tu-vung-do-dung-hoc-tap",
    title: "My school bag · Đồ dùng học tập",
    summary:
      "Ôn 8 từ vựng quen thuộc, hoàn thành câu và tự giới thiệu chiếc cặp của con.",
    grade: "cap-1",
    audience: "Tiểu học · Đã biết đọc từ đơn giản",
    duration: "15–20 phút",
    image: "/images/cartoon-classroom.png",
    objectives: [
      "Nhận biết 8 từ chỉ đồ dùng học tập.",
      "Dùng a/an trong các câu đơn giản.",
      "Viết và nói 3 câu giới thiệu đồ dùng.",
    ],
    guidance:
      "Đọc từ cùng ba mẹ, tìm đồ vật tương ứng rồi làm bài. Có thể chia thành hai buổi nếu con cần thêm thời gian.",
    vocabulary: [
      { word: "book", meaning: "quyển sách" },
      { word: "notebook", meaning: "quyển vở" },
      { word: "pen", meaning: "bút mực" },
      { word: "pencil", meaning: "bút chì" },
      { word: "ruler", meaning: "thước kẻ" },
      { word: "eraser", meaning: "cục tẩy" },
      { word: "bag", meaning: "chiếc cặp" },
      { word: "pencil case", meaning: "hộp bút" },
    ],
    exercises: [
      {
        title: "1. Tìm từ phù hợp",
        instruction: "Điền từ tiếng Anh vào chỗ trống.",
        questions: [
          "quyển sách = ______",
          "thước kẻ = ______",
          "hộp bút = ______",
          "cục tẩy = ______",
        ],
        answers: ["book", "ruler", "pencil case", "eraser"],
      },
      {
        title: "2. Chọn a hoặc an",
        instruction: "Điền a/an trước tên đồ vật số ít.",
        questions: [
          "This is ___ book.",
          "This is ___ eraser.",
          "I have ___ pencil.",
          "I have ___ orange bag.",
        ],
        answers: ["a", "an", "a", "an — ‘orange’ bắt đầu bằng âm nguyên âm."],
      },
      {
        title: "3. Chiếc cặp của con",
        instruction: "Hoàn thành và đọc to ba câu theo đồ dùng của con.",
        questions: [
          "This is my ______.",
          "It is ______. (màu sắc)",
          "I have a ______.",
        ],
        answers: [
          "Ví dụ: This is my bag.",
          "Ví dụ: It is green.",
          "Ví dụ: I have a ruler. Có thể dùng đồ vật khác phù hợp.",
        ],
      },
    ],
  },
  {
    slug: "hien-tai-don-thoi-quen",
    title: "My daily routine · Thì hiện tại đơn",
    summary:
      "Luyện cách kể thói quen, chia động từ và đọc hiểu một đoạn văn ngắn.",
    grade: "cap-2",
    audience: "THCS · Nền tảng ngữ pháp cơ bản",
    duration: "20–25 phút",
    image: "/images/cartoon-teens.png",
    objectives: [
      "Chia động từ hiện tại đơn với I và he/she.",
      "Tìm thông tin trong đoạn văn về thói quen.",
      "Viết một đoạn ngắn về ngày đi học.",
    ],
    guidance:
      "Nhớ: I/you/we/they dùng động từ nguyên mẫu; he/she/it thường thêm -s/-es. Sau does/doesn't, dùng động từ nguyên mẫu.",
    vocabulary: [
      { word: "get up", meaning: "thức dậy" },
      { word: "have breakfast", meaning: "ăn sáng" },
      { word: "go to school", meaning: "đi học" },
      { word: "do homework", meaning: "làm bài tập" },
    ],
    exercises: [
      {
        title: "1. Chia động từ",
        instruction: "Viết dạng đúng của động từ trong ngoặc.",
        questions: [
          "Lan ______ (go) to school at seven.",
          "I ______ (read) after dinner.",
          "He ______ (not / play) games on Mondays.",
          "______ your sister ______ (study) English every day?",
        ],
        answers: [
          "goes",
          "read",
          "doesn't play / does not play",
          "Does … study",
        ],
      },
      {
        title: "2. Đọc và trả lời",
        instruction:
          "Đọc: ‘Minh gets up at six. He has breakfast at six thirty. He walks to school with his sister. In the evening, he does his homework and reads a book.’",
        questions: [
          "What time does Minh get up?",
          "How does he go to school?",
          "What does he do in the evening?",
        ],
        answers: [
          "He gets up at six.",
          "He walks to school.",
          "He does his homework and reads a book.",
        ],
      },
      {
        title: "3. Viết về một ngày của em",
        instruction:
          "Viết 4–5 câu, dùng ít nhất 3 cụm từ trong bảng. Đọc lại để kiểm tra chủ ngữ và động từ.",
        questions: [
          "What time do you get up?",
          "How do you go to school?",
          "What do you do after school?",
        ],
        answers: [
          "Đoạn tham khảo: I get up at six thirty. I have breakfast at seven. I go to school by bus. After school, I do my homework. I read a book in the evening. Nội dung có thể thay đổi theo thói quen của em.",
        ],
      },
    ],
  },
  {
    slug: "speaking-so-thich",
    title: "Speaking practice · Nói về sở thích",
    summary:
      "Chuẩn bị ý, mở rộng câu trả lời và tự đánh giá một phần nói ngắn về sở thích.",
    grade: "cap-3",
    audience: "THPT · Định hướng giao tiếp & IELTS",
    duration: "20 phút",
    image: "/images/cartoon-teens.png",
    objectives: [
      "Trả lời bằng ý chính, lý do và ví dụ.",
      "Sử dụng từ vựng về sở thích trong ngữ cảnh.",
      "Tự nghe lại và chọn một điểm cần cải thiện.",
    ],
    guidance:
      "Chuẩn bị bằng từ khóa thay vì học thuộc đoạn văn. Phần trả lời mẫu chỉ gợi ý cách triển khai, không phải đáp án duy nhất hoặc cam kết điểm IELTS.",
    vocabulary: [
      { word: "in my free time", meaning: "trong thời gian rảnh" },
      { word: "unwind", meaning: "thư giãn" },
      { word: "take up a hobby", meaning: "bắt đầu một sở thích" },
      {
        word: "spend time doing something",
        meaning: "dành thời gian làm việc gì",
      },
    ],
    exercises: [
      {
        title: "1. Hoàn thành cách diễn đạt",
        instruction: "Chọn: in my free time / unwind / take up / reading.",
        questions: [
          "I enjoy drawing ______.",
          "Music helps me ______ after school.",
          "I would like to ______ photography.",
          "I spend time ______ short stories.",
        ],
        answers: ["in my free time", "unwind", "take up", "reading"],
      },
      {
        title: "2. Luyện trả lời",
        instruction:
          "Với mỗi câu hỏi, ghi 3 từ khóa rồi nói trong 30–45 giây. Thêm một lý do và một ví dụ.",
        questions: [
          "What do you enjoy doing in your free time?",
          "Do you prefer doing this alone or with friends?",
          "Is there a hobby you would like to try?",
        ],
        answers: [
          "Ví dụ: I enjoy reading because it helps me unwind. I usually read short stories before bed.",
          "Ví dụ: I prefer reading alone because I can concentrate. However, I like discussing books with my friends.",
          "Ví dụ: I would like to take up photography. I want to take photos of places I visit with my family.",
        ],
      },
      {
        title: "3. Tự đánh giá",
        instruction:
          "Nghe lại bản ghi âm và tự trả lời. Chọn một điều để cải thiện trong lần nói tiếp theo.",
        questions: [
          "Em đã trả lời trực tiếp câu hỏi chưa?",
          "Em có đưa ra lý do và ví dụ cụ thể không?",
          "Từ nào em cần kiểm tra lại cách phát âm?",
        ],
        answers: [
          "Không có đáp án cố định. Ghi lại một điểm đã làm được và một điểm cần luyện thêm. Có thể nhờ giáo viên góp ý.",
        ],
      },
    ],
  },
];
export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug);
}
export function resourceText(r: LearningResource) {
  return [
    "BLOOM ENGLISH",
    r.title,
    r.audience,
    `Thời gian: ${r.duration}`,
    "",
    "MỤC TIÊU",
    ...r.objectives.map((x) => `- ${x}`),
    "",
    r.guidance,
    "",
    "TỪ VỰNG",
    ...r.vocabulary.map((v) => `${v.word}: ${v.meaning}`),
    "",
    ...r.exercises.flatMap((e) => [
      e.title,
      e.instruction,
      ...e.questions.map(
        (q, i) => `${i + 1}. ${q}\nTrả lời: ______________________________`,
      ),
      "",
    ]),
    "ĐÁP ÁN & GỢI Ý",
    ...r.exercises.flatMap((e) => [
      e.title,
      ...e.answers.map((a, i) => `${i + 1}. ${a}`),
      "",
    ]),
  ].join("\n");
}
