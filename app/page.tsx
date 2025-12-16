'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check, Film, ShoppingBag, X } from 'lucide-react';
import { MOVIES } from "@/data/movie"; // Import dữ liệu cứng

export default function Home() {
  // State lưu các ID phim đã chọn
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // Hàm xử lý khi click vào phim
  const toggleMovie = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id)); // Bỏ chọn
    } else {
      setSelectedIds([...selectedIds, id]); // Chọn thêm
    }
  };

  // Tính tổng tiền (giả sử string giá tiền dạng '50.000đ')
  // Ở đây tôi đếm số lượng cho đơn giản
  const totalCount = selectedIds.length;

  return (
      <div className="min-h-screen bg-gray-50 pb-32"> {/* pb-32 để không bị thanh dưới che */}

        {/* 1. Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10 px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded-lg text-white">
              <Film size={20} />
            </div>
            <h1 className="font-bold text-lg text-gray-800">CineStore</h1>
          </div>
          <div className="text-sm text-gray-500">
            Phim hay mỗi ngày
          </div>
        </header>

        {/* 2. Danh sách phim */}
        <main className="p-4 container mx-auto max-w-4xl">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Đang chiếu</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {MOVIES.map((movie) => {
              const isSelected = selectedIds.includes(movie.id);

              return (
                  <div
                      key={movie.id}
                      onClick={() => toggleMovie(movie.id)}
                      className={`
                  relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-200 border-2
                  ${isSelected ? 'border-red-500 scale-95 shadow-none' : 'border-transparent hover:shadow-lg bg-white'}
                `}
                  >
                    {/* Poster Ảnh */}
                    <div className="aspect-[2/3] relative bg-gray-200">
                      <Image
                          src={movie.image}
                          alt={movie.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 25vw"
                      />

                      {/* Overlay khi chọn */}
                      {isSelected && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center animate-in fade-in duration-200">
                            <div className="bg-red-500 text-white p-2 rounded-full shadow-lg">
                              <Check size={24} strokeWidth={3} />
                            </div>
                          </div>
                      )}
                    </div>

                    {/* Thông tin */}
                    <div className="p-3">
                      <h3 className="font-bold text-sm text-gray-800 truncate">{movie.title}</h3>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">{movie.category}</span>
                        <span className="text-xs font-bold text-red-600">{movie.price}</span>
                      </div>
                    </div>
                  </div>
              );
            })}
          </div>
        </main>

        {/* 3. Bottom Bar (Chỉ hiện khi có chọn phim) */}
        {totalCount > 0 && (
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] p-4 z-50 animate-in slide-in-from-bottom duration-300">
              <div className="container mx-auto max-w-4xl flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Đã chọn:</p>
                  <p className="text-xl font-bold text-red-600">{totalCount} phim</p>
                </div>

                <div className="flex gap-3">
                  {/* Nút Xóa hết */}
                  <button
                      onClick={() => setSelectedIds([])}
                      className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                  >
                    <X size={20} />
                  </button>

                  {/* Nút Đặt vé */}
                  <button
                      onClick={() => alert(`Bạn đã chọn các phim có ID: ${selectedIds.join(', ')}. Giờ có thể gửi list này qua Zalo cho admin!`)}
                      className="bg-red-600 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-red-200 active:scale-95 transition-transform"
                  >
                    <ShoppingBag size={18} />
                    Xác nhận
                  </button>
                </div>
              </div>
            </div>
        )}
      </div>
  );
}