import React , {Component }from 'react'
import items from './data';

const ProductContext = React.createContext();
//<ProductContext.Provider value={}
 class ProductProvider extends Component {
   
   state={
        products:[],
        saveProducts: [],
        featuredProducts:[],
        loading:true
   };
   
   // getData

   componentDidMount(){
       //this.getData
       let products = this.formatData(items);
       let featuredProducts = products.filter(product => product.featured === true);
       
       this.setState({
           products,
           featuredProducts, 
           saveProducts: products,
           loading: false
       });
    }

    formatData(items){
        let tempItems = items.map(item => {

            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);

            let product = {...item.fields, images: images, id}
            return product;

        });
        return tempItems;
    }

    render(){
    return (
        <ProductContext.Provider value={{...this.state}}>
            {this.props.children}
        </ProductContext.Provider>
            
    );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer, ProductContext};