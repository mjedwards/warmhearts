module.exports = {
  arc: () => ({
    innerRadius: jest.fn().mockReturnThis(),
    outerRadius: jest.fn().mockReturnThis(),
    centroid: () => [0, 0],
  }),
  pie: () => {
    const pie = () => [
      { value: 1, startAngle: 0, endAngle: 1, data: { name: 'a' } },
      { value: 1, startAngle: 0, endAngle: 1, data: { name: 'b' } }
    ];
    pie.padAngle = jest.fn().mockReturnThis();
    pie.sort = jest.fn().mockReturnThis();
    pie.value = jest.fn().mockReturnThis();
    return pie;
  },
  scaleOrdinal: () => ({
    domain: jest.fn().mockReturnThis(),
    range: jest.fn().mockReturnThis(),
  }),
  select: () => ({
    attr: jest.fn().mockReturnThis(),
    style: jest.fn().mockReturnThis(),
    append: () => ({
      attr: jest.fn().mockReturnThis(),
      text: jest.fn().mockReturnThis(),
      style: jest.fn().mockReturnThis(),
      selectAll: () => ({
        data: () => ({
          join: () => ({
            attr: jest.fn().mockReturnThis(),
            on: jest.fn().mockReturnThis(),
            style: jest.fn().mockReturnThis(),
            text: jest.fn().mockReturnThis(),
            call: jest.fn(callback => callback({ filter: () => ({ append: () => ({ attr: jest.fn().mockReturnThis(), text: jest.fn() }) }) })),
          }),
        }),
        remove: jest.fn(),
      }),
      remove: jest.fn(),
    }),
    selectAll: () => ({
      data: () => ({
        join: () => ({
          attr: jest.fn().mockReturnThis(),
          on: jest.fn().mockReturnThis(),
          style: jest.fn().mockReturnThis(),
          text: jest.fn().mockReturnThis(),
          call: jest.fn(callback => callback({ filter: () => ({ append: () => ({ attr: jest.fn().mockReturnThis(), text: jest.fn() }) }) })),
        }),
      }),
      remove: jest.fn(),
    }),
    remove: jest.fn(),
  }),
};