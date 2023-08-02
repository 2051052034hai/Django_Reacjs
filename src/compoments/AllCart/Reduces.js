import { ADD_CART , COUNT_CART, DELETE_CART,
         PREV_CART, NEXT_CART, UPDATE_CART, BLUR_CART, CHECK_OUT, DELETE_BILLS
          } from "./Constants";


const initState = {
    products:[],
    count: 0,
    billDetail:{

    }

};


const reducer = (state = initState, action) => {

  switch (action.type) {
    case ADD_CART:
    
            let existingId = action.productId
            let existingItem = state.products.find((item) => item.id === existingId)
            
            if(existingItem){

              let updatedItems = state.products.map((item) =>
              {
                return item.id === existingId ? {...item, quantity: item.quantity + action.value}:item
              })
              return  {...state, products: updatedItems}
            }
            else {
              const newItem = {...action.payload, quantity:action.value}

            return { ...state,
                products: [...state.products, newItem ]
            };

          }
    case DELETE_CART:
          const newProducts = [...state.products]
          newProducts.splice(action.index, 1);      
          
          let newCount = state.count - action.quantity

          if(newCount < 0) 
              newCount = 0

          return { ...state, products: newProducts, count: newCount}

    case COUNT_CART:
          
          return { ...state, count:state.count + action.value}
    
    case PREV_CART:

          const updatedProductsPrev = state.products.map((product, index) => {
            if (index === action.index) {
              return {
                ...product,
                quantity: product.quantity - 1 // Cập nhật thuộc tính 'quantity' trên bản sao mới
              };
            }
            return product;
          });       

          let prevCount = state.count - 1
              
          return { ...state, products: updatedProductsPrev, count:prevCount };              
          
    
    case NEXT_CART:
      const updatedProductsNext = state.products.map((product, index) => {
        if (index === action.index) {
          return {
            ...product,
            quantity: product.quantity + 1 // Cập nhật thuộc tính 'quantity' trên bản sao mới
          };
        }
        return product;
      });       
      
      let nextCount = state.count + 1

      return { ...state, products: updatedProductsNext, count:nextCount };
          
    case UPDATE_CART:
      
      const updatedProductsOnchange = state.products.map((product, index) => {
        if (index === action.index) {
          return {
            ...product,
            quantity: action.value // Cập nhật thuộc tính 'quantity' trên bản sao mới
          };
        }
        return product;
      });

      let onchangeCount = updatedProductsOnchange.reduce((acc, product) => {

        let newQuantity = product.quantity
        if( typeof newQuantity === 'string')
            newQuantity = +newQuantity
       
        return acc +  newQuantity;
      }, 0);
      
      return { ...state, products: updatedProductsOnchange, count:onchangeCount };
    
      case BLUR_CART:
          const updatedProductOnblur = state.products.map((product, index) => {

            if(index === action.index) {
              return { 
                ...product,
              quantity:action.quantity,
              }
            }

            return product
          })
          let onblurCount = updatedProductOnblur.reduce((acc, product) => {
                return acc + product.quantity;
              }, 0);
        return {...state, products: updatedProductOnblur, count:onblurCount}
      
      case CHECK_OUT:

          const bill_details = []

          action.cartBill.map(c => {

           let bill_items = 
            { 
              price: parseFloat(c.unitPrice).toFixed(2)*1000,
              quantity: c.quantity,
              product_id: c.id 
            }

            return bill_details.push(bill_items);
          })
  
           const dataCheckOut = {
            bill: {
              subTotal: action.newTotal, 
              user: action.id,
            },
            bill_details: bill_details
          };
        
          let BBillDetail = dataCheckOut
          state = initState
         
          return {...state, billDetail:BBillDetail}

      case DELETE_BILLS:
           state = initState
           return initState
    default: 
          return state;
  }
};

export default reducer;
