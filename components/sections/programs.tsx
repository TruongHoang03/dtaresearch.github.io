"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "Khoa học dữ liệu",
    description: "Chương trình đào tạo về phân tích và xử lý dữ liệu lớn",
    icon: "📊",
  },
  {
    title: "Trí tuệ nhân tạo",
    description: "Nghiên cứu và phát triển các giải pháp AI tiên tiến",
    icon: "🤖",
  },
  {
    title: "Học máy",
    description: "Ứng dụng machine learning trong các bài toán thực tế",
    icon: "🧠",
  },
  {
    title: "Công nghệ số",
    description: "Chuyển đổi số và ứng dụng công nghệ trong doanh nghiệp",
    icon: "💻",
  },
];

export function Programs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Chương trình đào tạo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá các chương trình đào tạo chuyên sâu của chúng tôi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}