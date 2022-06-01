const { User } = require("../database/models");
const { responseMessages } = require("../utils/constants");

class UserController {
  static async createUser(request, response) {
    try {
      const { name } = request.body;
      const user = await User.create({ name });
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
  static async updateUser(request, response) {
    try {
      const { id } = request.params;
      const { name } = request.body;
      const user = await User.update(
        { name },
        { where: { id }, returning: true }
      );
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
  static async LoadBalance() {
    try {
      const { amount, userId } = request.body;
      const user = await User.update(
        {
          amount: amount,
        },
        { where: { id: userId } }
      );
    } catch (error) {
      return response.status(500).json({});
    }
  }
  static async DeductBalance() {
    try {
      const { amount, userId } = request.body;
      const user = await User.update(
        {
          amount: amount,
        },
        { where: { id: userId } }
      );
    } catch (error) {
      return response.status(500).json({});
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
module.exports = UserController;
