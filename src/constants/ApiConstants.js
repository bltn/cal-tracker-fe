export const URL = "https://shrouded-brushlands-72727.herokuapp.com";
export const GET_DAYS_PATH = "/days";
export const POST_DAY_PATH = "/days";
export const DELETE_DAY_PATH = "/days/";
export const LOGIN_PATH = "/login";
export const postMealEntryPath = dayId => `/days/${dayId}/meal_entries`;
export const deleteMealEntryPath = (dayId, mealEntryId) => `/days/${dayId}/meal_entries/${mealEntryId}`;