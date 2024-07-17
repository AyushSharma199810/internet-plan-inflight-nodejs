const fs = require('fs');
const plansFilePath = './data/plans.json';

exports.getPlans = () => {
  const data = fs.readFileSync(plansFilePath);
  return JSON.parse(data);
};
