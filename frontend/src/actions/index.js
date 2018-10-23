import * as NewsAction from './newsAction';
import * as RecordsAction from './recordsAction';

export const ActionCreators = Object.assign({}, RecordsAction, NewsAction);
