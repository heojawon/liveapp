import { motion } from "framer-motion";

export default function AboutPage() {
	return (
		<div className="w-full min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white">
			{/* Hero Section */}
			<section className="flex flex-col items-center justify-center h-screen text-center">
				<motion.h1
					className="text-5xl font-bold mb-4"
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}>
					팀워크를 혁신하는 협업 플랫폼
				</motion.h1>
				<motion.p
					className="text-lg text-gray-300 mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}>
					소통 · 관리 · 협업을 한 곳에서
				</motion.p>
				<motion.div
					className="flex gap-4"
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.7 }}>
					<button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-2xl shadow-lg">
						지금 시작하기
					</button>
					<button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-2xl shadow-lg">
						데모 보기
					</button>
				</motion.div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
				{[
					{
						icon: "💬",
						title: "실시간 소통",
						desc: "채팅과 화상회의 지원",
					},
					{
						icon: "📈",
						title: "진행 상황 관리",
						desc: "칸반, 타임라인 제공",
					},
					{
						icon: "🤝",
						title: "팀 협업 최적화",
						desc: "역할 분담과 권한 관리",
					},
					{
						icon: "🔔",
						title: "스마트 알림",
						desc: "중요한 소식만 전달",
					},
				].map((f, i) => (
					<motion.div
						key={i}
						className="bg-gray-800 rounded-2xl p-6 shadow-lg text-center"
						initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: i * 0.2 }}>
						<div className="text-4xl mb-4">{f.icon}</div>
						<h3 className="text-xl font-semibold mb-2">
							{f.title}
						</h3>
						<p className="text-gray-400">{f.desc}</p>
					</motion.div>
				))}
			</section>

			{/* Call to Action */}
			<section className="py-20 text-center bg-gradient-to-r from-indigo-700 to-purple-700">
				<motion.h2
					className="text-3xl font-bold mb-6"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}>
					지금 팀과 함께 새로운 협업을 시작하세요
				</motion.h2>
				<motion.button
					className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-2xl hover:shadow-2xl"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}>
					무료로 시작하기
				</motion.button>
			</section>
		</div>
	);
}
