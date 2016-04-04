import Ember from 'ember';

export function categoryPopularity(params) {
  var category = params[0];
  console.log(category.get('lists').get('length'));
  if(category.get('lists').get('length') >= 2){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(categoryPopularity);
