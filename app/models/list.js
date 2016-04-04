import DS from 'ember-data';

export default DS.Model.extend({
  price: DS.attr(),
  title: DS.attr(),
  userName: DS.attr(),
  image: DS.attr(),
  location: DS.attr(),
  description: DS.attr(),
  date: DS.attr(),
  category: DS.belongsTo('category', { async: true }),
});
