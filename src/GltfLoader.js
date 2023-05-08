import React, { useRef } from "react"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function GLTFModel(props) {
  const groupRef = useRef()
  const gltf = useLoader(GLTFLoader, props.src)

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} />
    </group>
  )
}

export default GLTFModel
