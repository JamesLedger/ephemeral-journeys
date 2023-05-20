import { CameraControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

const CameraSetup = () => {
  const { camera } = useThree()

  const x = 10
  const y = 10
  const z = 10

  // Set the initial position for the camera
  camera.position.set(x, y, z)

  return <CameraControls />
}

export default CameraSetup
