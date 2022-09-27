'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',[
      {
        user_id: 3,
        seller_id: 2,
        total_price: 2.20,
        delivery_address: 'street',
        delivery_number: '12345',
        sale_date: '2001/08/01',
        status: 'PENDENTE',
      },
      {
        user_id: 3,
        seller_id: 2,
        total_price: 60.00,
        delivery_address: 'rua',
        delivery_number: 'abc456',
        sale_date: '2022/12/22',
        status: 'ENTREGUE',
      }
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};