const Product= require('../models/product')

exports.getAddProduct=(req, res, next) => {
    console.log("Add Product Pagee");
    res.render('admin/edit-product', {pageTitle:'Add Product', 
    path: '/admin/add-product',
    editing:false
    })
}

exports.postAddProduct=(req, res, next) => {
    const title=req.body.title;
    const imageUrl=req.body.imageUrl;
    const price=req.body.price;
    const description=req.body.description;
    Product.create({
        title:title,
        price:price,
        imageUrl:imageUrl,
        description:description
    })
    .then(result=> {
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })
}
   

exports.getEditProduct=(req, res, next) => {
    const editMode=req.query.edit
    console.log(editMode)
    if(!editMode) {
        return res.redirect('/')
    }
    const prodId=req.params.productId
    Product.findById(prodId, product=> {
        console.log(prodId)
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
    //console.log("Add Product Pagee");
   
}

exports.postEditProduct=(req,res,next)=> {
    const prodId=req.body.productId
    const updatedTitle=req.body.title
    const updatedImageUrl=req.body.imageUrl
    const updatedDesc=req.body.description
    const updatedPrice=req.body.price
    const updatedProduct = new Product(
        prodId,
        updatedTitle,
        updatedImageUrl,
        updatedDesc,
        updatedPrice
      );
    
    updatedProduct.save()
    res.redirect('/admin/products')
    console.log("Updated Product is",prodId)

}

exports.getProducts=(req, res,next)=> {
    Product.findAll()
        .then(products=> {
            res.render('admin/products', {
                prods:products,
                pageTitle:'Admin Products', 
                path: '/admin/products', 
        })
        .catch(err=> {
            console.log(err)
        })    
    })  
}

exports.postDeleteProduct=(req, res, next)=> {
    
    const prodId=req.body.productId
    console.log("Delete Product is", prodId)
    Product.deleteById(prodId)
    res.redirect('/admin/products')
}
