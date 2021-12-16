
const Product= require('../models/product')

exports.getAddProduct=(req, res, next) => {
    console.log("Add Product Pagee");
    res.render('admin/edit-product', {pageTitle:'Add Product', 
    path: '/admin/add-product',
    editing:false
    })
}

exports.postAddProduct=(req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product({
        title:title, 
        price:price,
        description:description,
        imageUrl:imageUrl
    });
    console.log(product)
    product
      .save()
      .then(result => {
         console.log("Execution 1");
        console.log('Created Product');
        res.redirect('/admin/products');
      })
      .catch(err => {
        console.log(err);
      });
  
}
   

exports.getEditProduct=(req, res, next) => {
    const editMode=req.query.edit
    console.log(editMode)
    if(!editMode) {
        return res.redirect('/')
    }
    const prodId=req.params.productId
//    Product.findByPk(prodId)
    Product.findById(prodId)
        .then(product=> {
            console.log("Product Id is ****",prodId)
            if(!product) {
                return res.redirect('/')
            }
            res.render('admin/edit-product', {
                pageTitle:'Edit Product', 
                path: '/admin/edit-product',
                product:product,
                editing:editMode
                })
        })
        .catch(err=> {
            console.log(err)
        })
      
    //console.log("Add Product Pagee");
   
}

exports.postEditProduct=(req,res,next)=> {
    const prodId=req.body.productId
    const updatedTitle=req.body.title
    const updatedImageUrl=req.body.imageUrl
    const updatedDesc=req.body.description
    const updatedPrice=req.body.price
    const product=new Product(updatedTitle, updatedPrice,updatedDesc, updatedImageUrl,prodId)
    product
        .save()
        .then(result=> {
            console.log("Updated Product")
            res.redirect('/admin/products')
        })
        .catch(err=> {
            console.log(err)
           
        })
   
    //console.log("Updated Product is",prodId)

}


exports.getProducts=(req, res,next)=> {
    //Product.findAll()
    Product.fetchAll()
        .then(products=> {
            res.render('admin/products', {
                prods:products,
                pageTitle:'Admin Products', 
                path: '/admin/products', 
        })
    })
        .catch(err=> {
            console.log(err)
        })    
     
}

exports.postDeleteProduct=(req, res, next)=> {
    const prodId=req.body.productId
    //console.log("Delete Product is", prodId)
    Product.deleteById(prodId)
        .then(() => {
            console.log("Product Deleted")
            res.redirect('/admin/products')
        })
        .catch(err=> {
            console.log(err)
        })
}
    