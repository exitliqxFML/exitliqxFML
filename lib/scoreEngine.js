module.exports.scoreLaunch = function(item) {
  const liquidity = item.liquidity_usd || 1;
  const supply   = item.total_supply || 1;
  return Math.min(100, Math.round((supply / liquidity) * 10));
};
