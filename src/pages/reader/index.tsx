import styled from 'styled-components'
import {useRouter} from 'next/router'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
    const router = useRouter();
  return <Title>Reader {router.query?.name}</Title>
}
