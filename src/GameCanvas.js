import React, { useRef, useEffect } from "react"
import { Canvas, useThree, useLoader } from "@react-three/fiber"
import { Stage, CameraControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function Character(props) {
  const groupRef = useRef()
  const gltf = useLoader(GLTFLoader, props.src)

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} />
    </group>
  )
}

function CameraController() {
  const { camera } = useThree()
  const controlsRef = useRef()

  useEffect(() => {
    // Set the camera controls to limit the polar angle range
    // (angle between the camera position and the y-axis)
    controlsRef.current.minPolarAngle = Math.PI / 4
    controlsRef.current.maxPolarAngle = Math.PI / 2

    // Set a minimum distance between the camera and the ground plane
    controlsRef.current.minDistance = 10
  }, [])

  return <CameraControls ref={controlsRef} args={[camera]} />
}

function GameCanvas() {
  return (
    <Canvas>
      <CameraController />
      <Stage>
        <Character src="./TestWorld.glb" />
      </Stage>
    </Canvas>
  )
}

export default GameCanvas
