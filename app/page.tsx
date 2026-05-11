'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import MOVIES from "@/data/movie";

export default function Home() {
    const [trailerId, setTrailerId] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [filterCategory, setFilterCategory] = useState('All');
    const [filterCountry, setFilterCountry] = useState('All');
    const [filterType, setFilterType] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const mainRef = useRef<HTMLElement>(null);

    const categories = ['All', ...Array.from(new Set(MOVIES.map(m => m.category)))];
    const countries = ['All', ...Array.from(new Set(MOVIES.map(m => m.country)))];
    const types = ['All', ...Array.from(new Set(MOVIES.map(m => m.type)))];

    const filteredMovies = useMemo(() => {
        return MOVIES.filter(movie => {
            const matchCat = filterCategory === 'All' || movie.category === filterCategory;
            const matchCountry = filterCountry === 'All' || movie.country === filterCountry;
            const matchType = filterType === 'All' || movie.type === filterType;
            const matchSearch = searchQuery === '' || movie.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchCat && matchCountry && matchType && matchSearch;
        }).sort((a, b) => b.id - a.id);
    }, [filterCategory, filterCountry, filterType, searchQuery]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [filterCategory, filterCountry, filterType]);

    // Lock body scroll when modal open
    useEffect(() => {
        document.body.style.overflow = trailerId ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [trailerId]);

    const activeFilters = [filterCategory, filterCountry, filterType].filter(f => f !== 'All').length;

    const resetFilters = () => {
        setFilterCategory('All');
        setFilterCountry('All');
        setFilterType('All');
        setSearchQuery('');
    };

    return (
        <div className="min-h-screen relative" style={{ background: 'var(--bg-void)' }}>

            {/* ═══ HEADER ═══ */}
            <header
                className="fixed top-0 left-0 right-0 z-40 transition-all duration-700"
                style={{
                    background: isScrolled
                        ? 'linear-gradient(180deg, rgba(7,6,11,0.97) 0%, rgba(13,12,20,0.95) 100%)'
                        : 'linear-gradient(180deg, rgba(7,6,11,0.8) 0%, transparent 100%)',
                    borderBottom: isScrolled ? '1px solid var(--border-gold)' : '1px solid transparent',
                    backdropFilter: isScrolled ? 'blur(20px) saturate(1.4)' : 'none',
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Top bar */}
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
                            <div className="relative w-9 h-9 rounded-lg overflow-hidden transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                style={{ border: '1.5px solid var(--gold-dim)', boxShadow: '0 0 16px rgba(212,168,67,0.15)' }}>
                                <Image src="/logo.png" alt="Trạm Cinema" fill className="object-cover" sizes="36px" />
                            </div>
                            <div>
                                <h1 className="font-display text-lg font-bold tracking-wide" style={{ color: 'var(--gold-bright)', fontFamily: 'var(--font-display)' }}>
                                    TRẠM
                                    <span style={{ color: 'var(--text-primary)', marginLeft: '6px', fontWeight: 400, letterSpacing: '0.15em', fontSize: '0.85em' }}>
                                        CINEMA
                                    </span>
                                </h1>
                            </div>
                        </button>

                        {/* Movie count + Contact */}
                        <div className="flex items-center gap-3">
                            <span className="hidden sm:block text-xs tracking-wider" style={{ color: 'var(--text-muted)' }}>
                                0903 859 105
                            </span>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                                style={{ background: 'var(--gold-glow)', border: '1px solid var(--border-gold)', color: 'var(--gold-bright)' }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" /><line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="7" x2="22" y2="7" /><line x1="17" y1="17" x2="22" y2="17" />
                                </svg>
                                {filteredMovies.length} phim
                            </div>
                        </div>
                    </div>

                    {/* Filter bar */}
                    <div className="pb-3 flex items-center gap-2 overflow-x-auto no-scrollbar" style={{ animation: 'slideDown 0.5s var(--ease-out-expo) both' }}>
                        {/* Search */}
                        <div className="relative min-w-[160px] sm:min-w-[200px]">
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--gold)' }}>
                                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                            </svg>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                placeholder="Tìm phim..."
                                className="w-full pl-9 pr-3 py-2 rounded-lg text-sm outline-none transition-all focus-gold"
                                style={{
                                    background: 'rgba(212,168,67,0.06)',
                                    border: '1px solid var(--border-subtle)',
                                    color: 'var(--text-primary)',
                                    fontFamily: 'var(--font-body)',
                                }}
                            />
                        </div>

                        {[
                            { value: filterCategory, setter: setFilterCategory, options: categories, label: 'Thể loại' },
                            { value: filterCountry, setter: setFilterCountry, options: countries, label: 'Quốc gia' },
                            { value: filterType, setter: setFilterType, options: types, label: 'Loại' },
                        ].map(({ value, setter, options, label }) => (
                            <select
                                key={label}
                                className="appearance-none text-sm font-medium rounded-lg py-2 px-4 outline-none cursor-pointer transition-all min-w-[110px] focus-gold"
                                style={{
                                    background: value !== 'All' ? 'rgba(212,168,67,0.12)' : 'rgba(212,168,67,0.04)',
                                    border: value !== 'All' ? '1px solid var(--border-gold)' : '1px solid var(--border-subtle)',
                                    color: value !== 'All' ? 'var(--gold-bright)' : 'var(--text-secondary)',
                                    fontFamily: 'var(--font-body)',
                                }}
                                value={value}
                                onChange={e => setter(e.target.value)}
                            >
                                {options.map(c => (
                                    <option key={c} value={c} style={{ background: '#1a1830', color: '#f0ece2' }}>
                                        {c === 'All' ? `Tất cả ${label.toLowerCase()}` : c}
                                    </option>
                                ))}
                            </select>
                        ))}

                        {activeFilters > 0 && (
                            <button
                                onClick={resetFilters}
                                className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all hover:scale-105"
                                style={{ background: 'rgba(232,69,69,0.1)', border: '1px solid rgba(232,69,69,0.3)', color: '#e84545' }}
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                                Xóa lọc
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {/* ═══ HERO BANNER ═══ */}
            <section className="relative w-full overflow-hidden group" style={{ height: '100svh' }}>
                {/* Desktop banner */}
                <div className="hidden md:block absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.03]">
                    <Image src="/banner.png" alt="Trạm Cinema" fill className="object-cover object-center" priority quality={100} />
                </div>
                {/* Mobile banner */}
                <div className="block md:hidden absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.03]">
                    <Image src="/mobile-banner.png" alt="Trạm Cinema Mobile" fill className="object-contain object-center" priority quality={100} />
                </div>

                {/* Cinematic gradient overlays */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'linear-gradient(180deg, rgba(7,6,11,0.5) 0%, transparent 30%, transparent 60%, rgba(7,6,11,0.95) 100%)'
                }} />
                <div className="absolute inset-0 pointer-events-none opacity-30" style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(7,6,11,0.8) 100%)'
                }} />

                {/* Floating golden particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[
                        { top: '20%', left: '15%', size: 3, delay: 0, dur: 4 },
                        { top: '35%', left: '75%', size: 2, delay: 1.5, dur: 5 },
                        { top: '60%', left: '40%', size: 2, delay: 0.8, dur: 3.5 },
                        { top: '75%', left: '85%', size: 3, delay: 2, dur: 4.5 },
                        { top: '45%', left: '25%', size: 1.5, delay: 3, dur: 5.5 },
                    ].map((p, i) => (
                        <div key={i} className="absolute rounded-full" style={{
                            top: p.top, left: p.left,
                            width: p.size, height: p.size,
                            background: 'var(--gold-bright)',
                            animation: `float ${p.dur}s ease-in-out infinite, gentlePulse ${p.dur * 0.8}s ease-in-out infinite`,
                            animationDelay: `${p.delay}s`,
                            boxShadow: '0 0 8px var(--gold)',
                        }} />
                    ))}
                </div>

                {/* Scroll-down indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ animation: 'float 3s ease-in-out infinite' }}>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-medium" style={{ color: 'var(--gold-dim)' }}>Khám phá</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--gold-dim)' }}>
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </section>

            {/* ═══ DECORATIVE DIVIDER ═══ */}
            <div className="relative py-6">
                <div className="gold-divider max-w-xl mx-auto" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6" style={{ background: 'var(--bg-void)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--gold-dim)" opacity="0.6">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                </div>
            </div>

            {/* ═══ MOVIE GRID ═══ */}
            <main ref={mainRef} className="px-4 sm:px-6 pb-32 max-w-7xl mx-auto">
                {/* Section title */}
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                            Phim <span style={{ color: 'var(--gold-bright)' }}>Đang Chiếu</span>
                        </h2>
                        <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                            Chọn phim yêu thích & xem trailer ngay
                        </p>
                    </div>
                </div>

                {filteredMovies.length === 0 ? (
                    <div className="text-center py-24 rounded-2xl" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
                        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4" style={{ color: 'var(--text-muted)' }}>
                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M8 11h6" />
                        </svg>
                        <p className="text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>Không tìm thấy phim nào</p>
                        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
                        <button onClick={resetFilters} className="mt-4 px-5 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                            style={{ background: 'var(--gold-glow)', border: '1px solid var(--border-gold)', color: 'var(--gold-bright)' }}>
                            Xóa bộ lọc
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
                        {filteredMovies.map((movie, index) => (
                            <div
                                key={movie.id}
                                onClick={() => setTrailerId(movie.youtubeId)}
                                onMouseEnter={() => setHoveredId(movie.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="card-stagger relative group cursor-pointer rounded-xl overflow-hidden transition-all duration-500"
                                style={{
                                    animationDelay: `${Math.min(index * 60, 600)}ms`,
                                    background: 'var(--bg-card)',
                                    border: hoveredId === movie.id ? '1px solid var(--border-gold)' : '1px solid var(--border-subtle)',
                                    boxShadow: hoveredId === movie.id ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
                                    transform: hoveredId === movie.id ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
                                }}
                            >
                                {/* Poster */}
                                <div className="aspect-[2/3] relative overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
                                    <Image
                                        src={movie.image}
                                        alt={movie.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                    />

                                    {/* Top badges */}
                                    <div className="absolute top-2 left-2 flex flex-col gap-1 items-start z-10">
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md"
                                            style={{ background: 'rgba(7,6,11,0.75)', color: 'var(--gold-light)', border: '1px solid var(--border-gold)' }}>
                                            {movie.country}
                                        </span>
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md"
                                            style={{ background: 'var(--navy)', color: '#ffffff', border: '1px solid var(--navy-light)' }}>
                                            {movie.type}
                                        </span>
                                    </div>

                                    {/* "New" badge */}
                                    {movie.new && (
                                        <div className="absolute top-2 right-2 z-10">
                                            <div className="text-[9px] font-extrabold px-2 py-1 rounded-full shadow-lg -rotate-12"
                                                style={{
                                                    background: 'linear-gradient(135deg, var(--gold-bright), var(--gold))',
                                                    color: 'var(--bg-void)',
                                                    border: '2px solid var(--gold-light)',
                                                    animation: 'gentlePulse 2s ease-in-out infinite',
                                                    boxShadow: '0 2px 12px rgba(212,168,67,0.4)',
                                                }}>
                                                MỚI
                                            </div>
                                        </div>
                                    )}

                                    {/* Hover overlay with play button */}
                                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100"
                                        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(7,6,11,0.7) 100%)' }}>
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 scale-75 group-hover:scale-100"
                                            style={{ background: 'rgba(212,168,67,0.9)', boxShadow: '0 0 30px rgba(212,168,67,0.5)' }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--bg-void)">
                                                <polygon points="8,5 20,12 8,19" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-3">
                                    <h3 className="font-semibold text-sm line-clamp-1" style={{ color: 'var(--text-primary)' }}>
                                        {movie.title}
                                    </h3>
                                    <p className="text-[11px] mt-1 font-medium" style={{ color: 'var(--gold-dim)' }}>
                                        {movie.category}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* ═══ FOOTER ═══ */}
            <footer className="relative py-10" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-sm font-medium" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-dim)' }}>
                        TRẠM CINEMA
                    </p>
                    <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
                        139 Đường 28, Phường An Lạc, Hồ Chí Minh • 0903 859 105
                    </p>
                    <p className="text-[10px] mt-3" style={{ color: 'var(--text-muted)', opacity: 0.5 }}>
                        © 2025 Trạm Cinema. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* ═══ TRAILER MODAL ═══ */}
            {trailerId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
                    style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}
                    onClick={() => setTrailerId(null)}>

                    {/* Close button */}
                    <button
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
                        style={{ background: 'rgba(212,168,67,0.15)', border: '1px solid var(--border-gold)', color: 'var(--gold-bright)' }}
                        onClick={(e) => { e.stopPropagation(); setTrailerId(null); }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="modal-content relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden"
                        style={{ boxShadow: 'var(--shadow-modal)', border: '1px solid var(--border-gold)' }}
                        onClick={e => e.stopPropagation()}>
                        <iframe
                            src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&rel=0`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ background: '#000' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}