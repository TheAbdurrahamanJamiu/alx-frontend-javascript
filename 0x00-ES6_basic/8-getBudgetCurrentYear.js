function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const currentYear = getCurrentYear();
  return {
    income: `${income}-${currentYear}`,
    gdp: `${gdp}-${currentYear}`,
    capita: `${capita}-${currentYear}`,
  };
}
