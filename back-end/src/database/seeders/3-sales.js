'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',[
      {
        user_id: 3,
        seller_id: 2,
        total_price: 2.20,
        delivery_address: 'street churchill',
        delivery_number: '12345',
      },
      {
        user_id: 3,
        seller_id: 2,
        total_price: 60.00,
        delivery_address: 'rua castro alves',
        delivery_number: 'abc456',
      }
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};