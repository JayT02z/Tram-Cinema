'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Check, Film, ShoppingBag, X, PlayCircle, Filter } from 'lucide-react';
import { MOVIES } from "@/data/movie";

export default function Home() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [trailerId, setTrailerId] = useState<string | null>(null); // State lưu ID trailer đang xem

  // State cho bộ lọc
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterCountry, setFilterCountry] = useState('All');
  const [filterType, setFilterType] = useState('All');

  // Lấy danh sách duy nhất cho các option bộ lọc
  const categories = ['All', ...Array.from(new Set(MOVIES.map(m => m.category)))];
  const countries = ['All', ...Array.from(new Set(MOVIES.map(m => m.country)))];
  const types = ['All', ...Array.from(new Set(MOVIES.map(m => m.type)))];

  // Logic lọc phim
  const filteredMovies = useMemo(() => {
    return MOVIES.filter(movie => {
      const matchCat = filterCategory === 'All' || movie.category === filterCategory;
      const matchCountry = filterCountry === 'All' || movie.country === filterCountry;
      const matchType = filterType === 'All' || movie.type === filterType;
      return matchCat && matchCountry && matchType;
    });
  }, [filterCategory, filterCountry, filterType]);

  const toggleMovie = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
      <div className="min-h-screen bg-gray-50 pb-32 font-sans">

        {/* 1. Header */}
        <header className="bg-white sticky top-0 z-20 shadow-sm">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 p-2 rounded-lg text-white">
                <Film size={20}/>
              </div>
              <h1 className="font-bold text-lg text-gray-900">CineStore</h1>
            </div>
            <div className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {filteredMovies.length} phim
            </div>
          </div>

          {/* 2. Bộ lọc (Filters) */}
          <div className="px-4 pb-3 flex gap-2 overflow-x-auto no-scrollbar">
            <select
                className="appearance-none bg-gray-100 text-gray-900 font-medium text-sm border border-gray-200 rounded-lg py-2 px-4 focus:ring-2 focus:ring-red-500 focus:bg-white outline-none cursor-pointer transition-colors"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
            >
              {categories.map(c => <option key={c} value={c}>{c === 'All' ? 'Tất cả thể loại' : c}</option>)}
            </select>

            <select
                className="appearance-none bg-gray-100 text-gray-900 font-medium text-sm border border-gray-200 rounded-lg py-2 px-4 focus:ring-2 focus:ring-red-500 focus:bg-white outline-none cursor-pointer transition-colors"
                value={filterCountry}
                onChange={(e) => setFilterCountry(e.target.value)}
            >
              {countries.map(c => <option key={c} value={c}>{c === 'All' ? 'Tất cả QG' : c}</option>)}
            </select>

            <select
                className="appearance-none bg-gray-100 text-gray-900 font-medium text-sm border border-gray-200 rounded-lg py-2 px-4 focus:ring-2 focus:ring-red-500 focus:bg-white outline-none cursor-pointer transition-colors"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
            >
              {types.map(c => <option key={c} value={c}>{c === 'All' ? 'Tất cả loại' : c}</option>)}
            </select>
          </div>
        </header>

        {/* 3. Danh sách phim */}
        <main className="p-4 container mx-auto max-w-5xl">
          {filteredMovies.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <Filter size={48} className="mx-auto mb-2 opacity-20"/>
                <p>Không tìm thấy phim nào</p>
              </div>
          ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredMovies.map((movie) => {
                  const isSelected = selectedIds.includes(movie.id);

                  return (
                      <div
                          key={movie.id}
                          // Click vào card để chọn phim
                          onClick={() => toggleMovie(movie.id)}
                          className={`
                    relative group cursor-pointer rounded-xl overflow-hidden transition-all duration-200 border-2 bg-white
                    ${isSelected ? 'border-red-500 ring-2 ring-red-200' : 'border-transparent hover:shadow-lg'}
                  `}
                      >
                        {/* Poster Area */}
                        <div className="aspect-[2/3] relative bg-gray-200">
                          <Image
                              src={movie.image}
                              alt={movie.title}
                              fill
                              className={`object-cover transition-transform duration-500 ${isSelected ? 'scale-105' : 'group-hover:scale-105'}`}
                              sizes="(max-width: 768px) 50vw, 25vw"
                          />

                          {/* Badge: Quốc gia & Loại (Góc trên) */}
                          <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                      <span className="text-[10px] font-bold bg-black/70 text-white px-2 py-0.5 rounded backdrop-blur-sm border border-white/20">
                        {movie.country}
                      </span>
                            <span className="text-[10px] font-bold bg-red-600 text-white px-2 py-0.5 rounded shadow-sm">
                        {movie.type}
                      </span>
                          </div>

                          {/* Nút Xem Trailer (Giữa ảnh) */}
                          <button
                              onClick={(e) => {
                                e.stopPropagation(); // Ngăn việc chọn phim khi bấm nút Play
                                setTrailerId(movie.youtubeId);
                              }}
                              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20"
                          >
                            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/50 hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors text-white">
                              <PlayCircle size={32} fill="currentColor" className="opacity-90" />
                            </div>
                          </button>

                          {/* Icon đã chọn (Check) */}
                          {isSelected && (
                              <div className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow-lg z-10 animate-in zoom-in">
                                <Check size={14} strokeWidth={4} />
                              </div>
                          )}
                        </div>

                        {/* Info Area */}
                        <div className="p-3">
                          <h3 className="font-bold text-sm text-gray-800 line-clamp-1">{movie.title}</h3>
                          <p className="text-xs text-gray-500 mt-1">{movie.category}</p>
                        </div>
                      </div>
                  );
                })}
              </div>
          )}
        </main>

        {/* 4. Bottom Bar */}
        {selectedIds.length > 0 && (
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-4 z-40 animate-in slide-in-from-bottom duration-300">
              <div className="container mx-auto max-w-5xl flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Danh sách chọn</span>
                  <span className="text-xl font-bold text-gray-900">{selectedIds.length} phim</span>
                </div>

                <div className="flex gap-3">
                  <button
                      onClick={() => setSelectedIds([])}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                  >
                    <X size={18} />
                  </button>

                  <button
                      onClick={() => alert(`ID Phim: ${selectedIds.join(', ')}`)}
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-red-200 active:scale-95 transition-all"
                  >
                    <ShoppingBag size={18} />
                    <span>Hoàn tất</span>
                  </button>
                </div>
              </div>
            </div>
        )}

        {/* 5. Modal Trailer (Popup) */}
        {trailerId && (
            <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
              <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
                {/* Nút đóng Modal */}
                <button
                    onClick={() => setTrailerId(null)}
                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Youtube Embed */}
                <iframe
                    src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
              </div>
              {/* Click ra ngoài để đóng */}
              <div className="absolute inset-0 -z-10" onClick={() => setTrailerId(null)}></div>
            </div>
        )}
      </div>
  );
}