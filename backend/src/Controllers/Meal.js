const { Client, ClientBalance } = require("../database/models");
const { responseMessages } = require("../constants");

class MealController {
  static async createMeal(request, response) {
    try {
      const {} = request.body;
      return response.status(200).json({
        message: responseMessages["SUCCESS"][request.language],
        user,
      });
    } catch (error) {
      return response.status(500).json({
        message: responseMessages["INTERNAL_SERVER_ERROR"][request.language],
      });
    }
  }

  static async addBalance(request, response) {
    try {
      const { clientId } = request.params;
      const { amount } = request.body;
      const client = await Client.findOne({ id: clientId });
      if (!client) {
        return response.status(404).json({
          message: responseMessages["NOT_FOUND"][request.language],
        });
      }
      const balance = await ClientBalance.create({
        clientId,
        amount,
      });
      return response.status(200).json({
        message: responseMessages["SUCCESS"][request.language],
        user,
      });
    } catch (error) {
      return response.status(500).json({
        message: responseMessages["INTERNAL_SERVER_ERROR"][request.language],
      });
    }
  }

  static async signin(request, response) {
    try {
      const { email, password } = request.body;
      return response.status(200).json({
        message: "Umukiriya yandishijwe neza!.",
      });
    } catch (error) {
      return response.status(500).json({
        message: "Habaye ikibazo.",
      });
    }
  }
}
module.exports = MealController;
