import express from 'express'
import debug from 'debug';
import  jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import createCommentUsecase from '../../../domain/usecases/comment/create.comment.usecase';


class commentController {
    async createComment(req: express.Request, res: express.Response) {
        try { 
            const postid = Number(req.params.id )
            const content = req.body.content 
            const author = req.username
            const userid = Number(req.userid)
            //console.log(postid, content, author, userid)
            const comment = await createCommentUsecase.execute({
                author,
                content,
                postid,
                userid
            })
            console.log(comment)
            return res.status(201).send(comment)
        } catch(error) {
            return res.status(500).send("Erro interno, tente mais tarde")
           
        }
    }
}

export default new commentController()