export interface Position {
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url?: string | null;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo?: string | null;
}

export interface positionParameters {
  /** A search term, such as "ruby" or "java". This parameter is aliased to search */
  description: string;
  /** A city name, zip code, or other location search term */
  location: string;
  /** If you want to limit results to full time positions set this parameter to 'true' */
  full_time: boolean;
}

/**
 * @param description A search term, such as 'ruby' or 'java'.
 * @param location A city name, zip code, or other location search term.
 * @param full_time If you want to limit results to full time positions set this parameter to 'true'.
 */
export type paramsFunc<R> = (
  description?: string,
  location?: string,
  full_time?: boolean
) => R;
