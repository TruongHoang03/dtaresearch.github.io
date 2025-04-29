"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

export default function TuyenDung() {
  // Función para scroll con offset para el header
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80; // Ajusta este valor según la altura de tu header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Head>
        <title>Tuyển Dụng - Viện Công nghệ số và Trí tuệ nhân tạo</title>
        <meta name="description" content="Cơ hội việc làm tại Viện Công nghệ số và Trí tuệ nhân tạo" />
      </Head>
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-white mb-6"
          >
            Cơ hội nghề nghiệp
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl text-center text-blue-100 max-w-3xl mx-auto"
          >
            Gia nhập đội ngũ chuyên gia và các nhà nghiên cứu tại Viện Công nghệ số và Trí tuệ nhân tạo
          </motion.p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Backend Developer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <div className="bg-blue-600 text-white text-center py-2 px-4 rounded-full text-sm font-semibold mb-4 inline-block">
                    Thực tập sinh
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Backend Developer (Python/Java)</h2>
                  {/* <p className="text-gray-600 mb-4">Bộ phận: Phát triển phần mềm | Báo cáo cho: Trưởng nhóm</p> */}
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Mô tả công việc:</h3>
                    <p className="text-gray-700">
                      Chúng tôi đang tìm kiếm các bạn sinh viên hoặc người mới tốt nghiệp đam mê lập trình Python/Java và phát triển Backend để gia nhập đội ngũ phát triển. Đây là cơ hội tuyệt vời để bạn học hỏi, nâng cao kỹ năng, trải nghiệm môi trường làm việc chuyên nghiệp và tham gia vào các dự án chuyển đổi số.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Nhiệm vụ chính:</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Hỗ trợ phát triển và duy trì các API Backend sử dụng các framework như Django, Flask, FastAPI hoặc Spring Boot.</li>
                      <li>Tham gia thiết kế, xây dựng và tối ưu hóa cơ sở dữ liệu.</li>
                      <li>Hỗ trợ kiểm tra, sửa lỗi và cải thiện hiệu suất hệ thống.</li>
                      <li>Tìm hiểu và triển khai các giải pháp bảo mật, tối ưu hóa Backend.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors w-full" 
                    onClick={() => scrollToSection("backend-section")}
                  >
                    Chi tiết
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Frontend Developer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div> {/* Añadir este div que falta */}
                  <div className="bg-blue-600 text-white text-center py-2 px-4 rounded-full text-sm font-semibold mb-4 inline-block">
                    Thực tập sinh
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Frontend Developer (ReactJS)</h2>
                  {/* <p className="text-gray-600 mb-4">Bộ phận: Phát triển phần mềm | Báo cáo cho: Trưởng nhóm</p> */}
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Mô tả công việc:</h3>
                    <p className="text-gray-700">
                      Chúng tôi đang tìm kiếm các bạn sinh viên hoặc người mới tốt nghiệp đam mê lập trình Frontend, đặc biệt là ReactJS, để gia nhập đội ngũ phát triển. Đây là cơ hội lý tưởng để bạn học hỏi, nâng cao kỹ năng và trải nghiệm môi trường làm việc chuyên nghiệp.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Nhiệm vụ chính:</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Tham gia phát triển giao diện người dùng (UI) cho các ứng dụng web sử dụng ReactJS.</li>
                      <li>Hỗ trợ xây dựng và tối ưu hóa các thành phần (components) tái sử dụng trong dự án.</li>
                      <li>Tích hợp API từ Backend vào giao diện Frontend.</li>
                      <li>Hỗ trợ kiểm tra, sửa lỗi và cải thiện hiệu suất giao diện người dùng.</li>
                      <li>Tham gia thiết kế giao diện, đảm bảo tính thẩm mỹ và trải nghiệm người dùng (UX/UI) tối ưu.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors w-full" 
                    onClick={() => scrollToSection("frontend-section")}
                  >
                    Chi tiết
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* AI/LLMs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <div className="bg-blue-600 text-white text-center py-2 px-4 rounded-full text-sm font-semibold mb-4 inline-block">
                    Thực tập sinh
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">AI/LLMs Researcher</h2>
                  <br></br>
                  {/* <p className="text-gray-600 mb-4">Bộ phận: Nghiên cứu và Phát triển | Báo cáo cho: Trưởng nhóm</p> */}
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Mô tả công việc:</h3>
                    <p className="text-gray-700">
                      Chúng tôi tìm kiếm các bạn sinh viên hoặc người mới tốt nghiệp đam mê lĩnh vực Trí tuệ nhân tạo (AI), đặc biệt là các mô hình ngôn ngữ lớn (LLMs), để gia nhập đội ngũ nghiên cứu và phát triển của chúng tôi.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Nhiệm vụ chính:</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Nghiên cứu về AI, Machine Learning, Deep Learning và các mô hình ngôn ngữ lớn (LLMs).</li>
                      <li>Tham gia nghiên cứu các công nghệ AI mới, đặc biệt là các kỹ thuật liên quan đến LLMs.</li>
                      <li>Hỗ trợ phân tích dữ liệu, huấn luyện mô hình và đánh giá hiệu suất các thuật toán AI.</li>
                      <li>Tham gia thảo luận nhóm, đóng góp ý tưởng cho các ứng dụng và giải pháp AI.</li>
                      <li>Phối hợp tích hợp khả năng AI vào sản phẩm hiện có hoặc phát triển các giải pháp mới.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors w-full" 
                    onClick={() => scrollToSection("ai-section")}
                  >
                    Chi tiết
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chi tiết vị trí */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Chi tiết vị trí</h2>
          
          {/* Backend */}
          <div id="backend-section" className="mb-16 border-b pb-12 pt-5">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-blue-700 mb-4"
            >
              Backend Developer (Python/Java)
            </motion.h3>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Yêu cầu công việc:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Nắm vững kiến thức cơ bản về lập trình Python hoặc Java.</li>
                <li>Hiểu biết về RESTful API và cách hoạt động của giao thức HTTP.</li>
                <li>Có kiến thức nền tảng về cơ sở dữ liệu (SQL, NoSQL).</li>
                <li>Biết sử dụng Git và các công cụ quản lý mã nguồn.</li>
                <li>Có khả năng đọc hiểu tài liệu kỹ thuật bằng tiếng Anh.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Quyền lợi:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Được đào tạo và hướng dẫn bởi đội ngũ kỹ sư giàu kinh nghiệm, giúp nâng cao kiến thức chuyên sâu.</li>
                <li>Tham gia các dự án thực tế, đặc biệt là các dự án chuyển đổi số.</li>
                <li>Nhận mức hỗ trợ lương thực tập cùng các phúc lợi hấp dẫn (nếu có).</li>
                <li>Làm việc trong môi trường sáng tạo, năng động và thân thiện.</li>
                <li>Cơ hội phát triển bản thân, tiếp cận các công nghệ mới.</li>
                <li>Cơ hội trở thành nhân viên chính thức nếu hoàn thành xuất sắc.</li>
                <li>Được hỗ trợ định hướng nghiên cứu, viết báo khoa học và học tập lên các bậc học cao hơn.</li>
              </ul>
            </div>

            <div className="mt-8 text-right">
              <button
                onClick={() => scrollToSection("apply-section")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded transition-colors"
              >
                Ứng tuyển
              </button>
            </div>
          </div>
          
          {/* Frontend */}
          <div id="frontend-section" className="mb-16 border-b pb-12 pt-5">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-blue-700 mb-4"
            >
              Frontend Developer (ReactJS)
            </motion.h3>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Yêu cầu công việc:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Nắm vững kiến thức cơ bản về HTML, CSS, JavaScript và ES6+.</li>
                <li>Hiểu biết về ReactJS, bao gồm các khái niệm như components, props, state, lifecycle methods và hooks.</li>
                <li>Có kiến thức về RESTful API và cách tích hợp API vào Frontend.</li>
                <li>Biết sử dụng Git và các công cụ quản lý mã nguồn.</li>
                <li>Có khả năng đọc hiểu tài liệu kỹ thuật tiếng Anh.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Quyền lợi:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Được đào tạo và hướng dẫn bởi các kỹ sư Frontend giàu kinh nghiệm.</li>
                <li>Tham gia các dự án thực tế, học hỏi quy trình phát triển phần mềm chuyên nghiệp.</li>
                <li>Nhận hỗ trợ lương thực tập và các phúc lợi hấp dẫn (nếu có).</li>
                <li>Cơ hội trở thành nhân viên chính thức nếu hoàn thành tốt kỳ thực tập.</li>
                <li>Làm việc trong môi trường sáng tạo, năng động và thân thiện.</li>
                <li>Hỗ trợ định hướng nghiên cứu, viết báo khoa học và học tập lên các bậc học cao hơn.</li>
                <li>Tham gia các dự án chuyển đổi số, phát triển kỹ năng.</li>
              </ul>
            </div>

            <div className="mt-8 text-right">
              <button
                onClick={() => scrollToSection("apply-section")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded transition-colors"
              >
                Ứng tuyển
              </button>
            </div>
          </div>
          
          {/* AI/LLMs */}
          <div id="ai-section" className="mb-8 pt-5">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-blue-700 mb-4"
            >
              AI/LLMs Researcher
            </motion.h3>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Yêu cầu công việc:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Nắm vững kiến thức cơ bản về AI/ML.</li>
                <li>Hiểu biết cơ bản về các mô hình LLM và ứng dụng trong xử lý ngôn ngữ tự nhiên.</li>
                <li>Có khả năng lập trình Python.</li>
                <li>Có kiến thức về xử lý dữ liệu và phân tích dữ liệu.</li>
                <li>Có khả năng đọc hiểu tài liệu kỹ thuật tiếng Anh.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Quyền lợi:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Được đào tạo và hướng dẫn bởi các chuyên gia AI/ML và LLMs giàu kinh nghiệm.</li>
                <li>Tham gia các dự án AI thực tế, bao gồm các dự án chuyển đổi số và ứng dụng LLMs.</li>
                <li>Nhận hỗ trợ lương thực tập và các phúc lợi hấp dẫn (nếu có).</li>
                <li>Cơ hội trở thành nhân viên chính thức nếu hoàn thành xuất sắc kỳ thực tập.</li>
                <li>Làm việc trong môi trường sáng tạo, năng động và thân thiện.</li>
                <li>Được tiếp cận các tài liệu, công cụ và nguồn lực tiên tiến.</li>
                <li>Hỗ trợ định hướng nghiên cứu, viết báo khoa học và học lên các bậc học cao hơn.</li>
                <li>Cơ hội phát triển sự nghiệp lâu dài trong lĩnh vực AI, LLMs và công nghệ chuyển đổi số.</li>
              </ul>
            </div>

            <div className="mt-8 text-right">
              <button
                onClick={() => scrollToSection("apply-section")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded transition-colors"
              >
                Ứng tuyển
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quy trình ứng tuyển */}
      <section id="apply-section" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Cách thức ứng tuyển</h2>
          
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Gửi hồ sơ về email:</h3>
              <a href="mailto:tiendt@vietstarholdings.com.vn" className="text-blue-600 hover:underline">tiendt@vietstarholdings.com.vn</a>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tiêu đề email:</h3>
              <p className="text-gray-700">Thực Tập Sinh (Backend/Frontend/AI) - [Họ và Tên]</p>
              <p className="text-gray-600 italic mt-1">Ví dụ: Thực Tập Sinh AI - Nguyễn Văn An</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Yêu cầu hồ sơ:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>CV (nêu rõ kinh nghiệm và các dự án Backend/Frontend/AI đã tham gia).</li>
                <li>Điểm trung bình tích lũy (GPA) từ 8.0/10 trở lên, hoặc tốt nghiệp từ các trường phổ thông chuyên các môn khối tự nhiên (Toán, Lý, Hóa, Tin).</li>
                <li>Hồ sơ GitHub tốt, thể hiện các dự án cá nhân hoặc nhóm liên quan đến AI/ML hoặc lập trình.</li>
                <li>Thư giới thiệu hoặc thư bày tỏ nguyện vọng (nếu có).</li>
              </ul>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="mailto:tiendt@vietstarholdings.com.vn?subject=Ứng%20Tuyển%20Thực%20Tập%20Sinh" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors inline-block"
              >
                Ứng tuyển ngay
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}