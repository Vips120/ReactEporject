export const CartUtility = (oldstate, nextaction) => {
    console.log(oldstate, nextaction);
    const existingcartItem = oldstate.find(
      data => data.item._id === nextaction.item._id
    );
    if (existingcartItem) {
      return oldstate.map(caritem =>
        caritem.item._id === nextaction.item._id
          ? { ...caritem, quantity: caritem.quantity + 1 }
          : caritem
      );
    }
    return [...oldstate, { ...nextaction, quantity: 1 }];
  };
  
export const AddQuantityUtilty = (oldstate, updatestate) => {
    
};

export const RemoveQuantityUtilty = (oldstate, removestate) => {

};