const planService = require('../services/planService');

exports.getPlans = (req, res) => {
  try {
    const plans = planService.getPlans();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch plans' });
  }
};
