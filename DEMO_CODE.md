# Bloom English — toàn bộ mã nguồn

Ảnh nằm trong ZIP, thư mục `public/images`.

## .gitignore

````text
node_modules
.next
.env*.local
*.tsbuildinfo

.next-production

````

## ASSETS.md

````markdown
# Visual refresh — 24/09/2026

- `public/images/bloom-classroom.png`: ảnh lớp học minh họa bằng AI, tạo bằng built-in `image_gen` (không dùng CLI). Được dùng ở hero, khóa Tiểu học và CTA; không phải ảnh trung tâm thực tế.
- Typography: Be Vietnam Pro cho nội dung và tiêu đề chính; Lora italic cho cụm từ nhấn mạnh. Hai font có subset tiếng Việt và được self-host qua `next/font/google`.
- Các ảnh Unsplash còn lại giữ nguồn ghi trong README.

## Prompt tạo ảnh (nguyên văn)

Use case: photorealistic-natural. Asset type: photographic hero image for Bloom English, a Vietnamese school-age English learning demo website. Create a premium candid editorial photograph of a Vietnamese female teacher in her late twenties helping three Vietnamese primary school children aged 9-11 collaboratively practice English at a light oak classroom table. Children are engaged, one smiling while speaking, another pointing at an illustrated workbook. Natural human proportions and hands, authentic everyday expressions, contemporary modest casual clothing, no uniforms or logos. Bright thoughtfully designed classroom, warm ivory walls, subtle emerald green furniture, soft warm daylight through windows, books and small plant softly blurred in background. Medium-wide composition at table height, all four faces and upper bodies clearly in frame, subjects centered to survive responsive crops, landscape 3:2. Warm editorial color grading, real skin and fabric texture, inviting aspirational but believable school atmosphere, 50mm lens feel. No text overlays, no watermarks, no advertising badges. This is a fictional classroom illustration, not a real school.

````

## CARTOON_ASSETS.md

````markdown
# Bộ tranh học sinh — 26/09/2026

Tạo bằng built-in `image_gen`; đã xem và chọn ba tranh hoạt hình 3D tươi sáng. Không dùng CLI. Đây là minh họa hư cấu, không phải hình ảnh cơ sở hay học viên thực tế.

## public/images/cartoon-classroom.png

Use case: illustration-story. Website illustration for Bloom English, Vietnamese school-age students. Premium vibrant 3D cartoon illustration with rounded friendly characters, expressive faces, clean shapes, tactile matte clay-like finish, warm daylight, emerald green, cream, sunny yellow and coral accents. Youthful and lively but polished, no text, no letters, no logos, no watermark. Landscape 3:2, central composition that also crops nicely to a portrait card, no essential detail at edges. Scene: a friendly young female Vietnamese English teacher and three Vietnamese children aged 8-11 joyfully interacting around a table, open illustrated books, one child raising a hand and another smiling, inviting classroom with shelves and plants. All faces visible, meaningful natural poses.

## public/images/cartoon-teens.png

Use case: illustration-story. Website illustration for Bloom English, Vietnamese school-age students. Premium vibrant 3D cartoon illustration with rounded friendly characters, expressive faces, clean shapes, tactile matte clay-like finish, warm daylight, emerald green, cream, sunny yellow and coral accents. Youthful and lively but polished, no text, no letters, no logos, no watermark. Landscape 3:2, central composition that also crops nicely to a portrait card, no essential detail at edges. Scene: three Vietnamese teenagers aged 14-17 collaboratively preparing an English presentation, one speaking enthusiastically, two listening with notebooks and laptop at a shared desk in a bright learning studio. Age-appropriate teenage proportions, confident and energetic, speech bubbles with only simple star symbols.

## public/images/cartoon-science.png

Use case: illustration-story. Website illustration for Bloom English, Vietnamese school-age students. Premium vibrant 3D cartoon illustration with rounded friendly characters, expressive faces, clean shapes, tactile matte clay-like finish, warm daylight, emerald green, cream, sunny yellow and coral accents. Youthful and lively but polished, no text, no letters, no logos, no watermark. Landscape 3:2, central composition that also crops nicely to a portrait card, no essential detail at edges. Scene: two Vietnamese schoolchildren aged 10-13 with a friendly young female teacher discovering science at a classroom table, a small model solar system, geometric shapes and a magnifying glass, delighted curious expressions, safe playful educational exploration, tidy light classroom.

## Biểu tượng liên hệ

- Zalo: `public/icons/zalo.svg`, SVG do người dùng cung cấp, thay thế biểu tượng Simple Icons trước đó.
- Điện thoại: icon Phone trong bộ Lucide hiện có.

````

## FACILITY_ASSETS.md

````markdown
# Hình ảnh cơ sở vật chất

Ngày tạo: 26/09/2026. Công cụ: image_gen. Ba ảnh phối cảnh tạo bằng AI, không phải ảnh chụp cơ sở thực tế. Dùng trên trang `/gioi-thieu`; giao diện có chú thích phối cảnh.

## facility-classroom.png

Nguồn: `/Users/d00476/.codex/generated_images/01a0ced7-81a6-75c1-82ba-a63eff8a0822/exec-821a8561-9ec2-4c06-8d3d-40dc2734c952.png`

Prompt:

Use case: stylized-concept. Website asset for Bloom English school for Vietnamese children and teenagers. Create a polished stylized 3D architectural illustration, friendly rounded furniture, soft tactile surfaces, light oak, pastel leaf green, cream and small sunny yellow accents, bright natural daylight, tidy inviting contemporary interior. Wide landscape 3:2 composition, no text, no logos, no watermark, no people. Fictional concept space, not a photograph of a real facility. Scene: English classroom with six small light oak desks arranged in collaborative groups, pastel green chairs, a large unmarked teaching screen on the wall, low book storage and large windows with soft blinds. Eye-level wide angle showing the whole room, cheerful and practical.

## facility-reading.png

Nguồn: `/Users/d00476/.codex/generated_images/01a0ced7-81a6-75c1-82ba-a63eff8a0822/exec-88d936f3-0663-44cc-a259-ef8b30205ffd.png`

Prompt:

Use case: stylized-concept. Website asset for Bloom English school for Vietnamese children and teenagers. Create a polished stylized 3D architectural illustration, friendly rounded furniture, soft tactile surfaces, light oak, pastel leaf green, cream and small sunny yellow accents, bright natural daylight, tidy inviting contemporary interior. Wide landscape 3:2 composition, no text, no logos, no watermark, no people. Fictional concept space, not a photograph of a real facility. Scene: children's reading corner with low curved bookshelves, colorful books with no readable text, two comfortable soft green seats, small round table, warm rug and a plant near a sunlit window. Welcoming, age-appropriate for primary and middle school students.

## facility-welcome.png

Nguồn: `/Users/d00476/.codex/generated_images/01a0ced7-81a6-75c1-82ba-a63eff8a0822/exec-533ff52e-5e2f-4d27-8e54-9042afa8b331.png`

Prompt:

Use case: stylized-concept. Website asset for Bloom English school for Vietnamese children and teenagers. Create a polished stylized 3D architectural illustration, friendly rounded furniture, soft tactile surfaces, light oak, pastel leaf green, cream and small sunny yellow accents, bright natural daylight, tidy inviting contemporary interior. Wide landscape 3:2 composition, no text, no logos, no watermark, no people. Fictional concept space, not a photograph of a real facility. Scene: a welcoming school consultation and parent waiting area, rounded light oak reception desk without text, small meeting table with green chairs, comfortable cream bench, leafy plants and daylight. Neat compact space for parents to talk about their child's learning.


````

## README.md

````markdown
# Bloom English

Website trung tâm tiếng Anh basic: Next.js 15 App Router, React 19, TypeScript strict, Tailwind CSS 4, Lucide React, Be Vietnam Pro và Lora tiếng Việt.

## Chạy dự án

Yêu cầu Node.js 20.9+ và npm. Cần Internet khi cài package và tải font Google trong lần build đầu.

```bash
npm install
npm run dev
```

Mở http://localhost:3000. Chạy production bằng `npm run build` rồi `npm start`.
Build production nằm tại `.next-production`, tách khỏi `.next` của development để tránh xung đột khi chạy cả hai.
Tùy chọn `.env.local`: `NEXT_PUBLIC_SITE_URL=https://ten-mien-cua-ban.vn`; mặc định SEO dùng `https://bloomenglish.example`.

## Trang và dữ liệu

- `/`: đúng năm phần — Hero, chương trình học, lý do chọn Bloom, giáo viên, CTA.
- `/khoa-hoc`: năm khóa, tìm theo tên/mục tiêu không dấu; lọc bằng `?grade=cap-1|cap-2|cap-3&q=...`. URL là nguồn trạng thái, hỗ trợ Back/Forward, tải và kết quả rỗng.
- `/khoa-hoc/[slug]`: template chung với đầu vào, mục tiêu, bốn nhóm nội dung, ba giai đoạn, thông tin lớp, ba FAQ và CTA chọn sẵn khóa. Slug sai trả 404.
- `/gioi-thieu`: tổng quan trung tâm, giáo viên tiêu biểu và ba không gian học tập có hình phối cảnh; liên kết tới đội ngũ đầy đủ và tư vấn theo cơ sở. Menu chính dùng “Giới thiệu”. Nguồn ảnh và prompt tại `FACILITY_ASSETS.md`.
- `/giao-vien`: sáu hồ sơ minh họa, không có trang chi tiết giáo viên.
- `/lien-he`: thông tin liên hệ, ba nút chọn cơ sở và form tư vấn. Chọn cơ sở giữ tên, điện thoại và khóa đã nhập.
- Metadata/canonical/OpenGraph riêng từng trang, JSON-LD EducationalOrganization, `/sitemap.xml`, `/robots.txt`.

| ID đăng ký giữ nguyên | Tên hiển thị | Slug |
| --- | --- | --- |
| superkids | Tiếng Anh Tiểu học | tieng-anh-tieu-hoc |
| young-leaders | Tiếng Anh THCS | tieng-anh-thcs |
| ielts-expert | IELTS Học thuật | ielts-hoc-thuat |
| ielts-express | IELTS Tăng tốc | ielts-tang-toc |
| math-science | Toán & Khoa học bằng tiếng Anh | toan-khoa-hoc-tieng-anh |

`lib/courses.ts` là nguồn dữ liệu khóa học; `lib/consultation-options.ts` lấy lựa chọn khóa từ đó và khai báo cơ sở dùng chung. Math & Science thuộc cả Tiểu học và THCS.

Prefill: `/lien-he?course_interest=superkids&branch=quan-3#dang-ky`. Chỉ nhận ID hợp lệ và query đơn; bỏ qua query sai/lặp. Server Action xác thực cả ID, tên, số điện thoại, trường lặp và giá trị không phải chuỗi. Thành công sau một giây; form có lỗi từng trường, lỗi mạng, focus lỗi đầu tiên, giữ dữ liệu, khóa gửi khi chờ và đăng ký khác.

Trang nội dung và footer dùng Server Components. Header/menu, tìm kiếm, form và chọn cơ sở là các phần tương tác phía client. Nội dung liên hệ server được truyền vào form qua children/slot.

## Kiểm tra

```bash
npm test
npm run typecheck
npm run build
```

`tests/demo.cjs` kiểm tra dữ liệu, search, prefill, giả mạo dữ liệu, validation và delay. `tests/browser.cjs` là bộ kiểm tra trình duyệt tùy chọn, cần Playwright được cài riêng và Chromium (không phải dependency chạy website):

```bash
# Chạy production tại cổng 3100 trước
npm run start -- --port 3100
# Trong terminal khác, khi môi trường đã có Playwright
node tests/browser.cjs
```

Có thể đặt `PLAYWRIGHT_MODULE` thành đường dẫn module Playwright, `CHROMIUM_EXECUTABLE` thành đường dẫn Chromium, `TEST_BASE_URL` và `TEST_OUTPUT_DIR` cho môi trường khác. Bộ test kiểm tra 375/768/1440px, ảnh, overflow, menu bàn phím, search/filter/history, 404, FAQ, toàn luồng đăng ký, lỗi mạng, giữ dữ liệu, gửi lại, pending và reset.

## Phạm vi hiện tại

Form **chưa lưu dữ liệu hoặc gửi đến trung tâm**. Không có CMS, tài khoản, CRM, thanh toán hoặc bài thi. Hotline/Zalo, email, giờ tư vấn, cơ sở, lịch lớp và hồ sơ giáo viên là minh họa; cần thay bằng thông tin đã xác minh trước khi dùng thực tế. Cambridge/IELTS chỉ là định hướng, không cam kết điểm hoặc thời hạn đạt chứng chỉ.

Hero và các chương trình dùng bộ tranh hoạt hình 3D: `cartoon-classroom.png`, `cartoon-teens.png`, `cartoon-science.png` trong `public/images`. Prompt và thông tin tạo ảnh bằng công cụ image_gen có trong `CARTOON_ASSETS.md`. Sáu chân dung giáo viên Việt Nam được tạo bằng AI, lưu tại `public/images/teacher-vn-*.png`; xem prompt và nguồn tại `TEACHER_ASSETS.md`. Nút liên hệ dùng logo Zalo lưu tại `public/icons/zalo.svg` và icon điện thoại Lucide. Chữ “demo” đã được bỏ khỏi toàn bộ nội dung ứng dụng; thông báo form chưa lưu/gửi dữ liệu vẫn giữ nguyên.

Ảnh được lưu tại `public/images` và dùng `next/image`, không cần nguồn ảnh ngoài khi vận hành. Nguồn Unsplash: primary `photo-1503676260728-1c00da094a0b`; secondary `photo-1427504494785-3a9ca7044f45`; academic `photo-1523240795612-9a054b0db644`; science `photo-1532094349884-543bc11b234d`; ảnh hồ sơ `photo-1580489944761-15a19d654956`, `photo-1438761681033-6461ffad8d80`, `photo-1500648767791-00dcc994a43e`, `photo-1494790108377-be9c29b29330`, `photo-1506794778202-cad84cf45f1d`, `photo-1544005313-94ddf0286df2`. Người trong ảnh không được xác nhận là giáo viên Bloom.

