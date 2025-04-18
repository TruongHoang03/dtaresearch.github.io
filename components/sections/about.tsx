"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3"
              alt="AI Research"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Về Chúng Tôi
            </h2>
            <p className="text-gray-600 mb-6">
              Viện Công nghệ Số và Trí tuệ nhân tạo là trung tâm hàng đầu về nghiên cứu và đào tạo trong lĩnh vực công nghệ số và AI tại Việt Nam. Chúng tôi cam kết mang đến những chương trình đào tạo chất lượng cao, kết hợp giữa lý thuyết và thực hành.
            </p>
            <ul className="space-y-4">
              {[
                "Đội ngũ giảng viên xuất sắc",
                "Cơ sở vật chất hiện đại",
                "Chương trình đào tạo cập nhật",
                "Cơ hội thực tập và việc làm",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center text-gray-700"
                >
                  <svg
                    className="w-5 h-5 text-blue-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}