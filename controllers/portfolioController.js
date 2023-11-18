const sendEmailController=(req,res)=>{

try{
return res.status(200).send({
    success:true,
    message:"Your message send successfully",
    
})
}
catch(err){
    console.log(err)
    return res.status(500).send({
        success:false,
        message:"send email api error",
        err
    })
}

}

module.exports={sendEmailController}