Tham khảo cách tổ chức thông tin, không sao chép nội dung: [YOLA](https://yola.vn/), [VUS](https://vus.edu.vn/), [ILA](https://ila.edu.vn/), [Apollo](https://apollo.edu.vn/), [ZIM](https://zim.vn/).

## Bàn giao

- `DEMO_CODE.md`: toàn bộ mã nguồn dạng văn bản để copy; ảnh nhị phân có trong ZIP.
- `bloom-english-demo.zip`: mã nguồn, cấu hình, lockfile, test, README và ảnh; không kèm node_modules, cache, secrets hay thư mục build.
- `scripts/package.py`: tạo lại cả hai tệp bàn giao bằng `python3 scripts/package.py`.
- `VERIFICATION.md`: kết quả kiểm tra thực tế.

## Tông màu thương hiệu

Logo, CTA và nút nổi dùng xanh lá nhạt `#B9DF9D`; nền `#F5FAEF`, footer `#E8F3DB`, chữ xanh đậm `#2B4222`. Bảng màu tập trung tại `app/globals.css` (`brand-50` đến `brand-950`). Icon Zalo giữ màu nhận diện riêng.

## Tin tức và tài liệu học tập

- `/tin-tuc`: ba bài chia sẻ do dự án biên soạn về học tiếng Anh tại nhà, dự án từ vựng và kỹ năng nói; không đăng thông tin sự kiện chưa xác minh.
- `/tin-tuc/[slug]`: bài đầy đủ, ngày đăng, thời gian đọc, hình ảnh và liên kết sang tài liệu.
- `/tai-lieu`: ba bộ bài tập theo Tiểu học, THCS, THPT; lọc `?grade=cap-1|cap-2|cap-3`, bỏ qua giá trị sai/lặp.
- `/tai-lieu/[slug]`: mục tiêu, hướng dẫn, từ vựng, bài tập và đáp án mở/đóng.
- `/tai-lieu/[slug]/tai-xuong`: tải văn bản UTF-8 `.txt` gồm bài tập và đáp án, mở được trên điện thoại/máy tính, không cần tài khoản. Chưa có bản PDF.
- Nội dung tập trung tại `lib/learning-content.ts`; các trang dùng chung dữ liệu, có metadata, sitemap và 404.
- Header/footer thêm Tin tức và Tài liệu; menu thu gọn dưới 1280px để tránh chật, menu di động có thể cuộn.
- `npm test` bao gồm kiểm tra nội dung và file tải về trong `tests/learning-content.cjs`.

## Header mới

Logo cân lại tỷ lệ; desktop dùng cụm menu nền xanh nhạt với trạng thái đang chọn dạng pill trắng; CTA có icon mũi tên riêng. Mobile/tablet dùng panel có icon, mô tả từng mục, cuộn khi màn hình thấp. Đóng bằng Escape, chọn link, bấm ngoài hoặc chuyển focus ra ngoài; tự đóng khi đổi sang desktop.

## Điều hướng gạch chân và sidebar

Menu desktop dùng gạch chân absolute bottom, scaleX từ tâm trong 220ms khi hover/focus và giữ gạch chân ở trang hiện tại. Menu mobile dùng dialog sidebar từ trái, animation mở/đóng 240ms, khóa cuộn nền, focus trong dialog và đóng bằng Escape, nút X, bấm nền hoặc chọn link. Hỗ trợ prefers-reduced-motion.

## Hiệu ứng dùng chung

`components/motion/Reveal.tsx` hỗ trợ fade, fade-up, scale, delay và hover; nhóm card dùng lớp `reveal-group` để xuất hiện lần lượt. Xem ví dụ tái sử dụng trong `components/motion/README.md`. Không thêm dependency; giữ nội dung hiển thị khi không có JavaScript, khi in hoặc khi bật giảm chuyển động.

````

## TEACHER_ASSETS.md

````markdown
# Chân dung giáo viên — 26/09/2026

Sáu ảnh minh họa giáo viên Việt Nam hư cấu, tạo bằng built-in `image_gen`, không dùng CLI. Đã xem từng ảnh trước khi tích hợp. Không phải ảnh người thật đã xác minh hoặc bằng chứng về hồ sơ giáo viên.

## Nguyễn Hoài Mai — public/images/teacher-vn-mai.png

Use case: photorealistic-natural. Asset: teacher profile portrait for a Vietnamese English school website. Create one fictional Vietnamese teacher, Vietnamese woman aged 32, shoulder-length straight black hair, cream blouse, warm smile. Photorealistic professional editorial portrait with natural skin texture, friendly and trustworthy, modest smart casual outfit. Upper torso and full head visible, subject centered, generous headroom and side space so the image crops safely to a 5:4 landscape teacher card. Same visual system: softly blurred bright modern classroom, cream wall, a subtle emerald green accent and a distant bookshelf, natural diffused daylight, warm neutral color grading, 85mm portrait lens feel. Square image, no text, no logos, no badges, no watermark, no other people. A fictional generated portrait, not any real public figure.

## Nguyễn Minh Anh — public/images/teacher-vn-minh.png

Use case: photorealistic-natural. Asset: teacher profile portrait for a Vietnamese English school website. Create one fictional Vietnamese teacher, Vietnamese woman aged 29, black hair neatly tied back, pale sage blouse, confident welcoming smile. Photorealistic professional editorial portrait with natural skin texture, friendly and trustworthy, modest smart casual outfit. Upper torso and full head visible, subject centered, generous headroom and side space so the image crops safely to a 5:4 landscape teacher card. Same visual system: softly blurred bright modern classroom, cream wall, a subtle emerald green accent and a distant bookshelf, natural diffused daylight, warm neutral color grading, 85mm portrait lens feel. Square image, no text, no logos, no badges, no watermark, no other people. A fictional generated portrait, not any real public figure.

## Trần Quốc Huy — public/images/teacher-vn-huy.png

Use case: photorealistic-natural. Asset: teacher profile portrait for a Vietnamese English school website. Create one fictional Vietnamese teacher, Vietnamese man aged 35, short neatly styled black hair, light blue collared shirt, friendly smile. Photorealistic professional editorial portrait with natural skin texture, friendly and trustworthy, modest smart casual outfit. Upper torso and full head visible, subject centered, generous headroom and side space so the image crops safely to a 5:4 landscape teacher card. Same visual system: softly blurred bright modern classroom, cream wall, a subtle emerald green accent and a distant bookshelf, natural diffused daylight, warm neutral color grading, 85mm portrait lens feel. Square image, no text, no logos, no badges, no watermark, no other people. A fictional generated portrait, not any real public figure.

## Trần Khánh Linh — public/images/teacher-vn-linh.png

Use case: photorealistic-natural. Asset: teacher profile portrait for a Vietnamese English school website. Create one fictional Vietnamese teacher, Vietnamese woman aged 28, chin-length black bob, soft yellow blouse, cheerful smile. Photorealistic professional editorial portrait with natural skin texture, friendly and trustworthy, modest smart casual outfit. Upper torso and full head visible, subject centered, generous headroom and side space so the image crops safely to a 5:4 landscape teacher card. Same visual system: softly blurred bright modern classroom, cream wall, a subtle emerald green accent and a distant bookshelf, natural diffused daylight, warm neutral color grading, 85mm portrait lens feel. Square image, no text, no logos, no badges, no watermark, no other people. A fictional generated portrait, not any real public figure.

## Phạm Minh Khang — public/images/teacher-vn-khang.png

Use case: photorealistic-natural. Asset: teacher profile portrait for a Vietnamese English school website. Create one fictional Vietnamese teacher, Vietnamese man aged 33, neatly trimmed short black hair, thin round glasses, white shirt with open collar, approachable smile. Photorealistic professional editorial portrait with natural skin texture, friendly and trustworthy, modest smart casual outfit. Upper torso and full head visible, subject centered, generous headroom and side space so the image crops safely to a 5:4 landscape teacher card. Same visual system: softly blurred bright modern classroom, cream wall, a subtle emerald green accent and a distant bookshelf, natural diffused daylight, warm neutral color grading, 85mm portrait lens feel. Square image, no text, no logos, no badges, no watermark, no other people. A fictional generated portrait, not any real public figure.

## Lê Thu Hà — public/images/teacher-vn-ha.png

Use case: photorealistic-natural. Asset: teacher profile portrait for a Vietnamese English school website. Create one fictional Vietnamese teacher, Vietnamese woman aged 36, long dark hair tucked behind shoulders, muted teal blouse, gentle confident smile. Photorealistic professional editorial portrait with natural skin texture, friendly and trustworthy, modest smart casual outfit. Upper torso and full head visible, subject centered, generous headroom and side space so the image crops safely to a 5:4 landscape teacher card. Same visual system: softly blurred bright modern classroom, cream wall, a subtle emerald green accent and a distant bookshelf, natural diffused daylight, warm neutral color grading, 85mm portrait lens feel. Square image, no text, no logos, no badges, no watermark, no other people. A fictional generated portrait, not any real public figure.


````

## VERIFICATION.md

````markdown
# Bổ sung trang Giới thiệu — 26/09/2026

- Build production, TypeScript và toàn bộ `npm test`: PASS.
- Kiểm tra HTML production: đủ ba phần trung tâm/giáo viên/cơ sở vật chất, anchor hợp lệ, liên kết đội ngũ và form theo ba cơ sở, ba nguồn ảnh cục bộ, sitemap: PASS.
- Chưa kiểm tra trực quan trang mới trên trình duyệt ở các kích thước màn hình.
- Không khởi động hoặc dừng server trong lần bổ sung này.

# Hiệu ứng Reveal dùng chung — 26/09/2026

- Build production, TypeScript và npm test: PASS.
- HTML production có nội dung Reveal ở trạng thái idle hiển thị sẵn, không xuất trạng thái pending từ server.
- Áp dụng vào card khóa học, giáo viên, tin tức, tài liệu; hình ảnh và điểm nổi bật trang chủ; các section trang chi tiết.
- Chưa kiểm tra trực quan scroll/hover trong trình duyệt ở lần cập nhật này.

---

# Điều hướng gạch chân & sidebar — 26/09/2026

- Đổi menu desktop sang gạch chân giãn đều từ tâm; giữ trạng thái active và focus bàn phím.
- Sidebar mobile dùng native modal dialog, trượt trái sang phải khi mở và ngược lại khi đóng; có backdrop, khóa cuộn nền và chế độ reduced motion.
- Chưa kiểm tra trực quan animation trong trình duyệt cho bản này.

---

# Chỉnh header — 26/09/2026

- Cân lại logo, menu desktop, trạng thái trang hiện tại và CTA.
- Mobile panel có icon, mô tả, khoảng bấm lớn, giới hạn chiều cao và cuộn nội bộ.
- TypeScript: PASS. Không chạy kiểm tra trực quan trình duyệt trong lần chỉnh này.

---

# Tin tức và tài liệu — 26/09/2026

- Build production: PASS (24 trang/tài nguyên tạo thành công).
- TypeScript và toàn bộ npm test: PASS.
- Kiểm tra HTTP trên production localhost:3100: 8 trang danh sách/chi tiết trả 200 và có canonical; lọc ba cấp học đúng, query sai/lặp trả đủ tài liệu; ba file tải về có header attachment, UTF-8 và đầy đủ bài/đáp án.
- URL không tồn tại của tin tức, tài liệu và tải xuống trả HTTP 404; sitemap có đủ 8 URL mới.
- Test đường dẫn tải giả mạo không truy cập file tùy ý, trả 404.
- Đã dừng server production được tạo cho lần kiểm tra này.
- Chưa kiểm tra trực quan viewport và tương tác trình duyệt ở lần thêm trang này.

---

# Cập nhật tông xanh lá nhạt — 26/09/2026

- Build production và TypeScript: PASS.
- Đồng bộ logo header/footer, favicon, CTA, nền, bộ lọc, form, nút nổi và ảnh OpenGraph qua bảng màu brand.
- Tính độ tương phản cho chữ/logo/nút chính: tất cả cặp kiểm tra đạt ít nhất 4.5:1.
- Chưa kiểm tra trực quan lại trong trình duyệt ở lần đổi màu này.

---

# Cập nhật hình ảnh và liên hệ — 26/09/2026

- Production build, TypeScript và test logic: PASS.
- Không còn chữ “demo” trong app, components và lib.
- Ba tranh hoạt hình mới đã được xem trực tiếp từ kết quả ImageGen, lưu vào public/images và tích hợp vào trang chủ, danh sách và chi tiết khóa học.
- Kiểm tra mọi đường dẫn ảnh/icon trong mã nguồn tồn tại; SVG Zalo hợp lệ; HTML production có tham chiếu ảnh hoạt hình mới.
- Đã bỏ nhãn demo ở hotline, nút Zalo/gọi điện, footer, metadata và thông báo form; vẫn nói rõ chưa lưu/gửi dữ liệu.
- Chưa kiểm tra lại tương tác/viewport trong trình duyệt cho bản này; quyền Computer Use lần gần nhất bị từ chối. Không khởi động server.

---

# Kiểm tra bản chỉnh giao diện — 24/09/2026

- Build production, TypeScript và test logic: PASS sau khi thay ảnh, typography và bố cục.
- Bản development đang chạy tại localhost:3000 trả HTTP 200; HTML có ảnh lớp học mới và hai font mới.
- URL tối ưu ảnh hero và giáo viên trả HTTP 200 với nội dung ảnh thực.
- Không chạy lại kiểm tra trình duyệt ở bản chỉnh giao diện này: Computer Use trả “Computer Use permissions are not granted”; in-app browser không khả dụng. Các kết quả responsive/tương tác bên dưới thuộc bản trước khi chỉnh giao diện, không phải xác nhận trực quan cho bản mới.
- Không khởi động hay dừng server của người dùng trong lần chỉnh này.

---

# Kết quả kiểm tra — 24/09/2026

- `npm run build`: PASS, Next.js 15.5.26 production, 16 trang/tài nguyên tạo thành công.
- `npm run typecheck`: PASS, TypeScript strict.
- `npm test`: PASS — tìm kiếm không dấu/kết hợp cấp học, Math & Science ở hai cấp, query hợp lệ/sai/lặp, dữ liệu giả mạo, File thay chuỗi, lỗi từng trường, giữ giá trị và delay thành công.
- `tests/browser.cjs`: PASS trên Chrome headless với production localhost:3100.
- Kiểm tra năm loại trang ở 375px, 768px, 1440px: HTTP 200, ảnh tải đủ, không tràn ngang; 15 ảnh chụp toàn trang tại `/private/tmp/bloom-qa` trong máy kiểm tra. Đã xem trực quan trang chủ mobile/desktop, danh sách tablet và liên hệ mobile/desktop.
- Bàn phím: skip link, menu mở/đóng bằng Escape và chọn liên kết, FAQ bằng Enter, focus trường lỗi đầu tiên.
- Search/filter: không dấu, giữ từ khóa khi đổi cấp, Back/Forward đồng bộ URL và input, Empty State/xóa bộ lọc.
- Năm slug chi tiết hoạt động, mỗi trang có ba FAQ; slug sai trả HTTP 404 (dynamicParams=false cho bộ dữ liệu tĩnh).
- Toàn luồng trang chủ → danh sách → chi tiết → form chọn sẵn → thành công → đăng ký khác.
- Chọn cơ sở cập nhật select và giữ tên/điện thoại/khóa. Query sai/lặp bị bỏ qua.
- Form: lỗi điện thoại, focus đúng, giữ dữ liệu; giả lập ngắt POST để kiểm tra lỗi kết nối và gửi lại; disabled khi đang gửi; thành công demo và reset.
- Không có lỗi JavaScript pageerror trong bộ kiểm tra.
- robots.txt, sitemap.xml, OpenGraph image trả HTTP 200.
- Đã tách `.next-production` khỏi cache development sau khi phát hiện ghi đè cache trong môi trường hiện có.
- Server production tạm của lần kiểm tra đã dừng; không dừng server khác.

Giới hạn: kiểm tra tự động và trực quan trên Chrome, chưa thử Safari/Firefox hoặc trình đọc màn hình. Hotline, Zalo và email là liên kết demo; không thực hiện cuộc gọi hoặc gửi tin. Form không lưu dữ liệu hay gửi đến trung tâm.

````

## app/actions/consultation.ts

````ts
"use server";
import { courseInterests, branches } from "@/lib/consultation-options";
export type ConsultationState = {
  success: boolean;
  message: string;
  values?: Record<
    "parent_name" | "phone" | "course_interest" | "branch",
    string
  >;
  errors?: Partial<
    Record<"parent_name" | "phone" | "course_interest" | "branch", string>
  >;
};
export async function submitConsultation(
  _previous: ConsultationState,
  formData: FormData,
): Promise<ConsultationState> {
  const read = (key: string) => {
    const entries = formData.getAll(key);
    return entries.length === 1 && typeof entries[0] === "string"
      ? entries[0]
      : "";
  };
  const parentName = read("parent_name").trim();
  const phone = read("phone").replace(/[\s().-]/g, "");
  const courseInterest = read("course_interest");
  const branch = read("branch");
  const errors: NonNullable<ConsultationState["errors"]> = {};
  if (parentName.length < 2 || parentName.length > 80)
    errors.parent_name = "Vui lòng nhập tên phụ huynh từ 2 đến 80 ký tự.";
  if (!/^(0|\+84)[35789]\d{8}$/.test(phone))
    errors.phone = "Vui lòng nhập số điện thoại Việt Nam hợp lệ.";
  if (!courseInterests.some((option) => option.value === courseInterest))
    errors.course_interest = "Vui lòng chọn khóa học quan tâm.";
  if (!branches.some((option) => option.value === branch))
    errors.branch = "Vui lòng chọn cơ sở gần nhất.";
  if (Object.keys(errors).length)
    return {
      success: false,
      message: "Ba mẹ vui lòng kiểm tra lại thông tin bên dưới.",
      errors,
      values: {
        parent_name: parentName,
        phone: read("phone"),
        course_interest: courseInterest,
        branch,
      },
    };
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    success: true,
    message: `Cảm ơn phụ huynh ${parentName}! Đăng ký tư vấn cho con đã hoàn tất bước kiểm tra thông tin. Thông tin chưa được lưu hoặc gửi đến trung tâm.`,
  };
}

````

## app/giao-vien/page.tsx

````tsx
import Link from "next/link";
import TeacherCard from "@/components/TeacherCard";
import { teachers } from "@/lib/teachers";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Đội ngũ giáo viên",
  "Tìm hiểu đội ngũ giáo viên Bloom English, chuyên môn và phương pháp đồng hành cùng học sinh.",
  "/giao-vien",
);
export default function TeachersPage() {
  return (
    <main id="main-content" className="container-page section">
      <p className="eyebrow">Người đồng hành</p>
      <h1 className="heading mt-3 max-w-3xl">
        Đội ngũ giáo viên đồng hành cùng con
      </h1>
      <p className="mt-5 max-w-3xl leading-8 text-slate-700">
        Thầy cô tạo cơ hội để mỗi học sinh được nói, thử sức và học từ lỗi sai.
        Bài học kết hợp hướng dẫn rõ ràng, thực hành nhóm và phản hồi cá nhân để
        con từng bước chủ động hơn.
      </p>
      <section
        aria-label="Danh sách giáo viên"
        className="mt-8 reveal-group grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {teachers.map((t) => (
          <TeacherCard key={t.id} teacher={t} />
        ))}
      </section>
      <section className="mt-7 rounded-2xl bg-brand-50 p-8 text-center">
        <h2 className="heading">Tìm người đồng hành phù hợp với con</h2>
        <Link href="/lien-he" className="btn mt-6">
          Đăng ký học thử
        </Link>
      </section>
    </main>
  );
}

````

## app/gioi-thieu/page.tsx

````tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, Sprout } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import TeacherCard from "@/components/TeacherCard";
import { teachers } from "@/lib/teachers";
import { branches } from "@/lib/consultation-options";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Giới thiệu trung tâm",
  "Tìm hiểu Bloom English: định hướng học tập, đội ngũ giáo viên và không gian dành cho học sinh Tiểu học, THCS, THPT.",
  "/gioi-thieu",
);
const facilities = [
  {
    title: "Phòng học tương tác",
    image: "/images/facility-classroom.png",
    text: "Không gian cho cả hoạt động cá nhân và làm việc nhóm, để học sinh có cơ hội trao đổi, thực hành và trình bày ý tưởng.",
    features: [
      "Bàn ghế bố trí theo hoạt động học",
      "Màn hình hỗ trợ bài học trực quan",
      "Không gian sáng và gọn gàng",
    ],
  },
  {
    title: "Góc đọc & tự học",
    image: "/images/facility-reading.png",
    text: "Một góc yên tĩnh dành cho sách, những câu chuyện mới và thời gian ôn tập trước hoặc sau giờ học.",
    features: [
      "Sách và học liệu theo chủ đề",
      "Chỗ ngồi đọc thoải mái",
      "Khuyến khích thói quen tự khám phá",
    ],
  },
  {
    title: "Khu đón tiếp & tư vấn",
    image: "/images/facility-welcome.png",
    text: "Nơi ba mẹ tìm hiểu chương trình, trao đổi mục tiêu học tập và chọn bước khởi đầu phù hợp cho con.",
    features: [
      "Khu vực chờ dành cho phụ huynh",
      "Không gian trao đổi về lộ trình",
      "Kết nối gia đình với đội ngũ tư vấn",
    ],
  },
];
export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="border-b border-brand-100 bg-brand-50">
        <div className="container-page section grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="section-index">Về Bloom English</p>
            <h1 className="heading mt-4">
              Một nơi để học tiếng Anh.
              <br />
              <span className="editorial text-brand-700">
                Một nơi để con lớn lên.
              </span>
            </h1>
            <p className="mt-5 leading-8 text-slate-700">
              Bloom hướng đến hành trình học tiếng Anh gần gũi với học sinh Tiểu
              học, THCS và THPT: học theo năng lực, thực hành có mục tiêu và tự
              tin thể hiện bản thân.
            </p>
            <nav
              aria-label="Các phần giới thiệu"
              className="mt-6 flex flex-wrap gap-2"
            >
              {[
                ["trung-tam", "Trung tâm"],
                ["giao-vien", "Giáo viên"],
                ["co-so-vat-chat", "Cơ sở vật chất"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-100"
                >
                  {label}
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
          <Reveal as="figure" variant="scale">
            <Image
              src="/images/cartoon-classroom.png"
              alt="Thầy cô và học sinh cùng khám phá bài học"
              width={1000}
              height={667}
              priority
              sizes="(max-width:767px) 100vw, 50vw"
              className="aspect-[3/2] w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </section>
      <section id="trung-tam" className="container-page section">
        <p className="section-index">01 / Giới thiệu trung tâm</p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <h2 className="heading">
            Từ những bước nhỏ,
            <br />
            <span className="editorial text-brand-700">
              nuôi dưỡng sự tự tin.
            </span>
          </h2>
          <div className="space-y-4 leading-8 text-slate-700">
            <p>
              Với Bloom, tiếng Anh không chỉ nằm trong trang sách. Đó còn là
              cách con kể về một ngày của mình, đặt câu hỏi và chia sẻ điều vừa
              khám phá.
            </p>
            <p>
              Chương trình kết nối bốn kỹ năng nghe, nói, đọc, viết với những
              chủ đề phù hợp độ tuổi. Mục tiêu học tập được điều chỉnh theo nền
              tảng và tiến bộ của từng học sinh.
            </p>
          </div>
        </div>
        <div className="reveal-group mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Sprout,
              title: "Học theo nhịp của con",
              text: "Bắt đầu từ năng lực hiện tại, xây nền vững trước khi chuyển sang nội dung mới.",
            },
            {
              icon: BookOpen,
              title: "Thực hành để hiểu",
              text: "Dùng tiếng Anh qua trò chơi ngôn ngữ, câu chuyện và dự án phù hợp với lứa tuổi.",
            },
            {
              icon: HeartHandshake,
              title: "Cùng gia đình đồng hành",
              text: "Trao đổi mục tiêu và gợi ý luyện tập để ba mẹ hiểu, hỗ trợ con trong quá trình học.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <Reveal as="article" hover key={title} className="card p-6">
              <Icon size={27} className="text-brand-700" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="giao-vien" className="bg-brand-50">
        <div className="container-page section">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="section-index">02 / Đội ngũ giáo viên</p>
              <h2 className="heading mt-4">
                Lắng nghe, hướng dẫn
                <br />
                <span className="editorial text-brand-700">
                  và khích lệ con.
                </span>
              </h2>
            </div>
            <Link href="/giao-vien" className="btn-secondary">
              Xem toàn bộ đội ngũ <ArrowRight size={18} />
            </Link>
          </div>
          <p className="mt-5 max-w-3xl leading-8 text-slate-700">
            Giáo viên giúp con hiểu cách học, chủ động đặt câu hỏi và thử lại
            khi gặp khó khăn. Mỗi bài học là cơ hội để thực hành và nhận phản
            hồi cụ thể.
          </p>
          <div className="reveal-group mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teachers.slice(0, 3).map((t) => (
              <TeacherCard key={t.id} teacher={t} />
            ))}
          </div>
        </div>
      </section>
      <section id="co-so-vat-chat" className="container-page section">
        <p className="section-index">03 / Cơ sở vật chất</p>
        <h2 className="heading mt-4">
          Không gian gần gũi,
          <br />
          <span className="editorial text-brand-700">khơi mở điều mới.</span>
        </h2>
        <p className="mt-5 max-w-3xl leading-8 text-slate-700">
          Bloom ưu tiên không gian sáng, bố trí linh hoạt và học liệu dễ tiếp
          cận. Từ giờ học cùng thầy cô đến lúc tự đọc một cuốn sách, mỗi khu vực
          đều hướng đến trải nghiệm học tập của con.
        </p>
        <div className="reveal-group mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <Reveal
              as="article"
              variant="scale"
              hover
              key={f.title}
              className="card overflow-hidden"
            >
              <div className="card-thumbnail">
                <Image
                  src={f.image}
                  alt={`Phối cảnh ${f.title.toLowerCase()}`}
                  width={1000}
                  height={667}
                  sizes="(max-width:767px) 100vw, (max-width:1023px) 50vw, 33vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">{f.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{f.text}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                  {f.features.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-500">
          Phối cảnh không gian học tập. Ba mẹ có thể liên hệ để tìm hiểu phòng
          học và tiện ích tại cơ sở quan tâm.
        </p>
      </section>
      <section className="container-page pb-10">
        <Reveal className="rounded-2xl bg-brand-100 p-6 md:p-8">
          <div className="grid items-start gap-6 md:grid-cols-2">
            <div>
              <h2 className="heading">
                Ghé thăm Bloom,
                <br />
                <span className="editorial text-brand-700">
                  tìm hiểu cùng con.
                </span>
              </h2>
              <p className="mt-4 leading-8 text-slate-700">
                Chọn khu vực thuận tiện để trao đổi về không gian học, chương
                trình và buổi học thử.
              </p>
              <Link href="/lien-he" className="btn mt-5">
                Đăng ký tư vấn & học thử <ArrowRight size={18} />
              </Link>
            </div>
            <nav aria-label="Tìm hiểu cơ sở" className="space-y-3">
              {branches.map((b) => (
                <Link
                  key={b.value}
                  href={`/lien-he?branch=${b.value}#dang-ky`}
                  className="flex min-h-16 items-center justify-between gap-3 rounded-2xl bg-white p-5 hover:bg-brand-50"
                >
                  <span>
                    <strong className="block">{b.label}</strong>
                    <span className="mt-1 block text-sm text-slate-600">
                      {b.address}
                    </span>
                  </span>
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-brand-700"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

````

## app/globals.css

````css
@import "tailwindcss";
@theme inline {
  --font-sans: var(--font-body);
  --font-display: var(--font-editorial);
  --color-brand-50: #f5faef;
  --color-brand-100: #e8f3db;
  --color-brand-200: #d2e8b9;
  --color-brand-300: #b9df9d;
  --color-brand-400: #a3cf82;
  --color-brand-500: #83b760;
  --color-brand-600: #507d36;
  --color-brand-700: #3f642b;
  --color-brand-800: #345127;
  --color-brand-900: #2b4222;
  --color-brand-950: #1b2d16;
  --color-forest: #2b4222;
  --color-mint: #f5faef;
}
:root {
  color: #2b4222;
  background: white;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: 110px;
}
body {
  margin: 0;
  font-size: 16px;
}
::selection {
  background: #d2e8b9;
}
:focus-visible {
  outline: 3px solid #3f642b;
  outline-offset: 4px;
}
button,
a,
summary {
  -webkit-tap-highlight-color: transparent;
  transition:
    color 200ms,
    background-color 200ms,
    box-shadow 200ms;
}
button,
select,
summary {
  cursor: pointer;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}
@layer components {
  .container-page {
    @apply mx-auto max-w-[1200px] px-5 md:px-8;
  }
  .section {
    @apply py-8 md:py-12;
  }
  .card {
    @apply rounded-2xl border border-brand-100 bg-white shadow-sm shadow-brand-900/5;
  }
  .btn {
    @apply inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-300 px-6 py-3 font-bold text-brand-950 hover:bg-brand-400;
  }
  .btn-secondary {
    @apply inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-600 bg-white px-6 py-3 font-bold text-brand-700 hover:bg-brand-50;
  }
  .eyebrow {
    @apply text-sm font-extrabold uppercase tracking-widest text-brand-700;
  }
  .heading {
    @apply text-3xl font-bold leading-tight tracking-tight md:text-4xl;
  }
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}

.editorial {
  font-family: var(--font-editorial), Georgia, serif;
  font-style: italic;
  font-weight: 500;
  letter-spacing: -0.045em;
}
.hero-title {
  font-size: clamp(2.75rem, 5.2vw, 4.7rem);
  line-height: 1.13;
  letter-spacing: -0.055em;
  font-weight: 700;
}
.hero-photo {
  position: relative;
  padding: 12px;
  border: 1px solid #d2e8b9;
  border-radius: 180px 180px 24px 24px;
  background: #fff;
}
.hero-photo img {
  border-radius: 170px 170px 16px 16px;
}
.photo-label {
  position: absolute;
  bottom: 28px;
  left: -20px;
  right: 28px;
  padding: 18px 22px;
  background: #f5faef;
  border-radius: 16px;
  box-shadow: 0 10px 40px #2b422212;
}
.section-index {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #3f642b;
}
.section-index::before {
  content: "";
  width: 28px;
  height: 1px;
  background: currentColor;
}
.course-visual {
  position: relative;
  margin: 10px 10px 0;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 3 / 2;
}
.card-thumbnail {
  position: relative;
  overflow: hidden;
  aspect-ratio: 3 / 2;
  border-radius: 12px;
}
.card-thumbnail > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.course-number {
  position: absolute;
  top: 14px;
  left: 14px;
  display: flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #e8f3db;
  color: #2b4222;
  font-family: var(--font-editorial), Georgia, serif;
  font-size: 22px;
  font-style: italic;
}
.course-card {
  transition:
    border-color 200ms,
    box-shadow 200ms;
}
.course-card:hover {
  border-color: #83b760;
  box-shadow: 0 8px 30px #2b42220c;
}
@media (max-width: 767px) {
  .hero-photo {
    border-radius: 100px 100px 20px 20px;
  }
  .hero-photo img {
    border-radius: 90px 90px 12px 12px;
  }
  .photo-label {
    left: 22px;
    right: 22px;
    bottom: 24px;
    padding: 14px;
  }
}

/* The desktop underline expands from its centre on hover, focus and selection. */
.nav-underline {
  transform: scaleX(0);
  transition: transform 220ms ease;
}
.desktop-nav-link:hover .nav-underline,
.desktop-nav-link:focus-visible .nav-underline,
.desktop-nav-link[aria-current="page"] .nav-underline {
  transform: scaleX(1);
}
.mobile-drawer {
  position: fixed;
  inset: 0 auto 0 0;
  margin: 0;
  padding: 0;
  width: min(360px, calc(100vw - 32px));
  max-width: none;
  height: 100dvh;
  max-height: none;
  border: 0;
  border-right: 1px solid var(--color-brand-200);
  color: var(--color-forest);
  background: white;
  box-shadow: 12px 0 40px #1b2d1620;
  overflow: hidden;
}
.mobile-drawer::backdrop {
  background: #1b2d1659;
  backdrop-filter: blur(2px);
}
.mobile-drawer[open].is-opening {
  animation: drawer-enter 240ms ease-out both;
}
.mobile-drawer[open].is-closing {
  animation: drawer-exit 240ms ease-in both;
}
.mobile-drawer[open].is-opening::backdrop {
  animation: drawer-backdrop-enter 240ms ease-out both;
}
.mobile-drawer[open].is-closing::backdrop {
  animation: drawer-backdrop-exit 240ms ease-in both;
}
@keyframes drawer-enter {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes drawer-exit {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes drawer-backdrop-enter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes drawer-backdrop-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* Reusable reveal primitives: SSR stays visible; JS only arms observed elements. */
.reveal {
  --reveal-from-y: 16px;
  --reveal-from-scale: 1;
}
.reveal[data-reveal="fade"] {
  --reveal-from-y: 0px;
}
.reveal[data-reveal="scale"] {
  --reveal-from-y: 0px;
  --reveal-from-scale: 0.97;
}
.reveal[data-reveal-state="pending"] {
  opacity: 0;
}
.reveal[data-reveal-state="visible"] {
  animation: content-reveal 480ms cubic-bezier(0.2, 0.65, 0.3, 1)
    var(--reveal-delay, 0ms) backwards;
}
@keyframes content-reveal {
  from {
    opacity: 0;
    transform: translateY(var(--reveal-from-y)) scale(var(--reveal-from-scale));
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.reveal-group > .reveal:nth-child(2) {
  --reveal-delay: 60ms;
}
.reveal-group > .reveal:nth-child(3) {
  --reveal-delay: 120ms;
}
.reveal-group > .reveal:nth-child(4) {
  --reveal-delay: 180ms;
}
.reveal-group > .reveal:nth-child(n + 5) {
  --reveal-delay: 240ms;
}
.motion-hover img {
  transition: transform 200ms ease;
}
@media (hover: hover) and (pointer: fine) {
  .motion-hover:hover .card-thumbnail > img {
    transform: scale(1.04);
  }
}
.reveal:focus-within {
  opacity: 1;
  animation: none;
}
@media (prefers-reduced-motion: reduce) {
  .reveal[data-reveal-state] {
    opacity: 1;
    animation: none !important;
  }
  .motion-hover:hover {
    scale: 1;
  }
}
@media print {
  .reveal[data-reveal-state] {
    opacity: 1;
    animation: none !important;
    transform: none;
  }
}

````

## app/icon.svg

````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#b9df9d"/><path d="M32 49V28m0 10C17 39 14 28 16 20c12-1 19 8 16 18Zm0-8C30 18 39 12 49 15c0 11-6 17-17 15Z" fill="none" stroke="#345127" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>

````

## app/khoa-hoc/[slug]/page.tsx

````tsx
import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/lib/courses";
import { pageMetadata } from "@/lib/seo";
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({ params }: Props) {
  const c = getCourse((await params).slug);
  return c
    ? pageMetadata(c.name, c.tagline, `/khoa-hoc/${c.slug}`)
    : { title: "Không tìm thấy khóa học", robots: { index: false } };
}
export default async function CoursePage({ params }: Props) {
  const course = getCourse((await params).slug);
  if (!course) notFound();
  return (
    <main id="main-content" className="container-page py-6 md:py-8">
      <nav
        aria-label="Đường dẫn"
        className="mb-8 flex flex-wrap items-center gap-2 text-sm"
      >
        <Link
          className="inline-flex min-h-11 items-center hover:underline"
          href="/"
        >
          Trang chủ
        </Link>
        <span aria-hidden="true">/</span>
        <Link
          className="inline-flex min-h-11 items-center hover:underline"
          href="/khoa-hoc"
        >
          Khóa học
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{course.name}</span>
      </nav>
      <Reveal as="section" className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="eyebrow">{course.level}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            {course.name}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            {course.description}
          </p>
        </div>
        <Image
          src={course.image}
          alt={`Lớp học ${course.name}`}
          width={800}
          height={600}
          priority
          sizes="(max-width: 767px) 100vw, 50vw"
          className="aspect-[4/3] w-full rounded-2xl object-cover"
        />
      </Reveal>
      <Reveal as="section" className="mt-7" aria-labelledby="quick">
        <h2 id="quick" className="heading">
          Khóa học có phù hợp với con?
        </h2>
        <dl className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            ["Đối tượng", course.level],
            ["Đầu vào", course.entry],
            ["Mục tiêu học tập", course.goal],
            ["Hình thức học", course.format],
          ].map(([title, text]) => (
            <div key={title} className="card bg-brand-50 p-6">
              <dt className="font-extrabold text-brand-800">{title}</dt>
              <dd className="mt-2 leading-7 text-slate-700">{text}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
      <Reveal as="section" className="mt-7">
        <h2 className="heading">Con sẽ học gì?</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {course.contents.map((c) => (
            <article key={c.title} className="card p-6">
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="mt-3 leading-7 text-slate-700">{c.description}</p>
            </article>
          ))}
        </div>
      </Reveal>
      <Reveal as="section" className="mt-7">
        <h2 className="heading">Lộ trình từng bước</h2>
        <ol className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {course.stages.map((s, i) => (
            <li className="card p-6" key={s.title}>
              <p className="eyebrow">Giai đoạn {i + 1}</p>
              <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 leading-7 text-slate-700">{s.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-slate-700">
          Lộ trình điều chỉnh theo tiến bộ thực tế. Cambridge/IELTS là định
          hướng học tập, không cam kết điểm số hoặc thời gian đạt chứng chỉ.
        </p>
      </Reveal>
      <Reveal as="section" className="card mt-7 bg-brand-50 p-6 md:p-8">
        <h2 className="heading">Thông tin lớp học</h2>
        <dl className="mt-6 space-y-4">
          {[
            ["Thời lượng", course.duration],
            ["Lịch học", course.schedule],
            ["Học phí", course.tuition],
          ].map(([t, d]) => (
            <div key={t}>
              <dt className="font-bold">{t}</dt>
              <dd className="mt-1 leading-7 text-slate-700">{d}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-sm text-slate-600">
          Lịch học dự kiến có thể điều chỉnh theo lớp. Ba mẹ liên hệ tư vấn để
          xác nhận lịch khai giảng phù hợp.
        </p>
      </Reveal>
      <Reveal as="section" className="mt-7">
        <h2 className="heading">Ba mẹ thường hỏi</h2>
        <div className="mt-6 space-y-3">
          {course.faq.map((f) => (
            <details key={f.question} className="card px-6">
              <summary className="py-5 font-bold">{f.question}</summary>
              <p className="pb-6 leading-7 text-slate-700">{f.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>
      <Reveal
        as="section"
        className="my-7 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 p-8 text-center"
      >
        <h2 className="heading">Cùng chọn bước khởi đầu cho con</h2>
        <p className="mt-4 text-slate-700">
          Trao đổi thêm về chương trình {course.name} và đăng ký học thử.
        </p>
        <Link
          href={`/lien-he?course_interest=${course.id}#dang-ky`}
          className="btn mt-6"
        >
          Tư vấn khóa học này
        </Link>
      </Reveal>
    </main>
  );
}

````

## app/khoa-hoc/loading.tsx

````tsx
export default function Loading() {
  return (
    <main id="main-content" className="container-page section" aria-busy="true">
      <p role="status">Đang tải khóa học…</p>
      <div
        aria-hidden="true"
        className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-80 rounded-2xl bg-brand-50" />
        ))}
      </div>
    </main>
  );
}

````

## app/khoa-hoc/page.tsx

````tsx
import Link from "next/link";
import { Suspense } from "react";
import CourseSearch from "@/components/CourseSearch";
import CourseCard from "@/components/CourseCard";
import { filterCourses, programs } from "@/lib/courses";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Khóa học",
  "Tìm chương trình tiếng Anh theo cấp học và mục tiêu: Tiểu học, THCS, THPT, IELTS và Toán & Khoa học bằng tiếng Anh.",
  "/khoa-hoc",
);
export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ grade?: string | string[]; q?: string | string[] }>;
}) {
  const params = await searchParams;
  const selected = programs.find((p) => p.id === params.grade);
  const q = typeof params.q === "string" ? params.q.trim().slice(0, 120) : "";
  const visible = filterCourses(selected?.id, q);
  function href(grade?: string) {
    const query = new URLSearchParams();
    if (grade) query.set("grade", grade);
    if (q) query.set("q", q);
    return `/khoa-hoc${query.size ? `?${query}` : ""}`;
  }
  return (
    <main id="main-content" className="container-page section">
      <p className="eyebrow">Chương trình học</p>
      <h1 className="heading mt-3">Chọn bước học tiếp theo cho con</h1>
      <p className="mt-4 max-w-2xl leading-7 text-slate-700">
        Tìm theo cấp học hoặc mục tiêu. Mỗi chương trình đều có nội dung, lộ
        trình và thông tin lớp để ba mẹ dễ cân nhắc.
      </p>
      <div className="mt-8 max-w-2xl">
        <Suspense fallback={<p role="status">Đang tải tìm kiếm…</p>}>
          <CourseSearch />
        </Suspense>
      </div>
      <nav
        aria-label="Lọc khóa học theo cấp học"
        className="my-6 flex flex-wrap gap-3"
      >
        {[{ id: "", label: "Tất cả" }, ...programs].map((p) => (
          <Link
            key={p.id}
            href={href(p.id)}
            aria-current={(selected?.id ?? "") === p.id ? "page" : undefined}
            className={`inline-flex min-h-11 items-center rounded-full px-5 py-3 font-bold ${(selected?.id ?? "") === p.id ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-800 hover:bg-brand-100"}`}
          >
            {p.label}
          </Link>
        ))}
      </nav>
      {params.grade !== undefined && !selected && (
        <p className="mb-4 text-slate-700">
          Cấp học không hợp lệ. Đang hiển thị kết quả trên tất cả cấp học.
        </p>
      )}
      <p role="status" className="mb-6 text-slate-700">
        Tìm thấy <strong>{visible.length} khóa học</strong>
        {q && ` cho “${q}”`}
        {selected && ` · ${selected.label}`}
      </p>
      {visible.length ? (
        <div className="reveal-group grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      ) : (
        <section className="card bg-brand-50 p-8 text-center">
          <h2 className="text-2xl font-bold">Chưa tìm thấy khóa học phù hợp</h2>
          <p className="mt-3 text-slate-700">
            Thử từ khóa ngắn hơn hoặc chọn cấp học khác.
          </p>
          <Link href="/khoa-hoc" className="btn mt-6">
            Xóa bộ lọc
          </Link>
        </section>
      )}
    </main>
  );
}

````

## app/layout.tsx

````tsx
import type { Metadata } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import LayoutUI from "@/components/LayoutUI";
import "./globals.css";
const bodyFont = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});
const editorialFont = Lora({
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bloomenglish.example";
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bloom English | Tiếng Anh Tiểu học, THCS, THPT & IELTS",
    template: "%s | Bloom English",
  },
  description:
    "Tiếng Anh cho học sinh Tiểu học, THCS, THPT. Lộ trình Cambridge, IELTS, học qua dự án và đồng hành cùng phụ huynh. Đăng ký tư vấn hoặc học thử.",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Bloom English",
    title: "Bloom English — Khơi mở tương lai cùng tiếng Anh",
    description:
      "Khơi dậy đam mê học tiếng Anh từ bé. Cùng con trưởng thành qua lộ trình Tiểu học, THCS, THPT & IELTS.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bloom English — Tiếng Anh cho trẻ em và thiếu niên",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
const schema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Bloom English",
  url: baseUrl,
  description:
    "Trung tâm tiếng Anh dành cho học sinh Tiểu học, THCS, THPT; định hướng Cambridge và IELTS.",
  knowsAbout: [
    "English for children",
    "Cambridge English Qualifications",
    "IELTS",
    "English for teenagers",
  ],
  logo: `${baseUrl}/icon.svg`,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${bodyFont.variable} ${editorialFont.variable}`}
    >
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-lg bg-white p-3 focus:fixed focus:left-4 focus:top-4 focus:not-sr-only"
        >
          Đến nội dung chính
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
        <LayoutUI>{children}</LayoutUI>
      </body>
    </html>
  );
}

````

## app/lien-he/page.tsx

````tsx
import { Phone } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";
import { consultationPrefill } from "@/lib/consultation-prefill";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Liên hệ & đăng ký học thử",
  "Tìm cơ sở Bloom English và đăng ký tư vấn chương trình tiếng Anh phù hợp với độ tuổi, năng lực và mục tiêu của con.",
  "/lien-he",
);
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{
    course_interest?: string | string[];
    branch?: string | string[];
  }>;
}) {
  const prefill = consultationPrefill(await searchParams);
  return (
    <main id="main-content" className="bg-brand-50/50">
      <div className="container-page section">
        <p className="eyebrow">Bloom lắng nghe ba mẹ</p>
        <h1 className="heading mt-3">Tìm lộ trình phù hợp cho con</h1>
        <p className="mb-10 mt-4 max-w-2xl leading-7 text-slate-700">
          Chọn chương trình và cơ sở ba mẹ quan tâm để đăng ký tư vấn hoặc học
          thử cho con.
        </p>
        <ConsultationForm
          defaults={prefill}
          contact={
            <div className="mb-10">
              <h2 className="text-2xl font-extrabold">Thông tin liên hệ</h2>
              <dl className="mt-5 space-y-3 text-slate-700">
                <div>
                  <dt className="font-bold">Hotline</dt>
                  <dd>
                    <a
                      className="inline-flex min-h-11 items-center gap-2 text-brand-700"
                      href="tel:0901234567"
                    >
                      <Phone size={20} aria-hidden="true" /> 0901 234 567
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Email</dt>
                  <dd>
                    <a
                      className="inline-flex min-h-11 items-center break-all text-brand-700"
                      href="mailto:hello@bloomenglish.example"
                    >
                      hello@bloomenglish.example
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Giờ tư vấn</dt>
                  <dd className="mt-2">Thứ Hai – Chủ nhật · 08:00–20:00</dd>
                </div>
              </dl>
            </div>
          }
        />
      </div>
    </main>
  );
}

````

## app/not-found.tsx

````tsx
import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="container-page section text-center">
      <p className="eyebrow">404 · Không tìm thấy trang</p>
      <h1 className="heading mt-4">Trang này chưa có trong lớp học Bloom</h1>
      <p className="mt-4 text-slate-700">
        Liên kết có thể không đúng. Ba mẹ có thể chọn lại chương trình phù hợp.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link href="/khoa-hoc" className="btn">
          Xem khóa học
        </Link>
        <Link href="/" className="btn-secondary">
          Về trang chủ
        </Link>
      </div>
    </main>
  );
}

````

## app/opengraph-image.tsx

````tsx
import { ImageResponse } from "next/og";
export const alt = "Bloom English — Tiếng Anh Tiểu học, THCS, THPT & IELTS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #f5faef, #ffffff, #d2e8b9)",
        color: "#2b4222",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 45 }}>
        bloom. ENGLISH CENTER
      </div>
      <div style={{ fontSize: 76, fontWeight: 800 }}>Learn today.</div>
      <div style={{ fontSize: 76, fontWeight: 800, color: "#507d36" }}>
        Bloom tomorrow.
      </div>
      <div style={{ fontSize: 27, marginTop: 45 }}>
        PRIMARY · SECONDARY · HIGH SCHOOL & IELTS
      </div>
    </div>,
    size,
  );
}

````

## app/page.tsx

````tsx
import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Users,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import CourseCard from "@/components/CourseCard";
import TeacherCard from "@/components/TeacherCard";
import { courses } from "@/lib/courses";
import { teachers } from "@/lib/teachers";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Tiếng Anh cùng con lớn lên",
  "Khám phá chương trình tiếng Anh Tiểu học, THCS, THPT và IELTS. Tìm hiểu giáo viên, lộ trình và đăng ký học thử tại Bloom English.",
  "/",
);
const values = [
  {
    icon: Compass,
    title: "Lộ trình vừa sức con",
    text: "Bắt đầu từ năng lực hiện tại, cùng con đặt mục tiêu và tiến bộ qua từng giai đoạn.",
  },
  {
    icon: Users,
    title: "Thầy cô thật gần gũi",
    text: "Lắng nghe, khích lệ con đặt câu hỏi và hướng dẫn bằng những phản hồi cụ thể.",
  },
  {
    icon: BookOpen,
    title: "Học để dùng mỗi ngày",
    text: "Kết nối nghe, nói, đọc, viết qua tình huống đời sống và những dự án nhỏ.",
  },
  {
    icon: MessageCircle,
    title: "Ba mẹ cùng đồng hành",
    text: "Theo dõi nội dung học, hiểu điểm cần bồi dưỡng và cùng con thực hành tại nhà.",
  },
];
export default function Home() {
  return (
    <main id="main-content">
      <section className="border-b border-brand-100 bg-brand-50">
        <div className="container-page grid items-center gap-10 py-7 md:grid-cols-2 md:gap-8 md:py-10 lg:gap-14 lg:py-12">
          <div>
            <p className="section-index">Small steps. Bright futures.</p>
            <h1 className="hero-title mt-6">
              Tiếng Anh mở lối.
              <br />
              <span className="editorial text-brand-700">
                Con tự tin
                <br className="hidden lg:block" /> lớn lên.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
              Một câu nói mới, một khám phá hay, một lần con dám thể hiện. Bloom
              cùng con nuôi dưỡng những bước tiến nhỏ mỗi ngày.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="btn" href="/khoa-hoc">
                Khám phá khóa học <ArrowRight size={18} />
              </Link>
              <Link className="btn-secondary !bg-transparent" href="/lien-he">
                Đăng ký học thử
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 border-t border-brand-900/10 pt-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-brand-900/15">
                <BookOpen size={20} />
              </span>
              <p className="text-sm leading-6 text-slate-600">
                <strong className="block font-semibold text-forest">
                  Một hành trình, nhiều bước trưởng thành
                </strong>
                Tiểu học · THCS · THPT & IELTS
              </p>
            </div>
          </div>
          <Reveal as="figure" variant="scale" className="relative pb-6 md:pl-4">
            <div className="hero-photo">
              <Image
                src="/images/cartoon-classroom.png"
                alt="Tranh hoạt hình giáo viên và học sinh Việt Nam cùng thực hành trong lớp tiếng Anh"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 767px) 100vw, 50vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="photo-label flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                  <Sparkles size={22} />
                </span>
                <div>
                  <p className="font-semibold">
                    Niềm vui học tập bắt đầu ở đây.
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Cùng học, cùng khám phá
                  </p>
                </div>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute right-0 top-8 rounded-full bg-brand-200 px-5 py-3 font-display text-xl italic text-brand-950 lg:-right-4"
            >
              Hello, tomorrow!
            </span>
          </Reveal>
        </div>
      </section>
      <section className="container-page section">
        <div className="grid items-end gap-5 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="section-index">01 / Chương trình học</p>
            <h2 className="heading mt-4">
              Đúng độ tuổi.
              <br />
              <span className="editorial text-brand-700">
                Đúng nhịp của con.
              </span>
            </h2>
          </div>
          <p className="max-w-md leading-8 text-slate-600 md:justify-self-end">
            Từ nền tảng đầu tiên đến tiếng Anh học thuật. Chọn một chương trình
            để khám phá điều con sẽ học và mục tiêu phía trước.
          </p>
        </div>
        <div className="mt-9 reveal-group grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 3).map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>
      <section className="bg-brand-50">
        <div className="container-page section grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal as="figure" variant="scale" className="relative">
            <Image
              src="/images/cartoon-teens.png"
              alt="Tranh hoạt hình nhóm học sinh thảo luận và thực hành cùng nhau"
              width={1000}
              height={1100}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="aspect-[5/4] w-full rounded-2xl object-cover lg:aspect-[5/4]"
            />
            <figcaption className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/95 p-5">
              <p className="font-display text-2xl italic">
                Mỗi tiếng nói đều đáng được lắng nghe.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Học cùng nhau, tự tin cùng nhau
              </p>
            </figcaption>
          </Reveal>
          <div>
            <p className="section-index">02 / Cách Bloom đồng hành</p>
            <h2 className="heading mt-4">
              Không chỉ là bài học.
              <br />
              <span className="editorial text-brand-700">Là sự tự tin.</span>
            </h2>
            <div className="reveal-group mt-6 divide-y divide-brand-900/10">
              {values.map(({ icon: Icon, title, text }) => (
                <Reveal as="article" key={title} className="flex gap-4 py-5">
                  <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-700">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container-page section">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="section-index">03 / Người đồng hành</p>
            <h2 className="heading mt-4">
              Có thầy cô bên cạnh,
              <br />
              <span className="editorial text-brand-700">
                con dám thử nhiều hơn.
              </span>
            </h2>
          </div>
          <Link href="/giao-vien" className="btn-secondary">
            Gặp đội ngũ Bloom <ArrowRight size={18} />
          </Link>
        </div>
        <div className="mt-9 reveal-group grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teachers.slice(0, 3).map((t) => (
            <TeacherCard key={t.id} teacher={t} />
          ))}
        </div>
      </section>
      <Reveal as="section" variant="fade" className="container-page pb-10">
        <div className="grid overflow-hidden rounded-2xl bg-brand-100 md:grid-cols-[1.25fr_1fr]">
          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-brand-700">
              Bắt đầu cùng Bloom
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-brand-950 md:text-4xl">
              Hành trình lớn,
              <br />
              <span className="editorial text-brand-700">
                bắt đầu từ một lời chào.
              </span>
            </h2>
            <p className="mt-5 max-w-md leading-8 text-brand-800">
              Cùng tìm lộ trình phù hợp cho con qua một buổi tư vấn hoặc học
              thử.
            </p>
            <Link href="/lien-he" className="btn mt-7">
              Đăng ký học thử <ArrowRight size={18} />
            </Link>
          </div>
          <Image
            src="/images/cartoon-classroom.png"
            alt="Tranh hoạt hình lớp học vui vẻ"
            width={768}
            height={800}
            sizes="(max-width: 767px) 100vw, 45vw"
            className="h-full min-h-64 w-full object-cover object-[65%_center]"
          />
        </div>
      </Reveal>
    </main>
  );
}

````

## app/robots.ts

````ts
import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

````

## app/sitemap.ts

````ts
import type { MetadataRoute } from "next";
import { articles, resources } from "@/lib/learning-content";
import { courses } from "@/lib/courses";
import { siteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/khoa-hoc",
    "/giao-vien",
    "/gioi-thieu",
    "/lien-he",
    "/tin-tuc",
    "/tai-lieu",
    ...articles.map((a) => `/tin-tuc/${a.slug}`),
    ...resources.map((r) => `/tai-lieu/${r.slug}`),
    ...courses.map((c) => `/khoa-hoc/${c.slug}`),
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

````

## app/tai-lieu/[slug]/page.tsx

````tsx
import Reveal from "@/components/motion/Reveal";
import Link from "next/link";
import { Download } from "lucide-react";
import { notFound } from "next/navigation";
import { resources, getResource } from "@/lib/learning-content";
import { pageMetadata } from "@/lib/seo";
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}
export async function generateMetadata({ params }: Props) {
  const r = getResource((await params).slug);
  return r
    ? pageMetadata(r.title, r.summary, `/tai-lieu/${r.slug}`)
    : { title: "Không tìm thấy tài liệu" };
}
export default async function ResourcePage({ params }: Props) {
  const r = getResource((await params).slug);
  if (!r) notFound();
  return (
    <main id="main-content" className="container-page section">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/tai-lieu"
          className="inline-flex min-h-11 items-center font-semibold text-brand-700 hover:underline"
        >
          ← Tất cả tài liệu
        </Link>
        <p className="section-index mt-6 flex">{r.audience}</p>
        <h1 className="heading mt-4">{r.title}</h1>
        <p className="mt-5 leading-8 text-slate-700">{r.summary}</p>
        <p className="mt-3 text-sm text-slate-600">
          {r.duration} · Có đáp án · Miễn phí
        </p>
        <a href={`/tai-lieu/${r.slug}/tai-xuong`} download className="btn mt-6">
          <Download size={18} /> Tải bài & đáp án (.txt)
        </a>
        <Reveal as="section" className="card mt-8 bg-brand-50 p-6">
          <h2 className="text-2xl font-bold">Mục tiêu & cách học</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            {r.objectives.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <p className="mt-4 leading-8 text-slate-700">{r.guidance}</p>
        </Reveal>
        <Reveal as="section" className="mt-5">
          <h2 className="text-2xl font-bold">Từ vựng cần nhớ</h2>
          <dl className="mt-4 divide-y divide-brand-100 rounded-2xl border border-brand-100 px-5">
            {r.vocabulary.map((v) => (
              <div key={v.word} className="grid gap-1 py-4 sm:grid-cols-2">
                <dt className="font-bold text-brand-700">{v.word}</dt>
                <dd className="text-slate-700">{v.meaning}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        {r.exercises.map((e) => (
          <Reveal as="section" key={e.title} className="mt-5">
            <h2 className="text-2xl font-bold">{e.title}</h2>
            <p className="mt-4 leading-8 text-slate-700">{e.instruction}</p>
            <ol className="mt-4 list-decimal space-y-3 pl-6 leading-8 text-slate-700">
              {e.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
            <details className="card mt-5 px-5">
              <summary className="py-4 font-bold text-brand-700">
                Xem đáp án & gợi ý
              </summary>
              <ol className="list-decimal space-y-3 pb-5 pl-5 leading-7 text-slate-700">
                {e.answers.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ol>
            </details>
          </Reveal>
        ))}
        <Reveal as="section" className="mt-6 rounded-2xl bg-brand-50 p-6">
          <h2 className="text-xl font-bold">Con cần thêm người đồng hành?</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Tìm chương trình phù hợp để tiếp tục thực hành cùng giáo viên.
          </p>
          <Link href={`/khoa-hoc?grade=${r.grade}`} className="btn mt-5">
            Khám phá khóa học
          </Link>
        </Reveal>
      </article>
    </main>
  );
}

````

## app/tai-lieu/[slug]/tai-xuong/route.ts

````ts
import { getResource, resourceText } from "@/lib/learning-content";
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const r = getResource((await params).slug);
  if (!r)
    return new Response("Không tìm thấy tài liệu", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  return new Response("\uFEFF" + resourceText(r), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": `attachment; filename="bloom-${r.slug}.txt"`,
      "X-Content-Type-Options": "nosniff",
    },
  });
}

````

## app/tai-lieu/page.tsx

````tsx
import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { resources } from "@/lib/learning-content";
import { programs } from "@/lib/courses";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Tài liệu học tập",
  "Phiếu luyện tập tiếng Anh cho Tiểu học, THCS và THPT. Xem bài, đối chiếu đáp án và tải miễn phí để thực hành tại nhà.",
  "/tai-lieu",
);
export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ grade?: string | string[] }>;
}) {
  const { grade } = await searchParams;
  const selected = programs.find((p) => p.id === grade);
  const visible = resources.filter((r) => !selected || r.grade === selected.id);
  return (
    <main id="main-content" className="container-page section">
      <p className="section-index">Học thêm một chút mỗi ngày</p>
      <h1 className="heading mt-4">
        Tài liệu học tập{" "}
        <span className="editorial text-brand-700">dành cho con</span>
      </h1>
      <p className="mt-5 max-w-2xl leading-8 text-slate-600">
        Phiếu thực hành ngắn theo cấp học, có từ vựng, bài tập và đáp án. Đọc
        ngay trên website hoặc tải bản văn bản để học khi không có mạng.
      </p>
      <nav
        aria-label="Lọc tài liệu theo cấp học"
        className="my-8 flex flex-wrap gap-3"
      >
        {[{ id: "", label: "Tất cả" }, ...programs].map((p) => (
          <Link
            key={p.id}
            href={p.id ? `/tai-lieu?grade=${p.id}` : "/tai-lieu"}
            aria-current={(selected?.id ?? "") === p.id ? "page" : undefined}
            className={`inline-flex min-h-11 items-center rounded-full px-5 py-3 font-bold ${(selected?.id ?? "") === p.id ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-800 hover:bg-brand-100"}`}
          >
            {p.label}
          </Link>
        ))}
      </nav>
      {grade !== undefined && !selected && (
        <p className="mb-4 text-slate-600">
          Cấp học chưa hợp lệ. Đang hiển thị tất cả tài liệu.
        </p>
      )}
      <p role="status" className="mb-5 text-slate-600">
        {visible.length} tài liệu{selected && ` · ${selected.label}`}
      </p>
      <div className="reveal-group grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((r) => (
          <Reveal
            as="article"
            hover
            key={r.slug}
            className="card course-card relative flex flex-col overflow-hidden"
          >
            <Link
              href={`/tai-lieu/${r.slug}`}
              aria-label={`Xem tài liệu: ${r.title}`}
              className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
            />
            <div className="card-thumbnail">
              <Image
                src={r.image}
                alt={r.title}
                width={768}
                height={512}
                sizes="(max-width:767px) 100vw, (max-width:1023px) 50vw, 33vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm font-semibold text-brand-700">
                {programs.find((p) => p.id === r.grade)?.label} · {r.duration}
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug">
                {r.title}
              </h2>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {r.summary}
              </p>
              <span className="mt-5 inline-flex min-h-11 items-center justify-between gap-2 font-bold text-brand-700">
                Xem tài liệu <ArrowRight size={18} />
                <span className="sr-only">: {r.title}</span>
              </span>
              <a
                href={`/tai-lieu/${r.slug}/tai-xuong`}
                download
                className="relative z-20 mt-2 inline-flex min-h-11 items-center gap-2 border-t border-brand-100 bg-white pt-3 text-sm font-semibold text-brand-700"
              >
                <Download size={18} /> Tải bài & đáp án (.txt)
                <span className="sr-only">: {r.title}</span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-sm leading-6 text-slate-600">
        Tài liệu do Bloom English biên soạn. Miễn phí, không cần tài khoản.
      </p>
    </main>
  );
}

````

## app/tin-tuc/[slug]/page.tsx

````tsx
import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/learning-content";
import { pageMetadata } from "@/lib/seo";
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: Props) {
  const a = getArticle((await params).slug);
  return a
    ? pageMetadata(a.title, a.summary, `/tin-tuc/${a.slug}`)
    : { title: "Không tìm thấy bài viết" };
}
export default async function ArticlePage({ params }: Props) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  return (
    <main id="main-content" className="container-page section">
      <article className="mx-auto max-w-3xl">
        <nav
          aria-label="Đường dẫn"
          className="mb-7 flex flex-wrap items-center gap-2 text-sm"
        >
          <Link
            className="inline-flex min-h-11 items-center hover:underline"
            href="/"
          >
            Trang chủ
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            className="inline-flex min-h-11 items-center hover:underline"
            href="/tin-tuc"
          >
            Tin tức
          </Link>
        </nav>
        <p className="section-index">{a.category}</p>
        <h1 className="heading mt-4">{a.title}</h1>
        <p className="mt-4 text-sm text-slate-600">
          Bloom English ·{" "}
          <time dateTime={a.date}>{a.date.split("-").reverse().join("/")}</time>{" "}
          · {a.readingTime}
        </p>
        <p className="mt-6 text-lg leading-8 text-slate-700">{a.summary}</p>
        <Image
          src={a.image}
          alt={a.title}
          width={1000}
          height={667}
          priority
          sizes="(max-width:767px) 100vw, 768px"
          className="mt-8 aspect-[3/2] w-full rounded-2xl object-cover"
        />
        {a.sections.map((s) => (
          <Reveal as="section" className="mt-5" key={s.title}>
            <h2 className="text-2xl font-bold">{s.title}</h2>
            {s.paragraphs.map((p) => (
              <p key={p} className="mt-4 leading-8 text-slate-700">
                {p}
              </p>
            ))}
          </Reveal>
        ))}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/tai-lieu" className="btn">
            Thực hành với tài liệu học tập
          </Link>
          <Link href="/tin-tuc" className="btn-secondary">
            Tất cả bài viết
          </Link>
        </div>
      </article>
    </main>
  );
}

````

## app/tin-tuc/page.tsx

````tsx
import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/learning-content";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Tin tức & góc học tập",
  "Bài viết dành cho phụ huynh và học sinh: cách học tiếng Anh, hoạt động tại nhà và kỹ năng học tập cùng Bloom.",
  "/tin-tuc",
);
export default function NewsPage() {
  return (
    <main id="main-content" className="container-page section">
      <p className="section-index">Góc chia sẻ Bloom</p>
      <h1 className="heading mt-4">
        Tin tức &{" "}
        <span className="editorial text-brand-700">cảm hứng học tập</span>
      </h1>
      <p className="mt-5 max-w-2xl leading-8 text-slate-600">
        Những ý tưởng nhỏ giúp con học chủ động hơn và ba mẹ đồng hành dễ dàng
        hơn mỗi ngày.
      </p>
      <div className="mt-10 reveal-group grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <Reveal as="div" hover key={a.slug} className="h-full">
            <Link
              href={`/tin-tuc/${a.slug}`}
              className="card course-card flex h-full flex-col overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
            >
              <div className="card-thumbnail">
                <Image
                  src={a.image}
                  alt={a.title}
                  width={768}
                  height={512}
                  sizes="(max-width:767px) 100vw, (max-width:1023px) 50vw, 33vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-semibold text-brand-700">
                  {a.category} · {a.readingTime}
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-snug">
                  {a.title}
                </h2>
                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {a.summary}
                </p>
                <span className="mt-5 inline-flex min-h-11 items-center justify-between gap-3 border-t border-brand-100 pt-4 font-semibold text-brand-700">
                  Đọc bài viết <ArrowRight size={18} />
                  <span className="sr-only">: {a.title}</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <section className="mt-7 rounded-2xl bg-brand-50 p-8">
        <h2 className="text-2xl font-bold">Đọc rồi, cùng thực hành nhé!</h2>
        <p className="mt-3 leading-7 text-slate-600">
          Khám phá phiếu luyện tập theo cấp học, kèm đáp án và gợi ý tự học.
        </p>
        <Link href="/tai-lieu" className="btn mt-5">
          Xem tài liệu học tập <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

````

## components/ConsultationForm.tsx

````tsx
"use client";
import { useActionState, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  LoaderCircle,
  ShieldCheck,
} from "lucide-react";
import { courseInterests, branches } from "@/lib/consultation-options";
import {
  submitConsultation,
  type ConsultationState,
} from "@/app/actions/consultation";
type Defaults = { course_interest: string; branch: string };
export default function ConsultationForm({
  defaults = { course_interest: "", branch: "" },
  contact,
}: {
  defaults?: Defaults;
  contact: React.ReactNode;
}) {
  const [version, setVersion] = useState(0);
  return (
    <Form
      key={version}
      defaults={defaults}
      contact={contact}
      onReset={() => setVersion((v) => v + 1)}
    />
  );
}
function Form({
  defaults,
  onReset,
  contact,
}: {
  defaults: Defaults;
  onReset: () => void;
  contact: React.ReactNode;
}) {
  const [values, setValues] = useState({
    parent_name: "",
    phone: "",
    ...defaults,
  });
  useEffect(() => {
    setValues((v) => ({ ...v, ...defaults }));
  }, [defaults.course_interest, defaults.branch]);
  const formRef = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const [state, action, pending] = useActionState(
    async (
      previous: ConsultationState,
      data: FormData,
    ): Promise<ConsultationState> => {
      try {
        return await submitConsultation(previous, data);
      } catch {
        return {
          success: false,
          message:
            "Kết nối chưa thành công. Ba mẹ vui lòng thử lại, thông tin vẫn được giữ nguyên.",
        };
      }
    },
    { success: false, message: "" },
  );
  useEffect(() => {
    if (state.errors) {
      const first = Object.keys(state.errors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    } else if (state.message) {
      messageRef.current?.focus();
    }
  }, [state]);
  const input =
    "mt-2 w-full rounded-2xl border border-brand-100 bg-brand-50/30 px-4 py-3.5 text-base text-forest outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30";
  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      <form
        ref={formRef}
        id="dang-ky"
        noValidate
        action={action}
        aria-busy={pending}
        className="rounded-2xl border border-white bg-white/90 p-6 shadow-xl shadow-brand-500/10 sm:p-8 lg:order-2"
      >
        <h2 className="text-2xl font-extrabold">Đăng ký tư vấn hoặc học thử</h2>
        <p className="mt-3 text-base leading-6 text-slate-600">
          Một bước nhỏ hôm nay, thêm tự tin cho con ngày mai.
        </p>
        {!state.success && (
          <fieldset
            disabled={pending}
            className="mt-6 space-y-5 disabled:opacity-60"
          >
            {(
              [
                {
                  name: "parent_name",
                  label: "Họ tên phụ huynh",
                  type: "text",
                  placeholder: "Ba mẹ cho Bloom biết tên nhé",
                  autoComplete: "name",
                },
                {
                  name: "phone",
                  label: "Số điện thoại",
                  type: "tel",
                  placeholder: "Số điện thoại của ba mẹ",
                  autoComplete: "tel",
                },
              ] as const
            ).map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="text-base font-bold">
                  {field.label} <span className="text-amber-700">*</span>
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  required
                  minLength={field.type === "text" ? 2 : undefined}
                  maxLength={field.type === "text" ? 80 : 20}
                  value={values[field.name]}
                  onChange={(event) =>
                    setValues({ ...values, [field.name]: event.target.value })
                  }
                  className={input}
                  aria-invalid={!!state.errors?.[field.name]}
                  aria-describedby={
                    state.errors?.[field.name]
                      ? `${field.name}-error`
                      : undefined
                  }
                />
                {state.errors?.[field.name] && (
                  <p
                    id={`${field.name}-error`}
                    className="mt-2 text-sm text-red-700"
                  >
                    {state.errors[field.name]}
                  </p>
                )}
              </div>
            ))}
            {(
              [
                {
                  name: "course_interest",
                  label: "Khóa học quan tâm",
                  options: courseInterests,
                },
                { name: "branch", label: "Cơ sở gần nhất", options: branches },
              ] as const
            ).map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="text-base font-bold">
                  {field.label} <span className="text-amber-700">*</span>
                </label>
                <select
                  id={field.name}
                  name={field.name}
                  required
                  value={values[field.name]}
                  onChange={(event) =>
                    setValues({ ...values, [field.name]: event.target.value })
                  }
                  className={input}
                  aria-invalid={!!state.errors?.[field.name]}
                  aria-describedby={
                    state.errors?.[field.name]
                      ? `${field.name}-error`
                      : undefined
                  }
                >
                  <option value="" disabled>
                    Chọn {field.label.toLowerCase()}
                  </option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {state.errors?.[field.name] && (
                  <p
                    id={`${field.name}-error`}
                    className="mt-2 text-sm text-red-700"
                  >
                    {state.errors[field.name]}
                  </p>
                )}
              </div>
            ))}
            <button type="submit" disabled={pending} className="btn w-full">
              {pending ? (
                <>
                  <LoaderCircle className="animate-spin" size={18} />
                  Đang đăng ký...
                </>
              ) : (
                <>
                  Đăng ký tư vấn
                  <ArrowUpRight size={18} />
                </>
              )}
            </button>
          </fieldset>
        )}
        <div ref={messageRef} tabIndex={-1} role="status" aria-live="polite">
          {state.message && (
            <p
              className={`mt-6 rounded-2xl p-4 text-base leading-7 ${state.success ? "bg-brand-50 text-brand-800" : "bg-rose-50 text-rose-800"}`}
            >
              {state.success && <CheckCircle2 size={24} className="mb-3" />}
              {state.message}
            </p>
          )}
        </div>
        {state.success && (
          <button
            type="button"
            onClick={onReset}
            className="mt-5 rounded-full bg-brand-600 px-6 py-3 text-base font-bold text-white hover:bg-brand-700"
          >
            Đăng ký khác
          </button>
        )}
        <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500">
          <ShieldCheck size={14} />
          Chưa lưu dữ liệu hoặc gửi đến trung tâm
        </p>
      </form>
      <section aria-labelledby="branches-heading" className="lg:order-1">
        {contact}
        <h2 id="branches-heading" className="text-2xl font-extrabold">
          Chọn cơ sở gần ba mẹ
        </h2>
        <p className="mt-3 leading-7 text-slate-700">
          Chọn khu vực thuận tiện cho gia đình để bắt đầu tìm lớp học phù hợp
          cho con.
        </p>
        <div className="mt-5 space-y-3">
          {branches.map((branch) => (
            <button
              type="button"
              key={branch.value}
              disabled={pending || state.success}
              aria-pressed={values.branch === branch.value}
              onClick={() => setValues({ ...values, branch: branch.value })}
              className={`card w-full p-5 text-left ${values.branch === branch.value ? "border-brand-600 bg-brand-50" : "hover:bg-brand-50"}`}
            >
              <span className="block font-bold">{branch.label}</span>
              <span className="mt-1 block text-slate-700">
                {branch.address}
              </span>
              <span className="mt-2 block text-sm font-bold text-brand-700">
                {values.branch === branch.value ? "Đã chọn" : "Chọn cơ sở này"}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

````

## components/CourseCard.tsx

````tsx
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

````

## components/CourseSearch.tsx

````tsx
"use client";
import {
  useEffect,
  useId,
  useState,
  useTransition,
  type FormEvent,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, LoaderCircle } from "lucide-react";
export default function CourseSearch({ hero = false }: { hero?: boolean }) {
  const router = useRouter();
  const params = useSearchParams();
  const id = useId();
  const currentQuery = hero
    ? ""
    : (params.getAll("q").length === 1 ? params.get("q")! : "")
        .trim()
        .slice(0, 120);
  const [query, setQuery] = useState(currentQuery);
  const [pending, startTransition] = useTransition();
  useEffect(() => setQuery(currentQuery), [currentQuery]);
  function navigate(value: string) {
    const next = new URLSearchParams();
    const grade = params.get("grade");
    if (!hero && grade && ["cap-1", "cap-2", "cap-3"].includes(grade))
      next.set("grade", grade);
    if (value.trim()) next.set("q", value.trim());
    const suffix = next.toString();
    startTransition(() =>
      router.push(`/khoa-hoc${suffix ? `?${suffix}` : ""}`, { scroll: hero }),
    );
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(query);
  }
  return (
    <form
      onSubmit={submit}
      role="search"
      aria-label={hero ? "Tìm khóa học nhanh" : "Tìm kiếm khóa học"}
      className="w-full"
      aria-busy={pending}
    >
      <label htmlFor={id} className="mb-2 block text-base font-semibold">
        {hero
          ? "Ba mẹ đang tìm khóa học nào cho con?"
          : "Tìm theo tên khóa học hoặc mục tiêu"}
      </label>
      <div className="flex flex-wrap items-center gap-2 rounded-full border border-brand-100 bg-white p-2 shadow-lg shadow-brand-500/10">
        <Search size={19} className="ml-2 shrink-0 text-brand-700" />
        <input
          id={id}
          name="q"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ví dụ: Tiểu học, IELTS..."
          maxLength={120}
          disabled={pending}
          className="min-w-0 flex-1 rounded-lg px-1 py-3 text-base outline-none"
        />
        {query && (
          <button
            type="button"
            disabled={pending}
            onClick={() => {
              setQuery("");
              navigate("");
            }}
            aria-label="Xóa từ khóa tìm kiếm"
            className="min-h-11 min-w-11 rounded-full p-2 text-slate-500 hover:bg-mint"
          >
            <X size={16} />
          </button>
        )}
        <button
          disabled={pending}
          type="submit"
          className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-base font-semibold text-white hover:bg-brand-800 disabled:opacity-60"
        >
          {pending ? (
            <LoaderCircle size={16} className="animate-spin" />
          ) : (
            <Search size={16} />
          )}
          <span>{pending ? "Đang tìm" : "Tìm kiếm"}</span>
        </button>
      </div>
      <p role="status" aria-live="polite" className="sr-only">
        {pending ? "Đang tải kết quả tìm kiếm" : ""}
      </p>
    </form>
  );
}

````

## components/FloatingActions.tsx

````tsx
import Image from "next/image";
import { Phone } from "lucide-react";
import ScrollToTop from "./ScrollToTop";

export default function FloatingActions() {
  return (
    <aside
      aria-label="Liên hệ nhanh và điều hướng"
      className="pointer-events-none fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-30 flex flex-col items-center gap-3 md:bottom-[max(1.5rem,env(safe-area-inset-bottom))] md:right-6"
    >
      <a
        href="https://zalo.me/0901234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn tin qua Zalo"
        title="Nhắn tin qua Zalo"
        className="pointer-events-auto flex size-12 items-center justify-center rounded-full border border-slate-100 bg-white shadow-lg shadow-brand-950/15 hover:bg-blue-50"
      >
        <Image
          src="/icons/zalo.svg"
          width={28}
          height={28}
          alt=""
          aria-hidden="true"
        />
      </a>
      <a
        href="tel:0901234567"
        aria-label="Gọi hotline 0901 234 567"
        title="Gọi hotline 0901 234 567"
        className="pointer-events-auto flex size-12 items-center justify-center rounded-full border border-white bg-brand-300 text-brand-950 shadow-lg shadow-brand-950/20 hover:bg-brand-400"
      >
        <Phone size={22} fill="currentColor" aria-hidden="true" />
      </a>
      <div className="size-12">
        <ScrollToTop />
      </div>
    </aside>
  );
}

````

## components/Header.tsx

````tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Files,
  House,
  Menu,
  MessageCircle,
  Newspaper,
  Sprout,
  Users,
  X,
} from "lucide-react";

const links = [
  {
    href: "/",
    label: "Trang chủ",
    icon: House,
    description: "Khám phá Bloom English",
  },
  {
    href: "/khoa-hoc",
    label: "Khóa học",
    icon: BookOpen,
    description: "Tìm lộ trình phù hợp với con",
  },
  {
    href: "/tin-tuc",
    label: "Tin tức",
    icon: Newspaper,
    description: "Góc chia sẻ và cảm hứng học tập",
  },
  {
    href: "/tai-lieu",
    label: "Tài liệu",
    icon: Files,
    description: "Cùng con thực hành mỗi ngày",
  },
  {
    href: "/gioi-thieu",
    label: "Giới thiệu",
    icon: Users,
    description: "Trung tâm, giáo viên và cơ sở vật chất",
  },
  {
    href: "/lien-he",
    label: "Liên hệ",
    icon: MessageCircle,
    description: "Kết nối và tư vấn chương trình",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLDialogElement>(null);
  const isActive = (href: string) =>
    pathname === href ||
    (href !== "/" && pathname.startsWith(`${href}/`)) ||
    (href === "/gioi-thieu" && pathname === "/giao-vien");

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
  useEffect(() => {
    const dialog = drawer.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
    if (!dialog.open) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timeout = window.setTimeout(
      () => dialog.close(),
      reducedMotion ? 0 : 240,
    );
    return () => window.clearTimeout(timeout);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-200/60 bg-white/95 shadow-[0_4px_24px_-16px_#2b422230] backdrop-blur-xl">
      <div className="container-page relative z-10 flex h-20 items-center justify-between gap-4 xl:h-24 xl:gap-6">
        <Link
          href="/"
          aria-label="Bloom English - Trang chủ"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-center gap-3 rounded-xl"
        >
          <span className="flex size-11 items-center justify-center rounded-2xl border border-brand-400/40 bg-brand-300 text-brand-800 shadow-[inset_0_1px_0_#ffffff90] sm:size-12">
            <Sprout size={29} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="text-[30px] font-extrabold leading-none tracking-[-.07em] text-brand-800">
              bloom<span className="text-brand-500">.</span>
            </span>
            <span className="mt-1.5 text-[9px] font-bold leading-none tracking-[.22em] text-brand-700">
              ENGLISH CENTER
            </span>
          </span>
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`desktop-nav-link relative inline-flex min-h-12 items-center whitespace-nowrap px-1 text-sm font-semibold ${isActive(href) ? "text-brand-800" : "text-slate-600 hover:text-brand-800"}`}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    className="nav-underline absolute inset-x-0 bottom-0 h-0.5 origin-center rounded-full bg-brand-600"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/lien-he"
            className="hidden min-h-12 items-center gap-3 rounded-full border border-brand-400/40 bg-brand-300 py-2 pl-5 pr-2 text-sm font-bold text-brand-950 shadow-sm shadow-brand-900/5 hover:bg-brand-400 sm:inline-flex"
          >
            Đăng ký học thử
            <span className="flex size-8 items-center justify-center rounded-full bg-white/60">
              <ArrowRight size={17} aria-hidden="true" />
            </span>
          </Link>
          <button
            ref={menuButton}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            onClick={() => setOpen((v) => !v)}
            className={`flex size-12 items-center justify-center rounded-2xl border xl:hidden ${open ? "border-brand-300 bg-brand-100 text-brand-900" : "border-brand-200 bg-brand-50 text-brand-800 hover:bg-brand-100"}`}
          >
            {open ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <dialog
        ref={drawer}
        id="mobile-menu"
        aria-labelledby="mobile-menu-title"
        className={`mobile-drawer ${open ? "is-opening" : "is-closing"}`}
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            setOpen(false);
        }}
      >
        <div className="flex h-full flex-col bg-white">
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-brand-100 px-5 py-5">
            <div className="flex items-center gap-2.5 text-brand-800">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-300">
                <Sprout size={25} aria-hidden="true" />
              </span>
              <span
                id="mobile-menu-title"
                className="text-2xl font-extrabold tracking-tight"
              >
                bloom.
              </span>
            </div>
            <button
              type="button"
              autoFocus
              onClick={() => setOpen(false)}
              aria-label="Đóng menu"
              className="flex size-11 items-center justify-center rounded-full bg-brand-50 text-brand-800 hover:bg-brand-100"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          <nav
            aria-label="Điều hướng di động"
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
          >
            <p className="px-3 pb-4 pt-2 text-[11px] font-bold uppercase tracking-[.16em] text-brand-700">
              Cùng con khám phá
            </p>
            <ul className="space-y-1">
              {links.map(({ href, label, description, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={`flex min-h-16 items-center gap-3 rounded-xl px-3 py-3 ${isActive(href) ? "bg-brand-100 text-brand-900" : "text-slate-700 hover:bg-brand-50"}`}
                  >
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${isActive(href) ? "bg-white text-brand-700" : "bg-brand-50 text-brand-600"}`}
                    >
                      <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-base font-semibold">
                        {label}
                      </span>
                      <span className="mt-0.5 block text-xs leading-5 text-slate-600">
                        {description}
                      </span>
                    </span>
                    <ChevronRight
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 text-brand-600"
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 border-t border-brand-100 p-2 pt-4">
              <Link
                href="/lien-he"
                onClick={() => setOpen(false)}
                className="btn w-full justify-between !px-5 !text-sm"
              >
                Đăng ký học thử cho con{" "}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </nav>
        </div>
      </dialog>
    </header>
  );
}

````

## components/LayoutUI.tsx

````tsx
import Link from "next/link";
import { Sprout, Phone } from "lucide-react";
import Header from "./Header";
import FloatingActions from "./FloatingActions";
import { branches } from "@/lib/consultation-options";
import { courses } from "@/lib/courses";
export default function LayoutUI({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <footer className="border-t border-brand-200 bg-brand-100 text-brand-950">
        <div className="container-page grid gap-10 py-7 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link
              href="/"
              className="inline-flex min-h-11 items-center gap-2 text-3xl font-extrabold"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-300 text-brand-800">
                <Sprout />
              </span>{" "}
              bloom.
            </Link>
            <p className="mt-4 leading-7 text-brand-800">
              Gieo niềm yêu thích tiếng Anh, cùng con tự tin khám phá thế giới.
            </p>
            <nav
              aria-label="Liên kết cuối trang"
              className="mt-5 flex flex-wrap gap-x-5"
            >
              {[
                ["/", "Trang chủ"],
                ["/khoa-hoc", "Khóa học"],
                ["/gioi-thieu", "Giới thiệu"],
                ["/giao-vien", "Đội ngũ"],
                ["/gioi-thieu#co-so-vat-chat", "Cơ sở vật chất"],
                ["/tin-tuc", "Tin tức"],
                ["/tai-lieu", "Tài liệu học tập"],
                ["/lien-he", "Liên hệ"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex min-h-11 items-center hover:underline"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="text-lg font-bold">Chương trình học</h2>
            <ul className="mt-3">
              {courses.map((c) => (
                <li key={c.id}>
                  <Link
                    className="inline-flex min-h-11 items-center text-brand-800 hover:underline"
                    href={`/khoa-hoc/${c.slug}`}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Kết nối với Bloom</h2>
            <a
              className="flex min-h-11 items-center gap-2 text-brand-800"
              href="tel:0901234567"
            >
              <Phone size={18} aria-hidden="true" /> 0901 234 567 · Hotline
            </a>
            <a
              className="flex min-h-11 items-center break-all text-brand-800"
              href="mailto:hello@bloomenglish.example"
            >
              hello@bloomenglish.example
            </a>
            <h3 className="mt-4 font-bold">Hệ thống cơ sở</h3>
            <ul className="mt-2">
              {branches.map((b) => (
                <li key={b.value}>
                  <Link
                    href={`/lien-he?branch=${b.value}#dang-ky`}
                    className="inline-flex min-h-11 items-center text-brand-800 hover:underline"
                  >
                    {b.label} · TP. Hồ Chí Minh
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="border-t border-brand-200 px-5 py-5 text-center text-sm leading-6 text-brand-800">
          Bloom English · Cùng con tự tin lớn lên mỗi ngày.
        </p>
      </footer>
      <FloatingActions />
    </>
  );
}

````

## components/ScrollToTop.tsx

````tsx
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 400);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function scrollToTop() {
    const main = document.getElementById("main-content");
    if (main) {
      main.tabIndex = -1;
      main.focus({ preventScroll: true });
    }
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Lên đầu trang"
      title="Lên đầu trang"
      className="pointer-events-auto flex size-12 items-center justify-center rounded-full border border-white bg-brand-300 text-brand-950 shadow-lg shadow-brand-950/20 hover:bg-brand-400"
    >
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  );
}

````

## components/TeacherCard.tsx

````tsx
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

````

## components/motion/README.md

````markdown
# Reveal

Component dùng lại cho hiệu ứng xuất hiện khi cuộn, không thêm thư viện animation.

```tsx
import Reveal from "@/components/motion/Reveal";

<Reveal as="section" variant="fade-up">
  <h2>Nội dung section</h2>
</Reveal>

<div className="reveal-group grid gap-6 md:grid-cols-3">
  {items.map(item => (
    <Reveal key={item.id} as="article" variant="scale" hover>
      <h3>{item.title}</h3>
    </Reveal>
  ))}
</div>
```

- `variant`: `fade`, `fade-up` (mặc định, dịch lên 16px), `scale` (97% → 100%).
- `as`: `div`, `section`, `article`, `li`, `figure`; tránh wrapper thừa trong grid.
- `delay`: mili giây, giới hạn 0–300. Nếu bỏ qua, lớp `reveal-group` chia nhịp 60ms giữa các phần tử con, tối đa 240ms.
- `hover`: chỉ phóng ảnh thumbnail 1.04 lần trong 200ms trên thiết bị có con trỏ chính xác; card và phần chữ không đổi kích thước.
- `className`, `id`, `aria-label`, `aria-labelledby`: truyền vào phần tử gốc.
- Chạy một lần mỗi lần component mount; IntersectionObserver được ngắt khi phần tử đã vào màn hình.
- Nội dung server render hiển thị sẵn. Không có JavaScript/IntersectionObserver thì không bị ẩn.
- `prefers-reduced-motion`, focus bàn phím và in trang hiển thị nội dung ngay, không chạy hiệu ứng.
- Không lồng nhiều Reveal quanh cùng một card. Dùng `reveal-group` cho danh sách card thay vì bọc cả nhóm bằng Reveal.
- Chỉ dùng transform/opacity cho hiệu ứng xuất hiện, không đổi kích thước layout. Không dùng cho menu, dialog hoặc nút nổi có chuyển động riêng.

````

## components/motion/Reveal.tsx

````tsx
"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "section" | "article" | "li" | "figure";
  variant?: "fade" | "fade-up" | "scale";
  delay?: number;
  hover?: boolean;
  className?: string;
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

/** Visible without JavaScript. Reveals once per mount; keyboard focus skips motion. */
export default function Reveal({
  children,
  as: Tag = "div",
  variant = "fade-up",
  delay,
  hover = false,
  className = "",
  ...attributes
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"idle" | "pending" | "visible">("idle");
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    setState("pending");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -24px 0px" },
    );
    const onPreferenceChange = () => {
      if (preference.matches) {
        setState("idle");
        observer.disconnect();
      }
    };
    observer.observe(element);
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, []);
  return (
    <Tag
      {...attributes}
      ref={(element: HTMLElement | null) => {
        ref.current = element;
      }}
      data-reveal={variant}
      data-reveal-state={state}
      onFocusCapture={() => setState("idle")}
      className={`reveal ${hover ? "motion-hover" : ""} ${className}`}
      style={
        delay === undefined
          ? undefined
          : ({
              "--reveal-delay": `${Math.min(300, Math.max(0, delay))}ms`,
            } as CSSProperties)
      }
    >
      {children}
    </Tag>
  );
}

````

## lib/consultation-options.ts

````ts
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

````

## lib/consultation-prefill.ts

````ts
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

````

## lib/courses.ts

````ts
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

````

## lib/learning-content.ts

````ts
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

````

## lib/seo.ts

````ts
import type { Metadata } from "next";
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://bloomenglish.example"
).replace(/\/$/, "");
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "vi_VN",
      siteName: "Bloom English",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Bloom English",
        },
      ],
    },
  };
}

````

## lib/teachers.ts

````ts
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

````

## next-env.d.ts

````ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next-production/types/routes.d.ts" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

````

## next.config.ts

````ts
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import type { NextConfig } from "next";
export default function config(phase: string): NextConfig {
  return {
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next" : ".next-production",
  };
}

````

## package-lock.json

````json
{
  "name": "bloom-english",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "bloom-english",
      "version": "1.0.0",
      "dependencies": {
        "lucide-react": "^0.468.0",
        "next": "^15.5.0",
        "react": "^19.1.0",
        "react-dom": "^19.1.0"
      },
      "devDependencies": {
        "@tailwindcss/postcss": "^4.1.0",
        "@types/node": "^22.0.0",
        "@types/react": "^19.0.0",
        "@types/react-dom": "^19.0.0",
        "prettier": "^3.9.9",
        "tailwindcss": "^4.1.0",
        "typescript": "^5.8.0"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.3.0.tgz",
      "integrity": "sha512-U4+70Pc5ZS9osnCBCE5Jha/ciHM+Yp+CNMNC/7HvYbNRk1Ldd+f7qO65W5qfhu/TCv+/ozljlXXe9Nj8419DMA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.11.3",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.11.3.tgz",
      "integrity": "sha512-Xz4Tpyki7XyrpbUK1jR1AhdAdaXyhhY4lZ3neLodmhpuWfy2PAQN5B46sAiU4liOXGLkHypn/qU+jvfWSCYYLA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.1.0.tgz",
      "integrity": "sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.35.4.tgz",
      "integrity": "sha512-Uhfl4V4lhP2nbUVF9+hyH1+luj86f1gUFeo8ALYxFoULoU+G87D43BfeMP8XHsk9boxAnCY/bf2EHwhA7MuGsA==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.35.4.tgz",
      "integrity": "sha512-hWniXY3bG5qKpkKrAwPe4y+VTPmf086YQAnkxWh7uA1YrlRouWGa0M0Mxj3ZjnXFkv7/TD1bTy9lGUK26vRvWw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-freebsd-wasm32": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-freebsd-wasm32/-/sharp-freebsd-wasm32-0.35.4.tgz",
      "integrity": "sha512-lIsKw/BU+kjB4eZjxrYrZmwOJYi3Ajrv66iAlBmUPyKc3HpnloevB1g3wxGD9P/5BbQ1brBGl65VRRrCvQDEqA==",
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "dependencies": {
        "@img/sharp-wasm32": "0.35.4"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.3.3.tgz",
      "integrity": "sha512-suTBPTDGrI9WodccaDdwZItTSaBYASlBk1NSfElSHrUfzu3szG6lvIF58+WiFvnfzuK8ZBFS5zE00PxqxnRiPg==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.3.3.tgz",
      "integrity": "sha512-FVJZ5mITMobmXIz/hPDTw0EintTW5H3WfrxwLqEqjiIihlu+hVRyGrFQ60xl0Lxn7Bt3zdpevPaQi0HEzqz9fw==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.3.3.tgz",
      "integrity": "sha512-3rbU4vqXXc3hY/OiXdl52xZvT0F1yEngWfvqudtPJg/KkyiaQw2DRsFrNzpmLvfavbwOq3qXn36GP8obHRULQA==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.3.3.tgz",
      "integrity": "sha512-0DaL0A6Xu6sQSQFwe4iVCrKWU2cCTItnRsYsCdxAMm9NF6twAA9BKnoqy4hqz4+azQ0JHuA26qiUKsf1XJ/v5A==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.3.3.tgz",
      "integrity": "sha512-cdn1OvUBwsXhbC0zSzJnNzf5MZ/mTrobawDvNXBTxe8VtqKAm0sRuEY2Evzovb/w9JMk4TvRxqt1mekSuJz64w==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.3.3.tgz",
      "integrity": "sha512-HjPVx7yKz+0lqdhDlTw1tt90wamBoxhiXpvl1XZpJLiHH4RCJ5yDTqH+VlYPv2fwFs89JFw4c1IexYOcQUi4IQ==",
      "cpu": [
        "riscv64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.3.3.tgz",
      "integrity": "sha512-neWLh+3yCNThxnfy3c4BbVBeGgt9aftno+XbT56iK28RgeDs3UOFWviLWlUu0bArYVYJaFDK+RRohbicUNCm8Q==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.3.3.tgz",
      "integrity": "sha512-4vKmvAst9nrowcqquKFAyZJUDolUaIp8uRiN0mWFguJ1IplC9/pitXtlnnlU4aa/eJw3J7i67V+pwUL+wZGdsA==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.3.3.tgz",
      "integrity": "sha512-Y9kQaLMuNoB0bPYOOdcZMaseNrFpPodIWWMrx+CZyydf2xn68j9WYc6sWWRrDwNkzCQjKYfc68L7jKjGlHMibw==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.3.3.tgz",
      "integrity": "sha512-fj8Mv0HHfD1Rr+4I68+3agJynxDWtBFgicTbSOb9Bke6pIwzGcJ+RX/yHjmiEGFMCavY/dxvem7MyNaJF+wDiw==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.35.4.tgz",
      "integrity": "sha512-7OAS8gI0EReKGVN2HssHlM6umJgxF5VI3xN0p9FA91p/YO+ou5hiNghLdZ5BEHztwaaK5+bLKRf8x/o2L2nk9A==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.35.4.tgz",
      "integrity": "sha512-De4jpEnAU8Hd5oT0j1G3uL4ZvTuipVMn7YC6vPaJhy6/7EwEae0SVAoBrUMYQbkLGDm85taVWwuPc1a44LTzCQ==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.35.4.tgz",
      "integrity": "sha512-2oYZJeIl4kCcMGk4ouZVjnkCtFrpQFlNEtJ6GbxzhHQchwH0NH/qEb9ykmOl29dqwMq+JhFdZn+1ak2FKhI9fQ==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-riscv64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.35.4.tgz",
      "integrity": "sha512-cPbNChoRURAWdebDIHSenxRpgEdy7JkPydSnUxRm9VvKD7m0/xVaR/8Fzlu81pk5nHEvHH87UZUA7cTtwnbJSA==",
      "cpu": [
        "riscv64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.35.4.tgz",
      "integrity": "sha512-RY0JFY8Fd6RonCBtHz+DvadaPkXDSI1AUn6yWL9TipqkZ1vY8w8evqdgyDFnkm4/K1ve1TvZiaePP5oSd4+WVQ==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.35.4.tgz",
      "integrity": "sha512-9qvvEAuk8k89TfWUoX2htWjbAMX8p+NxCppjpcg5k6xMsjhBQPTsoIh36h9Qde4WRuGpJeYnOjdosDn/cnv+OA==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.35.4.tgz",
      "integrity": "sha512-KB5jxpfWQTr0nc3xdHtWChdbifHrBGsd2SM62Eyxrl8afikm+f5qGBU75SJIZBT/S1MC8XyacdlXBMSWq6OURA==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.35.4.tgz",
      "integrity": "sha512-f+eZJZIQNEEd26RPSW+76chwOf1XtA2Y/O+5ocVyLliHkeih3e+jhLVBdNTd2rS3IbNXK8+ug93Vf5ZXtF5Lxg==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.35.4.tgz",
      "integrity": "sha512-zQnl4Kwp7Q6NHsENtU2T/00Zi+w3AQNwz3+UaTyVBy2FpXrzXzGjndpK61onhZjRtRpQXxCTeqw19bVyXOh7jA==",
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.11.3"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-webcontainers-wasm32": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-webcontainers-wasm32/-/sharp-webcontainers-wasm32-0.35.4.tgz",
      "integrity": "sha512-ESfNkywmCfPNyaZjxooddJQiQ+l/nTpGEOGthxiLnIHXC/CmcBixnfwUleX9mCz9ovrUUvKMap/pm8RYbzfwaA==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/sharp-wasm32": "0.35.4"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.35.4.tgz",
      "integrity": "sha512-iNdlBX9gLVvqe2I3uIJSIKTq6wckP/DYxZtcqxm09x5Gi24DnFBmPAWZmr60ZyYMG0xlzo6goG3670ar+RXvRw==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.35.4.tgz",
      "integrity": "sha512-kqRsbaa5CS6KHlpxnN7WhE6vAAugXyZButpRdvDWetlv6Qv4N9WTcrWzF7tXfB9T7MsoadqdI8hmwLq6UlLvtw==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.35.4.tgz",
      "integrity": "sha512-XtmnYhBcrORsJ4XJngyzr/EWP0hRZLAZRFaApdKuviyqF78+ylxh2y06ZmtULAMOnObJ3ucpN0AcwSWnMowTRg==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.6.0.tgz",
      "integrity": "sha512-T7jf+5zgsZHwNJ4lvQ7/aezbyk0nNX+zJVWpmHA7VYsEx7a7qr5Rg5IbtJFqkgze5Y2sruq1RUY8Q837Od7iFw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@next/env": {
      "version": "15.5.26",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-15.5.26.tgz",
      "integrity": "sha512-NJBz9q10LU9h3KjHLEbdgWIV+ow/x+MYzKBRfqhm9/QmML3tPMhYmXF/UIV9SDVCNtOqFNc5oX7kZqeiigMCEA==",
      "license": "MIT"
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "15.5.26",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-15.5.26.tgz",
      "integrity": "sha512-So8eoJxIcXw/TexNUvvh3uY72J9nDo5BpJsAwUKx+FK57CrWXg6RqVufV7U9OT3BO+siMzJ2FuAwBhaHoPlLGg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "15.5.26",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-15.5.26.tgz",
      "integrity": "sha512-jImzLUTClVWKhP91e5sgDumjxCLhaFSt7DuN5cnRYw99Dppxxhhq5jKRyDa2aTv3JE7dQmTSTsY3EFkSOp9Pog==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "15.5.26",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-15.5.26.tgz",
      "integrity": "sha512-CaWd+T/Lud2BmZbrsa1CzCnIOdU3YX9Nuk89virZaSB1O+C+8Yrrevgmnl68u4dvZIfOAzQ77S+Njrq7v1XwSA==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "15.5.26",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-15.5.26.tgz",
      "integrity": "sha512-97AyKI34yjpaudlkWHswAf7c1PjWQAC7lLyrw3R5K+bq834EOA+9IG68rIVy0VqrqGjtPSMjJmMmgeJ3wHR5og==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "15.5.26",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-15.5.26.tgz",
      "integrity": "sha512-eVtuOCew1sBPV7BEgxy7qxuVyqoU3tJIS/xDZwa1/NiQ4Q0LM2JMH7rny+/uVIN6hsQ3PTb0hTQWypA0L2QxtA==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "15.5.26",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-15.5.26.tgz",
      "integrity": "sha512-EiUXADp+Z+OdQnSqbX10YgOSUrs0CXVODoTfySfsP2jdhngn9bq5RJd376FJzqMPe/XX25FMr1aXtYUVPA0qDw==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "15.5.26",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-15.5.26.tgz",
      "integrity": "sha512-HPl41fgkC4kdM5CCIoqNW6KlKEj1N+xS6bjNFFxDNKooUNUu09frgD948zo95TPw/C3XINZpkdkBGNU2RhjEnw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "15.5.26",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-15.5.26.tgz",
      "integrity": "sha512-TgmJ5ginKr34RPsz01/swpYtFBxh51d66jM26aytpE6NIypU5KtBVI8C2hJjUNpWr7v6sWj8a6+og2MyntcnpA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.15",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.15.tgz",
      "integrity": "sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.3.3.tgz",
      "integrity": "sha512-/T8IKEsf9VTU6tLjgC7+sv2mOPtQxzE2jMw7u4Tt40Tx+QSZxpzh95/H6cMKoja9XuW7iMdLJYBB0o9G1CaAgg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "^5.24.1",
        "jiti": "^2.7.0",
        "lightningcss": "1.32.0",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.3.3.tgz",
      "integrity": "sha512-krXjAikiaFSPaK/FkAQT5UTx3VormQaiZ5hBFlJZ9UFQGB/rwg1MZIhHAG9smMQRTdyJxP6Qt5MwMtdyU5FWrA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-x64": "4.3.3",
        "@tailwindcss/oxide-freebsd-x64": "4.3.3",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-musl": "4.3.3",
        "@tailwindcss/oxide-linux-x64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-x64-musl": "4.3.3",
        "@tailwindcss/oxide-wasm32-wasi": "4.3.3",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.3.3",
        "@tailwindcss/oxide-win32-x64-msvc": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.3.3.tgz",
      "integrity": "sha512-Y85A2gmPSkl5Ve5qR86GL4HT509cFqQh1aes9p3sSkyTPwt0Pppf3GkwGe4JPACcRYjgJIEhQgM6dBClnr0NYw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.3.3.tgz",
      "integrity": "sha512-BiaWatpBcERQFDlOjRDpIVXuFK5PJez5SA4JMg6VYZdBYU+qKfV/vqjcIs+IYmtitf1xYQZTwXvU/8y4lfZUGw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.3.3.tgz",
      "integrity": "sha512-fAeUqfV5ndhxRwai8cXGzdLvul9utWOmeTkv69unv4ZXixjn61Z+p9lCWdwOwA3TYboG3BwdVuN/RDjhBRl0mw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.3.3.tgz",
      "integrity": "sha512-iyf5bV6+wnAlflVeEy7R25dupxTNECZN5QMI0qNT6eT+EgaGdZcKhGkr5SdoaWiLJ3spLqIY9VCeSGrwmtg4kw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.3.3.tgz",
      "integrity": "sha512-aAYUprJAJQWWbRrPvtjdroZ56Md+JM8pMiopS6xGEwDfLhqj+2ver2p4nU4Mb3CRqcMmNBjo8KkUgcxhkzVQGQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.3.3.tgz",
      "integrity": "sha512-nDxldcEENOxZRzC2uu9jrutZdAAQtb+8WWDCSnWL1zvBk1+FN+x6MtDViPB5AJMfttVCUhehGWus3XBPgatM/w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.3.3.tgz",
      "integrity": "sha512-Md44bD6veX/PC5iyF8cDVnw4HBIANZepRZZ7a8DQOvkfo5WUBwcp6iAuCUz23u+4SUkhJlD3eL7hNdW8ezd/kA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.3.3.tgz",
      "integrity": "sha512-tx7us1muwOKAKWao2v/GaafFeQboE6aj88vC6ziN2NCGcRm8gWUhwjzg+YdVB1e4boAtdtma4L43onunI6NS4w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.3.3.tgz",
      "integrity": "sha512-SJxX60smvHgasZoBy11dX6YRjXJFovwWBoedhbQPOBzgFWBHGB+TVPWB9BxzR7TTxU8FQZAI2AyiNCMzFm8Img==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.3.3.tgz",
      "integrity": "sha512-jx1+rPhY/5Ympkktd656HBWEBLxP7dH06losBLjjf5vgCODXvi9KhtftWcMIwTFIDqBr7cRnQkdLnAG+IOlGvQ==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.11.1",
        "@emnapi/runtime": "^1.11.1",
        "@emnapi/wasi-threads": "^1.2.2",
        "@napi-rs/wasm-runtime": "^1.1.4",
        "@tybys/wasm-util": "^0.10.2",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.3.3.tgz",
      "integrity": "sha512-3rc292Ca2ceK6Ulcc/bAVnTs/3nDtoPhyEKlgPv+yQJQi/JS/AMJlqzxvlDacL1nekbrcf6bTqp/jV4qgnPxNQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.3.3.tgz",
      "integrity": "sha512-yJ0pwIVc/nYeGoV02WtsN8KYyLQv7kyI2wDnkezyJlGGjkd4QLwDGAwl47YpPJeuI0M0ObaXGSPjvWDPeTPggw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.3.3.tgz",
      "integrity": "sha512-JTSZZGQi1AyKirbLN3azmjVzef92tcX7h+iSqPdaeStyFpGpDlKvvpxeOE8njhbUanbRwr3z8DyzhICWnMtQeg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.3.3",
        "@tailwindcss/oxide": "4.3.3",
        "postcss": "^8.5.16",
        "tailwindcss": "4.3.3"
      }
    },
    "node_modules/@types/node": {
      "version": "22.20.4",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.20.4.tgz",
      "integrity": "sha512-zJRE40jpHtKqE/C4fgHrAKQLJuSpzEnP9ff9Y7YtoR3Wd2pwqzlekDeEuUQXjRd+QCYnVnNwuJYmhdk9XV8gvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.3.0.tgz",
      "integrity": "sha512-N0rFCuH9YoxG9/m61l9MfpJKfmLOVU0em7ipIz6TRgSSkvReLB9vL85GB+yr8Bs5leqpvg96JSwF4ZS1s4viQg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.3.0.tgz",
      "integrity": "sha512-ZI7bU42mZXXKHn/qNLEw2IrbiINU7X5+vfgdixBHkCNpYWXjKgfQ/P+uyGb5CjOLB9UcnTeg3rylQtV2hym44Q==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.3.0"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001810",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001810.tgz",
      "integrity": "sha512-TITQPUkaz+aVk5GL6NhOdwk1aEaNTSDPsGFWrTuhKGtjTF70jL/Oht2W4c6rXUe5fu7Ie19VIahAXHIIiWWNeg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "devOptional": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/enhanced-resolve": {
      "version": "5.25.1",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.25.1.tgz",
      "integrity": "sha512-nGXts5znJzmWPu+mIE9izCOzdg63oJca2mDzGWWTth7sr4aCToKcoyFVBQwN75Ij5Pf6p510EwkTqViTRzDV+w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lucide-react": {
      "version": "0.468.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.468.0.tgz",
      "integrity": "sha512-6koYRhnM2N0GGZIdXzSeiNwguv1gt/FAjZOiPl76roBi3xKEXa4WmfpxgQwTTL4KipXjefrnf3oV4IsYhi4JFA==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0-rc"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.19",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.19.tgz",
      "integrity": "sha512-Y2tUNy4ouw6tq5oDSKeQYGOyhkUBhNOcGV/02KC+6kd9eDGqdZd++mjMiIDilrBYvjEnCYvVtsuHCuP+okSfug==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/next": {
      "version": "15.5.26",
      "resolved": "https://registry.npmjs.org/next/-/next-15.5.26.tgz",
      "integrity": "sha512-EVCqhvq8Hs+nX9udH2VzE/iXAg9QodZBZnwVJTuAMl386GIYvlJtYhFytV9nSlDYxKw3kEyv8I2dCQs0+on0sQ==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "15.5.26",
        "@swc/helpers": "0.5.15",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": "^18.18.0 || ^19.8.0 || >= 20.0.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "15.5.26",
        "@next/swc-darwin-x64": "15.5.26",
        "@next/swc-linux-arm64-gnu": "15.5.26",
        "@next/swc-linux-arm64-musl": "15.5.26",
        "@next/swc-linux-x64-gnu": "15.5.26",
        "@next/swc-linux-x64-musl": "15.5.26",
        "@next/swc-win32-arm64-msvc": "15.5.26",
        "@next/swc-win32-x64-msvc": "15.5.26",
        "sharp": "^0.34.3 || ^0.35.4"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.51.1",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/postcss": {
      "version": "8.5.28",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.28.tgz",
      "integrity": "sha512-RRuzqDtt5Y9h3quz5hWhK+TPnsmVs6WwSU6LkJMeY4HstUEDuYTG8UJSdawMRzmzAtV+KEoG8N3Qg2qLy5vM/A==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.18",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/prettier": {
      "version": "3.9.9",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.9.9.tgz",
      "integrity": "sha512-Z/CJHIkdujO/OtN7nXUii0Rf3VT5SRuhjBA82Xvu2XhBUgX3nhP67T0LHceBdQLex7OOFGTox+Q5Yg8Jk2Qivg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/react": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/react/-/react-19.3.0.tgz",
      "integrity": "sha512-E8LUcbtBWt20bbl2YoHfx4ZDBdxVTfOKtCZn9cDSJ4l6/nuoApcpIBcj47t2wZoVX8g2ZHuMHbiShgCR1T5Sog==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.3.0.tgz",
      "integrity": "sha512-JDk8dgif51OjFoDE70+OT9ICyYr+69HlmihNwp1+Nsfbna3t5sIiCa9ZJktDmQ4/1b/rn26hIAR2uYXDMr5r0Q==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.28.0"
      },
      "peerDependencies": {
        "react": "^19.3.0"
      }
    },
    "node_modules/scheduler": {
      "version": "0.28.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.28.0.tgz",
      "integrity": "sha512-juorfCmIkIw8tT+p5BXSm6PJjQF/ycEYmKyzURCIt/RaZIhL+PulbQ9Yu2z1HdOJDdqDTlxA1+xKBmHXJsczAw==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "license": "ISC",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sharp": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.35.4.tgz",
      "integrity": "sha512-n++8XWcj+jCOr2IOl7h8LbKnGBDY4aPbmprMONBNFdn0ImXqpGVv5zliDs0V9HbmbCQLpbuo2ej9rAoOQTvMDA==",
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/colour": "^1.1.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.8.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.35.4",
        "@img/sharp-darwin-x64": "0.35.4",
        "@img/sharp-freebsd-wasm32": "0.35.4",
        "@img/sharp-libvips-darwin-arm64": "1.3.3",
        "@img/sharp-libvips-darwin-x64": "1.3.3",
        "@img/sharp-libvips-linux-arm": "1.3.3",
        "@img/sharp-libvips-linux-arm64": "1.3.3",
        "@img/sharp-libvips-linux-ppc64": "1.3.3",
        "@img/sharp-libvips-linux-riscv64": "1.3.3",
        "@img/sharp-libvips-linux-s390x": "1.3.3",
        "@img/sharp-libvips-linux-x64": "1.3.3",
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.3",
        "@img/sharp-libvips-linuxmusl-x64": "1.3.3",
        "@img/sharp-linux-arm": "0.35.4",
        "@img/sharp-linux-arm64": "0.35.4",
        "@img/sharp-linux-ppc64": "0.35.4",
        "@img/sharp-linux-riscv64": "0.35.4",
        "@img/sharp-linux-s390x": "0.35.4",
        "@img/sharp-linux-x64": "0.35.4",
        "@img/sharp-linuxmusl-arm64": "0.35.4",
        "@img/sharp-linuxmusl-x64": "0.35.4",
        "@img/sharp-webcontainers-wasm32": "0.35.4",
        "@img/sharp-win32-arm64": "0.35.4",
        "@img/sharp-win32-ia32": "0.35.4",
        "@img/sharp-win32-x64": "0.35.4"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.3.3.tgz",
      "integrity": "sha512-gOhV3P7ufE62QDGg1zVaTgCR+EtPv92k2nIhVcVKcLmxT1sUBsQGhnZj175j+MqRt4zLF7ic+sCYjfhxMxj7YQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    }
  }
}

````

## package.json

````json
{
  "name": "bloom-english",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --hostname 0.0.0.0",
    "build": "next build",
    "start": "next start --hostname 0.0.0.0",
    "typecheck": "tsc --noEmit",
    "test": "node tests/demo.cjs && node tests/learning-content.cjs"
  },
  "dependencies": {
    "lucide-react": "^0.468.0",
    "next": "^15.5.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "prettier": "^3.9.9",
    "tailwindcss": "^4.1.0",
    "typescript": "^5.8.0"
  },
  "overrides": {
    "postcss": "^8.5.23"
  }
}

````

## postcss.config.mjs

````text
export default { plugins: { "@tailwindcss/postcss": {} } };

````

## public/icons/zalo.svg

````xml
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2600_142031)">
<g clip-path="url(#clip1_2600_142031)">
<path d="M2.9796 0.0812568C3.52739 -0.00512845 4.0845 -0.00564573 4.63798 0.00676891L4.5904 0.0507375C3.86621 0.525081 3.26565 1.17633 2.83166 1.9238C1.9616 3.42028 1.64451 5.18989 1.71641 6.90518C1.7878 8.30182 2.12299 9.70623 2.83373 10.9203C2.9527 11.1375 3.15082 11.3294 3.15392 11.5933C3.17616 12.1592 2.89632 12.6925 2.51767 13.097C2.5425 13.1228 2.56681 13.1487 2.59164 13.1746C2.94598 13.5615 3.32411 13.9251 3.68413 14.3069C4.19571 14.8852 4.77868 15.3973 5.27992 15.986C4.44608 15.9984 3.6024 16.0372 2.77838 15.8815C1.74124 15.6803 0.820492 14.9612 0.380808 14.0001C0.114411 13.4446 0.0347508 12.8233 0.0140598 12.2145C0.0135426 9.40362 0.0135426 6.59326 0.0140598 3.78289C0.0254399 2.84352 0.274249 1.86069 0.935327 1.16392C1.45881 0.573704 2.20007 0.189885 2.9796 0.0812568Z" fill="#0068FF"/>
<path d="M10.575 5.24219C10.7969 5.24219 11.0188 5.24219 11.2413 5.24219C11.2376 6.5421 11.2376 7.84254 11.2413 9.14246C11.024 9.11194 10.6624 9.25108 10.5807 8.96193C10.5673 7.72253 10.5797 6.4821 10.575 5.24219Z" fill="#0068FF"/>
<path d="M3.78527 5.28899C4.81775 5.28795 5.84919 5.28123 6.88116 5.28847C6.87392 5.49073 6.86254 5.71109 6.72701 5.87455C6.02145 6.75288 5.33088 7.6426 4.62584 8.52094C5.37537 8.52559 6.1249 8.52249 6.87443 8.52249C6.86047 8.69784 6.92202 8.90217 6.80822 9.05425C6.73684 9.15253 6.60752 9.14374 6.50044 9.14477C5.56262 9.1396 4.6248 9.14943 3.6875 9.1396C3.69009 8.94148 3.69216 8.72216 3.83079 8.56439C4.52807 7.68967 5.23364 6.82116 5.92782 5.94438C5.2145 5.94541 4.50066 5.93972 3.78733 5.94748C3.78268 5.72816 3.78423 5.50831 3.78527 5.28899Z" fill="#0068FF"/>
<path d="M12.8927 6.14971C13.6355 5.98366 14.4414 6.47145 14.6447 7.20288C14.8997 7.9638 14.4342 8.86852 13.665 9.10026C13.0117 9.33045 12.2296 9.02991 11.8907 8.4278C11.6249 7.98294 11.6088 7.40048 11.8504 6.94269C12.0552 6.5387 12.451 6.24334 12.8927 6.14971ZM12.8803 6.80872C12.4272 6.96856 12.183 7.51998 12.3599 7.96535C12.5063 8.38641 12.9993 8.64402 13.4276 8.5147C13.9164 8.39779 14.2118 7.82517 14.0385 7.356C13.8936 6.89148 13.3324 6.62353 12.8803 6.80872Z" fill="#0068FF"/>
<path d="M7.38987 6.69117C7.7473 6.24838 8.37321 6.03009 8.92462 6.18786C9.1067 6.23389 9.27171 6.32494 9.43104 6.42167C9.42948 6.37304 9.42586 6.27631 9.42431 6.22769C9.63277 6.22665 9.84072 6.22717 10.0492 6.22614C10.0481 7.19862 10.0471 8.1711 10.0497 9.14409C9.89658 9.13996 9.74088 9.15806 9.59036 9.12702C9.48483 9.08409 9.45224 8.96874 9.41034 8.87459C8.83513 9.32152 7.93145 9.22013 7.45349 8.67596C6.94397 8.14885 6.91759 7.25086 7.38987 6.69117ZM8.23199 6.82152C7.75299 6.99015 7.52074 7.60726 7.76334 8.05212C7.97025 8.4856 8.5527 8.66768 8.96911 8.4287C9.35551 8.22593 9.53397 7.72262 9.36793 7.32018C9.20706 6.88256 8.66443 6.63737 8.23199 6.82152Z" fill="#0068FF"/>
<path d="M4.59086 0.0509785C4.70673 0.0178727 4.82777 0.00752719 4.94778 0.00390625C7.01636 0.0116654 9.08494 0.0028717 11.1535 0.00649264C11.7065 0.0132172 12.2626 -0.0240267 12.8114 0.0602894C13.5713 0.118224 14.3027 0.439971 14.8681 0.948454C15.5778 1.6266 15.9564 2.60322 15.9683 3.57726C15.9688 6.31934 15.9673 9.0635 15.9699 11.8045C15.9626 11.8206 15.9487 11.8537 15.9414 11.8702C15.2043 12.6948 14.2132 13.2529 13.1771 13.614C11.781 14.0899 10.2855 14.243 8.81803 14.1313C7.35052 14.005 5.87163 13.6217 4.62706 12.8107C3.99082 13.0936 3.28887 13.2322 2.5921 13.1748C2.56727 13.149 2.54296 13.1231 2.51813 13.0972C2.89678 12.6927 3.17662 12.1594 3.15438 11.5935C3.15128 11.3297 2.95316 11.1378 2.83419 10.9205C2.12345 9.70647 1.78826 8.30206 1.71687 6.90542C1.64497 5.19013 1.96206 3.42052 2.83212 1.92404C3.26611 1.17657 3.86667 0.525322 4.59086 0.0509785ZM10.5747 5.24289C10.5794 6.4828 10.5669 7.72323 10.5804 8.96263C10.6621 9.25179 11.0237 9.11264 11.2409 9.14316C11.2373 7.84324 11.2373 6.54281 11.2409 5.24289C11.0185 5.24289 10.7966 5.24289 10.5747 5.24289ZM3.78597 5.28893C3.78494 5.50825 3.78339 5.72809 3.78804 5.94742C4.50137 5.93966 5.21521 5.94535 5.92853 5.94432C5.23435 6.8211 4.52878 7.68961 3.8315 8.56432C3.69287 8.72209 3.6908 8.94142 3.68821 9.13954C4.62551 9.14936 5.56333 9.13954 6.50115 9.14471C6.60823 9.14367 6.73755 9.15247 6.80893 9.05418C6.92273 8.90211 6.86118 8.69778 6.87514 8.52242C6.12561 8.52242 5.37608 8.52553 4.62655 8.52087C5.33159 7.64254 6.02216 6.75282 6.72772 5.87448C6.86325 5.71102 6.87463 5.49066 6.88187 5.28841C5.8499 5.28117 4.81846 5.28789 3.78597 5.28893ZM12.8926 6.14967C12.4509 6.2433 12.0551 6.53867 11.8503 6.94266C11.6087 7.40045 11.6248 7.9829 11.8906 8.42776C12.2295 9.02987 13.0116 9.33041 13.6649 9.10022C14.4341 8.86848 14.8996 7.96377 14.6446 7.20285C14.4413 6.47142 13.6354 5.98363 12.8926 6.14967ZM7.38983 6.69126C6.91756 7.25096 6.94394 8.14895 7.45346 8.67606C7.93142 9.22023 8.8351 9.32162 9.41031 8.87469C9.45221 8.96883 9.4848 9.08419 9.59032 9.12712C9.74085 9.15816 9.89655 9.14005 10.0497 9.14419C10.0471 8.17119 10.0481 7.19871 10.0491 6.22623C9.84068 6.22727 9.63274 6.22675 9.42428 6.22778C9.42583 6.27641 9.42945 6.37314 9.431 6.42176C9.27168 6.32503 9.10667 6.23399 8.92459 6.18795C8.37317 6.03018 7.74727 6.24847 7.38983 6.69126Z" fill="white"/>
<path d="M8.23183 6.82158C8.66427 6.63743 9.20689 6.88262 9.36777 7.32023C9.53381 7.72267 9.35535 8.22598 8.96895 8.42876C8.55254 8.66774 7.97009 8.48566 7.76318 8.05218C7.52057 7.60732 7.75283 6.99021 8.23183 6.82158Z" fill="white"/>
<path d="M12.881 6.80916C13.3331 6.62398 13.8943 6.89193 14.0392 7.35644C14.2125 7.82561 13.9171 8.39824 13.4283 8.51514C13 8.64446 12.507 8.38686 12.3606 7.9658C12.1837 7.52042 12.4279 6.969 12.881 6.80916Z" fill="white"/>
<path d="M15.9411 11.8697L15.982 11.8252C16.0032 12.6337 15.9158 13.4774 15.519 14.1969C15.0576 15.0411 14.2207 15.668 13.2792 15.8688C12.7511 15.9779 12.2095 16.0022 11.6715 15.9955C10.0168 15.996 8.362 15.9955 6.70724 15.996C6.23135 15.9882 5.75442 16.0105 5.28008 15.9857C4.77884 15.397 4.19587 14.8849 3.68428 14.3066C3.32426 13.9248 2.94613 13.5612 2.5918 13.1743C3.28857 13.2317 3.99051 13.093 4.62676 12.8101C5.87132 13.6212 7.35021 14.0045 8.81772 14.1307C10.2852 14.2424 11.7807 14.0893 13.1768 13.6134C14.2129 13.2524 15.204 12.6942 15.9411 11.8697Z" fill="#005BE0"/>
</g>
</g>
<defs>
<clipPath id="clip0_2600_142031">
<rect width="16" height="16" fill="white"/>
</clipPath>
<clipPath id="clip1_2600_142031">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

````

## scripts/package.py

````python
from pathlib import Path
import zipfile
root = Path(__file__).resolve().parents[1]
excluded = {'node_modules', '.next', '.next-production', '.git', '.codex', '.agents', '__pycache__'}
files = sorted(p for p in root.rglob('*') if p.is_file() and not any(x in excluded for x in p.relative_to(root).parts) and p.name not in {'DEMO_CODE.md', 'bloom-english-demo.zip', '.DS_Store'} and not p.name.endswith('.tsbuildinfo') and not p.name.startswith('.env'))
text = ['# Bloom English — toàn bộ mã nguồn\n\nẢnh nằm trong ZIP, thư mục `public/images`.\n']
for p in files:
    if p.suffix.lower() in {'.jpg', '.png', '.jpeg', '.webp'}:
        continue
    language = {'.tsx':'tsx','.ts':'ts','.css':'css','.json':'json','.cjs':'javascript','.py':'python','.md':'markdown','.svg':'xml'}.get(p.suffix,'text')
    text.append(f'\n## {p.relative_to(root)}\n\n````{language}\n{p.read_text()}\n````\n')
(root/'DEMO_CODE.md').write_text(''.join(text))
with zipfile.ZipFile(root/'bloom-english-demo.zip', 'w', zipfile.ZIP_DEFLATED) as z:
    for p in [*files,root/'DEMO_CODE.md']:
        z.write(p, Path('bloom-english')/p.relative_to(root))
    assert z.testzip() is None
print(f'Packaged {len(files)} files plus DEMO_CODE.md')

````

## tests/browser.cjs

````javascript
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3100";
const out = process.env.TEST_OUTPUT_DIR || "/private/tmp/bloom-qa";
async function main() {
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.CHROMIUM_EXECUTABLE,
  });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    const routes = [
      "/",
      "/khoa-hoc",
      "/khoa-hoc/tieng-anh-tieu-hoc",
      "/giao-vien",
      "/lien-he",
    ];
    for (const width of [375, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const [i, path] of routes.entries()) {
        assert.equal(
          (await page.goto(base + path)).status(),
          200,
          `HTTP ${path}`,
        );
        await page.evaluate(() => document.fonts.ready);
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 600) {
            scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 80));
          }
        });
        await page.waitForFunction(() =>
          [...document.images].every((i) => i.complete),
        );
        assert.equal(
          await page.evaluate(() =>
            [...document.images].every((i) => i.naturalWidth > 0),
          ),
          true,
          `images ${width} ${path}`,
        );
        assert.equal(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          true,
          `overflow ${width} ${path}`,
        );
        await page.evaluate(() => scrollTo(0, 0));
        await page.screenshot({
          path: `${out}/${width}-${i}.png`,
          fullPage: true,
        });
      }
    }
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(base);
    await page.keyboard.press("Tab");
    assert.equal(
      await page.locator(":focus").innerText(),
      "Đến nội dung chính",
    );
    await page.getByRole("button", { name: "Mở menu" }).click();
    await page.keyboard.press("Escape");
    assert.equal(
      await page
        .getByRole("button", { name: "Mở menu" })
        .getAttribute("aria-expanded"),
      "false",
    );
    await page.getByRole("button", { name: "Mở menu" }).click();
    await page
      .getByRole("navigation", { name: "Điều hướng di động" })
      .getByRole("link", { name: "Khóa học", exact: true })
      .click();
    await page.waitForURL("**/khoa-hoc");
    await page.locator("#mobile-menu").waitFor({ state: "hidden" });
    await page.getByRole("searchbox").fill("TOAN");
    await page.getByRole("button", { name: "Tìm kiếm", exact: true }).click();
    await page.waitForURL("**q=TOAN");
    await page
      .getByRole("navigation", { name: "Lọc khóa học theo cấp học" })
      .getByRole("link", { name: "THCS", exact: true })
      .click();
    await page.waitForURL("**grade=cap-2&q=TOAN");
    assert.equal(await page.locator("main article").count(), 1);
    await page.goBack();
    await page.waitForURL("**q=TOAN");
    assert.equal(await page.getByRole("searchbox").inputValue(), "TOAN");
    await page.goForward();
    await page.waitForURL("**grade=cap-2&q=TOAN");
    await page.goto(base + "/khoa-hoc?q=not-a-course");
    await page.getByRole("link", { name: "Xóa bộ lọc", exact: true }).click();
    await page.waitForURL("**/khoa-hoc");
    assert.equal(await page.locator("main article").count(), 5);
    const notFound = await page.goto(base + "/khoa-hoc/khong-ton-tai");
    assert.equal(notFound.status(), 404);
    for (const slug of [
      "tieng-anh-tieu-hoc",
      "tieng-anh-thcs",
      "ielts-hoc-thuat",
      "ielts-tang-toc",
      "toan-khoa-hoc-tieng-anh",
    ]) {
      assert.equal((await page.goto(base + "/khoa-hoc/" + slug)).status(), 200);
      assert.equal(await page.locator("details").count(), 3);
      await page.locator("summary").first().press("Enter");
      assert.equal(
        await page.locator("details").first().getAttribute("open"),
        "",
      );
    }
    await page.goto(base);
    await page
      .getByRole("link", { name: "Khám phá khóa học", exact: true })
      .click();
    await page.waitForURL("**/khoa-hoc");
    await page
      .getByRole("link", {
        name: "Xem chi tiết Tiếng Anh Tiểu học",
        exact: true,
      })
      .click();
    await page.waitForURL("**/tieng-anh-tieu-hoc");
    await page.getByRole("link", { name: "Tư vấn khóa học này" }).click();
    await page.waitForURL("**/lien-he?course_interest=superkids#dang-ky");
    assert.equal(
      await page.locator("#course_interest").inputValue(),
      "superkids",
    );
    await page.locator("#parent_name").fill("Phụ huynh Demo");
    await page.locator("#phone").fill("123");
    await page.getByRole("button", { name: /Bloom Bình Thạnh/ }).click();
    assert.equal(await page.locator("#branch").inputValue(), "binh-thanh");
    assert.equal(
      await page.locator("#parent_name").inputValue(),
      "Phụ huynh Demo",
    );
    await page
      .getByRole("button", { name: "Đăng ký tư vấn", exact: true })
      .click();
    await page.locator("#phone-error").waitFor();
    assert.equal(await page.locator(":focus").getAttribute("id"), "phone");
    assert.equal(await page.locator("#phone").inputValue(), "123");
    await page.locator("#phone").fill("0901234567");
    await page.route("**/lien-he*", (route) =>
      route.request().method() === "POST" ? route.abort() : route.continue(),
    );
    await page
      .getByRole("button", { name: "Đăng ký tư vấn", exact: true })
      .click();
    await page.getByText(/Kết nối chưa thành công/).waitFor();
    assert.equal(
      await page.locator("#parent_name").inputValue(),
      "Phụ huynh Demo",
    );
    await page.unroute("**/lien-he*");
    await page
      .getByRole("button", { name: "Đăng ký tư vấn", exact: true })
      .click();
    await page.getByRole("button", { name: "Đang đăng ký..." }).waitFor();
    assert.equal(await page.locator("#phone").isDisabled(), true);
    await page
      .getByText(/Đăng ký tư vấn cho con đã hoàn tất bước kiểm tra thông tin/)
      .waitFor();
    await page.getByRole("button", { name: "Đăng ký khác" }).click();
    assert.equal(await page.locator("#parent_name").inputValue(), "");
    await page.goto(
      base +
        "/lien-he?course_interest=superkids&course_interest=ielts-expert&branch=nope",
    );
    assert.equal(await page.locator("#course_interest").inputValue(), "");
    assert.equal(await page.locator("#branch").inputValue(), "");
    await page.goto(
      base + "/lien-he?course_interest=ielts-express&branch=thu-duc",
    );
    assert.equal(
      await page.locator("#course_interest").inputValue(),
      "ielts-express",
    );
    assert.equal(await page.locator("#branch").inputValue(), "thu-duc");
    for (const path of ["/robots.txt", "/sitemap.xml", "/opengraph-image"])
      assert.equal((await page.request.get(base + path)).status(), 200);
    assert.deepEqual(errors, []);
    console.log(
      "PASS: 15 responsive screenshots, local images, overflow, keyboard/menu, search/filter/history, 5 details/FAQ, real 404, complete registration, retained fields, offline retry, pending/reset, query validation and SEO endpoints.",
    );
  } finally {
    await browser.close();
  }
}
main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});

