const insertItem = (obj) => {
    return {
       counter : obj.counter + 1,
       items : [...obj.items, {"firstName":"First Name " + obj.counter, 
                               "lastName" : "Last Name" + obj.counter}]
    }
}
const deleteItem = (obj) => {
    return {
       counter : obj.counter - 1,
       items : obj.items.length>0 ? obj.items.slice(0,  obj.items.length-1):[]
    }
}

export default (state = {counter:2 , items : [{"firstName":"First Name 1" , 
                               "lastName" : "Last Name1"}]}, action) => {
  switch (action.type) {
    case 'INCREASE':
      return insertItem(state)
    case 'DECREASE':
      return deleteItem(state)
    default:
      return state
  }
}

