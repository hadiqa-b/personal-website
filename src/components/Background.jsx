import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'

export default function Background() {
  return (
    <>
      <ShaderGradientCanvas
        fov={45}
        pixelDensity={1}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -2,
          pointerEvents: 'none',
          backgroundColor: '#000000',
        }}
      >
        <ShaderGradient
          type="plane"
          animate="on"
          uTime={0}
          uSpeed={0.3}
          uStrength={4}
          uDensity={1.3}
          uFrequency={5.5}
          uAmplitude={1}
          positionX={-1.4}
          positionY={0}
          positionZ={0}
          rotationX={0}
          rotationY={10}
          rotationZ={50}
          color1="#6b2d0f"
          color2="#4a1a0a"
          color3="#5c1a30"
          reflection={0.1}
          lightType="3d"
          brightness={1.2}
          grain="on"
          cAzimuthAngle={180}
          cPolarAngle={90}
          cDistance={3.6}
          cameraZoom={1}
          shader="defaults"
          wireframe={false}
          range="disabled"
        />
      </ShaderGradientCanvas>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          backgroundColor: 'rgba(40, 24, 12, 0.30)',
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          opacity: 0.12,
          mixBlendMode: 'overlay',
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '256px 256px',
        }}
      />
    </>
  )
}
