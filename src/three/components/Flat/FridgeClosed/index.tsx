/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useBox } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Cube001: THREE.Mesh
    Cube002: THREE.Mesh
  }
  materials: {}
}

export default function FridgeClosed({ ...props }: JSX.IntrinsicElements['group']) {

  const boxPos = [...props.position as any];
  boxPos[1] += 1

  const [ref] = useBox(() => ({
    args: [1, 2, 1],
    position: boxPos as any,
    rotation: props.rotation as any
  }))

  const group = useRef<THREE.Group>()
  const { nodes } = useGLTF('assets/models/fridgeClosed.gltf') as GLTFResult
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[0, 0, 0]} scale={[0.5, 1, 0.5]} />
      <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[-0.53, -0.51, 0]} scale={[0.03, 0.5, 0.5]} />
      <mesh geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} position={[-0.53, 0.5, 0]} scale={[0.03, 0.5, 0.5]} />
    </group>
  )
}

useGLTF.preload('assets/models/fridgeClosed.gltf')
