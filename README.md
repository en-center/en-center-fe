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
# en-center-fe
