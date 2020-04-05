export default {
  API_URL: process.env.REACT_APP_API_URL,
  MAPS_KEY: process.env.REACT_APP_MAPS_KEY || '',
  SLACK_ADDRESS:
    process.env.REACT_APP_SLACK_ADDRESS ||
    'https://hackthecrisisswe.slack.com/team',
}
