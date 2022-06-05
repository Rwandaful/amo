const { Pricing } = require("../database/models");
const { responseMessages } = require("../constants");

class PricingController {
  static async createPricing(request, response) {
    try {
      const { name, description, price } = request.body;
      const pricing = await Pricing.create({
        name,
        description,
        price,
      });

      return response.status(200).json({
        message: responseMessages["SUCCESS"][request.language],
        pricing,
      });
    } catch (error) {
      return response.status(500).json({
        message: responseMessages["INTERNAL_SERVER_ERROR"][request.language],
      });
    }
  }
  static async updatePricing(request, response) {
    try {
      const { name, description, price } = request.body;
      const { pricingId } = request.params;
      const pricing = await Pricing.findOne({ id: pricingId });
      if (name) pricing.name = name;
      if (description) pricing.description = description;
      if (price) pricing.price = price;

      return response.status(200).json({
        message: responseMessages["SUCCESS"][request.language],
        pricing,
      });
    } catch (error) {
      return response.status(500).json({
        message: responseMessages["INTERNAL_SERVER_ERROR"][request.language],
      });
    }
  }
  static async deletePricing(request, response) {
    try {
      const { pricingId } = request.params;
      const pricing = await Pricing.destroy({ where: { id: pricingId } });
      return response.status(200).json({
        message: responseMessages["SUCCESS"][request.language],
        pricing,
      });
    } catch (error) {
      return response.status(500).json({
        message: responseMessages["INTERNAL_SERVER_ERROR"][request.language],
      });
    }
  }
}
module.exports = MealController;
