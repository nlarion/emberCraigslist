import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    save3(params) {
      console.log(params);
      var newList = this.store.createRecord('list', params);
      var category = params.category;
      category.get('lists').addObject(newList);
      newList.save().then(function() {
        return category.save();
      });
      this.transitionTo('category', params.category);
    },
    destroyCategory(category) {
      console.log("got this far");
      var list_deletions = category.get('lists').map(function(list) {
        return list.destroyRecord();
      });
      Ember.RSVP.all(list_deletions).then(function() {
        return category.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
