import React, { useRef, useState, useEffect } from 'react'
import { useTexture } from '@react-three/drei'

const Pinetrunk = ({ position }) => {

    const pinetreeRef = useRef()

    const [hovered, hover] = useState(false)

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    const [
        pinebarkTexture,
        pinebarkNormalMap,
        pinebarkAoMap
    ] = useTexture([
        '/pine_bark_4k/textures/pine_bark_diff_4k.jpg',
        '/pine_bark_4k/textures/pine_bark_nor_gl_4k.jpg',
        '/pine_bark_4k/textures/pine_bark_arm_4k.jpg'
    ])

    return (

        <mesh
            castShadow
            receiveShadow
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onClick={() => console.log('Pinetree Trunk Clicked!')}
            position={position}
        >
            <cylinderGeometry args={[0.75, 0.75, 10.5, 32]} />
            <meshPhongMaterial
                //color={'hsl(270, 50%, 75%)'}
                map={pinebarkTexture}
                normalMap={pinebarkNormalMap}
                aoMap={pinebarkAoMap}
            />
        </mesh>

    )
}

export default Pinetrunk