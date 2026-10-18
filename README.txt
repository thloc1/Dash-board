NGÀY MỚI — ONE UI 8.5 — V9.5
========================================

BẢN SỬA LỖI V9.5
- Sửa lỗi đứng/đơ giao diện do vòng lặp MutationObserver khi dịch tiêu đề trang.
- Bộ dịch tạm ngắt quan sát trong lúc cập nhật nội dung và chỉ cập nhật tiêu đề khi nội dung thật sự thay đổi.
- Giữ lại tính năng của V9: chuỗi ngày tích cực, nhắc việc quá hạn trong ứng dụng, Không gian tập trung tạo âm thanh ngay trên máy, XP/cấp độ, tiếng Việt/English và tinh chỉnh One UI.
- Giữ nguyên khóa localStorage và schema dữ liệu V8/V9 để tránh tạo kho dữ liệu mới.
- Service worker dùng cache phiên bản mới để trình duyệt cài app shell V9.5 thay cho cache cũ.

CẬP NHẬT
1. Giải nén ZIP.
2. Thay toàn bộ file trên hosting bằng nội dung V9.5 (giữ nguyên đường dẫn hosting/HTTPS).
3. Không xóa dữ liệu trang web của trình duyệt.
4. Mở URL HTTPS bằng Chrome, tải lại trang; nếu bản cũ vẫn được hiển thị, đóng các tab Ngày Mới rồi mở lại.
5. Kiểm tra trang tổng quan, chuyển trang, đổi ngôn ngữ, thử Focus và bật/tắt ngoại tuyến.

TỆP TRONG ZIP
- index.html: điểm vào PWA.
- ngay_moi_oneui85_v9_5.html: bản HTML có tên phiên bản.
- manifest.webmanifest: metadata PWA.
- service-worker.js: cache ngoại tuyến V9.5.
- icons/: biểu tượng PWA.

LƯU Ý
- PWA/service worker yêu cầu HTTPS (localhost chỉ dành cho phát triển); mở file:// không đủ để bật PWA.
- Đã kiểm tra cú pháp JavaScript, manifest JSON, đường dẫn precache và tính toàn vẹn ZIP. Kiểm thử tương tác trên trình duyệt thật chưa được xác nhận trong môi trường đóng gói.
- Tính năng thông báo quá hạn là nhắc nhở trong app, không phải push notification hệ thống Android.
