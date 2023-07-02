import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Posts.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { PostProps } from '../interfaces/PostProps';


export function Post({author, publishedAt, content}: PostProps){
        
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>){
        
        e.target.setCustomValidity("")
        setNewCommentText(e.target.value);
    }

    function handleCreateNewComment(e: FormEvent){
        e.preventDefault()


        setComments([...comments, newCommentText])
        setNewCommentText("")
    }

    function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>){
        e.target.setCustomValidity("Esse campo é obrigatório!")
    }

    function deleteComment(commentToDelete: string){
        const commentsWhitoutDeletedOne =  comments.filter(comment => {
            return comment !== commentToDelete
        })  

    setComments(commentsWhitoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0 

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                    </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>  

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                name='comment'
                placeholder='Deixe seu comentário'
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button> 
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />)
                })}
            </div>
        </article>
    );
}