const mongoose = require("mongoose");
const Category = require("../models/cards.js");

const data =  [
  {
    categoryName: "Top Brands",
    cards: [
      {
        image: "https://imagescdn.simons.ca/images/5821-23024149-10-A1_3/centred-logo-loose-tee.jpg?__=28",
        brandName: "Nike",
        remaining: 14,
        total: 50,
        details: "Collaborate with Nike to promote their latest sneakers. Deliverables include 3 Instagram posts and 2 reels.",
      },
      {
        image: "https://akns-images.eonline.com/eol_images/Entire_Site/2022819/rs_1024x759-220919100001-1024-adidas-ecomm.cm.91922.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top",
        brandName: "Adidas",
        remaining: 10,
        total: 40,
        details: "Create fitness content for Adidas. Deliverables include 2 reels and 2 Instagram stories.",
      },
      {
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/530084/01/mod01/fnd/IND/fmt/png/Classics-Logo-Regular-Fit-Men's-Hoodie",
        brandName: "Puma",
        remaining: 25,
        total: 60,
        details: "Join Puma’s campaign for athleisure wear. Deliverables include 3 posts and 1 reel.",
      },
      {
        image: "https://productimages.footy.com/6697bd89f70648db6b7eca07/0/3840.webp?q=75",
        brandName: "Under Armour",
        remaining: 5,
        total: 30,
        details: "Promote Under Armour's winter collection. Deliverables include 1 reel and 1 Instagram post.",
      },
    ],
  },
  {
    categoryName: "Beauty and Cosmetics",
    cards: [
      {
        image: "https://s3-ap-southeast-1.amazonaws.com/content-platform-production/sephora-content-platform-_4a83a8ea-e30a-4427-b079-c773702579ca",
        brandName: "Sephora",
        remaining: 20,
        total: 30,
        details: "Showcase Sephora's new beauty line. Deliverables include 2 reels and 1 post.",
      },
      {
        image: "https://www.nykaa.com/beauty-blog/wp-content/uploads/images/issue330/Nykaa-Brings-You-The-Best-Of-Skincare-From-The-Cross-Border-Store_1_OI.jpg",
        brandName: "Nykaa",
        remaining: 15,
        total: 50,
        details: "Promote Nykaa's skincare range. Deliverables include 3 Instagram stories.",
      },
      {
        image: "https://www.cossouq.com//media/catalog/category/loreal_paris_result_Mobile.webp",
        brandName: "Maybelline",
        remaining: 8,
        total: 40,
        details: "Join Maybelline’s lipstick campaign. Deliverables include 1 post and 1 reel.",
      },
      {
        image: "https://akns-images.eonline.com/eol_images/Entire_Site/20231120/rs_1024x759-231220101843-Best_New_Beauty_December_2023_1.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top",
        brandName: "L'Oréal",
        remaining: 18,
        total: 25,
        details: "Work with L'Oréal for haircare promotions. Deliverables include 2 reels.",
      },
    ],
  },
  {
    categoryName: "Health and Diet",
    cards: [
      {
        image: "https://www.herbalife.com/dmassets/regional-reusable-assets/workflow/emea/india/lifestyle/li-man-drinking-formula-1-shale-kitchen.jpg",
        brandName: "Herbalife",
        remaining: 12,
        total: 30,
        details: "Promote Herbalife’s health shakes. Deliverables include 3 posts and 1 reel.",
      },
      {
        image: "https://rukminim2.flixcart.com/image/850/1000/kij6f0w0-0/protein-supplement/t/l/q/impact-11699413-myprotein-original-imafyaszzwymhqxb.jpeg?q=90&crop=false",
        brandName: "MyProtein",
        remaining: 25,
        total: 50,
        details: "Collaborate with MyProtein for fitness supplements. Deliverables include 1 reel and 2 stories.",
      },
      {
        image: "https://www.yogaiya.in/wp-content/uploads/2018/08/Patanjali-Yogpeeth.jpg",
        brandName: "Patanjali",
        remaining: 10,
        total: 20,
        details: "Showcase Patanjali’s herbal products. Deliverables include 2 posts and 1 story.",
      },
      {
        image: "https://www.amway.com/medias/AmwayInsiderCommonQuestionsProductsIsAmwayNutrilite-en-US-m-01.jpg?context=bWFzdGVyfGltYWdlc3wyMTY4NDB8aW1hZ2UvanBlZ3xzeXMtbWFzdGVyL2ltYWdlcy9oNjgvaDlhLzk4ODA1Mzk1OTQ3ODIvQW13YXlJbnNpZGVyQ29tbW9uUXVlc3Rpb25zUHJvZHVjdHNJc0Ftd2F5TnV0cmlsaXRlLWVuLVVTLW0tMDEuanBnfGRhZmNjNGNhNGNmMWI4YjNmMTk3NzAyYzhhZTA2MzQ3NDkzYWJmOWI5MmZiMzJmMGMwOTE4NGVkNTQwZjcxMWY",
        brandName: "Amway",
        remaining: 5,
        total: 15,
        details: "Work with Amway for wellness products. Deliverables include 1 reel.",
      },
    ],
  },
  {
    categoryName: "Clothing and Accessories",
    cards: [
      {
        image: "https://www.wholesalemarketmumbai.com/images/product/sub_images/2024/06/kavya-zara-vol-15-readymade-cotton-dress-10-pcs-catalogue-3-2024-06-28_22_19_33.jpg",
        brandName: "Zara",
        remaining: 30,
        total: 50,
        details: "Promote Zara's summer collection. Deliverables include 2 posts and 1 reel.",
      },
      {
        image: "https://5.imimg.com/data5/SELLER/Default/2021/12/SF/NH/PV/144640267/hm1-500x500.jpg",
        brandName: "H&M",
        remaining: 20,
        total: 40,
        details: "Join H&M’s influencer program for winter wear. Deliverables include 1 reel and 3 stories.",
      },
      {
        image: "https://levi.in/cdn/shop/files/248690099_01_Style_Shot_54c88bb9-21b8-4005-951e-8b005c70c415.jpg?v=1712743039",
        brandName: "Levi's",
        remaining: 15,
        total: 30,
        details: "Collaborate with Levi’s for denim campaigns. Deliverables include 2 posts.",
      },
      {
        image: "https://image4.cdnsbg.com/1/14/52167_1704246042716.jpg",
        brandName: "Ray-Ban",
        remaining: 10,
        total: 20,
        details: "Promote Ray-Ban sunglasses. Deliverables include 1 Instagram post and 1 reel.",
      },
    ],
  },
  {
    categoryName: "Gyming and Fitness",
    cards: [
      {
        image: "https://images.ctfassets.net/gnolt3j9rex6/2iFwi7-meta-image/939b83bb642def02b33f5f6af96f385a/download-gold-gym-bill-pdf-for-hassle-free-billing.jpg",
        brandName: "Gold's Gym",
        remaining: 5,
        total: 25,
        details: "Collaborate with Gold’s Gym for fitness content. Deliverables include 1 reel and 2 posts.",
      },
      {
        image: "https://www.bandrabuzz.com/wp-content/uploads/2024/09/Decathlon-10K-Run-returns-to-Mumbai-Bandra-Buzz.jpg",
        brandName: "Decathlon",
        remaining: 8,
        total: 30,
        details: "Promote Decathlon’s fitness gear. Deliverables include 2 reels and 1 post.",
      },
      {
        image: "https://cdn.mos.cms.futurecdn.net/jEZeTXvdKBoZasSMgqPYGU-320-80.jpg",
        brandName: "Fitbit",
        remaining: 12,
        total: 50,
        details: "Showcase Fitbit’s fitness watches. Deliverables include 1 reel and 2 stories.",
      },
      {
        image: "https://i.ebayimg.com/images/g/1scAAOSwyiZmyS2R/s-l1200.jpg",
        brandName: "Reebok",
        remaining: 18,
        total: 40,
        details: "Join Reebok’s fitness apparel campaign. Deliverables include 3 posts.",
      },
    ],
  },
];

  ;

mongoose
  .connect("mongodb://127.0.0.1:27017/wobb", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Insert data
    await Category.insertMany(data);
    console.log("Data inserted successfully!");

    // Close connection
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
