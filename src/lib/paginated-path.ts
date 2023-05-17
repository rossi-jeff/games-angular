export const defaultLimit = 10;
export const defaultOffset = 0;

export const defaultSearchParams = {
  limit: defaultLimit,
  offset: defaultOffset,
};

export const paginatedPath = (options: {
  path: string;
  limit?: number;
  offset?: number;
}) => {
  const Limit = options.limit || defaultLimit;
  const Offset = options.offset || defaultOffset;
  let path = options.path;
  const params: { [key: string]: number } = { Limit, Offset };
  let parts: string[] = [];
  for (const key in params) {
    parts.push(key + '=' + params[key].toString());
  }
  path += '?' + parts.join('&');
  return path;
};
