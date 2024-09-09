import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import SkyScene from '../assets_3d_portfolio/assets/3d/sky.glb'

const Sky = ({isRotating}) => {
    const sky = useGLTF(SkyScene);
    const skyRef = useRef();

    useFrame((_, delta) => {
      if(isRotating){
        skyRef.current.rotation.y += 0.5*delta;
      }
    })

  return (
    <mesh ref={skyRef}>
        <primitive object = {sky.scene}></primitive>
    </mesh>
  )
}

export default Sky