# Thống nhất phạm vi tính năng website Bloom English

**Ngày lập:** 27/09/2026  
**Phiên bản:** 1.1  
**Trạng thái:** Đề xuất phạm vi để khách hàng xem xét và xác nhận

## 1. Mục tiêu website

Website phục vụ mục đích **giới thiệu chương trình và tiếp nhận đăng ký học tại trung tâm tiếng Anh Bloom English**. Phụ huynh và học sinh tìm hiểu khóa học, chọn chương trình và cơ sở, sau đó để lại thông tin để trung tâm liên hệ tư vấn và hoàn tất thủ tục đăng ký.

Các trang giới thiệu, giáo viên, tin tức và tài liệu công khai hỗ trợ người xem tìm hiểu trung tâm trước khi đăng ký. Phạm vi không bao gồm tài khoản người dùng, lịch học, đặt lịch, quản lý lớp, điểm danh, kết quả học tập, học trực tuyến hoặc thanh toán trực tuyến. Việc xếp lớp và tổ chức học do trung tâm xử lý ngoài website.

Phạm vi được tổng hợp từ mã nguồn hiện tại. Website có giao diện tiếng Việt, phục vụ người xem trên máy tính, máy tính bảng và điện thoại. Nội dung hiện được cập nhật qua mã nguồn; chưa có trang quản trị để nhân viên tự đăng bài hoặc quản lý đăng ký.

**Điểm cần hoàn thiện trước khi vận hành:** Form hiện chỉ kiểm tra dữ liệu và hiển thị thông báo, chưa lưu thông tin hoặc gửi đến trung tâm. Cần triển khai tiếp nhận đăng ký thực tế để đáp ứng mục đích website. Gửi form là đăng ký nhu cầu học để trung tâm liên hệ, không phải xác nhận đã nhập học.

## 2. Danh sách trang và số lượng nội dung hiện có

| Hạng mục | Đường dẫn | Số lượng hiện có |
| --- | --- | --- |
| Trang chủ | `/` | 1 trang |
| Giới thiệu trung tâm | `/gioi-thieu` | 1 trang |
| Đội ngũ giáo viên | `/giao-vien` | 1 trang, 6 hồ sơ minh họa |
| Danh sách khóa học | `/khoa-hoc` | 1 trang, 5 khóa học |
| Chi tiết khóa học | `/khoa-hoc/[slug]` | 5 trang nội dung dùng chung một mẫu giao diện |
| Danh sách tin tức | `/tin-tuc` | 1 trang, 3 bài viết |
| Chi tiết bài viết | `/tin-tuc/[slug]` | 3 trang nội dung dùng chung một mẫu giao diện |
| Danh sách tài liệu | `/tai-lieu` | 1 trang, 3 bộ tài liệu |
| Chi tiết tài liệu | `/tai-lieu/[slug]` | 3 trang nội dung dùng chung một mẫu giao diện |
| Liên hệ và đăng ký học | `/lien-he` | 1 trang, 3 lựa chọn cơ sở |

Tổng cộng có **7 trang chính và 11 trang chi tiết nội dung**, tương ứng 18 địa chỉ trang với dữ liệu hiện tại. Ngoài ra có trang báo không tìm thấy nội dung và 3 đường dẫn tải tài liệu; các phần này không tính thành trang nội dung riêng. Ký hiệu `[slug]` là tên đường dẫn của từng khóa học, bài viết hoặc tài liệu.

Các số lượng trên mô tả dữ liệu sẵn có, chưa phải cam kết số lượng nội dung nhập liệu trong hợp đồng. Khách hàng và đơn vị triển khai cần xác nhận số lượng bàn giao tại mục 9.

## 3. Phạm vi chi tiết từng trang

### 3.1. Trang chủ

Gồm 5 phần nội dung:

1. **Giới thiệu nổi bật:** Thông điệp chính, hình minh họa và nút chuyển đến khóa học hoặc trang tư vấn.
2. **Chương trình học:** Giới thiệu các chương trình, liên kết đến thông tin khóa học.
3. **Lý do lựa chọn trung tâm:** Trình bày định hướng và những điểm nổi bật trong cách tổ chức học tập.
4. **Giáo viên tiêu biểu:** Hiển thị một số hồ sơ và liên kết xem toàn bộ đội ngũ.
5. **Lời mời đăng ký:** Dẫn người xem đến trang liên hệ để đăng ký nhu cầu học.

