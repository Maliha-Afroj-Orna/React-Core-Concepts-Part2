export default function Post ({post}) {
    const { title } = post;
    return (
        <div className="card">
            <h3>Title: {title}</h3>
        </div>
    )
}

