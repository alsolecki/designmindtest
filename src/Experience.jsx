import React, { useRef, forwardRef } from 'react'
import { CameraControls, useGLTF } from '@react-three/drei'
import { suspend } from 'suspend-react'


const suzi = import('@pmndrs/assets/models/suzi.glb')

const Suzi = forwardRef((props, ref) => {
    const { nodes } = useGLTF(suspend(suzi).default)
    return (
        <mesh ref={ref} castShadow receiveShadow geometry={nodes.mesh.geometry} {...props}>
            <meshStandardMaterial color="#9d4b4b" />
        </mesh>
    )
})


const Experience = () => {

    const cameraControlsRef = useRef()
    const directionalLightRef = useRef()
    const directionalLightRef2 = useRef()

    return (
        <>
            <CameraControls
                ref={cameraControlsRef}
            />

            <ambientLight intensity={0.5} />

            <directionalLight
                castShadow
                ref={directionalLightRef}
                position={[0, 20, 30]}
                intensity={2}
                color={'rgb(200, 0, 0)'}
            />
            <directionalLight
                castShadow
                ref={directionalLightRef2}
                position={[0, 20, -30]}
                intensity={2}
                color={'rgb(0, 200, 0)'}
            />

            <Suzi scale={[1.5, 1.5, 1.5]} position={[3, 2.75, 0]} rotation={[-0.63, 0, 0]}/>
            <mesh position={[3, 0, 0]}>
                <boxGeometry args={[3, 3, 2]} />
                <meshPhongMaterial color={'hsl(100, 100%, 50%)'} />
            </mesh>

            <Suzi scale={[2, 2, 2]} position={[0, 4, 0]} rotation={[-0.63, 0, 0]} />
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[4, 4, 4]} />
                <meshPhongMaterial color={'hsl(100, 50%, 50%)'} />
            </mesh>

            <Suzi scale={[1.25, 1.25, 1.25]} position={[-3, 3, 0]} rotation={[-0.63, 0, 0]} />
            <mesh position={[-3, 0.25, 0]}>
                <boxGeometry args={[3, 3.5, 2]} />
                <meshPhongMaterial color={'hsl(150, 50%, 50%)'} />
            </mesh>
        </>

    )
}

export default Experience