### 3.2. Giới thiệu trung tâm

- Giới thiệu tổng quan, định hướng và cách tiếp cận trong giảng dạy.
- Có liên kết chuyển nhanh đến các phần trung tâm, giáo viên và cơ sở vật chất trong trang.
- Hiển thị giáo viên tiêu biểu và nút xem danh sách giáo viên đầy đủ.
- Giới thiệu 3 không gian: phòng học tương tác, góc đọc và tự học, khu đón tiếp và tư vấn.
- Hiển thị hình ảnh, mô tả và các đặc điểm của từng không gian.
- Liên kết tư vấn theo cơ sở, chuyển sang form với cơ sở đã được chọn sẵn.

### 3.3. Đội ngũ giáo viên

- Hiển thị danh sách 6 hồ sơ minh họa.
- Mỗi hồ sơ có ảnh, họ tên, lĩnh vực giảng dạy, trình độ hoặc chứng chỉ, kinh nghiệm và định hướng giảng dạy.
- Có nút chuyển đến trang tư vấn.
- Hồ sơ giáo viên được trình bày trực tiếp trong danh sách, chưa có trang chi tiết riêng.

### 3.4. Danh sách khóa học

5 chương trình hiện có:

| Chương trình | Nhóm học sinh hiển thị |
| --- | --- |
| Tiếng Anh Tiểu học | Tiểu học |
| Tiếng Anh THCS | THCS |
| IELTS Học thuật | THPT |
| IELTS Tăng tốc | THPT |
| Toán và Khoa học bằng tiếng Anh | Tiểu học và THCS |

Chức năng:

- Hiển thị thẻ khóa học với hình ảnh và thông tin giới thiệu ngắn; bấm để xem chi tiết.
- Tìm kiếm khóa học theo tên, mục tiêu và thông tin liên quan; hỗ trợ từ khóa tiếng Việt có dấu hoặc không dấu.
- Lọc theo Tất cả, Tiểu học, THCS, THPT; có thể kết hợp với từ khóa tìm kiếm.
- Hiển thị số kết quả, trạng thái đang tìm kiếm và thông báo khi không có khóa phù hợp.
- Có nút xóa bộ lọc khi không có kết quả.
- Lưu điều kiện tìm kiếm trong đường dẫn để có thể chia sẻ, tải lại trang và dùng nút quay lại hoặc tiến tới của trình duyệt.

### 3.5. Chi tiết khóa học

Mỗi khóa học dùng chung cấu trúc:

- Tên chương trình, hình ảnh, độ tuổi hoặc cấp học và mô tả tổng quan.
- Yêu cầu đầu vào, mục tiêu và hình thức học.
- 4 nhóm nội dung học tập.
- Lộ trình gồm 3 giai đoạn.
- Thời lượng chương trình và thông tin học phí.
- Câu hỏi thường gặp có thể mở hoặc đóng câu trả lời.
- Nút đăng ký tư vấn chuyển đến form với khóa học đã chọn sẵn.
- Liên kết trở về trang chủ và danh sách khóa học.

**Thông tin học phí:** Hiện hiển thị “Liên hệ tư vấn”. Nội dung định hướng Cambridge và IELTS không phải cam kết điểm thi.

**Điều chỉnh cần áp dụng khi triển khai:** Bỏ thông tin lịch học dự kiến đang có trong giao diện và dữ liệu mẫu để phù hợp phạm vi đăng ký học. Lộ trình trên trang chỉ giới thiệu các giai đoạn của chương trình.

### 3.6. Tin tức và bài chia sẻ

- Trang danh sách hiển thị 3 bài viết hiện có về học tiếng Anh tại nhà, học từ vựng qua dự án và luyện kỹ năng nói.
- Thẻ bài viết có hình ảnh, tiêu đề và thông tin giới thiệu.
- Trang chi tiết hiển thị nội dung đầy đủ, ngày đăng, thời gian đọc và hình ảnh.
- Có liên kết sang tài liệu học tập và quay lại danh sách bài viết.
- Chưa có tìm kiếm bài viết, bộ lọc chuyên mục, bình luận, phân trang hoặc giao diện tự đăng bài.

### 3.7. Tài liệu học tập

