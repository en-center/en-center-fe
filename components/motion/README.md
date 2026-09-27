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
