const { Client, sequelize } = require('../database/models');
const { responseMessages } = require('../constants');

class ClientController {
  static async createClient(request, response) {
    try {
      const client = await Client.create(request.body);
      await client.createClientBalance({ amount: 0 });
      return response.status(200).json({
        message: responseMessages['SUCCESS'][request.language],
        client,
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: responseMessages['INTERNAL_SERVER_ERROR'][request.language],
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
      const client = await Client.findOne({ where: { id: clientId } });
      if (!client) {
        return response.status(404).json({
          message: responseMessages['NOT_FOUND'][request.language],
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
        message: responseMessages['SUCCESS'][request.language],
        client,
      });
    } catch (error) {
      return response.status(400).json({
        message: responseMessages['BAD_REQUEST'][request.language],
      });
    }
  }
  static async deleteClient(request, response) {
    try {
      const { clientId } = request.params;
      const client = await Client.destroy({ where: { id: clientId } });

      return response.status(200).json({
        message: responseMessages['SUCCESS'][request.language],
        client,
      });
    } catch (error) {
      return response.status(500).json({
        message: responseMessages['INTERNAL_SERVER_ERROR'][request.language],
      });
    }
  }
  static async getAllClients(request, response) {
    try {
      const clients = await Client.findAll();

      return response.status(200).json({
        message: responseMessages['SUCCESS'][request.language],
        clients,
      });
    } catch (error) {
      return response.status(500).json({
        message: responseMessages['INTERNAL_SERVER_ERROR'][request.language],
      });
    }
  }

  static async getClientById(request, response) {
    try {
      const { clientId } = request.params;
      const client = await Client.findOne({
        where: { id: clientId },
        include: 'clientBalance',
      });
      if (!client)
        response.status(404).json({
          message: responseMessages['NOT_FOUND'][request.language],
        });
      return response.status(200).json({
        message: responseMessages['SUCCESS'][request.language],
        client,
      });
    } catch (error) {
      return response.status(400).json({
        message: responseMessages['BAD_REQUEST'][request.language],
      });
    }
  }

  static async depositToBalance(request, response) {
    try {
      const { clientId } = request.params;
      const { amount } = request.body;
      const client = await Client.findOne({ where: { id: clientId } });

      if (!client)
        response.status(404).json({
          message: responseMessages['NOT_FOUND'][request.language],
        });
      await client.updateClientBalance({
        amout: sequelize.literal('amount + ' + amount),
      });
      amount;
      await client.createClientHistory({ amount, actionType: 'DEPOSIT' });
      return response.status(200).json({
        message: responseMessages['SUCCESS'][request.language],
        client,
      });
    } catch (error) {
      return response.status(400).json({
        message: responseMessages['BAD_REQUEST'][request.language],
      });
    }
  }
  static async getClientHistory(request, response) {
    try {
      const { clientId } = request.params;
      const client = await Client.findOne({ where: { id: clientId } });
      if (!client)
        response.status(404).json({
          message: responseMessages['NOT_FOUND'][request.language],
        });
      const clientHistory = await client.getClientHistory();
      return response.status(200).json({
        message: responseMessages['SUCCESS'][request.language],
        clientHistory,
      });
    } catch (error) {
      return response.status(400).json({
        message: responseMessages['BAD_REQUEST'][request.language],
      });
    }
  }
}
module.exports = ClientController;

