module.exports = {
    lifecycles: {
      beforeCreate: async (data) => {
        const slug = data.title.toLowerCase().replace(/ /g, '-');
        data.slug = slug;
      },
      beforeUpdate: async (params, data) => {
        if (data.title) {
          const slug = data.title.toLowerCase().replace(/ /g, '-');
          data.slug = slug;
        }
      },
    },
  };
  