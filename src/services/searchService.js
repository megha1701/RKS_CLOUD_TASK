
import Fuse from 'fuse.js';

const options = {
  includeScore: true,
  keys: ['name', 'skills']
};

export const createFuzzySearch = (data) => {
  const fuse = new Fuse(data, options);
  return (query) => fuse.search(query).map(result => result.item);
};
