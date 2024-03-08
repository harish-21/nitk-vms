/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // primary
        "primary-100":"#F5EBFF", 
        "primary-200":"#D1B2ED",
        "primary-300":"#AF7FDB",
        "primary-400":"#9F5AE0",
        "primary-500":"#9135E7",
        "primary-600":"#711DBF",
        "primary-700":"#551294",
        "primary-800":"#390669",
        "primary-900":"#20003D",
        // warning
        "warning-100":"#EBF5FF",
        "warning-200":"#B2D0ED",
        "warning-300":"#551294",
        "warning-400":"#711DBF",
        "warning-500":"#9135E7",
        "warning-600":"#9F5AE0",
        "warning-700":"#AF7FDB",
        "warning-800":"#D1B2ED",
        "warning-900":"#F5EBFF",
        // secondary
        "secondary-100":"#EBF5FF",
        "secondary-200":"#B2D0ED",
        "secondary-300":"#7FAFDB",
        "secondary-400":"#5A9FE0",
        "secondary-500":"#4096E5",
        "secondary-600":"#1D71BF",
        "secondary-700":"#125594",
        "secondary-800":"#063969",
        "secondary-900":"#00203D",
        // danger
        "danger-100":"#FFEBEB",
        "danger-200":"#EDB2B2",
        "danger-300":"#DB7F7F",
        "danger-400":"#E05A5A",
        "danger-500":"#EB3B3B",
        "danger-600":"#BF1D1D",
        "danger-700":"#94121",
        "danger-800":"#690606",
        "danger-900":"#3D0000",
        // success
        "success-100":"#EBFFEB",
        "success-200":"#B2EDB2",
        "success-300":"#7FDB7F",
        "success-400":"#5AE05A",
        "success-500":"#41F241",
        "success-600":"#1DBF1D",
        "success-700":"#129412",
        "success-800":"#066906",
        "success-900":"#003D00",
        // neutral
        "neutral-100":"#F4F6FA",
        "neutral-200":"#C2C8D1",
        "neutral-300":"#8E98A8",
        "neutral-400":"#6A788C",
        "neutral-500":"#505B74",
        "neutral-600":"#35425A",
        "neutral-700":"#263248",
        "neutral-800":"#172337",
        "neutral-900":"#0C1626",
      }
    },
  },
  plugins: [],
}

