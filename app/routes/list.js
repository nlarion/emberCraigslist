import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('list', params.list_id);
  },
  actions: {
    update(list, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          list.set(key,params[key]);
        }
      });
      list.save();
      this.transitionTo('index');
    },
    destroyList(list) {
      list.destroyRecord();
      this.transitionTo('index');
    }
  }
});
