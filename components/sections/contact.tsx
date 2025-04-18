"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Liên Hệ Với Chúng Tôi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-blue-600 text-2xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Địa chỉ</h3>
              <p className="text-gray-600">
                Tầng 2, Tòa V1, Home City, số 177 Phố Trung Kính, Phường Yên Hòa, Quận Cầu Giấy, Thành phố Hà Nội
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-blue-600 text-2xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Điện thoại</h3>
              <p className="text-gray-600">
                (024) 3869 4242
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-blue-600 text-2xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">
                congnghesovn247@gmail.com
              </p>
            </div>
          </div>
          
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Gửi tin nhắn
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}