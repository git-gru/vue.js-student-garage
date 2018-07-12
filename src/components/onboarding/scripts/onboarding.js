export default {

  joinObjects: function(curData,tobeAdded){
    let result = Object.assign(curData,tobeAdded);
    return result;
  }
}
