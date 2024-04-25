export const selectTodayStats = store => store.water.todayStats;
export const selectMonthNotes = store => store.water.monthStats.monthNotes;
export const selecError = store => store.water.error;
export const selectIsWaterUpdating = store => store.water.isWaterUpdating;
export const selectIsTodayLoading = store => store.water.isTodayLoading;
export const selectIsMonthLoading = store => store.water.isMonthLoading;
