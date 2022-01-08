//const Cart = require('../models/cart')
const Product= require('../models/product')

exports.getProducts=(req, res, next) => {
    Product.find()
    .then(products=> {
        res.render('shop/product-list', {
            prods:products,
            pageTitle:'All Products', 
            path: '/products'
        })    
    })
    .catch(err=> {
        console.log(err)
    })
}

exports.getProduct=(req, res, next)=> {
    const prodId=req.params.productId
    Product.findById(prodId)
        .then(product => {
            //console.log("Get Product",product)
            res.render('shop/product-details', {
                product:product, 
                pageTitle:product.title, 
                path:'/products'})
        })
        .catch(err=> {
            console.log(err)
        })
 
}

exports.getIndex=(req,res,next)=> {
    Product.find()
    .then(products=> {
        console.log("Execution 2**", products)
        res.render('shop/product-list', {
            prods:products,
            pageTitle:'All Products', 
            path: '/'
        })  
    })
    .catch(err=> {
        console.log(err)
    })
}

exports.getCart = (req, res, next) => {
    console.log("Requested User", req.user);
    req.user
      .populate('cart.items.productId')
    
      .then(user => {
        console.log("User add to cart get products", user.cart.items)
        const products=user.cart.items
        res.render('shop/cart', {
          path: '/cart',
          pageTitle: 'Your Cart',
          products: products
        });
      })
      .catch(err => console.log(err));
  };


exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId)
      .then(product => {
        return req.user.addToCart(product);
      })
      .then(result => {
        // console.log("REEE",result);
        res.redirect('/cart');
      });
  };

exports.postCartDeleteProduct=(req, res, next)=> {
    const prodId=req.body.productId
    Product.findById(prodId, product=> {
        Cart.deleteProduct(prodId, product.price);
        res.redirect('/cart')
    })
}

exports.getOrders=(req,res,next)=> {
    res.render('shop/orders', {
        path:'/orders',
        pageTitle:'Your Orders'
    })
}
exports.getCheckout=(req,res,next)=> {
    res.render('shop/checkout', {
        path:'/checkout',
        pageTitle:'Checkout'
    })
}


