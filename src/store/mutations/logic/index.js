
import connection from './connection';
import language from './language';
import theme from './theme';
import localStorage from './localStorage';

export default {
  ...connection,
  ...language,
  ...theme,
  ...localStorage
};
