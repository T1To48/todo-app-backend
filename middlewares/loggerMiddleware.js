import { logger } from "../helpers/logger.js"

export const logRequests=(req,res,next)=>{
    const{method,content}=req.body
    
    logger.info({
        method:method,
        content:content

    })
    delete req.body.method
    
    next()
}