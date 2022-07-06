const { Client, ClientBalance } = require('../database/models');
const { responseMessages } = require('../constants');

class MealController {
  static async createMeal(request, response) {
    try {
      const { clientId, pricingId, amount, route } = request.body;
      pricing = await Pricing.findOne({ id: pricingId });
      if (amount && amount != pricing.price) {
        return response.status(400).json({
          message: 'Amount must be equal to pricing price.',
        });
      }
      if (!pricing) {
        return response.status(404).json({
          message: responseMessages['NOT_FOUND'][request.language],
        });
      }
      let client = null;
      if (clientId) {
        client = await Client.findOne({ where: { id: clientId } });
        if (!client) {
          return response.status(404).json({
            message: responseMessages['NOT_FOUND'][request.language],
          });
        }
      }
      const meal = await Meal.create({
        clientId,
        pricingId,
        amount,
      });
      i(client);
      client.createClientHistory({});
      return response.status(200).json({
        message: responseMessages['SUCCESS'][request.language],
        meal,
      });
    } catch (error) {
      return response.status(500).json({
        message: responseMessages['INTERNAL_SERVER_ERROR'][request.language],
      });
    }
  }
}
module.exports = MealController;

