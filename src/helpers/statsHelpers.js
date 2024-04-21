export const calcFulfillment = (totalVolume, dailyNorma) => {
  const fulfillment = Math.floor((totalVolume / dailyNorma) * 100);

  return fulfillment >= 100 ? 100 : fulfillment;
};

export const calcTotalVolume = dayNotes =>
  dayNotes.length > 0
    ? dayNotes.reduce((acc, item) => acc + item.waterVolume, 0)
    : null;

export const calcServingsCount = dayNotes =>
  dayNotes.length > 0 ? dayNotes.length : null;
