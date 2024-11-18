import {useAppSelector} from "@/app/hooks";
import AddPostForm from "@/features/posts/AddPostForm";

export function PostList() {
    const posts = useAppSelector(state => state.posts);

    const renderedPosts = posts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}