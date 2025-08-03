export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  spicy?: boolean;
  vegetarian?: boolean;
}

export const menuItems: MenuItem[] = [
  // Burgers
  {
    id: 1,
    name: "The Classic Sloppy",
    description:
      "Our signature burger with special sauce, lettuce, cheese, pickles, onions on a sesame seed bun",
    price: "$12.99",
    category: "burgers",
  },
  {
    id: 2,
    name: "BBQ Bacon Deluxe",
    description:
      "Beef patty, crispy bacon, BBQ sauce, cheddar cheese, onion rings, lettuce",
    price: "$15.99",
    category: "burgers",
  },
  {
    id: 3,
    name: "Mushroom Swiss",
    description: "Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli",
    price: "$14.99",
    category: "burgers",
  },
  {
    id: 4,
    name: "Spicy Jalapeño",
    description:
      "Beef patty, jalapeños, pepper jack cheese, chipotle mayo, lettuce, tomato",
    price: "$13.99",
    category: "burgers",
    spicy: true,
  },
  {
    id: 5,
    name: "Veggie Delight",
    description:
      "Plant-based patty, avocado, sprouts, tomato, lettuce, vegan mayo",
    price: "$13.99",
    category: "burgers",
    vegetarian: true,
  },

  // Sandwiches
  {
    id: 6,
    name: "Chicken Deluxe",
    description:
      "Crispy chicken breast, avocado, bacon, lettuce, honey mustard on brioche",
    price: "$13.99",
    category: "sandwiches",
  },
  {
    id: 7,
    name: "Pulled Pork",
    description:
      "Slow-cooked pulled pork, coleslaw, BBQ sauce on a brioche bun",
    price: "$12.99",
    category: "sandwiches",
  },
  {
    id: 8,
    name: "Grilled Chicken Club",
    description: "Grilled chicken, bacon, lettuce, tomato, mayo on sourdough",
    price: "$12.99",
    category: "sandwiches",
  },
  {
    id: 9,
    name: "Fish Sandwich",
    description:
      "Beer-battered cod, tartar sauce, lettuce, pickles on a kaiser roll",
    price: "$11.99",
    category: "sandwiches",
  },

  // Sides
  {
    id: 10,
    name: "Loaded Fries",
    description:
      "Crispy fries topped with cheese sauce, bacon bits, green onions, sour cream",
    price: "$8.99",
    category: "sides",
  },
  {
    id: 11,
    name: "Regular Fries",
    description: "Golden crispy french fries",
    price: "$4.99",
    category: "sides",
  },
  {
    id: 12,
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries with chipotle aioli",
    price: "$6.99",
    category: "sides",
  },
  {
    id: 13,
    name: "Onion Rings",
    description: "Beer-battered onion rings with ranch dipping sauce",
    price: "$6.99",
    category: "sides",
  },
  {
    id: 14,
    name: "Coleslaw",
    description: "Fresh cabbage slaw with creamy dressing",
    price: "$3.99",
    category: "sides",
  },

  // Drinks
  {
    id: 15,
    name: "Soft Drinks",
    description: "Coca-Cola, Pepsi, Sprite, Orange Fanta",
    price: "$2.99",
    category: "drinks",
  },
  {
    id: 16,
    name: "Fresh Lemonade",
    description: "House-made fresh lemonade",
    price: "$3.99",
    category: "drinks",
  },
  {
    id: 17,
    name: "Iced Tea",
    description: "Sweet or unsweetened",
    price: "$2.99",
    category: "drinks",
  },
  {
    id: 18,
    name: "Milkshakes",
    description: "Vanilla, chocolate, strawberry, or oreo",
    price: "$5.99",
    category: "drinks",
  },
  {
    id: 19,
    name: "Coffee",
    description: "Freshly brewed coffee",
    price: "$2.49",
    category: "drinks",
  },
];

export const categories = [
  { id: "burgers", name: "Burgers", icon: "🍔" },
  { id: "sandwiches", name: "Sandwiches", icon: "🥪" },
  { id: "sides", name: "Sides", icon: "🍟" },
  { id: "drinks", name: "Drinks", icon: "🥤" },
];
