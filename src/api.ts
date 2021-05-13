import axios from 'axios';
import { paramsFunc } from './types';

/**
 * `class` containing all mentions of the `GitHub Jobs API`
 */
class GHJobsApi {
  private static API_URL = 'https://jobs.github.com';

  /**
   * returns axios `get` promise to `/positions.json` from GitHub Jobs Api
   */
  public static positions: paramsFunc<Promise<any>> = async (
    description,
    location,
    full_time
  ) => {
    const formattedParams = GHJobsApi.filterParams(
      description,
      location,
      full_time
    );

    return axios({
      method: 'get',
      url: `${GHJobsApi.API_URL}/positions.json${formattedParams}`,
    })
      .then((result) => {
        console.log(result.status, result.statusText);
        return result.data;
      })
      .catch((error) => {
        console.log(error.status, error.message);
        return null;
      });
  };

  /**
   * returns axios `get` promise to `/positions/ID.json` from GitHub Jobs Api
   *
   * @param markdown Set to 'true' to get the description and `how_to_apply` fields as Markdown.
   */
  public static async positionById(id: string, markdown?: boolean) {
    return axios({
      method: 'get',
      url: `${this.API_URL}/positions/${id}.json`,
    })
      .then((result) => {
        console.log(result.status, result.statusText);
        return result.data;
      })
      .catch((error) => {
        console.log(error.status, error.message);
        return null;
      });
  }

  /**
   * formats params entered by user to proper api formatting
   *
   * @todo there are better ways to implement this, needs improvements
   */
  private static filterParams: paramsFunc<string> = (
    description,
    location,
    full_time
  ) => {
    // array to hold strings of params
    let args = [];
    if (description != '' && description != undefined) {
      args.push('description=' + description);
    }
    if (location !== undefined && location != '') {
      args.push('location=' + location);
    }
    if (full_time != undefined && full_time != false) {
      args.push('full_time=' + full_time);
    }
    return args.reduce((str, key, index) => {
      if (index === 0) str += '?';
      str != '?' ? (str += `&${key}`) : (str += key);
      return str;
    }, '');
  };
}

export default GHJobsApi;
