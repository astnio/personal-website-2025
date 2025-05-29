const fuseOptions = {
  includeScore: true,
  shouldSort: true,
  keys: [
    // Blog Keys
    {
      name: 'title',
      weight: 0.75,
    },
    {
      name: 'description',
      weight: 0.5,
    },
    {
      name: 'tags',
      weight: 0.4,
    },
    {
      name: 'topic',
      weight: 0.3,
    },
    {
      name: 'category',
      weight: 0.2,
    },

    // Frontend Project Keys
    {
      name: 'description',
      weight: 0.6,
    },
    {
      name: 'status',
      weight: 0.4,
    },
    {
      name: 'type',
      weight: 0.3,
    },

    // Job Keys
    {
      name: 'company',
      weight: 0.6,
    },
    {
      name: 'skills',
      weight: 0.5,
    },
    {
      name: 'description',
      weight: 0.4,
    },
  ],
};

export default fuseOptions;
