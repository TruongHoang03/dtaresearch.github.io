"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function SanPham() {
  return (
    <>
      <Head>
        <title>Sản phẩm - Viện Công nghệ số và Trí tuệ nhân tạo</title>
        <meta name="description" content="Các sản phẩm và giải pháp của Viện Công nghệ số và Trí tuệ nhân tạo" />
      </Head>
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-white mb-6"
          >
            Sản phẩm & Giải pháp
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl text-center text-blue-100 max-w-3xl mx-auto"
          >
            Khám phá các giải pháp và sản phẩm đột phá dựa trên trí tuệ nhân tạo và công nghệ số, được thiết kế để tối ưu hóa quy trình, tăng cường hiệu quả và mang lại lợi thế cạnh tranh cho doanh nghiệp trong thời đại số.
          </motion.p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Product 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-4 bg-blue-600">
                <Image
                  src="/images/lms.png"
                  alt="Learn Management System"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">LMS (Learning Management System)</h2>
                <p className="text-gray-600 mb-4">
                Hệ thống LMS này được thiết kế để hỗ trợ quản lý và tổ chức việc học tập trực tuyến một cách hiệu quả.
                </p>
                <Link href="https://docs.google.com/document/d/14HTKwyVYYVqtF0Ky88AHc1k1zJhtFmjf13kZxQZ6WYs/edit?usp=sharing" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                  Tìm hiểu thêm
                </Link>
              </div>
            </motion.div>
            
            {/* Product 2 */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-4 bg-green-600">
                <Image
                  src="/images/product-placeholder.jpg"
                  alt="Smart Document Processing"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Smart Document Processing</h2>
                <p className="text-gray-600 mb-4">
                  Giải pháp xử lý tài liệu thông minh giúp tự động hóa việc trích xuất dữ liệu và phân loại tài liệu.
                </p>
                <Link href="/san-pham/document-processing" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                  Tìm hiểu thêm
                </Link>
              </div>
            </motion.div> */}
            
            {/* Product 3 */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-4 bg-purple-600">
                <Image
                  src="/images/product-placeholder.jpg"
                  alt="LLM Solutions"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">LLM Solutions</h2>
                <p className="text-gray-600 mb-4">
                  Giải pháp ứng dụng mô hình ngôn ngữ lớn (LLM) cho doanh nghiệp, hỗ trợ tự động hóa quy trình và tương tác với khách hàng.
                </p>
                <Link href="/san-pham/llm-solutions" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                  Tìm hiểu thêm
                </Link>
              </div>
            </motion.div> */}
            
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Tại sao chọn giải pháp của chúng tôi?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hiệu suất cao</h3>
              <p className="text-gray-600">Các giải pháp của chúng tôi được tối ưu hóa để mang lại hiệu suất cao nhất trên các nền tảng khác nhau.</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Độ tin cậy</h3>
              <p className="text-gray-600">Các sản phẩm được kiểm thử kỹ lưỡng, đảm bảo tính ổn định và độ tin cậy cao trong mọi tình huống.</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tiết kiệm chi phí</h3>
              <p className="text-gray-600">Tự động hóa quy trình giúp giảm chi phí vận hành và tăng năng suất làm việc của đội ngũ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Liên hệ với chúng tôi</h2>
            <p className="text-gray-600 mb-8">
              Bạn cần thêm thông tin về sản phẩm hoặc muốn triển khai giải pháp cho doanh nghiệp của mình? Liên hệ ngay với chúng tôi để được tư vấn chi tiết.
            </p>
            <Link href="/lien-he" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </section> */}
    </>
  );
}