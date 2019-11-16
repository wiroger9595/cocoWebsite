import product1 from "./images/details-1.jpeg";
import product2 from "./images/details-2.jpeg";
import product3 from "./images/details-3.jpeg";
import product4 from "./images/details-4.jpeg";
import img1 from "./images/product-1.jpeg";
import img2 from "./images/product-2.jpeg";
import img3 from "./images/product-3.jpeg";
import img4 from "./images/product-4.jpeg";
import img5 from "./images/product-5.jpeg";
import img6 from "./images/product-6.jpeg";
import img7 from "./images/product-7.jpeg";
import img8 from "./images/product-8.jpeg";
import img9 from "./images/product-9.jpeg";
import img10 from "./images/product-10.jpeg";
import img11 from "./images/product-11.jpeg";
import img12 from "./images/product-12.jpeg";



////////////////////////////////////////////////Drink////////////////////////////
export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      calories: 250,
      breakfast: false,
      name: "Coconut Juice",
      slug: "Coconut-Drink",
      type: "Drink",
      price: "ask for detail",
      fruit_type: "Coco nut",
      size: 200,
      capacity: 1,
      health_cerificate: false,
      extraSugar: false,
      featured: false,
      description:
        // "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        "Thailand and abundant of NAM HOM COCONUT (nice flavour).",
      extras: [
        "Place of Origin: Thailand",
        "Purity: 100%",
        "Brix: 9",
        "Shelf Life: 2 Years",
        "Packing: Tin Can. Packing size: 320 ml/330 ml/350 ml/ 500 ml/ 520 ml/ 560 ml",
        "Packing: Alu Can. Packing size: AL330(net 310 ml) / AL350(net 330 ml) / AL500(net 480 ml)"
      ],
      images: [{
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: product2
            }
          }
        },
        {
          fields: {
            file: {
              url: product3
            }
          }
        },
        {
          fields: {
            file: {
              url: product4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Honey Aloe Syrup",
      slug: "Aloe-Drink",
      type: "Drink",
      price: "ask for detail",
      size: 200,
      fruit_type: "Aloe",
      capacity: 1,
      calories: 450,
      health_cerificate: false,
      extraSugar: false,
      featured: false,
      description: "We us aloe vera (aloe Barbadensis), the best kind of aloe to product all the products. And our products are free from ALOIN.",
      extras: [
        "Place of Origin: Thailand",
        "Brand: Miramar",
        "Can Size:",
        "190ml (Drain Weight: 100g)",
        "560ml (Drain Weight: 320g)",
        "Granule Size:",
        "10mm or 15mm."
      ],
      images: [{
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: product2
            }
          }
        },
        {
          fields: {
            file: {
              url: product3
            }
          }
        },
        {
          fields: {
            file: {
              url: product4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "Hibiscus Juice",
      slug: "Hibiscus-Drink",
      type: "Drink",
      price: "ask for detail",
      fruit_type: "Hibiscus",
      size: 300,
      capacity: 1,
      calories: 480,
      health_cerificate: true,
      extraSugar: false,
      featured: false,
      description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [{
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: product2
            }
          }
        },
        {
          fields: {
            file: {
              url: product3
            }
          }
        },
        {
          fields: {
            file: {
              url: product4

            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "Mango Juice",
      slug: "Mango-Juice",
      type: "Drink",
      price: "ask for detail",
      fruit_type: "Mango",
      size: 300,
      capacity: 1,
      calories: 360,
      health_cerificate: true,
      extraSugar: true,
      featured: true,
      description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [{
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: product2
            }
          }
        },
        {
          fields: {
            file: {
              url: product3
            }
          }
        },
        {
          fields: {
            file: {
              url: product4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "Classic Coffee",
      slug: "Coffee-Drink",
      type: "Drink",
      price: "ask for detail",
      fruit_type: "Coffee",
      size: 50,
      capacity: 2,
      calories: 290,
      health_cerificate: false,
      extraSugar: false,
      featured: false,
      description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [{
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: product2
            }
          }
        },
        {
          fields: {
            file: {
              url: product3
            }
          }
        },
        {
          fields: {
            file: {
              url: product4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "Tamarind Juice",
      slug: "Tamarind-Drink",
      type: "Drink",
      price: "ask for detail",
      fruit_type: "Tamarind",
      size: 350,
      capacity: 2,
      calories: 450,
      health_cerificate: false,
      extraSugar: false,
      featured: false,
      description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [{
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: product2
            }
          }
        },
        {
          fields: {
            file: {
              url: product3
            }
          }
        },
        {
          fields: {
            file: {
              url: product4
            }
          }
        }
      ]
    }
  },

  {
    sys: {
      id: "7"
    },
    fields: {
      name: "Mangosteen Juice",
      slug: "Mangosteen-Drink",
      type: "Drink",
      price: "ask for detail",
      fruit_type: "Mangosteen",
      size: 350,
      capacity: 2,
      calories: 390,
      health_cerificate: false,
      extraSugar: false,
      featured: false,
      description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [{
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: product2
            }
          }
        },
        {
          fields: {
            file: {
              url: product3
            }
          }
        },
        {
          fields: {
            file: {
              url: product4
            }
          }
        }
      ]
    }
  },

  {
    sys: {
      id: "8"
    },
    fields: {
      name: "Pineapple Juice",
      slug: "Pineapple-Drink",
      type: "Drink",
      price: "ask for detail",
      fruit_type: "Pineapple",
      size: 350,
      capacity: 3,
      calories: 510,
      health_cerificate: false,
      extraSugar: false,
      featured: false,
      description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [{
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: product2
            }
          }
        },
        {
          fields: {
            file: {
              url: product3
            }
          }
        },
        {
          fields: {
            file: {
              url: product4
            }
          }
        }
      ]
    }
  },

  /////////////////////////////////////////Drink ///////////////////////////  


  ////////////////////////////////////////////////Oil////////////////////////////

  {
    sys: {
      id: "9"
    },
    fields: {
      name: "Coconut Oil",
      slug: "Coconut-Oil",
      type: "Oil",
      price: "ask for detail",
      size: 600,
      fruit_type: "Coco nut",
      capacity: 2,
      calories: 650,
      health_cerificate: true,
      extraSugar: false,
      featured: false,
      description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [{
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: product2
            }
          }
        },
        {
          fields: {
            file: {
              url: product3
            }
          }
        },
        {
          fields: {
            file: {
              url: product4
            }
          }
        }
      ]
    }
  },

  ////////////////////////////////////////////////Oil////////////////////////////


  ////////////////////////////////////////////////Syrup////////////////////////////

  {
    sys: {
      id: "10"
    },
    fields: {
      name: "Mango Syrup",
      slug: "Mango-Syrup",
      type: "Syrup",
      price: "ask for detail",
      fruit_type: "Mango",
      size: 800,
      capacity: 2,
      calories: 730,
      health_cerificate: true,
      extraSugar: true,
      featured: true,
      description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [{
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: product2
            }
          }
        },
        {
          fields: {
            file: {
              url: product3
            }
          }
        },
        {
          fields: {
            file: {
              url: product4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "Pineapple Syrup",
      slug: "Pineapple-Syrup",
      type: "Syrup",
      price: "ask for detail",
      fruit_type: "Pineapple",
      size: 800,
      capacity: 3,
      calories: 750,
      health_cerificate: false,
      extraSugar: false,
      featured: false,
      description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [{
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: product2
            }
          }
        },
        {
          fields: {
            file: {
              url: product3
            }
          }
        },
        {
          fields: {
            file: {
              url: product4
            }
          }
        }
      ]
    }
  },

  ////////////////////////////////////////////////Syrup////////////////////////////

  ////////////////////////////////////////////////Tea ////////////////////////////

  {
    sys: {
      id: "12"
    },
    fields: {
      name: "Butterfly Tea Bag",
      slug: "Butterfly-Tea",
      type: "Tea",
      price: "ask for detail",
      fruit_type: "Others",
      size: 90,
      capacity: 4,
      calories: 250,
      health_cerificate: false,
      extraSugar: false,
      featured: false,
      description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [{
          fields: {
            file: {
              url: img10
            }
          }
        },
        {
          fields: {
            file: {
              url: product2
            }
          }
        },
        {
          fields: {
            file: {
              url: product3
            }
          }
        },
        {
          fields: {
            file: {
              url: product4
            }
          }
        }
      ]
    }
  },
  //////////////////////////////////////////////////Tea ////////////////////////////

  //////////////////////////////////////////////////Capsule ////////////////////////////



  {
    sys: {
      id: "13"
    },
    fields: {
      name: "Mangosteen Capsule",
      slug: "Mangosteen-Capsule",
      type: "Capsule",
      price: "ask for detail",
      fruit_type: "Mangosteen",
      size: 120,
      capacity: 5,
      calories: 70,
      health_cerificate: true,
      extraSugar: false,
      featured: true,
      description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [{
          fields: {
            file: {
              url: product1
            }
          }
        },
        {
          fields: {
            file: {
              url: product2
            }
          }
        },
        {
          fields: {
            file: {
              url: product3
            }
          }
        },
        {
          fields: {
            file: {
              url: product4
            }
          }
        }
      ]
    }
  },
  //////////////////////////////////////////////////Capsule ////////////////////////////

  
];


///////////////////////////////////////////

