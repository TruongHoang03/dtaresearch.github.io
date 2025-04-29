"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  
  // Función para desplazamiento con offset
  const handleScrollToSection = (sectionId: string) => {
    // Si ya estamos en la página de inicio
    if (window.location.pathname === '/' || window.location.pathname === '') {
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = 80; // Ajusta este valor según la altura de tu header
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = window.pageYOffset + elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      // Si estamos en otra página, navega primero a la página de inicio
      // y configura un flag para desplazarse después
      localStorage.setItem('scrollToAboutSection', 'true');
      router.push('/');
    }
  };
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/images/dta.png" 
                alt="DTA Logo" 
                width={48} 
                height={48} 
                className="mr-2"
              />
              <div>
                <h3 className="font-bold text-lg">DTA</h3>
                <p className="text-sm text-blue-200">Viện Công nghệ số và Trí tuệ nhân tạo</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Nghiên cứu, phát triển và ứng dụng công nghệ số 
              và trí tuệ nhân tạo cho các tổ chức, doanh nghiệp 
              nhằm gia tăng hiệu quả hoạt động và năng lực cạnh tranh.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
            <div className="space-y-3 text-sm text-blue-100">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {/* <span>15 Nguyễn Tri Phương, phường Minh Khai, quận Hồng Bàng, thành phố Hải Phòng</span> */}
                <span>Tầng 2, Tòa V1, Home City, số 177 phố Trung Kính, phường Yên Hòa, quận Cầu Giấy, thành phố Hà Nội</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:congnghesovn247@gmail.com" className="hover:underline">
                congnghesovn247@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>0387 922 560</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liên kết</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  Trang chủ
                </Link>
              </li>
              <li>
                {/* Reemplazar el Link con un botón personalizado */}
                <button 
                  onClick={() => handleScrollToSection('about-section')}
                  className="hover:text-white transition-colors flex items-center text-blue-100 text-left w-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  Về chúng tôi
                </button>
              </li>
              <li>
                <Link href="/tuyen-dung" className="hover:text-white transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  Tuyển dụng
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-200">
          <p>&copy; {currentYear} Viện Công nghệ số và Trí tuệ nhân tạo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}