// Product and Site Data for UH CLOTH

const siteData = {
  brandName: "UH CLOTH",
  tagline: "Your Style, Your Story | آپ کا انداز، آپ کی کہانی",
  contact: {
    phone: "+92 300 1234567",
    email: "info@uhcloth.com",
    whatsapp: "+923001234567",
    address: "Street 123, Fashion District, Karachi, Pakistan"
  },
  social: {
    instagram: "https://instagram.com/uhcloth",
    facebook: "https://facebook.com/uhcloth",
    tiktok: "https://tiktok.com/@uhcloth"
  }
};

const categories = [
  { id: 'women', name: 'Women', urdu: 'خواتین', icon: '👗' },
  { id: 'girls', name: 'Girls', urdu: 'لڑکیاں', icon: '👧' },
  { id: 'men', name: 'Men', urdu: 'مرد', icon: '👔' },
  { id: 'new', name: 'New Arrivals', urdu: 'نئی آمد', icon: '✨' },
  { id: 'sale', name: 'Sale', urdu: 'سیل', icon: '🏷️' }
];

const subcategories = {
  casual: { name: 'Casual Wear', urdu: 'کیژول' },
  party: { name: 'Party Wear', urdu: 'پارٹی ویئر' },
  eastern: { name: 'Eastern', urdu: 'مشرقی' },
  western: { name: 'Western', urdu: 'مغربی' },
  abayas: { name: 'Abayas', urdu: 'عبایا' },
  kurtis: { name: 'Kurtis', urdu: 'کرتی' },
  suits: { name: 'Suits', urdu: 'سوٹ' }
};