- Trang danh sách có 3 bộ tài liệu tương ứng Tiểu học, THCS và THPT.
- Lọc theo cấp học hoặc xem tất cả tài liệu.
- Hiển thị thông tin giới thiệu và liên kết xem nội dung chi tiết.
- Trang chi tiết gồm mục tiêu, hướng dẫn học, từ vựng, bài tập và đáp án có thể mở hoặc đóng.
- Cho phép xem và tải tài liệu công khai, miễn phí.
- Tệp tải về hiện là **văn bản `.txt` hỗ trợ tiếng Việt, có cả bài tập và đáp án**.
- Có liên kết đến các khóa học cùng cấp học.
- Tài liệu phục vụ tham khảo; bản tải hiện tại chưa có định dạng PDF.

### 3.8. Liên hệ và đăng ký học

Luồng sử dụng: **Tìm hiểu khóa học → chọn khóa và cơ sở → nhập thông tin → gửi đăng ký → trung tâm liên hệ tư vấn và hoàn tất thủ tục đăng ký ngoài website.**

**Thông tin liên hệ:** Hotline, email, giờ tư vấn và 3 lựa chọn cơ sở: Quận 3, Bình Thạnh, Thủ Đức. Thông tin hiện tại là minh họa, cần thay bằng dữ liệu chính thức.

**Biểu mẫu có 4 trường bắt buộc:**

| Trường thông tin | Cách hoạt động |
| --- | --- |
| Họ tên phụ huynh | Nhập tên từ 2 đến 80 ký tự |
| Số điện thoại | Kiểm tra định dạng số di động Việt Nam, hỗ trợ đầu số `0` hoặc `+84` |
| Khóa học quan tâm | Chọn một khóa trong danh sách chương trình |
| Cơ sở gần nhất | Chọn một cơ sở trong danh sách |

**Các tương tác đã có:**

- Tự chọn khóa học hoặc cơ sở khi đi từ liên kết tương ứng.
- Bấm chọn cơ sở trong trang để cập nhật lựa chọn trên form, giữ thông tin đã nhập.
- Kiểm tra dữ liệu, hiển thị lỗi tại từng trường và đưa con trỏ đến trường lỗi đầu tiên.
- Hiển thị trạng thái đang xử lý, khóa thao tác gửi trong lúc chờ.
- Thông báo khi có lỗi kết nối và giữ dữ liệu để thử lại.
- Hiển thị kết quả kiểm tra hợp lệ và cho phép bắt đầu đăng ký khác.

**Phần cần hoàn thiện:** Kết nối form với nơi tiếp nhận do trung tâm chỉ định, chẳng hạn email hoặc bảng dữ liệu. Chỉ hiển thị đã tiếp nhận sau khi gửi hoặc lưu thành công; khi thất bại cần thông báo và cho phép thử lại. Hiện mã nguồn chưa thực hiện bước tiếp nhận này.

**Nội dung cần thống nhất trên giao diện:** Đổi lời mời và tiêu đề form hiện là “Đăng ký tư vấn hoặc học thử” sang “Đăng ký học”; giải thích rằng trung tâm sẽ liên hệ để tư vấn và hoàn tất thủ tục. Các nút tư vấn vẫn dẫn về cùng biểu mẫu.

## 4. Chức năng dùng chung toàn website

| Nhóm | Phạm vi hiện có |
| --- | --- |
| Nhận diện giao diện | Tông xanh lá, logo, kiểu chữ và các kiểu nút, thẻ nội dung thống nhất |
| Menu đầu trang | Logo về trang chủ; menu Trang chủ, Khóa học, Tin tức, Tài liệu, Giới thiệu, Liên hệ; nút tư vấn; đánh dấu mục đang xem |
| Menu trên màn hình nhỏ | Menu dạng thanh bên, có nút đóng; đóng bằng phím Escape, bấm nền hoặc chọn liên kết |
| Chân trang | Giới thiệu ngắn, liên kết điều hướng, danh sách khóa học, hotline, email và các cơ sở |
| Liên hệ nhanh | Nút gọi điện và mở Zalo theo số cấu hình; email mở ứng dụng soạn thư của người dùng |
| Lên đầu trang | Nút xuất hiện khi cuộn xuống, đưa người xem trở về đầu nội dung |
| Hiển thị theo thiết bị | Bố cục thay đổi theo kích thước điện thoại, máy tính bảng và máy tính |
| Hiệu ứng | Hiệu ứng xuất hiện nội dung, tương tác nút và thẻ; hỗ trợ tùy chọn giảm chuyển động của thiết bị |
| Hỗ trợ thao tác | Nhãn trường nhập liệu, trạng thái focus, thao tác bàn phím và liên kết bỏ qua menu để tới nội dung chính |
| Trang không tồn tại | Thông báo không tìm thấy và liên kết trở về trang chủ hoặc khóa học |
| SEO cơ bản | Tiêu đề, mô tả, địa chỉ trang chuẩn, thông tin và ảnh khi chia sẻ liên kết, sơ đồ trang, hướng dẫn thu thập dữ liệu và thông tin có cấu trúc về trung tâm |

