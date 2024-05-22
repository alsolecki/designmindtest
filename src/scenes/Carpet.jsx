import React, { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

const Carpet = ({ position }) => {

    const floorRef = useRef()

    const [hovered, hover] = useState(false)

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    const [
        carpetTexture
    ] = useTexture([
        '/textures/FLPines-Carpet01.jpeg'
    ])

    carpetTexture.repeat.x = 6;
    carpetTexture.repeat.y = 6;
    carpetTexture.wrapS= THREE.RepeatWrapping;
    carpetTexture.wrapT= THREE.RepeatWrapping;


    return (

        <mesh
            castShadow
            receiveShadow
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onClick={() => console.log('Carpet Clicked!')}
            position={position}
        >
            <boxGeometry args={[20, 0.5, 12]} />
            <meshBasicMaterial
                //color={'hsl(270, 50%, 75%)'}
                map={carpetTexture}

            />
        </mesh>

    )
}

export default Carpet