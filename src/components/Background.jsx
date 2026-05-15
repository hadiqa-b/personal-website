export default function Background() {
  return (
    <iframe
      src="https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%236b2d0f&color2=%231d2021&color3=%23331a40&embedMode=off&envPreset=lobby&format=gif&fov=45&frameRate=10&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=disabled&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uAmplitude=1&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        border: 'none',
        pointerEvents: 'none',
      }}
      title="background"
    />
  )
}
