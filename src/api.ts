import axios from 'axios';

type header = Partial<Record<'description' | 'location' | 'full_time', string>>;

/**
 * `class` containing all mentions of the `GitHub Jobs API`
 */

class GHJobsApi {
  private static API_URL = 'https://jobs.github.com';

  /**
   * returns axios `get` promise to `/positions.json` from GitHub Jobs Api
   *
   * @param description A search term, such as 'ruby' or 'java'.
   * @param location A city name, zip code, or other location search term.
   * @param full_time If you want to limit results to full time positions set this parameter to 'true'.
   */
  public static async positions({ description, location, full_time }: header) {
    return axios({
      method: 'get',
      url: `${this.API_URL}/positions.json`,
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
   * returns axios `get` promise to `/positions/ID.json` from GitHub Jobs Api
   * @param markdown Set to 'true' to get the description and `how_to_apply` fields as Markdown.
   */
  public static async positionById({
    id,
    markdown,
  }: {
    id: string;
    markdown?: boolean;
  }) {
    return axios({
      method: 'get',
      url: `${this.API_URL}/positions${id}.json`,
    });
  }
}

export default GHJobsApi;
