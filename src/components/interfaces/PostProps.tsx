import { Author } from "./Author";
import { Content } from "./Content";


export interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}