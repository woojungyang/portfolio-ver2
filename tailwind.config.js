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
          10: "#FBE7D6", // 가장 밝은 오렌지 톤 (배경, 강조)
          30: "#F3B77A", // 연한 오렌지 (보조 버튼)
          50: "#E08949", // 기본 오렌지 (주 버튼, CTA)
          70: "#C76B32", // 짙은 오렌지 (호버, 포인트)
          90: "#8B3E1A", // 어두운 오렌지 (텍스트 강조)
        },
        secondary: {
          10: "#EAE1DC", // 가장 밝은 브라운 (배경, 보조 텍스트)
          30: "#BCA496", // 연한 브라운 (서브 요소)
          50: "#8B6F60", // 기본 브라운 (기본 텍스트)
          70: "#6D5145", // 짙은 브라운 (강조 텍스트)
          90: "#4A403A", // 가장 어두운 브라운 (타이틀, 아이콘)
        },
        accent: {
          10: "#FFF8F2", // 가장 밝은 베이지 (배경)
          30: "#F7E0C2", // 연한 베이지 (카드, 보조 요소)
          50: "#E5C7A6", // 기본 베이지 (네비게이션, 배경)
          70: "#D9B28D", // 짙은 베이지 (포인트 영역)
          90: "#B28D6D", // 가장 어두운 베이지 (강조)
        },
        highlight: {
          10: "#FFFFFF", // 화이트 (기본 배경)
          30: "#EDEDED", // 연한 그레이 (보조 배경)
          50: "#D9D9D9", // 기본 그레이 (입력 필드, 카드 보더)
          70: "#B3B3B3", // 짙은 그레이 (아이콘, 보더)
          90: "#8C8C8C", // 가장 어두운 그레이 (텍스트 강조)
        },
        gray: {
          10: "#F8F9FA", // 가장 밝은 회색 (배경, 강조)
          30: "#E9ECEF", // 연한 회색 (보조 요소, 카드 배경)
          50: "#CED4DA", // 기본 회색 (보더, 입력 필드)
          70: "#6C757D", // 짙은 회색 (서브 텍스트, 아이콘)
          90: "#343A40", // 가장 어두운 회색 (헤더, 타이틀)
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
