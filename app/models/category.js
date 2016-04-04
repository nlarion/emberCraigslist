import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  lists: DS.hasMany('list', { async: true })
});
