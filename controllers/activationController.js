const activationService = require('../services/activationService');

exports.activatePlan = (req, res) => {
  const { planId } = req.body;
  try {
    const activation = activationService.activatePlan(planId);
    res.json({ success: true, activation });
  } catch (error) {
    res.status(500).json({ error: 'Unable to activate plan' });
  }
};
