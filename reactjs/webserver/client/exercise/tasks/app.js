
var Products = React.createClass({
  handleProductSubmit: function(product){
    //alert(product.name);
    var products = this.state.productData;
    var newProducts = products.concat([product]);
    this.setState({productData: newProducts});
    $.ajax({
      url: this.state.url,
      data: product,
      dataType: 'json',
      type: 'POST',
      cache: false,
      success: function(data){
          console.log(data);          
          this.setState({productData: data});            
      }.bind(this),
      error: function(xhr, status, err){
          console.log(err);
      }.bind(this)
    });
  },
  loadProductData: function(){
    //alert(1);
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      cache: false,
      success: function(data){
          console.log(data);          
          this.setState({productData: data});            
      }.bind(this),
      error: function(xhr, status, err){
          console.log(err);
      }.bind(this)
    });
  },
  getDefaultProps: function(){
    return{
      interval: 2000
    }
  },
  getInitialState: function(){
    return{
        productData: [],
        url: '/api/products'
    }
  },
  componentDidMount: function(){
    this.loadProductData();
  },
  render: function(){
      return(
          <div>
              <div className="row">
                <div className="col-md-6">
                  <ProductForm onProductSubmit={this.handleProductSubmit}/>
                </div>
                <div className="col-md-6">
                   <h2>Products</h2>
              
                   <ProductList productData={this.state.productData}/>
                </div>
              </div>
          </div>
      )
  }
});

var ProductForm = React.createClass({
  handleSubmit: function(e){
      //alert("Submitted");
      e.preventDefault();
      var product = {
          id: this.refs.id.value.trim(),
          name: this.refs.name.value.trim(),
          description: this.refs.description.value.trim(),
          price: this.refs.price.value.trim(),
          buy_url: this.refs.buy_url.value.trim(),
          image_url: this.refs.image_url.value.trim(),

      }
      //alert(product.id);

      if(!product.id || !product.name){
          alert('Please fill in id and name');
          return;
      }

      this.props.onProductSubmit(product);

      //clear all the fields
      this.refs.id.value = '';
      this.refs.name.value = '';
      this.refs.description.value = '';
      this.refs.price.value = '';
      this.refs.buy_url.value = '';
      this.refs.image_url.value = '';
  },
  render: function(){
      return(
          <div>
              <h3>Add Product</h3>
              <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <label>Product ID</label>
                      <input type="text" className="form-control" placeholder="Enter ID" ref="id" />
                  </div>  
                  <div className="form-group">
                      <label>Product Name</label>
                      <input type="text" className="form-control" placeholder="Enter Name" ref="name" />
                  </div>  
                  <div className="form-group">
                      <label>Product Description</label>
                      <input type="text" className="form-control" placeholder="Enter Description" ref="description" />
                  </div>  
                  <div className="form-group">
                      <label>Product Price</label>
                      <input type="text" className="form-control" placeholder="Enter Price" ref="price" />
                  </div>  
                  <div className="form-group">
                      <label>Product Buy URL</label>
                      <input type="text" className="form-control" placeholder="Enter Buy URL" ref="buy_url" />
                  </div>  
                  <div className="form-group">
                      <label>Product Image URL</label>
                      <input type="text" className="form-control" placeholder="Enter image URL" ref="image_url" />
                  </div>  
                  
                  <button type="submit">Submit</button>
              </form>
          </div>
      )
  }
}); 

var Product = React.createClass({
  render: function(){
      return(
          <div className='well product'>
          <div className='row'>
            <div className='col-md-4'>
                <img style={{width: "100%"}} src={this.props.productFields.image_url}/>
            </div>
            <div className='col-md-8'>
              <h3><a target='_blank' href={this.props.productFields.buy_url}>{this.props.productFields.name}</a></h3>
              <small>${this.props.productFields.price}</small>
              <p>{this.props.productFields.description}</p>
            </div>
          </div>
          </div>
      )
  }
}); 
              
var ProductList = React.createClass({
  render: function(){
      var productNodes = this.props.productData.map(function(product, index){
        var productFields = {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          buy_url: product.buy_url,
          image_url: product.image_url
        };
        return (
          <Product productFields={productFields} />
        );
      });
      return(
          <div>
              {productNodes}
          </div>
      )
  }
}); 

ReactDOM.render(
  <Products />,
  document.getElementById('products')
               );
