import * as RecordActions from './recordsAction';
import * as FavouriteAction from './favouriteAction';
import * as NewsAction from './newsAction';

export const ActionCreators = Object.assign({}, RecordActions, FavouriteAction, NewsAction);
