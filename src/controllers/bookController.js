// const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {

    
// soln................................................//...........................................................................//..........
    //   let bookList= await BookModel.find().select( { bookName: 1, authorName: 1 })
    // res.send({msg: bookList})
// }
// soln.....................................................//...........................................................................
    //   let allBooks= await BookModel.find( {"publishedYear": "2020"} )
    //   res.send({msg: allBooks})
// }
// soln

    //   let allBooks= await BookModel.find( { bookName:  /^int/})
    //   res.send({msg: allBooks})
 
//



// 
// let allBooks= await BookModel.find({$or:[{stock : 1},{page:{ $gt: 500}}]})
// res.send({msg: allBooks})




4.
  let allBooks= await BookModel.find({$or:[{prices: "inr100"},{prices: "inr200"},{prices: "inr500"}]})
   res.send({msg: allBooks})
}

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData