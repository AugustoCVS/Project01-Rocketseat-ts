export interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}