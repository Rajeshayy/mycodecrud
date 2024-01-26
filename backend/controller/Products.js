import Products from "../models/ProductModel.js";
import Users from "../models/UserModel.js";

export const getProducts = async (req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Products.findAll({
                attributes:['uuid','fname','lname','regdno','dept','status'],
                include:[{
                    model: Users,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Products.findAll({
                attributes:['uuid','fname','lname','regdno','dept','status'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: Users,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}


export const getProductById = async(req,res)=>{
    try {
        const product = await Products.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data not found"});
        let response;
        if(req.role === "admin"){
            response = await Products.findOne({
                attributes:['uuid','fname','lname','regdno','dept','status'],
                where:{
                    id: product.id
                },
                include:[{
                    model: Users,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Products.findOne({
                attributes:['uuid','fname','lname','regdno','dept','status'],
                where:{
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                },
                include:[{
                    model: Users,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
    
}


export const createProduct = async(req, res) =>{
    const {fname,lname,regdno,dept,status,date} = req.body;
    console.log(req.body)
    try {
        await Products.create({
            fname:fname,
            lname:lname,
            regdno:regdno,
            dept:dept,
            status:status,
            date:date,
            userId:req.userId
        });
        res.status(201).json({msg: "Attendance Saved Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateProduct = async(req, res) =>{
    try {
        const product = await Products.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data not found!"});
        const {fname,lname,regdno,dept,status,date} = req.body;
        if(req.role === "admin"){
            await Products.update({fname,lname,regdno,dept,status,date},{
                where:{
                    id: product.id
                }
            });
        }else{
            if(req.userId !== product.userId) return res.status(403).json({msg: "Access Prohibited!"});
            await Products.update({fname,lname,regdno,dept,status,date},{
                where:{
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Product updated successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteProduct = async(req, res) =>{
    try {
        const product = await Products.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data Not Found!"});
        const {fname,lname,regdno,dept,status,date} = req.body;
        if(req.role === "admin"){
            await Products.destroy({
                where:{
                    id: product.id
                }
            });
        }else{
            if(req.userId !== product.userId) return res.status(403).json({msg: "Access Prohibited!"});
            await Products.destroy({
                where:{
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Product deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}



