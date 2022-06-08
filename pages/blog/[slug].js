// import styles from '../../styles/Card.module.css'

import { useRouter } from 'next/router'

const Blog = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>Post: {slug}</p>
}

export default Blog

