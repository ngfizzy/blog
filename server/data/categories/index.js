
const categoryIds = {
  artGallery: 1,
  tech: 2,
  selfHelp: 3
};

const categories = [
  {
    id: categoryIds.artGallery,
    name: 'Art Gallery',
    updatedAt: new Date().toString(),
    createdAt: new Date().toString(),
  },
  {
    id: categoryIds.tech,
    name: 'tech',
    updatedAt: new Date().toString(),
    createdAt: new Date().toString(),
  },
  {
    id: categoryIds.selfHelp,
    name: 'self help',
    updatedAt: new Date().toString(),
    createdAt: new Date().toString(),
  },
];


module.exports = {
  categories,
  categoryIds,
  createCategory(name) {
    const createdAt = new Date().toString();
    const category = {
      name,
      createdAt,
      id: generators.randomId(),
      updatedAt: createdAt,
    };

    categories.push(category);
    categoryIds[camelCase(name)] = category.id;

    return category;
  }
};
