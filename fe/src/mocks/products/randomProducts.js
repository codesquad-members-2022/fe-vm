const randomProducts = [
  {
    id: 'd38b620d-5a60-4fea-b8f0-b350a9c7059a',
    product_name: 'Infiniti',
    type: 'snack',
    price: 5600,
    ea: 14,
  },
  {
    id: '9598898f-d964-4bf3-9ad8-bf2774bd740e',
    product_name: 'Holden',
    type: 'drink',
    price: 1900,
    ea: 23,
  },
  {
    id: 'ab76b299-0ac0-4b24-aee5-f688cb6226d6',
    product_name: 'Mitsubishi',
    type: 'snack',
    price: 7100,
    ea: 4,
  },
  {
    id: '02381edd-9b0d-4c8a-b8af-ec78377977b0',
    product_name: 'Mercedes-Benz',
    type: 'drink',
    price: 3100,
    ea: 2,
  },
  {
    id: '5ad4f57c-4bd6-4b6b-a718-495aeb119dde',
    product_name: 'Toyota',
    type: 'snack',
    price: 1700,
    ea: 49,
  },
  {
    id: 'd0531b2a-61de-4c16-a38b-f9370f9836fe',
    product_name: 'Mercedes-Benz',
    type: 'drink',
    price: 4000,
    ea: 12,
  },
  {
    id: '77aa46a8-c2eb-4e86-bb24-cca7ed4e65f4',
    product_name: 'Dodge',
    type: 'snack',
    price: 4500,
    ea: 19,
  },
  {
    id: '838da19d-8951-4bbc-a321-f4ddd7ed54e7',
    product_name: 'Bentley',
    type: 'snack',
    price: 6600,
    ea: 25,
  },
  {
    id: '3a275cc5-ee06-4d31-981e-bbb93ae405a8',
    product_name: 'GMC',
    type: 'drink',
    price: 700,
    ea: 14,
  },
  {
    id: '7d050880-24b8-4165-aa03-2805d05d67de',
    product_name: 'Mercedes-Benz',
    type: 'snack',
    price: 2400,
    ea: 9,
  },
  {
    id: 'b275cff6-1ba1-4e8b-9947-6c51902bf3ad',
    product_name: 'Mercedes-Benz',
    type: 'drink',
    price: 7300,
    ea: 37,
  },
  {
    id: '7dc42d42-87a2-431b-86f2-0e1bc0fc675d',
    product_name: 'Hyundai',
    type: 'drink',
    price: 8000,
    ea: 12,
  },
  {
    id: 'a7e85bc9-7b4b-449e-bd5c-7971dbc991a8',
    product_name: 'GMC',
    type: 'drink',
    price: 1800,
    ea: 5,
  },
  {
    id: 'e7b3eb67-c413-456a-b692-e43f36e5b8e7',
    product_name: 'Nissan',
    type: 'snack',
    price: 2500,
    ea: 19,
  },
  {
    id: '60ac0273-4d17-4f52-9529-d83b279f8fc8',
    product_name: 'Alfa Romeo',
    type: 'snack',
    price: 5200,
    ea: 7,
  },
  {
    id: '986c39a8-1fb0-40fd-b63f-ba59c0d9b138',
    product_name: 'Toyota',
    type: 'drink',
    price: 2100,
    ea: 13,
  },
  {
    id: 'cbf5bebf-a771-42e3-b9fb-8f51ddfdd7b9',
    product_name: 'Honda',
    type: 'drink',
    price: 9900,
    ea: 8,
  },
  {
    id: '06e77db2-1d97-41c8-86fa-9a6a7a887523',
    product_name: 'Dodge',
    type: 'drink',
    price: 5800,
    ea: 19,
  },
  {
    id: '3ad69fe4-312b-493a-a6ff-78abed646caa',
    product_name: 'Ford',
    type: 'snack',
    price: 4900,
    ea: 29,
  },
  {
    id: '48dfeffb-7abe-46a0-bb03-eb5ae55c3839',
    product_name: 'GMC',
    type: 'drink',
    price: 3300,
    ea: 18,
  },
  {
    id: '0b53a0ba-aaf8-4282-a847-bcad801736c0',
    product_name: 'Mercedes-Benz',
    type: 'snack',
    price: 6900,
    ea: 10,
  },
  {
    id: 'b703bf58-f4c3-4d30-bb80-b2eea2d96b30',
    product_name: 'Cadillac',
    type: 'snack',
    price: 0,
    ea: 18,
  },
  {
    id: 'be995ea3-8615-4f5c-a11c-87f6377f00cf',
    product_name: 'Porsche',
    type: 'snack',
    price: 9500,
    ea: 26,
  },
  {
    id: 'e3d90214-e39a-44df-8160-4c955336d961',
    product_name: 'Toyota',
    type: 'drink',
    price: 8200,
    ea: 15,
  },
  {
    id: '1d16b694-c81f-4e06-9cb2-c96083fab39d',
    product_name: 'Mitsubishi',
    type: 'drink',
    price: 5100,
    ea: 17,
  },
  {
    id: 'c4326e61-bea6-4f27-94e8-737a2ff4419a',
    product_name: 'Lincoln',
    type: 'drink',
    price: 3000,
    ea: 14,
  },
  {
    id: '846ca7e6-ac86-402e-bf0a-5a1e464d3949',
    product_name: 'BMW',
    type: 'drink',
    price: 6300,
    ea: 48,
  },
  {
    id: '81c20a14-40dd-41c1-9143-75d0efc0b6b6',
    product_name: 'Chevrolet',
    type: 'drink',
    price: 500,
    ea: 5,
  },
  {
    id: 'e8697518-8268-4f1f-bc61-2d0a4e26743e',
    product_name: 'Lincoln',
    type: 'drink',
    price: 6400,
    ea: 16,
  },
  {
    id: '1f771270-48dc-48dc-9d60-edf7715ff9a5',
    product_name: 'GMC',
    type: 'snack',
    price: 4100,
    ea: 17,
  },
];
export default randomProducts;