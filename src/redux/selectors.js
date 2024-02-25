export const selectTasks = state => state.tasks.items;
export const selectLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectStatusFilter = state => state.filters.status;
