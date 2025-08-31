import Particles from "../components/ui/Particle";

export default function Test() {
	return (
		<div style={{ width: "100%", height: "600px", position: "relative" }}>
			<Particles
				particleColors={["#000000", "#000000"]}
				particleCount={200}
				particleSpread={10}
				speed={0.1}
				particleBaseSize={100}
				moveParticlesOnHover={true}
				alphaParticles={false}
				disableRotation={false}
			/>
		</div>
	);
}
