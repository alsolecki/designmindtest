import React, { useMemo, useRef, useState, useEffect } from 'react'
import { useGLTF } from "@react-three/drei"


const InnerStructure = ({ position, scale } ) => {

    const artifactRef = useRef()
    const memoizedArtifact = useMemo(() => {
        return useGLTF('/floridamap/innerStructure/innerStructure.gltf')
    })

    const [hovered, hover] = useState(false)

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
        <mesh
            castShadow
            receiveShadow
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onClick={() => console.log('Inner Structure Clicked!')}
            position={position}
        >
            <primitive 
                ref={artifactRef}
                object={memoizedArtifact.scene}
                scale={3.275}
            />
        </mesh>
    )
}

export default InnerStructure