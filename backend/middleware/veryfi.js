import jwt from 'jsonwebtoken'

export const verify=(req,res,next)=>{
    try {
        const token=req.headers.token
        if(token){
            const accessToken=token.split(" ")[1]
            jwt.verify(accessToken,process.env.KEY_TOKEN,(err,decoded)=>{
                if(err){
                    return res.send({message:'token khong ton tai'})
                }
                req.user=decoded
            })
        
            next()
        }
        else{
            return res.send({message:'ban khong duoc phan quyen'})
        }
    } catch (error) {
        return res.send({message:'something is wrong'})
    }
}

export const isAdmin=(req,res,next)=>{
    verify(req,res,()=>{
        if(req.user.role|| req.user.id===req.params.id){
            next()
        }
        else{
            return res.send({message:'ban khong phai admin'})
        }
    })
}