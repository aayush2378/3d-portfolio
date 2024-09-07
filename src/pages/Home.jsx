import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Loader from '../components/Loader';
import Island from '../models/Island';

{/* <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */}

const Home = () => {
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

  const [islandScale, islandPosition, islandRotation] = adjustIslandforScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas 
      className="w-full h-screen bg-transparent"
      camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader/>}>
          <directionalLight/>
          <ambientLight/>
          <pointLight/>
          <spotLight/>
          <hemisphereLight/>

          <Island
            position = {islandPosition}
            scale = {islandScale}
            rotation = {islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home