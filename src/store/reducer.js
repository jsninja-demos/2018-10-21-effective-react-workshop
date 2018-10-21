import { combineReducers } from "redux";

import photos from "./modules/photos";
import authors from "./modules/authors";

export default combineReducers({ photos, authors });
