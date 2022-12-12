import Page1 from './page1'
import Page2 from './page2'
import styles from '../components/Button.module.css'
import { Button } from '@mui/material'

import Link from 'next/link'

export default function Blog({ posts }: any) {
  return (
    <>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/${post.id}`}>
              {post.name}
            </Link>
          </li>
        ))}
      </ul>
      <Button className={styles.error}>Click Here</Button>
      <Page1 />
      <hr />

      <Page2 />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
