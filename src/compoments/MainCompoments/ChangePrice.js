
function ChangePrice({unitPrice}){

    if(typeof(unitPrice) === 'string')
    {
        unitPrice = unitPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".").slice(0, -3);
       
    }

    return unitPrice
}

export default ChangePrice