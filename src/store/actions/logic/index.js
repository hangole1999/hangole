
import connection from './connection';
import language from './language';
import localStorage from './localStorage';

export default {
  ...connection,
  ...language,
  ...localStorage
};
