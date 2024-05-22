import React, { useRef, forwardRef } from 'react'
import { CameraControls, useGLTF } from '@react-three/drei'
import { suspend } from 'suspend-react'
import Artifact from './scenes/Artifact'
import { useControls, button, buttonGroup, folder } from 'leva'

import { CylinderGeometry, MeshPhongMaterial } from 'three'
import Pinetrunk from './scenes/PinetreeTrunk'
import Carpet from './scenes/Carpet'
import InnerStructure from './scenes/structures/InnerStructure'
import { DEG2RAD } from 'three/src/math/MathUtils.js'


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

    //Leva Controls
    const { enabled, verticalDragToForward, dollyToCursor, infinityDolly } = useControls({
        thetaGrp: buttonGroup({
            label: 'rotate theta',
            opts: {
                '+45deg': () => cameraControlsRef.current?.rotate(45 * DEG2RAD, 0, true),
                '+15deg': () => cameraControlsRef.current?.rotate(15 * DEG2RAD, 0, true),
                '-45deg': () => cameraControlsRef.current?.rotate(-45 * DEG2RAD, 0, true),
                '-15deg': () => cameraControlsRef.current?.rotate(-15 * DEG2RAD, 0, true)
            }
        }),
        phiGrp: buttonGroup({
            label: 'rotate phi',
            opts: {
                '+10deg': () => cameraControlsRef.current?.rotate(0, 10 * DEG2RAD, true),
                '-10deg': () => cameraControlsRef.current?.rotate(0, -10 * DEG2RAD, true)
            }
        }),
        truckGrp: buttonGroup({
            label: 'truck', 
            opts: {
                'L1': () => cameraControlsRef.current?.truck(-10, 0, true),
                'R1': () => cameraControlsRef.current?.truck(10, 0, true)
            }
        }),
        dollyGrp: buttonGroup({
            label: 'dolly',
            opts: {
                '+5': () => cameraControlsRef.current?.dolly(5, true),
                '-5': () => cameraControlsRef.current?.dolly(-5, true)
            }
        }),
        elevGrp: buttonGroup({
            label: 'elevate',
            opts: {
                '+1': () => cameraControlsRef.current?.elevate(1, true),
                '-1': () => cameraControlsRef.current?.elevate(-1, true),
            }
        })
    })

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
                color={'rgb(250, 250, 250)'}
            />
            <directionalLight
                castShadow
                ref={directionalLightRef2}
                position={[0, 20, -30]}
                intensity={2}
                color={'rgb(250, 250, 250)'}
            />

            {/* <Suzi scale={[1.5, 1.5, 1.5]} position={[3, 2.75, 0]} rotation={[-0.63, 0, 0]} />
            <mesh position={[3, 0, 0]}>
                <boxGeometry args={[3, 3, 2]} />
                <meshPhongMaterial color={'hsl(100, 100%, 50%)'} />
            </mesh> */}

            <Artifact
                path={'/floridamap/floridamap.gltf'}
                position={[0, 0, 0]}
                scale={3.275}
            />

            {/* <InnerStructure position={[0, 0, 10]}/> */}

            <Pinetrunk position={[4.75, 5.25, -4.45]} />
            <Pinetrunk position={[-4.75, 5.25, -4.45]} />

            <Carpet position={[0, -0.275, 0]} />


            {/* <mesh
                position={[0, -0.275, 0]}
            >
                <boxGeometry args={[20, 0.5, 12]} />
                <meshPhongMaterial
                    color={'hsl(70, 50%, 75%)'}
                />
            </mesh> */}

        </>

    )
}

export default Experience