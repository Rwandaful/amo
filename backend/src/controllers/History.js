const { Client, sequelize } = require('../database/models');
const { responseMessages } = require('../constants');

class HistoryController {
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

  static async revertHistory(request, response) {
    try {
      const { historyId, clientId } = request.body;
      const client = await Client.findOne({ where: { id: clientId } });
      if (!client) {
        return response.status(404).json({
          message: responseMessages['NOT_FOUND'][request.language],
        });
      }
      const history = ClientHistory.findOne({
        where: { id: historyId, clientId },
      });
      if (!history)
        return response.status(404).json({
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
module.exports = HistoryController;

