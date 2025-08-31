import { useRef, useState, useEffect } from "react";
import { NavigationBar } from "../components/Navigationbar";
import Particles from "../components/ui/Particle";
import TypingText from "../components/ui/text/TypingText";
import SplitText from "../components/ui/text/Splittext";
import { motion } from "framer-motion";
import MetallicSVG from "../components/ui/MetallicPaintSVG";
import SpotlightCard from "../components/ui/SpotlightCard";

function MainPage() {
	return (
		<div>
			{/* 네비게이션 바 */}
			<div className="fixed top-0 left-0 w-full z-50">
				<NavigationBar />
			</div>

			{/* 전체 페이지 배경 Particles */}
			<div className="fixed inset-0 -z-10 pointer-events-none bg-black">
				<Particles
					className="w-full h-full"
					particleColors={["#ffffff", "#ffffff"]}
					particleCount={200}
					particleSpread={10}
					speed={0.1}
					particleBaseSize={100}
					moveParticlesOnHover={true}
					alphaParticles={false}
					disableRotation={false}
				/>
			</div>

			{/* Hero Section */}
			<header className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
				<div className="relative z-10 text-white">
					<TypingText
						className="text-4xl sm:text-6xl font-bold max-w-[90vw] mb-4"
						text={[
							"팀원들과 소통하세요",
							"실제 프로젝트를 관리하세요",
							"진행 상황을 관리하고 협업하세요",
						]}
						typingSpeed={50}
						pauseDuration={1500}
						showCursor={true}
						cursorCharacter="|"
					/>
				</div>
				<SplitText
					text="소통, 관리, 협업을 한 곳에서"
					textAlign="center"
					className="text-white text-2xl"
				/>
				<motion.button
					className="flex gap-4"
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 1.5 }}>
					<button className="mt-5 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
						시작하기
					</button>
				</motion.button>
			</header>

			{/* Feature Section */}
			<motion.div
				initial={{ opacity: 0, y: 30, scale: 0.95 }}
				whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="w-full flex justify-center items-center my-6">
				<SpotlightCard
					spotlightColor="rgba(255, 255, 255, 0.25)"
					className="w-[80vw] min-h-[250px] flex items-center justify-center p-6">
					<MetallicSVG
						svgString={`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>
`}
						params={{
							edge: 2,
							patternBlur: 0.005,
							patternScale: 2,
							refraction: 0.015,
							speed: 0.3,
							liquid: 0.07,
						}}
						width="10%"
						height="10%"
					/>
					<p className="text-lg text-white text-center">
						실시간 채팅 & 메시지 알림
					</p>
				</SpotlightCard>
			</motion.div>
		</div>
	);
}

export default MainPage;
