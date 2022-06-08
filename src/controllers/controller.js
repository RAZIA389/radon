const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}


    

 
   const getBooks = async function (req, res) {
     let a =await AuthorModel.find({"author_name": "chetan Bhagat"})
     let b = a[0].author_id
     let c = await BookModel.find({author_id: b})
     res.send({msg: c})
 }

const getauthor = async function (req, res) {
 let data= await BookModel.findOneAndUpdate({bookMame : "two states"},{ $set:{prices:100}},{new:true})
 let authorDetails=await AuthorModel.find({author_id:data.author_id}).select("authorName")
 let price = data.prices
 res.send({msg: authorDetails , price})
}
    
const getAuthorName = async function (req,  res){
    let a= await BookModel.find( { price:{ $gte:50 ,$lte:100  }}).select({author_id:1})
    let b =a.map(x =>x.author_id)
    let c = []
    for (i=0; i<b.length; i++){
        let x =b[i];
        let d =await AuthorModel.find({author_id:x}).select({author_name:1,_id:0})
        c.push(d)}
   res.send(c)
}

     

 



module.exports.createAuthor = createAuthor
module.exports.createBook = createBook
module.exports.getBooks = getBooks
module.exports.getauthor = getauthor
module.exports.getAuthorName = getAuthorName