SEO cơ bản là phần cấu hình kỹ thuật trong mã nguồn, không bao gồm cam kết thứ hạng tìm kiếm. Tên miền trong cấu hình cần được thay bằng tên miền chính thức khi triển khai.

## 5. Phạm vi tiếp nhận đăng ký học

- Khách truy cập gửi thông tin bằng biểu mẫu công khai.
- Trung tâm nhận họ tên phụ huynh, số điện thoại, khóa học quan tâm và cơ sở đã chọn.
- Nơi nhận đăng ký được thống nhất trước khi triển khai; không mặc định xây dựng thêm hệ thống quản trị riêng.
- Nhân viên trung tâm liên hệ và xử lý các bước tiếp theo ngoài website.
- Nội dung website được cập nhật qua đơn vị phụ trách kỹ thuật; trang quản trị nội dung không thuộc phạm vi hiện tại.

Nút gọi điện và Zalo hỗ trợ người xem liên hệ trực tiếp với trung tâm. Các chức năng vận hành đào tạo đã loại trừ tại mục 1 không được đưa vào danh sách đề xuất phát triển thêm của phạm vi này.

## 6. Nội dung khách hàng cần cung cấp

1. Tên thương hiệu, logo chính thức và quy chuẩn màu sắc nếu có.
2. Nội dung giới thiệu trung tâm, thông điệp chính và thông tin được phép công bố.
3. Danh sách khóa học; đối tượng, đầu vào, mục tiêu, nội dung, lộ trình chương trình, thời lượng, học phí và câu hỏi thường gặp.
4. Hồ sơ giáo viên và ảnh được phép sử dụng; xác nhận trình độ, chứng chỉ và kinh nghiệm.
5. Danh sách cơ sở, địa chỉ đầy đủ, giờ hoạt động và hình ảnh thực tế.
6. Hotline, số Zalo, email, nơi nhận đăng ký và người phụ trách liên hệ người đăng ký.
7. Bài viết và tài liệu học tập đã được duyệt; số lượng nội dung cần nhập khi bàn giao.
8. Tên miền và thông tin môi trường vận hành; đầu mối phụ trách gia hạn và quản lý dịch vụ.

Ảnh giáo viên và phối cảnh cơ sở hiện có là hình minh họa tạo bằng AI. Cần chốt việc tiếp tục dùng minh họa hay thay bằng ảnh thực tế. Tên, chứng chỉ, kinh nghiệm giáo viên, thông tin liên hệ và địa chỉ cần được khách hàng xác nhận trước khi công bố.

## 7. Điều kiện để đưa website vào sử dụng thực tế

- Thay và duyệt toàn bộ thông tin minh họa bằng nội dung thống nhất với khách hàng.
- Chốt nơi tiếp nhận đăng ký, triển khai kết nối và kiểm tra luồng gửi thông tin đến trung tâm.
- Bỏ lịch học mẫu và thống nhất nội dung nút, tiêu đề form theo mục đích đăng ký học.
- Chốt người được truy cập dữ liệu đăng ký, nội dung thông báo về sử dụng thông tin và cách quản lý dữ liệu khi bổ sung lưu trữ.
- Cấu hình tên miền chính thức, môi trường chạy website và kết nối HTTPS.
- Thống nhất phạm vi triển khai, sao lưu, bảo trì, cập nhật nội dung và chi phí dịch vụ định kỳ.

Các đầu việc ở mục này là điều kiện đề xuất để vận hành, không phải xác nhận đã hoàn thành trong mã nguồn hiện tại. Tài liệu này chưa xác lập giá, thời gian triển khai, thời hạn bảo hành hoặc chi phí tên miền và hosting.

## 8. Tiêu chí nghiệm thu đề xuất

Danh sách sau dùng để kiểm tra khi bàn giao, không phải biên bản xác nhận đã nghiệm thu:

