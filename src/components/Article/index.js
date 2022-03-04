import Link from 'next/link';

import { ArticleComponent } from "./styles"

export const Article = ({ article }) => {
    const { 
        slug, 
        title, 
        createdAt, 
        description, 
        tags 
    } = article

    return (
        <Link href={`/${slug}`} passHref>
            <ArticleComponent>
                <span className="published_at">{createdAt}</span>
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
                <p className="tags">{tags}</p>
            </ArticleComponent>
        </Link>
    )
} 