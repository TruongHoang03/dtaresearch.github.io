"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Lấy vị trí của section
      const sectionTop = section.getBoundingClientRect().top;
      // Vị trí hiện tại + vị trí của section - offset (để tránh bị che bởi header nếu có)
      const offsetPosition = window.pageYOffset + sectionTop - 80; // 80px là offset, điều chỉnh theo header của bạn
      
      // Scroll đến vị trí có tính toán offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3"
          alt="AI Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Viện Công nghệ số và Trí tuệ nhân tạo
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-200 mb-8">
            INSTITUTE OF DIGITAL TECHNOLOGY AND ARTIFICIAL INTELLIGENCE
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Định hình tương lai công nghệ số và trí tuệ nhân tạo thông qua đào tạo, nghiên cứu và đổi mới
          </p>
          
          <motion.button
            onClick={() => scrollToSection("about-section")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Tìm hiểu thêm
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}