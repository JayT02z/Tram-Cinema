'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { Film, Filter } from 'lucide-react';
import MOVIES from "@/data/movie";

export default function Home() {
    const [trailerId, setTrailerId] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const [filterCategory, setFilterCategory] = useState('All');
    const [filterCountry, setFilterCountry] = useState('All');
    const [filterType, setFilterType] = useState('All');

    const categories = ['All', ...Array.from(new Set(MOVIES.map(m => m.category)))];
    const countries = ['All', ...Array.from(new Set(MOVIES.map(m => m.country)))];
    const types = ['All', ...Array.from(new Set(MOVIES.map(m => m.type)))];

    const filteredMovies = useMemo(() => {
        return MOVIES.filter(movie => {
            const matchCat = filterCategory === 'All' || movie.category === filterCategory;
            const matchCountry = filterCountry === 'All' || movie.country === filterCountry;
            const matchType = filterType === 'All' || movie.type === filterType;
            return matchCat && matchCountry && matchType;
        }).sort((a, b) => {
            // Sắp xếp theo id giảm dần (phim mới nhất lên đầu)
            return b.id - a.id;
        });
    }, [filterCategory, filterCountry, filterType]);

    // Handle scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to the top of the movie list when filters are changed
    useEffect(() => {
        const movieListElement = document.querySelector('main');
        if (movieListElement) {
            movieListElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, [filterCategory, filterCountry, filterType]);

    return (
        <div className="min-h-screen bg-gray-50 pb-32 font-sans">
            {/* 1. Header - Fixed sticky header with dynamic background */}
            <header className={`fixed top-0 left-0 right-0 z-30 backdrop-blur-md transition-all duration-500 ease-out ${
                isScrolled 
                    ? 'bg-black/90 shadow-xl border-b border-red-500/30 backdrop-blur-lg' 
                    : 'bg-transparent hover:bg-black/30'
            }`}>
                {/* Top row - Brand and movie count */}
                <div className="px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 ">
                        {/* Add a click handler to the logo to reload the page */}
                        <div className={`p-2 rounded-lg text-white border transition-all duration-300 cursor-pointer ${
                            isScrolled 
                                ? 'bg-red-600 border-red-500' 
                                : 'bg-red-600/80 backdrop-blur-sm border-white/20'
                        }`} onClick={() => window.location.reload()}>
                            <Film size={20}/>
                        </div>
                        <h1 className="font-bold text-lg text-white drop-shadow-lg">Tram Cinema</h1>
                    </div>
                    <div className={`text-xs font-medium text-white px-3 py-1 rounded-full border transition-all duration-300 ${
                        isScrolled 
                            ? 'bg-red-600/80 border-red-500/50' 
                            : 'bg-white/20 backdrop-blur-sm border-white/30'
                    }`}>
                        {filteredMovies.length} phim
                    </div>
                </div>

                {/* Bottom row - Filters */}
                <div className="px-4 pb-3 flex gap-2 overflow-x-auto no-scrollbar">
                    <select
                        className={`appearance-none text-white font-medium text-sm border rounded-lg py-2 px-4 focus:ring-2 focus:ring-white/50 outline-none cursor-pointer transition-all min-w-[120px] ${
                            isScrolled 
                                ? 'bg-gray-800/80 border-gray-600 focus:bg-gray-700' 
                                : 'bg-white/20 backdrop-blur-sm border-white/30 focus:bg-white/30'
                        }`}
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        {categories.map(c => <option key={c} value={c} className="text-gray-900 bg-white">{c === 'All' ? 'Tất cả thể loại' : c}</option>)}
                    </select>

                    <select
                        className={`appearance-none text-white font-medium text-sm border rounded-lg py-2 px-4 focus:ring-2 focus:ring-white/50 outline-none cursor-pointer transition-all min-w-[100px] ${
                            isScrolled 
                                ? 'bg-gray-800/80 border-gray-600 focus:bg-gray-700' 
                                : 'bg-white/20 backdrop-blur-sm border-white/30 focus:bg-white/30'
                        }`}
                        value={filterCountry}
                        onChange={(e) => setFilterCountry(e.target.value)}
                    >
                        {countries.map(c => <option key={c} value={c} className="text-gray-900 bg-white">{c === 'All' ? 'Tất cả QG' : c}</option>)}
                    </select>

                    <select
                        className={`appearance-none text-white font-medium text-sm border rounded-lg py-2 px-4 focus:ring-2 focus:ring-white/50 outline-none cursor-pointer transition-all min-w-[100px] ${
                            isScrolled 
                                ? 'bg-gray-800/80 border-gray-600 focus:bg-gray-700' 
                                : 'bg-white/20 backdrop-blur-sm border-white/30 focus:bg-white/30'
                        }`}
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        {types.map(c => <option key={c} value={c} className="text-gray-900 bg-white">{c === 'All' ? 'Tất cả loại' : c}</option>)}
                    </select>
                </div>
            </header>

            {/* --- ENHANCED HERO BANNER WITH EFFECTS --- */}
            <section className="relative w-full h-screen bg-orange-400 overflow-hidden group">

                {/* 1. ẢNH CHO MOBILE (Chỉ hiện khi màn hình nhỏ < 768px) */}
                <div className="block md:hidden absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                    <Image
                        src="/banner-mobile.jpg" // Nhớ đảm bảo bạn đã có file này
                        alt="Tram Cinema Mobile"
                        fill
                        className="object-contain object-center" // Ảnh dọc sẽ khớp với màn hình dọc
                        priority
                        quality={100}
                    />
                </div>

                {/* 2. ẢNH CHO DESKTOP (Chỉ hiện khi màn hình lớn >= 768px) */}
                <div className="hidden md:block absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                    <Image
                        src="/banner.png"
                        alt="Tram Cinema Desktop"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={100}
                    />
                </div>

                {/* Gradient Overlay - Giữ nguyên hiệu ứng làm tối để chữ Header dễ đọc */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/40 pointer-events-none"></div>

                {/* Animated particles - Giữ nguyên hiệu ứng đốm sáng */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse delay-100"></div>
                    <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                </div>
            </section>
            {/* --- END ENHANCED HERO BANNER --- */}

            {/* 2. Danh sách phim (Main Content) */}
            <main className="pt-32 sm:pt-20 p-4 container mx-auto max-w-5xl">
                {/* ... (Giữ nguyên nội dung bên trong Main) ... */}
                {filteredMovies.length === 0 ? (
                    <div className="text-center py-20 text-gray-400">
                        <Filter size={48} className="mx-auto mb-2 opacity-20"/>
                        <p>Không tìm thấy phim nào</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {filteredMovies.map((movie) => {
                            return (
                                <div
                                    key={movie.id}
                                    // Click vào bất kỳ đâu trên card để mở trailer
                                    onClick={() => setTrailerId(movie.youtubeId)}
                                    className="relative group cursor-pointer rounded-xl transition-all duration-200 border-2 bg-white border-transparent hover:shadow-xl hover:border-red-500/30 hover:scale-105 transform"
                                >
                                    {/* Poster Area */}
                                    <div className="aspect-[2/3] relative bg-gray-200 rounded-xl overflow-hidden">
                                        <Image
                                            src={movie.image}
                                            alt={movie.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />

                                        {/* Badge: Quốc gia & Loại (Góc trên trái) */}
                                        <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                                            <span className="text-[10px] font-bold bg-black/70 text-white px-2 py-0.5 rounded backdrop-blur-sm border border-white/20">
                                                {movie.country}
                                            </span>
                                            <span className="text-[10px] font-bold bg-red-600 text-white px-2 py-0.5 rounded shadow-sm">
                                                {movie.type}
                                            </span>
                                        </div>

                                        {/* Dải băng "Mới" ở góc trên phải */}
                                        {movie.new && (
                                            <div className="absolute top-2 right-2 z-20">
                                                <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg border-2 border-white transform -rotate-12 animate-pulse">
                                                    MỚI
                                                </div>
                                            </div>
                                        )}

                                        {/* Overlay tối khi hover */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
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

            {/* 3. Modal Trailer */}
            {trailerId && (
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
                    {/* ... nội dung modal ... */}
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
                        {/* Youtube Embed */}
                        <iframe
                            src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="absolute inset-0 -z-10" onClick={() => setTrailerId(null)}></div>
                </div>
            )}
        </div>
    );
}