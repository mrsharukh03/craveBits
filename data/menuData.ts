export const CATEGORIES = [
  "All",
  "SOUPS",
  "BURGERS",
  "SANDWICHES",
  "HOT BEVERAGES",
  "WRAPS",
  "PIZZAS",
  "MOMOS",
  "VEG COMBO",
  "MOCKTAILS",
  "SHAKES",
  "SOUTH INDIAN",
  "RICE & NOODLES",
  "STARTERS",
  "PASTA",
  "FRIES",
  "GARLIC BREADS"
];

export const MENU_ITEMS = [
  // SOUPS
  { id: "S1", name: "Hot & Sour Soup", price: 99.00, category: "SOUPS", image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop", description: "Spicy and tangy vegetable broth.", isPopular: false },
  { id: "S2", name: "Manchow Soup", price: 99.00, category: "SOUPS", image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop", description: "Dark brown soup with mixed vegetables & fried noodles.", isPopular: true },
  { id: "S3", name: "Sweet Corn Soup", price: 99.00, category: "SOUPS", image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop", description: "Comforting thick soup made with sweet corn.", isPopular: false },
  { id: "S4", name: "Tomato Soup", price: 99.00, category: "SOUPS", image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop", description: "Classic creamy tomato soup with croutons.", isPopular: false },
  { id: "S5", name: "Mushroom Soup", price: 120.00, category: "SOUPS", image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop", description: "Rich and creamy mushroom soup.", isPopular: false },
  { id: "S6", name: "Chicken Soup", price: 150.00, category: "SOUPS", image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop", description: "Healthy clear chicken soup.", isPopular: true },

  // BURGERS
  { id: "B1", name: "Veg Burger", price: 90.00, category: "BURGERS", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1999&auto=format&fit=crop", description: "Classic mixed vegetable patty burger.", isPopular: false },
  { id: "B2", name: "Cheesy Paneer Burger", price: 140.00, category: "BURGERS", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1999&auto=format&fit=crop", description: "Spicy paneer patty loaded with cheese.", isPopular: true },
  { id: "B3", name: "Double Vegies Burger", price: 140.00, category: "BURGERS", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1999&auto=format&fit=crop", description: "Double veggie patty with fresh lettuce and sauce.", isPopular: false },
  { id: "B4", name: "Egg Burger", price: 140.00, category: "BURGERS", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1999&auto=format&fit=crop", description: "Soft brioche bun with a perfectly fried egg and mayo.", isPopular: false },
  { id: "B5", name: "Chicken Burger", price: 150.00, category: "BURGERS", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1999&auto=format&fit=crop", description: "Juicy grilled chicken patty topped with fresh greens.", isPopular: true },
  { id: "B6", name: "Double Chicken Burger", price: 180.00, category: "BURGERS", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=2080&auto=format&fit=crop", description: "Two chicken patties stuffed with melting cheese.", isPopular: true },

  // SANDWICHES
  { id: "SW1", name: "Grilled Sandwich", price: 70.00, category: "SANDWICHES", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop", description: "Classic butter-toasted vegetable sandwich.", isPopular: false },
  { id: "SW2", name: "Cheese Corn Sandwich", price: 130.00, category: "SANDWICHES", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop", description: "Sweet corn combined with melted cheese.", isPopular: true },
  { id: "SW3", name: "Paneer Sandwich", price: 130.00, category: "SANDWICHES", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop", description: "Spiced paneer chunks grilled in bread.", isPopular: false },
  { id: "SW4", name: "Extra Veggies Loaded", price: 130.00, category: "SANDWICHES", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop", description: "Triple decker sandwich loaded with fresh veggies.", isPopular: false },
  { id: "SW5", name: "Cheesy Paneer Sandwich", price: 140.00, category: "SANDWICHES", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop", description: "Rich paneer and cheese fusion.", isPopular: true },
  { id: "SW6", name: "Grilled Chicken Sandwich", price: 180.00, category: "SANDWICHES", image: "https://images.unsplash.com/photo-1619860860775-4ebc5cb7e1b5?q=80&w=2070&auto=format&fit=crop", description: "Roasted chicken slices with mayo.", isPopular: true },
  { id: "SW7", name: "Peri Peri Chicken Sandwich", price: 180.00, category: "SANDWICHES", image: "https://images.unsplash.com/photo-1619860860775-4ebc5cb7e1b5?q=80&w=2070&auto=format&fit=crop", description: "Spicy peri peri chicken sandwich.", isPopular: true },

  // HOT BEVERAGES
  { id: "HB1", name: "Adrak Tea (Kulhad)", price: 40.00, category: "HOT BEVERAGES", image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=2070&auto=format&fit=crop", description: "Authentic ginger tea served in an earthen clay pot.", isPopular: true },
  { id: "HB2", name: "Elachi Tea", price: 40.00, category: "HOT BEVERAGES", image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=2070&auto=format&fit=crop", description: "Cardamom flavored Indian milk tea.", isPopular: false },
  { id: "HB3", name: "Masala Tea", price: 40.00, category: "HOT BEVERAGES", image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=2070&auto=format&fit=crop", description: "Traditional spiced milky tea.", isPopular: true },
  { id: "HB4", name: "Mix Tea Flavours", price: 40.00, category: "HOT BEVERAGES", image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=2070&auto=format&fit=crop", description: "Assorted warm tea mix.", isPopular: false },
  { id: "HB5", name: "Chocolate Tea", price: 40.00, category: "HOT BEVERAGES", image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=2070&auto=format&fit=crop", description: "Sweet chocolate-infused tea.", isPopular: false },
  { id: "HB6", name: "Black Coffee", price: 60.00, category: "HOT BEVERAGES", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1975&auto=format&fit=crop", description: "Strong and bold black coffee.", isPopular: false },
  { id: "HB7", name: "Hot Coffee", price: 80.00, category: "HOT BEVERAGES", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1782&auto=format&fit=crop", description: "Classic hot milk-brewed coffee.", isPopular: true },
  { id: "HB8", name: "Lemon Iced Tea", price: 99.00, category: "HOT BEVERAGES", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1964&auto=format&fit=crop", description: "Refreshing lemon tea.", isPopular: true },

  // WRAPS
  { id: "W1", name: "Veggie Delight Wrap", price: 150.00, category: "WRAPS", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1964&auto=format&fit=crop", description: "Fresh veggies and sauces wrapped perfectly.", isPopular: false },
  { id: "W2", name: "Paneer Wrap", price: 160.00, category: "WRAPS", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1964&auto=format&fit=crop", description: "Spiced paneer roll.", isPopular: true },
  { id: "W3", name: "Grilled Chicken Wrap", price: 180.00, category: "WRAPS", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1964&auto=format&fit=crop", description: "Slices of grilled chicken wrapped in a warm tortilla.", isPopular: true },
  { id: "W4", name: "Chicken Tandoori Wrap", price: 180.00, category: "WRAPS", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1964&auto=format&fit=crop", description: "Tandoori flavored chicken wrap with mint mayo.", isPopular: true },
  { id: "W5", name: "Peri Peri Chicken Wrap", price: 180.00, category: "WRAPS", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1964&auto=format&fit=crop", description: "Spicy peri peri marinated chicken wrap.", isPopular: false },

  // PIZZAS
  { id: "P1", name: "Classic Margirita Pizza", price: 130.00, category: "PIZZAS", image: "https://images.unsplash.com/photo-1604068549290-dea0e4a30536?q=80&w=1974&auto=format&fit=crop", description: "Classic cheese and tomato pizza.", isPopular: false },
  { id: "P2", name: "Capsicum & Onion Pizza", price: 160.00, category: "PIZZAS", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop", description: "Crunchy capsicum and sweet onions on a cheesy base.", isPopular: false },
  { id: "P3", name: "Mushroom Pizza", price: 160.00, category: "PIZZAS", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop", description: "Loaded with fresh mushrooms and cheese.", isPopular: false },
  { id: "P4", name: "Cheese Delight Pizza", price: 170.00, category: "PIZZAS", image: "https://images.unsplash.com/photo-1604068549290-dea0e4a30536?q=80&w=1974&auto=format&fit=crop", description: "Extra cheese burst pizza.", isPopular: true },
  { id: "P5", name: "Paneer Corn Pizza", price: 190.00, category: "PIZZAS", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop", description: "Spicy paneer and sweet corn topping.", isPopular: true },
  { id: "P6", name: "Farm House Pizza", price: 199.00, category: "PIZZAS", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop", description: "Onion, capsicum, tomato, and mushroom.", isPopular: true },
  { id: "P7", name: "Peri - Peri Pizza", price: 200.00, category: "PIZZAS", image: "https://images.unsplash.com/photo-1604068549290-dea0e4a30536?q=80&w=1974&auto=format&fit=crop", description: "Spicy peri peri sauce with veggie toppings.", isPopular: false },
  { id: "P8", name: "Brulee Pizza", price: 220.00, category: "PIZZAS", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop", description: "Unique flavor crust pizza.", isPopular: false },
  { id: "P9", name: "Chilli Chicken Pizza", price: 220.00, category: "PIZZAS", image: "https://images.unsplash.com/photo-1604068549290-dea0e4a30536?q=80&w=1974&auto=format&fit=crop", description: "Spicy chicken chunks with mozzarella.", isPopular: true },

  // MOMOS
  { id: "M1", name: "Steamed Momos", price: 100.00, category: "MOMOS", image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=2070&auto=format&fit=crop", description: "Authentic steamed dimsums with spicy dip.", isPopular: true },
  { id: "M2", name: "Fried Momos", price: 120.00, category: "MOMOS", image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=2070&auto=format&fit=crop", description: "Crispy fried momos.", isPopular: false },
  { id: "M3", name: "Kurkure Momos", price: 150.00, category: "MOMOS", image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=2070&auto=format&fit=crop", description: "Extra crunchy battered momos.", isPopular: true },
  { id: "M4", name: "Tandoori Momos", price: 160.00, category: "MOMOS", image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=2070&auto=format&fit=crop", description: "Momos marinated in tandoori spices and grilled.", isPopular: true },
  { id: "M5", name: "Creamy Momos", price: 150.00, category: "MOMOS", image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=2070&auto=format&fit=crop", description: "Momos tossed in a rich, creamy sauce.", isPopular: false },
  { id: "M6", name: "Specy Gravy Momos", price: 160.00, category: "MOMOS", image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=2070&auto=format&fit=crop", description: "Momos tossed in a hot and spicy gravy.", isPopular: false },

  // PLACEHOLDERS FOR OTHERS
  { id: "SH1", name: "Oreo Shake", price: 140.00, category: "SHAKES", image: "https://images.unsplash.com/photo-1572490122747-3968bca52084?q=80&w=1974&auto=format&fit=crop", description: "Thick chocolate oreo shake.", isPopular: true },
  { id: "MC1", name: "Classic Mojito", price: 120.00, category: "MOCKTAILS", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop", description: "Refreshing mint and lime mocktail.", isPopular: true },
  { id: "SI1", name: "Masala Dosa", price: 120.00, category: "SOUTH INDIAN", image: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?q=80&w=2070&auto=format&fit=crop", description: "Crispy crepe stuffed with potato masala.", isPopular: true },
  { id: "RN1", name: "Hakka Noodles", price: 150.00, category: "RICE & NOODLES", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=2086&auto=format&fit=crop", description: "Wok-tossed noodles with fresh veggies.", isPopular: true },
  { id: "ST1", name: "Paneer Chilli", price: 180.00, category: "STARTERS", image: "https://images.unsplash.com/photo-1594970428514-6ec1af534f3c?q=80&w=1974&auto=format&fit=crop", description: "Spicy tossed paneer chunks.", isPopular: true },
].map(item => ({
  ...item,
  swiggyLink: "https://www.swiggy.com/",
  zomatoLink: "https://www.zomato.com/"
}));
