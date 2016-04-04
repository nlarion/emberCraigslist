import Ember from 'ember';

export function listCost(params) {
  var listPrice = params[0].get('price');

  if (listPrice >= 150){
    return '$$$$';
  } else if (listPrice >= 100){
    return '$$$';
  } else if (listPrice >= 50){
    return '$$';
  } else if (listPrice <= 49){
    return '$';
  }
}

export default Ember.Helper.helper(listCost);
