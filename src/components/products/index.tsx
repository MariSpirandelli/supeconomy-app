import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Products() {
  const router = useRouter()
  let [name, setName] = React.useState('Mari')
  return (
    <>
      <Title>Products {name}</Title>
      <input
        placeholder='Seu nome'
        onChange={(event) => setName(event.target.value)}
      />
      <button
        onClick={() => {
          router.push(`/products?name=${name}`)
        }}
      >
        click me
      </button>
    </>
  )
}
