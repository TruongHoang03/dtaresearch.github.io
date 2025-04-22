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
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tl from-[#0260f2]/80 to-[#32aafe]/80">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.jpg"
          // src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3"
          alt="AI Background"
          fill
          className="object-contain opacity-5"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Image
            src="/images/background.svg"
            alt="AI Background"
            // fill
            width={300}
            height={300}
            className="object-contain mx-auto mb-12"
            priority
            sizes="max-width: 100px 100vw, 50vw"
            quality={100}
          />

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Viện Công nghệ số và Trí tuệ nhân tạo
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-50 mb-8">
            INSTITUTE OF DIGITAL TECHNOLOGY AND ARTIFICIAL INTELLIGENCE
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
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

        {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.svg"
          alt="AI Background"
          fill
          className="object-contain opacity-10"
          priority
          sizes="max-width: 768px 100vw, 50vw"
          quality={100}
          loading="eager"
          placeholder="blur"
        />
        </div> */}

      </div>
    </section>
  );
}