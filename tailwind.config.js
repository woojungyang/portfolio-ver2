/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      es: "425px",
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1300px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: { inter: ["Inter", "sans-serif"] },
    extend: {
      padding: {
        "sec-sm": 40,
        "sec-md": 80,
        "sec-lg": 112,
      },
      colors: {
        primary: {
          10: "#FDEDE4", // 밝은 살구빛 베이지
          30: "#F6BFA2", // 부드러운 피치 오렌지
          50: "#E8916E", // 따뜻하고 감성적인 오렌지 🍊
          70: "#C46F4E", // 클래식한 브라운 오렌지
          90: "#8F5036", // 깊이 있는 레트로 브라운
        },
        secondary: {
          10: "#F9E7E8", // 은은한 핑크 베이지
          30: "#E6A4A9", // 부드러운 브릭 핑크
          50: "#C9686E", // 클래식한 빈티지 레드 🍒
          70: "#9E5052", // 톤 다운된 브라운 레드
          90: "#703A3C", // 어두운 브릭 브라운
        },
        gray: {
          10: "#F8F3EE", // 따뜻한 크림 화이트
          30: "#E1D3C5", // 빈티지한 웜 그레이
          50: "#B6A89B", // 뉴트럴하면서도 부드러운 그레이
          70: "#897B71", // 차분한 클래식 그레이
          90: "#5D524B", // 어두운 브라운 그레이
        },
        background: {
          10: "#FDF9F5", // 밝은 아이보리 베이지 ☕
          30: "#EBD9C7", // 부드러운 밀크티 베이지
          50: "#D2B69A", // 따뜻한 레트로 베이지 🌾
          70: "#AD9275", // 차분한 카페 브라운
          90: "#7C6A59", // 클래식한 다크 베이지
        },
        accent: {
          // ✨ **보색(청록 계열)**
          10: "#E7F6F3", // 밝고 부드러운 민트
          30: "#A9DDD6", // 감성적인 파스텔 청록
          50: "#6DBDB2", // 은은한 빈티지 청록 🌊
          70: "#4A8D84", // 차분한 클래식 청록
          90: "#2E5F5A", // 깊이 있는 레트로 블루그린
        },
      },
      fontSize: {
        h1: [
          "clamp(2.25rem, 4vw, 3.75rem)",
          { lineHeight: "normal", fontWeight: "700" },
        ],
        h2: [
          "clamp(2rem, 4vw, 3rem)",
          { lineHeight: "normal", fontWeight: "700" },
        ],
        h3: [
          "clamp(1.75rem, 4vw, 2.25rem)",
          { lineHeight: "normal", fontWeight: "700" },
        ],
        "3xlg": ["clamp(1.5rem, 4vw, 2rem"],
        "2xl": ["clamp(1.25rem, 4vw, 2rem"],
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
};
