import React from 'react'
import { useGLTF } from '@react-three/drei'

import SkyScene from '../assets_3d_portfolio/assets/3d/sky.glb'

const Sky = () => {
    const sky = useGLTF(SkyScene);

  return (
    <mesh>
        <primitive object = {sky.scene}></primitive>
    </mesh>
  )
}

export default Sky