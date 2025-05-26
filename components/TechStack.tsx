"use client";

import { useState } from "react";
import Image from "next/image";
import { techStacks } from "@/data/techStacks";
import { categories } from "@/data/categories";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <section id="skills" className="container mx-auto py-16 bg-black text-white">
            <h2 className="text-5xl font-bold mb-16 px-6">기술스택</h2>
            <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-lg">
                <div className="text-center mb-8">
                    <h3 className="text-blue-400 mb-2">기술 스택 및 도구</h3>
                    <h2 className="text-3xl font-bold mb-4">아래의 기술을 사용할 수 있습니다.</h2>
                </div>

                {/* 카테고리 탭 */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white/20 rounded-full px-6 py-2 flex gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key)}
                                className={`px-3 py-1 rounded-full text-sm transition-all ${activeCategory === cat.key
                                    ? "bg-white text-black border border-black"
                                    : "text-white/70 hover:text-white"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 아이콘 목록 */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-4xl mx-auto px-6">
                    {techStacks.map((tech) => {
                        const isActive =
                            activeCategory === "all" || tech.category === activeCategory;
                        return (
                            <div
                                key={tech.name}
                                className={`flex justify-center transition-all duration-300 ${isActive ? "opacity-100" : "opacity-20 grayscale"
                                    }`}
                                title={tech.name}
                            >
                                <Image src={tech.src} alt={tech.name} width={60} height={60} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
