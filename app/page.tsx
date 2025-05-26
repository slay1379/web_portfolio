"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MessageSquare, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white text-base md:text-lg">
      <nav className="sticky top-0 z-50 bg-zinc-900 px-6 py-2 flex gap-4 justify-center backdrop-blur-md rounded-none">
        <a href="#about" className="text-gray-400 hover:text-white">About me</a>
        <a href="#interview" className="text-gray-400 hover:text-white">Interview</a>
        <a href="#skills" className="text-gray-400 hover:text-white">기술스택</a>
        <a href="#projects" className="text-gray-400 hover:text-white">프로젝트</a>
      </nav>
      {/* 헤더 섹션 */}
      <header id="home" className="h-screen flex flex-col justify-center items-center text-center container mx-auto">
        <div className="flex justify-center mb-8">
          <Image src="/logo.jpg" alt="로고" width={300} height={300} className="rounded-full" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">안녕하세요,</h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-2">백엔드 개발자</h2>
        <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-8">김태헌입니다.</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Java를 중심으로 웹 프로젝트를 개발합니다.
          <br />
          왜?를 생각하며 집요하게 물고 늘어지려고 합니다.
        </p>
        <Button variant="outline" className="rounded-full px-6 mb-8">
          이력서 다운로드 <span className="ml-2">↓</span>
        </Button>
      </header>

      {/* About Me 섹션 */}
      <section id="about" className="container mx-auto py-16 bg-zinc-900">
        <h2 className="text-5xl font-bold mb-4 px-6">About me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6">
          <div className="md:w-1/2 flex justify-center">
            <Image src="/logo2.jpg" alt="아바타" width={300} height={300} className="h-auto" />
          </div>
          <div className="md:w-1/2">
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">#열정적인</span>
              <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">#책임감있는</span>
              <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">#트렌드 수용</span>
              <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">#끊임없는 배움</span>
            </div>
            <p className="text-lg text-white font-semibold mb-2">
              직관적인 편리함을 위한 개발
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              문제 해결은 어릴 때부터의 즐거운 놀이였습니다.<br />
              사용자 입장에서 작동하는 서비스를 만들고자, 복잡함은 감추고 본질만 남기는 개발을 지향합니다.<br />
              작은 불편을 놓치지 않고, 흐름을 부드럽게 만드는 코드를 고민합니다.
            </p>
            <Button variant="outline" className="rounded-full px-6 mt-6">
              팀원 리뷰 보기 <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* 인터뷰 섹션 */}
      <section id="interview" className="container mx-auto py-16">
        <h2 className="text-5xl font-bold mb-16 px-6">Interview</h2>
        <div className="grid gap-8 px-6">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Q. 협업 시 가장 중요하게 생각하는 부분은?</h3>
            <p className="text-gray-400">
              원활한 협업을 위해 <span className="text-white">소통</span>을 최우선으로 생각합니다.
              <br />
              작업 내용을 투명하게 공유하고, 문제가 생기면 빠르게 공유하여 함께 해결하려고 노력합니다.
              <br />
              GitHub, Slack, Figma 등 협업 도구를 적극 활용하며, 팀의 목표와 일정에 맞춰 <span className="text-white">유연하게 대응</span>하려고 합니다.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Q. 본인의 강점은 무엇이라고 생각하나요?</h3>
            <p className="text-gray-400">
              <span className="text-white">문제 해결 능력과 끈기</span>입니다.
              <br />
              어려운 문제를 마주했을 때 포기하지 않고 끝까지 파고들며, 다양한 방법을 시도해 해결책을 찾아내는 과정을 즐깁니다.
              <br />
              또한, 새로운 기술을 빠르게 익히고 적용하는 데 강점이 있습니다.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Q. 기술 외적으로 중요하게 생각하는 역량은?</h3>
            <p className="text-gray-400">
              <span className="text-white">책임감과 협업 능력</span>을 가장 중요하게 생각합니다.
              <br />
              개발자는 혼자 일하는 직업이 아니라 팀과 함께 완성해 나가는 직업이라고 생각합니다.
              <br />
              맡은 일을 끝까지 책임지고, 동료와 함께 성장해가는 태도를 항상 유지하려고 노력합니다.
            </p>
          </div>
        </div>
      </section>


      {/* 기술 스택 섹션 */}
      <TechStack />

      {/* 프로젝트 섹션 */}
      <section id="projects" className="container mx-auto py-16">
        <h2 className="text-5xl font-bold mb-16 px-6">프로젝트</h2>
        <div className="grid gap-6 px-6 max-w-6xl mx-auto">
          <div className="border border-green-500 rounded-2xl p-6 bg-zinc-900">
            <h1 className="text-5xl font-bold text-green-400 mb-1">Localens</h1>
            <h3 className="text-xl font-bold text-green-400 mb-3">상권 분석 플랫폼</h3>

            <div className="flex flex-wrap gap-2 mb-3">
              {["Spring Boot", "MySQL", "InfluxDB", "AWS", "Docker", "Redis", "Python", "Pandas"].map((tech) => (
                <span key={tech} className="text-sm bg-white text-black px-2 py-1 rounded-full">{tech}</span>
              ))}
            </div>

            <div className="text-xs text-gray-400 mb-2">
              2024.09 ~ 2025.12 (4명) / 2025.01 ~ 2025.02 (리팩토링)(2명)
            </div>

            <p className="text-base text-gray-300 mb-1">통신사 기반 유동인구 데이터를 활용한 상권 분석 플랫폼</p>
            <ul className="text-base text-gray-400 list-disc list-inside">
              <li>시간대별 유동인구 및 체류인구 분석 지표 제공</li>
              <li>InfluxDB 기반 시계열 데이터 최적화 저장 및 쿼리</li>
              <li>사용자 정의 파생 지표 생성 및 시각화</li>
              <li>Spring Boot 기반 API 서버 및 DB 분리 구조 설계</li>
              <li>React + Recharts를 통한 상권별 변화 트렌드 시각화</li>
              <li>Docker & GitHub Actions를 통한 CI/CD 자동화</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 감사 인사 섹션 */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-7xl font-bold mb-4">Thank You</h2>
          <p className="text-2xl mb-8">봐주셔서 감사합니다 :)</p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            백엔드 개발자로 성장하기 위해 낯선 기술에도 적극적으로 도전하고,
            <br />
            항상 사용자의 관점에서 생각하며 사용하기 좋은 서비스를 만들고 싶습니다.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#" className="border-b-2 border-black pb-1">
              GitHub
            </Link>
            <Link href="#" className="border-b-2 border-black pb-1">
              Velog
            </Link>
          </div>
        </div>
        <div className="container mx-auto mt-16 text-center text-gray-500 text-sm">
          <p>Copyright 2025. kimtaeheon all rights reserved.</p>
          <p>React, Styled Components, Tailwind CSS 기반으로 제작된 사이트입니다.</p>
        </div>
      </section>

      {/* 플로팅 버튼 */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-2">
        <Button variant="secondary" size="icon" className="rounded-full">
          <Mail className="h-5 w-5" />
        </Button>
        <Button variant="secondary" size="icon" className="rounded-full">
          <MessageSquare className="h-5 w-5" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