| Mã | Nội dung kiểm tra | Kết quả mong đợi |
| --- | --- | --- |
| NT01 | Các trang và menu | Mở được đủ các trang đã chốt; liên kết đúng nội dung; menu hoạt động trên máy tính và điện thoại |
| NT02 | Tìm và lọc khóa học | Tìm có dấu hoặc không dấu; kết hợp từ khóa và cấp học; thông báo đúng khi không có kết quả |
| NT03 | Chi tiết khóa học | Hiển thị đủ thông tin đã duyệt, không có lịch học; mở đóng câu hỏi; nút đăng ký chọn đúng khóa học |
| NT04 | Tin tức và tài liệu | Mở đúng bài; lọc đúng cấp học; xem đáp án; tải tệp `.txt` đọc được tiếng Việt và đúng nội dung |
| NT05 | Form đăng ký học | Bắt lỗi dữ liệu; giữ dữ liệu khi lỗi; chọn sẵn khóa hoặc cơ sở đúng; nội dung thể hiện trung tâm sẽ liên hệ để hoàn tất thủ tục |
| NT06 | Tiếp nhận đăng ký thực tế | Một đăng ký hợp lệ đến đúng nơi nhận đã thống nhất; chỉ báo đã tiếp nhận khi việc gửi hoặc lưu thành công |
| NT07 | Thông tin chính thức | Hotline, Zalo, email, cơ sở, giáo viên, khóa học và hình ảnh khớp nội dung khách hàng duyệt |
| NT08 | Hiển thị và thao tác | Nội dung không bị tràn ngang hoặc che khuất ở các kích thước thiết bị đã thống nhất; các nút chính thao tác được |
| NT09 | Đường dẫn sai | Trang chi tiết hoặc tài liệu không tồn tại trả thông báo phù hợp, không hiển thị nhầm nội dung |
| NT10 | Cấu hình khi đưa lên mạng | Tiêu đề, mô tả, ảnh chia sẻ và sơ đồ trang dùng đúng tên miền chính thức |

## 9. Nội dung hai bên cần xác nhận

| Nội dung | Phương án hoặc thông tin xác nhận |
| --- | --- |
| Danh sách trang và tính năng | Theo mục 2 đến mục 4 / điều chỉnh: … |
| Số lượng nội dung bàn giao | … khóa học; … giáo viên; … bài viết; … tài liệu; … cơ sở |
| Tiếp nhận đăng ký học | Nơi nhận: …; người phụ trách liên hệ: … |
| Cập nhật nội dung | Đơn vị phụ trách kỹ thuật: …; cách gửi yêu cầu cập nhật: … |
| Định dạng tài liệu tải xuống | `.txt` như hiện tại / bổ sung: … |
| Nội dung và hình ảnh | Người cung cấp: …; người duyệt: …; thời điểm cung cấp: … |
| Tên miền và hosting | Bên phụ trách: …; dịch vụ: …; chi phí: … |
| Điều chỉnh phục vụ đăng ký học | … |
| Thời gian và chi phí triển khai | Theo báo giá hoặc thỏa thuận số: … |
| Bảo hành và bảo trì | Thời hạn, đầu mối và phạm vi: … |

**Đại diện khách hàng:** …  
**Đại diện đơn vị triển khai:** …  
**Ngày xác nhận:** …

## 10. Căn cứ đối chiếu trong dự án

Các mô tả hiện trạng được đối chiếu với mã nguồn trang trong `app/`, giao diện dùng chung trong `components/`, dữ liệu trong `lib/courses.ts`, `lib/teachers.ts`, `lib/learning-content.ts`, `lib/consultation-options.ts` và xử lý form trong `app/actions/consultation.ts`. Cấu hình SEO nằm tại `app/layout.tsx`, `lib/seo.ts`, `app/sitemap.ts` và `app/robots.ts`.

Phiên bản 1.1 điều chỉnh phạm vi tài liệu theo mục đích đăng ký học. Các thay đổi giao diện và kết nối tiếp nhận nêu trong tài liệu là đầu việc cần triển khai, chưa phải xác nhận mã nguồn đã được sửa.

Việc bổ sung số lượng nội dung trong mẫu trang có sẵn và việc xây dựng tính năng mới là hai loại công việc khác nhau; số lượng, trách nhiệm nhập liệu và chi phí cần được ghi rõ khi xác nhận phạm vi.