const products = [
  // Women's Collection
  {
    id: 'w001',
    name: 'Elegant Pastel Kurti',
    urdu: 'خوبصورت پیسٹل کرتی',
    category: 'women',
    subcategory: 'kurtis',
    price: 3500,
    salePrice: null,
    colors: ['Mint', 'Peach', 'Lavender'],
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'assets/products/kurti-1.jpg',
    images: ['assets/products/kurti-1.jpg', 'assets/products/kurti-1-2.jpg'],
    description: 'Beautiful pastel kurti with intricate embroidery, perfect for casual and semi-formal occasions.',
    urduDesc: 'خوبصورت کڑھائی کے ساتھ پیسٹل کرتی، کیژول اور سیمی فارمل موقعوں کے لیے بہترین',
    rating: 4.5,
    reviews: 23,
    inStock: true,
    featured: true
  },
  {
    id: 'w002',
    name: 'Premium Silk Abaya',
    urdu: 'پریمیم سلک عبایا',
    category: 'women',
    subcategory: 'abayas',
    price: 5500,
    salePrice: null,
    colors: ['Black', 'Navy', 'Maroon'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'assets/products/abaya-1.jpg',
    images: ['assets/products/abaya-1.jpg'],
    description: 'Luxurious silk abaya with elegant draping and modest design.',
    urduDesc: 'شاندار سلک عبایا خوبصورت ڈیزائن کے ساتھ',
    rating: 5.0,
    reviews: 45,
    inStock: true,
    featured: true
  },
  {
    id: 'w003',
    name: 'Party Gown - Shimmer',
    urdu: 'پارٹی گاؤن - شمر',
    category: 'women',
    subcategory: 'party',
    price: 8500,
    salePrice: 6800,
    colors: ['Gold', 'Silver', 'Rose Gold'],
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'assets/products/gown-1.jpg',
    images: ['assets/products/gown-1.jpg'],
    description: 'Glamorous shimmer party gown perfect for weddings and special events.',
    urduDesc: 'شادیوں اور خاص تقریبات کے لیے بہترین شمر پارٹی گاؤن',
    rating: 4.8,
    reviews: 18,
    inStock: true,
    featured: true,
    isNew: false,
    onSale: true
  },
  {
    id: 'w004',
    name: 'Cotton Lawn Suit',
    urdu: 'کاٹن لان سوٹ',
    category: 'women',
    subcategory: 'suits',
    price: 4200,
    salePrice: null,
    colors: ['White', 'Peach', 'Sky Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'assets/products/suit-1.jpg',
    images: ['assets/products/suit-1.jpg'],
    description: 'Breathable cotton lawn three-piece suit with beautiful prints.',
    urduDesc: 'خوبصورت پرنٹس کے ساتھ تین پیس کاٹن لان سوٹ',
    rating: 4.3,
    reviews: 31,
    inStock: true,
    featured: false
  },
  {
    id: 'w005',
    name: 'Western Maxi Dress',
    urdu: 'ویسٹرن میکسی ڈریس',
    category: 'women',
    subcategory: 'western',
    price: 3800,
    salePrice: null,
    colors: ['Burgundy', 'Olive', 'Mustard'],
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'assets/products/maxi-1.jpg',
    images: ['assets/products/maxi-1.jpg'],
    description: 'Flowy maxi dress with modern cut and comfortable fabric.',
    urduDesc: 'جدید کٹ اور آرام دہ کپڑے کے ساتھ میکسی ڈریس',
    rating: 4.6,
    reviews: 27,
    inStock: true,
    featured: false,
    isNew: true
  },
  // Girls Collection
  {
    id: 'g001',
    name: 'Girls Fancy Frock',
    urdu: 'لڑکیوں کا فینسی فراک',
    category: 'girls',
    subcategory: 'party',
    price: 2500,
    salePrice: null,
    colors: ['Pink', 'Purple', 'White'],
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    image: 'assets/products/girls-frock-1.jpg',
    images: ['assets/products/girls-frock-1.jpg'],
    description: 'Beautiful party frock with embellishments for little princesses.',
    urduDesc: 'چھوٹی شہزادیوں کے لیے خوبصورت پارٹی فراک',
    rating: 4.7,
    reviews: 38,
    inStock: true,
    featured: true
  },
  {
    id: 'g002',
    name: 'Girls Casual Kurti',
    urdu: 'لڑکیوں کی کیژول کرتی',
    category: 'girls',
    subcategory: 'casual',
    price: 1800,
    salePrice: 1500,
    colors: ['Coral', 'Mint', 'Yellow'],
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    image: 'assets/products/girls-kurti-1.jpg',
    images: ['assets/products/girls-kurti-1.jpg'],
    description: 'Comfortable casual kurti for everyday wear.',
    urduDesc: 'روزمرہ پہننے کے لیے آرام دہ کیژول کرتی',
    rating: 4.4,
    reviews: 21,
    inStock: true,
    featured: false,
    onSale: true
  },
  {
    id: 'g003',
    name: 'Girls Eastern Dress',
    urdu: 'لڑکیوں کا مشرقی لباس',
    category: 'girls',
    subcategory: 'eastern',
    price: 2200,
    salePrice: null,
    colors: ['Red', 'Green', 'Blue'],
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    image: 'assets/products/girls-eastern-1.jpg',
    images: ['assets/products/girls-eastern-1.jpg'],
    description: 'Traditional eastern dress with modern touches.',
    urduDesc: 'جدید لمس کے ساتھ روایتی مشرقی لباس',
    rating: 4.5,
    reviews: 15,
    inStock: true,
    featured: false,
    isNew: true
  },
  // Men's Collection
  {
    id: 'm001',
    name: 'Men\'s Kurta Shalwar',
    urdu: 'مردوں کا کرتا شلوار',
    category: 'men',
    subcategory: 'eastern',
    price: 4500,
    salePrice: null,
    colors: ['White', 'Cream', 'Grey'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'assets/products/men-kurta-1.jpg',
    images: ['assets/products/men-kurta-1.jpg'],
    description: 'Premium quality kurta shalwar for formal and casual occasions.',
    urduDesc: 'فارمل اور کیژول موقعوں کے لیے بہترین کوالٹی کرتا شلوار',
    rating: 4.6,
    reviews: 33,
    inStock: true,
    featured: true
  },
  {
    id: 'm002',
    name: 'Men\'s Casual Shirt',
    urdu: 'مردوں کی کیژول قمیض',
    category: 'men',
    subcategory: 'casual',
    price: 2800,
    salePrice: null,
    colors: ['Blue', 'Black', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'assets/products/men-shirt-1.jpg',
    images: ['assets/products/men-shirt-1.jpg'],
    description: 'Comfortable cotton casual shirt with modern fit.',
    urduDesc: 'جدید فٹ کے ساتھ آرام دہ کاٹن کیژول قمیض',
    rating: 4.3,
    reviews: 19,
    inStock: true,
    featured: false
  },
  {
    id: 'm003',
    name: 'Men\'s Waistcoat',
    urdu: 'مردوں کی واسکٹ',
    category: 'men',
    subcategory: 'party',
    price: 3200,
    salePrice: 2700,
    colors: ['Black', 'Navy', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'assets/products/men-waistcoat-1.jpg',
    images: ['assets/products/men-waistcoat-1.jpg'],
    description: 'Elegant waistcoat perfect for weddings and formal events.',
    urduDesc: 'شادیوں اور فارمل تقریبات کے لیے خوبصورت واسکٹ',
    rating: 4.7,
    reviews: 24,
    inStock: true,
    featured: false,
    onSale: true
  },
  {
    id: 'm004',
    name: 'Men\'s Premium Sherwani',
    urdu: 'مردوں کا پریمیم شیروانی',
    category: 'men',
    subcategory: 'party',
    price: 12500,
    salePrice: null,
    colors: ['Ivory', 'Gold', 'Maroon'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'assets/products/men-sherwani-1.jpg',
    images: ['assets/products/men-sherwani-1.jpg'],
    description: 'Luxurious sherwani with intricate embroidery for special occasions.',
    urduDesc: 'خاص مواقع کے لیے عمدہ کڑھائی کے ساتھ شاندار شیروانی',
    rating: 5.0,
    reviews: 12,
    inStock: true,
    featured: true,
    isNew: true
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Ayesha Khan',
    nameUrdu: 'عائشہ خان',
    rating: 5,
    text: 'Amazing quality and beautiful designs! The kurti I ordered fits perfectly.',
    textUrdu: 'حیرت انگیز کوالٹی اور خوبصورت ڈیزائن! کرتی بالکل فٹ ہے۔',
    product: 'Elegant Pastel Kurti',
    image: 'assets/reviews/customer-1.jpg'
  },
  {
    id: 2,
    name: 'Fatima Ahmed',
    nameUrdu: 'فاطمہ احمد',
    rating: 5,
    text: 'Best online shopping experience! Fast delivery and premium packaging.',
    textUrdu: 'بہترین آن لائن شاپنگ! تیز ڈیلیوری اور پریمیم پیکیجنگ۔',
    product: 'Premium Silk Abaya',
    image: 'assets/reviews/customer-2.jpg'
  },
  {
    id: 3,
    name: 'Sara Ali',
    nameUrdu: 'سارہ علی',
    rating: 4,
    text: 'Lovely collection! The party wear is absolutely stunning.',
    textUrdu: 'خوبصورت کلیکشن! پارٹی ویئر بالکل شاندار ہے۔',
    product: 'Party Gown - Shimmer',
    image: 'assets/reviews/customer-3.jpg'
  }
];

const sizeCharts = {
  women: {
    S: { bust: '34"', waist: '28"', hip: '36"', length: '42"' },
    M: { bust: '36"', waist: '30"', hip: '38"', length: '42"' },
    L: { bust: '38"', waist: '32"', hip: '40"', length: '44"' },
    XL: { bust: '40"', waist: '34"', hip: '42"', length: '44"' },
    XXL: { bust: '42"', waist: '36"', hip: '44"', length: '46"' }
  },
  men: {
    S: { chest: '36"', waist: '30"', shoulder: '16"', length: '28"' },
    M: { chest: '38"', waist: '32"', shoulder: '17"', length: '29"' },
    L: { chest: '40"', waist: '34"', shoulder: '18"', length: '30"' },
    XL: { chest: '42"', waist: '36"', shoulder: '19"', length: '31"' },
    XXL: { chest: '44"', waist: '38"', shoulder: '20"', length: '32"' }
  },
  girls: {
    '2-3Y': { chest: '22"', waist: '20"', length: '20"' },
    '4-5Y': { chest: '24"', waist: '21"', length: '23"' },
    '6-7Y': { chest: '26"', waist: '22"', length: '26"' },
    '8-9Y': { chest: '28"', waist: '23"', length: '29"' },
    '10-11Y': { chest: '30"', waist: '24"', length: '32"' }
  }
};
