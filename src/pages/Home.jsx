import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird'
import Plane from '../models/Plane'

{/* <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */}

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandforScreenSize = () => {
    let screenScale = null
    let screenPostion = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];
    }else{
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPostion, rotation];
  }

  const adjustPlaneforScreenSize = () => {
    let screenScale, screenPostion;

    if(window.innerWidth < 768){
      screenScale = [1.5, 1.5, 1.5];
      screenPostion = [0, -1.5, 0];
    }else{
      screenScale = [3, 3, 3];
      screenPostion = [0, -4, -4];
    }

    return [screenScale, screenPostion];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandforScreenSize();
  const [planeScale, planePosition] = adjustPlaneforScreenSize();
  return (
    <section className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing': 'cursor-grab'}`}>
      <Canvas 
      className="w-full h-screen bg-transparent"
      camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader/>}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

          <Bird/>
          <Sky/>
          <Island
            position = {islandPosition}
            scale = {islandScale}
            rotation = {islandRotation}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
          />
          <Plane
            position = {planePosition}
            scale = {planeScale}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home