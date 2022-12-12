import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { GetStaticPropsContext } from 'next'

const Post = ({ post }: any) => {
    return (
        <Container>
            <h2>The details of user {`${post.name}`} is : </h2>
            <Box sx={{ backgroundColor: '#befad7' }}> {`${JSON.stringify(post)}`} </Box>
        </Container>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const posts = await res.json()
    const paths = posts.map((post: any) => ({
        params: { userId: `${post.id}` },
    }))

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params?.userId}`)
    const post = await res.json()

    return {
        props: { post },
    }
}

export default Post