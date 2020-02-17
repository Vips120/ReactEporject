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
  console.log(oldstate, updatestate);
  const existingcartItem = oldstate.find(data => data.item._id === updatestate._id);
  console.log(existingcartItem);
  if (existingcartItem) {
    existingcartItem.quantity += 1;
    return [...oldstate];
  }
};

export const RemoveQuantityUtilty = (oldstate, removestate) => {
  console.log(oldstate,removestate);
  const existingcartItem = oldstate.find(data => data.item._id === removestate._id);
  console.log(existingcartItem);
  if (existingcartItem.quantity === 1) {
    // alert(JSON.stringify(oldstate));
    oldstate.filter(data => data.item._id !== removestate._id);
    return oldstate;
  } else {
    existingcartItem.quantity -= 1;
    return [...oldstate];
  }
};