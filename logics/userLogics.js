var userdb = require('../model/model');

//create new user

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"There is no data"});
        return;
    }

    const user=new userdb({
        name:req.body.name,
        mobile:req.body.mobile,
        email:req.body.email,
        job:req.body.job,
        dob:req.body.dob,
        location:req.body.location
    })

    user
    .save(user)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Something went wrong",
        });
    })
}

//get all users data

exports.find=(req,res)=>{
//find single user
    if(req.query.id){
        const id= req.query.id;
        userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found user with id"+id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error while retrieving user"})

        })
    }
//get all users
userdb.find()
.then(user=>{
    res.send(user)
})
.catch(err=>{
    res.status(500).send({message:err.message || "Error while retreiving data"})
})
}

//update a new user by id

exports.update=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"No data to update"});
        return;
    }

    const id= req.params.id;
    userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`User with ${id} not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error while updating user"})
    })

}

//delete a user
exports.delete=(req,res)=>{
    const id = req.params.id;

    userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot delete user with ${id} `})
        }else{
            res.send({message:"User deleted"})
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Unable to delete user"})
    })

}