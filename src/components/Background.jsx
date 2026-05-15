import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'

export default function Background() {
  return (
    <>
      <ShaderGradientCanvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -2,
          pointerEvents: 'none',
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.4&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%236b2d0f&color2=%234a1a0a&color3=%235c1a30&envPreset=lobby&grain=on&lightType=env&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uAmplitude=1&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=1.5&uTime=0"
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
          backgroundColor: 'rgba(29, 32, 33, 0.35)',
        }}
      />
    </>
  )
}
