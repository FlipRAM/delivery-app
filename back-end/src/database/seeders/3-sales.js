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
<<<<<<< HEAD
=======
        status: 'Pendente'
>>>>>>> c2338ac8d0e67f2f7b4182147cba9b10a957225d
      },
      {
        user_id: 3,
        seller_id: 2,
        total_price: 60.00,
        delivery_address: 'rua castro alves',
        delivery_number: 'abc456',
<<<<<<< HEAD
=======
        status: 'Preparando'
      },
      {
        user_id: 3,
        seller_id: 2,
        total_price: 60.00,
        delivery_address: 'rua castro alves',
        delivery_number: 'abc456',
        status: 'Em trânsito'
>>>>>>> c2338ac8d0e67f2f7b4182147cba9b10a957225d
      }
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};