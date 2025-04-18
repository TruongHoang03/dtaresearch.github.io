"use client";

import { motion } from "framer-motion";

const partnerServices = [
  {
    title: "Khả năng hợp tác",
    description: "Kinh nghiệm chuyên môn và nền tảng công nghệ vững mạnh là lợi thế để chúng tôi mở rộng hợp tác với các doanh nghiệp trong và ngoài nước.",
    icon: "🤝",
  },
  {
    title: "Chuyển giao công nghệ",
    description: "Cung cấp dịch vụ chuyển giao công nghệ tiên tiến, giúp doanh nghiệp nâng cao năng lực sản xuất và vận hành.",
    icon: "🔄",
  },
  {
    title: "Nhân lực",
    description: "Đội ngũ nhân sự của chúng tôi bao gồm các chuyên gia hàng đầu trong lĩnh vực công nghệ với khả năng tư vấn và phát triển.",
    icon: "👥",
  },
];

export function BusinessPartners() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Doanh nghiệp & đối tác
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cùng nhau xây dựng tương lai công nghệ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Liên hệ hợp tác
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}