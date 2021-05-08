export const baseInitialState = {
  loading: false,
};

export const propertyInitialState = {
  current_page: 1,
  next_page: 2,
  properties: [],
  properties_filtered: [],
  filters: {
    page_count: 1,
    opened: false,
    min_price: 0,
    max_price: 0,
    min_size: 0,
    max_size: 0,
    rooms: 0,
    prices: [],
    sizes: [],
  },
};
