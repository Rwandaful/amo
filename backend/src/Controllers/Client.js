const { request } = require("http");
const { Client, ClientBalance } = require("../database/models");
const { responseMessages } = require("../constants");

class ClientController {
  static async createClient(request, response) {
    try {
      const {
        name,
        phone,
        email,
        college,
        regno,
        department,
        hostelName,
        hostelBlock,
        hostelRoom,
      } = request.body;
      const user = await Client.create({
        name,
        phone,
        email,
        college,
        department,
        hostelName,
        hostelBlock,
        hostelRoom,
        regno,
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

  static async updateClient(request, response) {
    try {
      const {
        name,
        phone,
        email,
        college,
        regno,
        department,
        hostelName,
        hostelBlock,
        hostelRoom,
      } = request.body;
      const { clientId } = request.params;
      const client = await Client.findOne({ id: clientId });
      if (!client) {
        return response.status(404).json({
          message: responseMessages["NOT_FOUND"][request.language],
        });
      }
      if (name) client.name = name;
      if (phone) client.phone = phone;
      if (email) client.email = email;
      if (college) client.college = college;
      if (regno) client.regno = regno;
      if (department) client.department = department;
      if (hostelName) client.hostelName = hostelName;
      if (hostelBlock) client.hostelBlock = hostelBlock;
      if (hostelRoom) client.hostelRoom = hostelRoom;
      await client.save();

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
  static async deleteClient(request, response) {
    try {
      const { clientId } = request.params;
      const client = await Client.destroy({ where: { id: clientId } });

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
module.exports = ClientController;
