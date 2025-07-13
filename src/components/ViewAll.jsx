import React, { useState } from 'react'
import ProductHeader from './ProductHeader'

const ViewAll = () => {

      const[productDate,changeproductData]=useState(
        [



  {
    "ProductName": "Lay's American Style Cream & Onion Potato Chips",
    "Image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSjQwCrqinocPGu1KssQ7TjoYRyC-A-ecuRdKa7dE8IBGJSzm6xkXtQ0n7b98HnB13Cgg_CUOvm-K4cA0eMFhDPgKinFk5H__Mdn5XcMka-9rh1L4XrNVlfuI",
    "Description": "Crispy, tasty potato chips with cream and onion flavor.",
    "Warranty": "3 weeks",
    "Expirydate": "12-04-2025",
    "Manufacturingdate": "11-03-2025",
    "Price": "20",
    "PhoneNo": "9087654321"
  },
  {
    "ProductName": "Dove Beauty Bathing Bar",
    "Image": "https://m.media-amazon.com/images/I/711vAJ8fWlL._AC_UL480_QL65_.jpg",
    "Description": "Gentle moisturizing soap for soft skin.",
    "Warranty": "N/A",
    "Expirydate": "15-07-2025",
    "Manufacturingdate": "15-07-2024",
    "Price": "55",
    "PhoneNo": "9876543210"
  },
  {
    "ProductName": "Samsung Galaxy M15 5G",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Smartphone with 6GB RAM, 128GB Storage.",
    "Warranty": "1 Year",
    "Expirydate": "N/A",
    "Manufacturingdate": "01-06-2025",
    "Price": "14999",
    "PhoneNo": "9123456780"
  },
  {
    "ProductName": "Milton Water Bottle",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Insulated stainless steel water bottle, 1 Litre.",
    "Warranty": "6 Months",
    "Expirydate": "N/A",
    "Manufacturingdate": "20-05-2025",
    "Price": "499",
    "PhoneNo": "9012345678"
  },
  {
    "ProductName": "Cadbury Dairy Milk Chocolate",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Rich, creamy milk chocolate bar.",
    "Warranty": "N/A",
    "Expirydate": "10-10-2025",
    "Manufacturingdate": "10-07-2025",
    "Price": "40",
    "PhoneNo": "9876543219"
  },


          
  {
    "ProductName": "Lay's American Style Cream & Onion Potato Chips",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Lay's American Style Cream & Onion Potato Chips - High quality and value for money.",
    "Warranty": "1 Year",
    "Expirydate": "06-10-2025",
    "Manufacturingdate": "27-05-2025",
    "Price": "12289",
    "PhoneNo": "9792393157"
  },
  {
    "ProductName": "Dove Beauty Bathing Bar",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Dove Beauty Bathing Bar - High quality and value for money.",
    "Warranty": "2 Years",
    "Expirydate": "05-10-2025",
    "Manufacturingdate": "27-05-2025",
    "Price": "1381",
    "PhoneNo": "9531583205"
  },
  {
    "ProductName": "Samsung Galaxy M15 5G",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Samsung Galaxy M15 5G - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "20-11-2024",
    "Manufacturingdate": "14-07-2024",
    "Price": "2113",
    "PhoneNo": "9427073723"
  },
  {
    "ProductName": "Milton Water Bottle",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Milton Water Bottle - High quality and value for money.",
    "Warranty": "N/A",
    "Expirydate": "15-08-2025",
    "Manufacturingdate": "20-07-2024",
    "Price": "10734",
    "PhoneNo": "9613070898"
  },
  {
    "ProductName": "Cadbury Dairy Milk Chocolate",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Cadbury Dairy Milk Chocolate - High quality and value for money.",
    "Warranty": "6 Months",
    "Expirydate": "28-08-2025",
    "Manufacturingdate": "27-04-2025",
    "Price": "5757",
    "PhoneNo": "9095140389"
  },
  {
    "ProductName": "Colgate Toothpaste 100g",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Colgate Toothpaste 100g - High quality and value for money.",
    "Warranty": "1 Year",
    "Expirydate": "19-03-2025",
    "Manufacturingdate": "12-11-2024",
    "Price": "3039",
    "PhoneNo": "9942980205"
  },
  {
    "ProductName": "Pepsi 500ml Bottle",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Pepsi 500ml Bottle - High quality and value for money.",
    "Warranty": "2 Years",
    "Expirydate": "05-04-2026",
    "Manufacturingdate": "01-05-2025",
    "Price": "8945",
    "PhoneNo": "9562787400"
  },
  {
    "ProductName": "Redmi Note 12 5G",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Redmi Note 12 5G - High quality and value for money.",
    "Warranty": "2 Years",
    "Expirydate": "06-10-2026",
    "Manufacturingdate": "07-02-2025",
    "Price": "5722",
    "PhoneNo": "9897856106"
  },
  {
    "ProductName": "Nescafe Instant Coffee 100g",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Nescafe Instant Coffee 100g - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "24-05-2026",
    "Manufacturingdate": "23-07-2024",
    "Price": "8635",
    "PhoneNo": "9105126712"
  },
  {
    "ProductName": "Wildcraft Backpack 35L",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Wildcraft Backpack 35L - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "27-10-2025",
    "Manufacturingdate": "07-11-2024",
    "Price": "5853",
    "PhoneNo": "9376399753"
  },
  {
    "ProductName": "Haldiram's Aloo Bhujia",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Haldiram's Aloo Bhujia - High quality and value for money.",
    "Warranty": "1 Year",
    "Expirydate": "19-04-2025",
    "Manufacturingdate": "13-01-2025",
    "Price": "18474",
    "PhoneNo": "9566530702"
  },
  {
    "ProductName": "Amul Butter 500g",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Amul Butter 500g - High quality and value for money.",
    "Warranty": "N/A",
    "Expirydate": "12-02-2025",
    "Manufacturingdate": "29-09-2024",
    "Price": "2404",
    "PhoneNo": "9929408567"
  },
  {
    "ProductName": "Parle-G Biscuits 250g",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Parle-G Biscuits 250g - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "20-02-2026",
    "Manufacturingdate": "04-03-2025",
    "Price": "16551",
    "PhoneNo": "9001095808"
  },
  {
    "ProductName": "Tata Tea Gold 500g",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Tata Tea Gold 500g - High quality and value for money.",
    "Warranty": "1 Year",
    "Expirydate": "04-04-2027",
    "Manufacturingdate": "22-05-2025",
    "Price": "8897",
    "PhoneNo": "9727135078"
  },
  {
    "ProductName": "Dettol Handwash 200ml",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Dettol Handwash 200ml - High quality and value for money.",
    "Warranty": "6 Months",
    "Expirydate": "23-02-2027",
    "Manufacturingdate": "17-03-2025",
    "Price": "5031",
    "PhoneNo": "9412793218"
  },
  {
    "ProductName": "Britannia Cheese Slices",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Britannia Cheese Slices - High quality and value for money.",
    "Warranty": "1 Year",
    "Expirydate": "05-07-2026",
    "Manufacturingdate": "18-10-2024",
    "Price": "1831",
    "PhoneNo": "9845651618"
  },
  {
    "ProductName": "Kissan Mixed Fruit Jam",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Kissan Mixed Fruit Jam - High quality and value for money.",
    "Warranty": "2 Years",
    "Expirydate": "24-06-2026",
    "Manufacturingdate": "22-02-2025",
    "Price": "9957",
    "PhoneNo": "9335673997"
  },
  {
    "ProductName": "Maggi 2-Minute Noodles",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Maggi 2-Minute Noodles - High quality and value for money.",
    "Warranty": "2 Years",
    "Expirydate": "22-06-2026",
    "Manufacturingdate": "29-04-2025",
    "Price": "4901",
    "PhoneNo": "9937050921"
  },
  {
    "ProductName": "Surf Excel Detergent 1kg",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Surf Excel Detergent 1kg - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "16-02-2026",
    "Manufacturingdate": "04-11-2024",
    "Price": "15939",
    "PhoneNo": "9191359024"
  },
  {
    "ProductName": "Pears Pure & Gentle Soap",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Pears Pure & Gentle Soap - High quality and value for money.",
    "Warranty": "2 Years",
    "Expirydate": "06-08-2026",
    "Manufacturingdate": "02-05-2025",
    "Price": "9280",
    "PhoneNo": "9872524585"
  },
  {
    "ProductName": "Nestle Everyday Dairy Whitener",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Nestle Everyday Dairy Whitener - High quality and value for money.",
    "Warranty": "6 Months",
    "Expirydate": "04-06-2026",
    "Manufacturingdate": "02-09-2024",
    "Price": "7898",
    "PhoneNo": "9479844771"
  },
  {
    "ProductName": "Good Day Cashew Cookies",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Good Day Cashew Cookies - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "30-09-2025",
    "Manufacturingdate": "17-11-2024",
    "Price": "2786",
    "PhoneNo": "9842966993"
  },
  {
    "ProductName": "Lux Soft Touch Soap",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Lux Soft Touch Soap - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "22-03-2026",
    "Manufacturingdate": "14-09-2024",
    "Price": "12499",
    "PhoneNo": "9009543076"
  },
  {
    "ProductName": "Patanjali Dant Kanti Toothpaste",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Patanjali Dant Kanti Toothpaste - High quality and value for money.",
    "Warranty": "1 Year",
    "Expirydate": "16-04-2027",
    "Manufacturingdate": "12-06-2025",
    "Price": "5372",
    "PhoneNo": "9115870982"
  },
  {
    "ProductName": "Saffola Gold Oil 1L",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Saffola Gold Oil 1L - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "17-09-2025",
    "Manufacturingdate": "19-07-2024",
    "Price": "14545",
    "PhoneNo": "9650505000"
  },
  {
    "ProductName": "Real Fruit Juice 1L",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Real Fruit Juice 1L - High quality and value for money.",
    "Warranty": "1 Year",
    "Expirydate": "23-07-2026",
    "Manufacturingdate": "26-10-2024",
    "Price": "5692",
    "PhoneNo": "9614761160"
  },
  {
    "ProductName": "Bisleri Mineral Water 1L",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Bisleri Mineral Water 1L - High quality and value for money.",
    "Warranty": "1 Year",
    "Expirydate": "09-09-2026",
    "Manufacturingdate": "20-03-2025",
    "Price": "13356",
    "PhoneNo": "9642929540"
  },
  {
    "ProductName": "MTR Ready to Eat Paneer",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "MTR Ready to Eat Paneer - High quality and value for money.",
    "Warranty": "2 Years",
    "Expirydate": "09-04-2025",
    "Manufacturingdate": "14-11-2024",
    "Price": "16345",
    "PhoneNo": "9341077462"
  },
  {
    "ProductName": "Closeup Red Hot Toothpaste",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Closeup Red Hot Toothpaste - High quality and value for money.",
    "Warranty": "2 Years",
    "Expirydate": "07-06-2026",
    "Manufacturingdate": "02-11-2024",
    "Price": "4838",
    "PhoneNo": "9557697572"
  },
  {
    "ProductName": "Horlicks Classic Malt 500g",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Horlicks Classic Malt 500g - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "02-07-2026",
    "Manufacturingdate": "10-02-2025",
    "Price": "4773",
    "PhoneNo": "9647104838"
  },
  {
    "ProductName": "Fortune Sunflower Oil 1L",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Fortune Sunflower Oil 1L - High quality and value for money.",
    "Warranty": "6 Months",
    "Expirydate": "22-07-2026",
    "Manufacturingdate": "14-11-2024",
    "Price": "739",
    "PhoneNo": "9011074157"
  },
  {
    "ProductName": "Vim Dishwash Gel 500ml",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Vim Dishwash Gel 500ml - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "27-02-2027",
    "Manufacturingdate": "12-06-2025",
    "Price": "15607",
    "PhoneNo": "9384564431"
  },
  {
    "ProductName": "Vicks Vaporub 50ml",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Vicks Vaporub 50ml - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "04-09-2026",
    "Manufacturingdate": "16-03-2025",
    "Price": "480",
    "PhoneNo": "9938957453"
  },
  {
    "ProductName": "LG 32 inch Smart TV",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "LG 32 inch Smart TV - High quality and value for money.",
    "Warranty": "N/A",
    "Expirydate": "05-09-2025",
    "Manufacturingdate": "13-08-2024",
    "Price": "10224",
    "PhoneNo": "9792263754"
  },
  {
    "ProductName": "OnePlus Nord CE 3 Lite",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "OnePlus Nord CE 3 Lite - High quality and value for money.",
    "Warranty": "2 Years",
    "Expirydate": "31-10-2025",
    "Manufacturingdate": "21-02-2025",
    "Price": "13677",
    "PhoneNo": "9979027231"
  },
  {
    "ProductName": "Noise Colorfit Smartwatch",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Noise Colorfit Smartwatch - High quality and value for money.",
    "Warranty": "6 Months",
    "Expirydate": "26-07-2025",
    "Manufacturingdate": "18-09-2024",
    "Price": "17944",
    "PhoneNo": "9884679322"
  },
  {
    "ProductName": "Boat Rockerz Headphones",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Boat Rockerz Headphones - High quality and value for money.",
    "Warranty": "N/A",
    "Expirydate": "06-07-2026",
    "Manufacturingdate": "14-08-2024",
    "Price": "8836",
    "PhoneNo": "9814518446"
  },
  {
    "ProductName": "Mi Power Bank 20000mAh",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Mi Power Bank 20000mAh - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "12-01-2027",
    "Manufacturingdate": "26-01-2025",
    "Price": "4504",
    "PhoneNo": "9764606571"
  },
  {
    "ProductName": "Philips LED Bulb 9W",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Philips LED Bulb 9W - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "01-08-2025",
    "Manufacturingdate": "05-01-2025",
    "Price": "4822",
    "PhoneNo": "9707994333"
  },
  {
    "ProductName": "Prestige Pressure Cooker 5L",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Prestige Pressure Cooker 5L - High quality and value for money.",
    "Warranty": "N/A",
    "Expirydate": "19-05-2026",
    "Manufacturingdate": "18-02-2025",
    "Price": "4454",
    "PhoneNo": "9735860308"
  },
  {
    "ProductName": "Butterfly Mixer Grinder",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Butterfly Mixer Grinder - High quality and value for money.",
    "Warranty": "6 Months",
    "Expirydate": "30-06-2025",
    "Manufacturingdate": "16-03-2025",
    "Price": "17252",
    "PhoneNo": "9784408007"
  },
  {
    "ProductName": "Bajaj Room Heater",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Bajaj Room Heater - High quality and value for money.",
    "Warranty": "1 Year",
    "Expirydate": "16-01-2025",
    "Manufacturingdate": "06-09-2024",
    "Price": "2395",
    "PhoneNo": "9147988929"
  },
  {
    "ProductName": "Syska LED Tube Light",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Syska LED Tube Light - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "30-11-2025",
    "Manufacturingdate": "14-01-2025",
    "Price": "65",
    "PhoneNo": "9883019130"
  },
  {
    "ProductName": "Usha Table Fan",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Usha Table Fan - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "09-01-2026",
    "Manufacturingdate": "07-08-2024",
    "Price": "2083",
    "PhoneNo": "9659976040"
  },
  {
    "ProductName": "Havells Extension Board",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Havells Extension Board - High quality and value for money.",
    "Warranty": "N/A",
    "Expirydate": "30-05-2025",
    "Manufacturingdate": "16-10-2024",
    "Price": "17791",
    "PhoneNo": "9961078821"
  },
  {
    "ProductName": "Canon Inkjet Printer",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Canon Inkjet Printer - High quality and value for money.",
    "Warranty": "N/A",
    "Expirydate": "29-08-2026",
    "Manufacturingdate": "26-05-2025",
    "Price": "1458",
    "PhoneNo": "9234034881"
  },
  {
    "ProductName": "HP Wireless Mouse",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "HP Wireless Mouse - High quality and value for money.",
    "Warranty": "2 Years",
    "Expirydate": "24-10-2026",
    "Manufacturingdate": "10-03-2025",
    "Price": "4318",
    "PhoneNo": "9574389965"
  },
  {
    "ProductName": "SanDisk 32GB Pendrive",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "SanDisk 32GB Pendrive - High quality and value for money.",
    "Warranty": "1 Year",
    "Expirydate": "04-08-2026",
    "Manufacturingdate": "21-03-2025",
    "Price": "18992",
    "PhoneNo": "9938820903"
  },
  {
    "ProductName": "TP-Link WiFi Router",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "TP-Link WiFi Router - High quality and value for money.",
    "Warranty": "N/A",
    "Expirydate": "04-05-2026",
    "Manufacturingdate": "26-09-2024",
    "Price": "7246",
    "PhoneNo": "9913159160"
  },
  {
    "ProductName": "Lay's American Style Cream & Onion Potato Chips",
    "Image": "https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    "Description": "Lay's American Style Cream & Onion Potato Chips - High quality and value for money.",
    "Warranty": "3 Weeks",
    "Expirydate": "25-03-2026",
    "Manufacturingdate": "31-10-2024",
    "Price": "14712",
    "PhoneNo": "9231617567"
  }
]
          
        
      )




  return (
    <div>
        <ProductHeader />
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3 p-5">

                {productDate.map(
                  (value,index)=>{
                    return(
                      <div class="card" >
  <img src={value.Image} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class={value.ProductName}></h5>
    <p>{value.Description}</p>
    <p>{value.Warranty}</p>
    <p>{value.Expirydate}</p>
    <p>{value.Manufacturingdate}</p>
    <p>{value.Price}</p>
    <p>{value.PhoneNo}</p>
    <a href="#" class="btn btn-primary">Add to Cart</a>
  </div>
</div>
                    )
                  }
                )
                }


                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">




                </div>
                
                
                
                
                
               
                
                
                
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default ViewAll