````

## tests/demo.cjs

````javascript
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const assert = require("node:assert/strict");
function load(file, dependencies = {}) {
  const context = {
    exports: {},
    setTimeout,
    require: (key) => dependencies[key],
  };
  vm.runInNewContext(
    ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
      },
    }).outputText,
    context,
  );
  return context.exports;
}
async function main() {
  const courses = load("lib/courses.ts");
  const options = load("lib/consultation-options.ts", { "./courses": courses });
  const { consultationPrefill } = load("lib/consultation-prefill.ts", {
    "./consultation-options": options,
  });
  for (const course of options.courseInterests)
    assert.equal(
      consultationPrefill({ course_interest: course.value }).course_interest,
      course.value,
    );
  for (const branch of options.branches)
    assert.equal(
      consultationPrefill({ branch: branch.value }).branch,
      branch.value,
    );
  assert.equal(
    consultationPrefill({ course_interest: ["superkids", "ielts-expert"] })
      .course_interest,
    "",
  );
  assert.equal(consultationPrefill({ branch: "invalid" }).branch, "");
  const { filterCourses } = load("lib/courses.ts");
  assert.equal(filterCourses("cap-3", "ielts").length, 2);
  assert.equal(filterCourses("cap-2", "math").length, 1);
  assert.equal(filterCourses("cap-1", "ielts").length, 0);
  assert.ok(
    filterCourses(undefined, "  TOAN  ").some(
      (course) => course.id === "math-science",
    ),
  );
  const { submitConsultation } = load("app/actions/consultation.ts", {
    "@/lib/consultation-options": options,
  });
  assert.equal(
    Object.keys((await submitConsultation({}, new FormData())).errors).length,
    4,
  );
  const data = new FormData();
  for (const [key, value] of Object.entries({
    parent_name: "Demo Parent",
    phone: "123",
    course_interest: "superkids",
    branch: "quan-3",
  }))
    data.set(key, value);
  const invalid = await submitConsultation({}, data);
  assert.ok(invalid.errors.phone);
  assert.equal(invalid.values.parent_name, "Demo Parent");
  assert.equal(invalid.values.course_interest, "superkids");
  data.set("phone", "+84 901 234 567");
  const start = Date.now();
  assert.equal((await submitConsultation({}, data)).success, true);
  assert.ok(Date.now() - start >= 950);
  data.set("branch", "invalid");
  data.set("course_interest", "invalid");
  const tampered = await submitConsultation({}, data);
  assert.ok(tampered.errors.branch && tampered.errors.course_interest);
  data.set("course_interest", "superkids");
  data.set("branch", "quan-3");
  data.append("branch", "thu-duc");
  assert.ok((await submitConsultation({}, data)).errors.branch);
  data.set("branch", "quan-3");
  data.set("parent_name", new Blob(["fake"]), "fake.txt");
  assert.ok((await submitConsultation({}, data)).errors.parent_name);
  assert.equal(new Set(courses.courses.map((c) => c.slug)).size, 5);
  assert.equal(courses.getCourse("missing"), undefined);
  assert.equal(filterCourses("cap-2", "KHOA HOC").length, 1);
  assert.equal(filterCourses("cap-1", "khoa học").length, 1);
  for (const c of courses.courses) {
    assert.ok(fs.existsSync("public" + c.image));
    assert.equal(c.faq.length, 3);
  }
  console.log(
    "PASS: prefill, invalid/repeated query, combined search, validation, retained values, success and delay.",
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

````

## tests/learning-content.cjs

````javascript
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const assert = require("node:assert/strict");
function load(path, deps = {}) {
  const ctx = { exports: {}, Response, require: (key) => deps[key] };
  vm.runInNewContext(
    ts.transpileModule(fs.readFileSync(path, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
      },
    }).outputText,
    ctx,
  );
  return ctx.exports;
}
async function main() {
  const content = load("lib/learning-content.ts");
  for (const items of [content.articles, content.resources]) {
    assert.equal(new Set(items.map((x) => x.slug)).size, items.length);
    for (const item of items) assert.ok(fs.existsSync("public" + item.image));
  }
  assert.equal(content.getArticle("missing"), undefined);
  assert.equal(content.getResource("missing"), undefined);
  for (const grade of ["cap-1", "cap-2", "cap-3"])
    assert.ok(content.resources.some((r) => r.grade === grade));
  const { GET } = load("app/tai-lieu/[slug]/tai-xuong/route.ts", {
    "@/lib/learning-content": content,
  });
  for (const resource of content.resources) {
    const response = await GET(new Request("http://localhost"), {
      params: Promise.resolve({ slug: resource.slug }),
    });
    assert.equal(response.status, 200);
    assert.equal(
      response.headers.get("content-type"),
      "text/plain; charset=utf-8",
    );
    assert.equal(
      response.headers.get("content-disposition"),
      `attachment; filename="bloom-${resource.slug}.txt"`,
    );
    const text = await response.text();
    assert.ok(text.includes(resource.title));
    assert.ok(text.includes("ĐÁP ÁN & GỢI Ý"));
    for (const exercise of resource.exercises) {
      for (const line of [...exercise.questions, ...exercise.answers])
        assert.ok(text.includes(line));
    }
  }
  for (const slug of ["missing", "../../package.json"])
    assert.equal(
      (
        await GET(new Request("http://localhost"), {
          params: Promise.resolve({ slug }),
        })
      ).status,
      404,
    );
  console.log(
    "PASS: content slugs, local images, 3 grades, UTF-8 downloads, complete exercises/answers, missing and forged download paths.",
  );
}
main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});

````

## tsconfig.json

````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "next-env.d.ts",
    ".next-production/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

````
