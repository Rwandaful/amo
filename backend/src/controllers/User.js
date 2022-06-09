const { User } = require('../database/models');
const { responseMessages } = require('../utils');

class UserController {
  static async createUser(request, response) {
    try {
      const { name, email, password, username } = request.body;
      const user = await User.create({ name, email, password, username });
      return response.status(200).json({
        message: responseMessages['SUCCESS'][request.language],
        user,
      });
    } catch (error) {
      return response.status(500).json({
        message: responseMessages['INTERNAL_SERVER_ERROR'][request.language],
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
        message: responseMessages['SUCCESS'][request.language],
        user,
      });
    } catch (error) {
      return response.status(500).json({
        message: responseMessages['INTERNAL_SERVER_ERROR'][request.language],
      });
    }
  }
  static async signin(request, response) {
    try {
      const { email, password } = request.body;
      const user = await User.findOne({ email });
      if (!user)
        return response.status(400).json({
          message: responseMessages['BAD_REQUEST'][request.language],
        });
      if (user.comparePassword(password)) jwt;

      return response.status(200).json({
        message: 'Umukiriya yandishijwe neza!.',
      });
    } catch (error) {
      return response.status(500).json({
        message: 'Habaye ikibazo.',
      });
    }
  }
}
module.exports = UserController;

