import { combineReducers } from 'redux'
import CruxList from "../components/CruxList";

const report = (state = {}, action) => {
    return {
        componentArr: [
          {
            "type": CruxList,
            "props": {
              "dataSourceUrl": "xxx"
            }
          }
        ]
      };
  }

export default combineReducers({
    report
})
