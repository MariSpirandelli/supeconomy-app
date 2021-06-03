import React from 'react'
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './welcome.module.scss'

export default function Welcome() {
  /* const router = useRouter()
  const name = 'Mari' */
  return (
    <>
      {/* <Title>Welcome {name}</Title>
      
      <button
        onClick={() => {
          router.push(`/discover?name=${name}`)
        }}
      >
        click me
      </button> */}

      <div className={styles.publicHome}>
        <div className={styles.greetingImg}>
          <img src='/home-greeting.png' alt='Bem vindo'></img>
        </div>
        <h6>
          <strong>A sua plataforma de economia colaborativa</strong>
        </h6>

        <a href='/login' className='nav-link cursor-pointer' id='signin'>
          <FontAwesomeIcon icon={faSignInAlt} /> Faça já seu login!
        </a>

        <a href='/signup' className='nav-link cursor-pointer' id='signup'>
          <FontAwesomeIcon icon={faUserPlus} />
           Cadastre-se!
        </a>
      </div>
    </>
  )
}
