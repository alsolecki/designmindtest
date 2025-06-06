import { Canvas } from "@react-three/fiber"

import Experience from './Experience'
import Gear1 from "./Gear1"
import Gear2 from "./Gear2"
import Gear3 from "./Gear3"
import Gear4 from "./Gear4"
import Gear5 from "./Gear5"
import Gear6 from "./Gear6"
import TDMLogo1 from "./TDMLogo1"
import Brainlines from "./Brainlines"
import Braindots from "./Braindots"


function App() {

  return (
    <>
      <div className="logo_container">
        <TDMLogo1 />
      </div>

      <div>
        <Brainlines className="brain_container" />
        <Braindots className="brain_container" />
        <Gear1 />
        <Gear2 />
        <Gear3 />
        <Gear4 />
        <Gear5 />
        <Gear6 />
      </div>


      {/* <Canvas
        shadows
        camera={{ fov: 65, near: 0.1, far: 2500, position: [10, 15, 10] }}>
        <color attach='background' args={['rgb(40, 40, 40)']} />
        <Experience />
      </Canvas> */}
    </>
  )
}

export default App
