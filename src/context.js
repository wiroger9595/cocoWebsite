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
        type:'All',
        capacity:'All',
        fruit_type: 'All',
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
           maxSize,
           
       });
    }

////////////////////////////////////////////////////////////////////////////////////
  
    formatData(items){
        let tempItems = items.map(item => {

            let id = item.sys.id;
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

//---------------------------item type filter here ---------
    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(target,name,value);
        this.setState({
            [name]:value
        },this.filterProducts)

        
    }

//---------------------------item fruit type filter here ---------
    

    filterProducts = ()=>{
        let{
            products, 
            type, 
            capacity,
            fruit_type, 
            calories, 
            maxCalories, 
            minCalories,
            minSize,
            maxSize,
            certification,
            non_Sugre
        } = this.state;
    
// all the products
    let tempProducts = [...products];

// transform value
//capacity = parseInt(capacity)

//filter by type
    if(type !== 'all'){
        tempProducts = tempProducts.filter(product => product.type === type)
    }
//filter by fruit type
    if(fruit_type !== 'all'){
        tempProducts = tempProducts.filter(product => product.fruit_type === fruit_type)
    }


/////////////////////////////////////////////////////////////
    //filter by capacity (filter form 1 to 5)
    // if(capacity !== 1){
    //   tempProducts = tempProducts.filter(product => product.capacity >= capacity)
    // }
/////////////////////////////////////////////////////////////


    this.setState({
        saveProducts:tempProducts
    })
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


//////////////////////////////////
