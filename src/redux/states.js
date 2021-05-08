export const baseInitialState = {
  loading: false,
};

export const propertyInitialState = {
  properties: [],
  properties_filtered: [],
  filters: {
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
