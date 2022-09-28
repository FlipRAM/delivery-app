module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('salesProducts', [
      {
        "sale_id": 1,
        "product_id": 1,
        "quantity": 10
      },
      {
        "sale_id": 2,
        "product_id": 2,
        "quantity": 20
      }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('salesProducts', null, {});
  }
};