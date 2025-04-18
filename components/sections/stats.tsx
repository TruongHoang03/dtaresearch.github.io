"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "1000+", label: "Học viên" },
  { number: "50+", label: "Giảng viên" },
  { number: "30+", label: "Khóa học" },
  { number: "95%", label: "Tỷ lệ việc làm" },
];

export function Stats() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-blue-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}