export default {
  updateOnboardingData: function (curData, tobeAdded) {
    let result = Object.assign(curData, tobeAdded);
    return result;
  }
}
