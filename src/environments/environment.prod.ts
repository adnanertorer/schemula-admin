export const environment = {
  production: true,
  // apiUrl: 'https://lifearts-api.almulayazilim.com/api',
  apiUrl: 'http://localhost:5001/api',
  access_token_name: 'access_token',
  refresh_token_name: 'refresh-token',
  logout_event_name: 'logout-event',
  user_email: 'lifearts_email',
  access_time: 'access_time'
};

export const participantTypeEnum = {
  adult: 1,
  child: 2,
  none: 3
}

export const participantEnum = {
  personal: 1,
  group: 2,
  closedGroup: 3,
  none: 4
}
