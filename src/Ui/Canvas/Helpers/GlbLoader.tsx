import React from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useLoader } from "@react-three/fiber"

interface GLTFModelProps {
  path: string
}

const GLTFModel: React.FC<GLTFModelProps> = ({ path }) => {
  const gltf = useLoader(GLTFLoader, path)

  return <primitive object={gltf.scene} />
}

export default GLTFModel
