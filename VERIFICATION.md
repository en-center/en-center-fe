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
