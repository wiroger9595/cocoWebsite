import React , {Component }from 'react'
import items from './data';

const ProductContext = React.createContext();
//<ProductContext.Provider value={}
 class ProductProvider extends Component {
   
   state={
        products:[],
        saveProducts: [],
        featuredProducts:[],
        loading:true,
        type:'all',
        capacity:1,
        calories: 0,
        minCalories: 0,
        maxCalories: 0,
        minSize:0,
        maxSize:0,
        certification: false, 
        non_Sugre: false,


   };
   
   // getData

   componentDidMount(){
       //this.getData
       let products = this.formatData(items);
       let featuredProducts = products.filter(product => product.featured === true);
       
        let minCalories = Math.min(...products.map(item => item.calories));
        let maxCalories = Math.max(...products.map(item => item.calories));

        let maxSize = Math.max(...products.map(item => item.size));


       this.setState({
           products,
           featuredProducts, 
           saveProducts: products,
           loading: false,
           calories: minCalories,
           maxCalories,
           maxSize
       });
    }

////////////////////////////////////////////////////////////////////////////////////
  
    formatData(items){
        let tempItems = items.map(item => {

            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);

            let product = {...item.fields, images , id}
            return product;

        });
        return tempItems;
    }

////////////////////////////////////////////////////////////////////////////////////

    getProduct = slug =>{
        let tempProducts = [...this.state.products];
        const product = tempProducts.find(product => product.slug === slug);
        return product;
    }

    handleChange = event => {
        const type = event.target.type;
        const name = event.target.name;
        const value = event.type === "checkbox";

    }

    filterProducts = ()=>{
        console.log("come in");
    }

    render(){
    return (
        <ProductContext.Provider 
            value={{...this.state,
                    getProduct: this.getProduct,
                    handleChange: this.handleChange
            }}>
            {this.props.children}
        </ProductContext.Provider>
            
    );
    }
}

const ProductConsumer = ProductContext.Consumer;

export function withProductConsumer(Component){
    return function ConsumerWrapper(props){
        return <ProductConsumer>
            {value => <Component {...props} context = {value}/>}
        </ProductConsumer>
    }
}

export {ProductProvider, ProductConsumer, ProductContext};