import React from 'react'

import planeScene from '../assets_3d_portfolio/assets/3d/plane.glb'
import { useGLTF } from '@react-three/drei'

const Plane = () => {
  const { scene, animations } = useGLTF(planeScene); 
  return (
    <mesh>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Plane