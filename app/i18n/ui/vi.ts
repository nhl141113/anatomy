import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "Xưởng Giải Phẫu — Học giải phẫu như một nghệ sĩ",
    description:
      "Khám phá các cơ quan 3D chi tiết về mặt y khoa — tim, não, phổi, gan, thận, mắt, ruột, tuyến tụy và da — thông qua một không gian giải phẫu tương tác đầy tinh tế.",
    ogTitle: "Xưởng Giải Phẫu — Học giải phẫu như một nghệ sĩ",
    ogDescription: "Học giải phẫu như một nghệ sĩ thông qua các mẫu vật 3D sống động, chuẩn xác về mặt y khoa.",
    imageAlt: "Mẫu vật giải phẫu tim lơ lửng trên bệ đỡ, bên cạnh biểu tượng Anatomy Atelier",
  },
  brand: { tagline: "Học giải phẫu như một nghệ sĩ", home: "Trang chủ Xưởng Giải Phẫu" },
  nav: { explore: "Khám phá", systems: "Hệ cơ quan", lessons: "Bài học", library: "Thư viện", notes: "Ghi chú" },
  search: { placeholder: "Tìm kiếm cơ quan, chủ đề…" },
  profile: { open: "Mở hồ sơ học tập" },
  language: { label: "Ngôn ngữ", choose: "Chọn ngôn ngữ" },
  library: {
    title: "Thư viện cơ quan", open: "Mở thư viện cơ quan", close: "Đóng thư viện", saved: "Cơ quan đã lưu",
    viewAll: "Xem tất cả cơ quan",
    quoteLine1: "Học tập là", quoteLine2: "hành trình của sự tò mò.", quoteSign: "Tiếp tục khám phá nhé!",
  },
  tools: {
    label: "Công cụ xem 3D", rotate: "Xoay", zoom: "Phóng to", isolate: "Tách biệt",
    section: "Mặt cắt", layers: "Các lớp", compare: "So sánh", reset: "Đặt lại",
  },
  viewer: {
    title: "Trình xem tương tác: {organ}",
    canvas: "Mô hình giải phẫu 3D tương tác. Kéo để xoay, cuộn để thu phóng và bấm vào điểm đánh dấu để tìm hiểu cấu trúc đó.",
    tip: "Mẹo", tipDrag: "Kéo để xoay", tipScroll: "Cuộn để thu phóng", tipClick: "Bấm vào điểm tròn để tìm hiểu thêm",
    loading: "Đang tải mô hình {organ}...", autoRotate: "Tự động xoay",
    caption: "Mẫu vật 3D · bấm vào điểm tròn để khám phá", structures: "Các cấu trúc trong mẫu vật này",
  },
  info: {
    kicker: "{organ}", keyFacts: "Thông tin cốt lõi", size: "Kích thước", weight: "Khối lượng", daily: "Hằng ngày",
    location: "Vị trí", bloodSupply: "Mạch máu nuôi", function: "Chức năng",
    medical: "Tầm quan trọng y khoa", didYouKnow: "Bạn có biết", viewLesson: "Xem bài học",
    animate: "Mô phỏng chuyển động", quiz: "Câu đố", compare: "So sánh",
  },
  compare: {
    title: "So sánh cơ quan", comparing: "Đang so sánh", reference: "Mẫu đối chiếu",
    primaryRole: "Vai trò chính", scale: "Tỉ lệ", vs: "và", close: "Đóng so sánh",
  },
  cards: {
    resources: "Tài liệu học tập về {organ}",
    microscopic: "Góc nhìn vi mô", compareOrgans: "So sánh các cơ quan", functionAnimation: "Mô phỏng chức năng",
    clinicalNotes: "Ghi chú lâm sàng", whereItWorks: "Vị trí hoạt động", commonConditions: "Bệnh lý thường gặp",
    exploreTissue: "Khám phá mô", openComparison: "Mở bảng so sánh", playAnimation: "Phát mô phỏng",
    seeAll: "Xem tất cả", seeSystem: "Xem toàn bộ hệ cơ quan",
    playAria: "Phát ảnh động mô phỏng chức năng của {organ}", systemAria: "Xem vị trí của {organ} trong cơ thể",
  },
  quiz: {
    start: "Bắt đầu bài trắc nghiệm ghi nhãn", find: "Tìm", progress: "{current} trên {total}",
    correct: "Chính xác", wrong: "Chưa đúng", reveal: "Đó là {label}", answer: "{label} được đánh dấu màu xanh lá",
    done: "Hoàn thành bài kiểm tra", score: "Đúng {score}/{total} câu", retry: "Thử lại",
    exit: "Thoát bài kiểm tra", hint: "Bấm vào điểm đánh dấu tương ứng trên mô hình",
  },
  modal: {
    guided: "Khám phá có hướng dẫn", close: "Đóng", continueExploring: "Tiếp tục khám phá",
    quizTitle: "Câu đố nhanh về {organ}", motionTitle: "Hoạt động của {organ}",
    bodyTitle: "{organ} trong cơ thể", insideTitle: "Bên trong {organ}",
    quizPrompt: "Nhận định nào sau đây mô tả đúng nhất về {organ}?",
    quizA: "Đảm nhận vai trò chuyên biệt trong việc duy trì hoạt động cơ thể",
    quizB: "Hoạt động hoàn toàn độc lập và tách biệt",
    quizC: "Chỉ hoạt động trong khi ngủ",
    lessonBody:
      "Quan sát các cấu trúc được làm nổi bật, xoay mẫu vật và liên hệ giữa hình thái với chức năng. Bài học ngắn này được thiết kế để giúp bạn ghi nhớ mô hình giải phẫu một cách trực quan và lâu bền.",
    systemIntro: "{location}. Khám phá cách {organ} kết nối với các phần còn lại của cơ thể.",
    system: "Hệ cơ quan", primaryRole: "Vai trò chính", bloodSupply: "Mạch máu nuôi",
  },
};
