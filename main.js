
    var category=[{
        cat:"Electronics & Appliances",
        img:"https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/electronics.png.webp?v=1.0"
    },
    {
        cat:"Cell Phones & Accessories",
        img:"https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/cell-phones-&-accessories.png.webp?v=1.0"
    },
    {
        cat:"Home Goods",
        img:"https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/home-goods.png.webp?v=1.0"
    },
    {
        cat:"Tools & Home Improvements",
        img:"https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/tools-&-home-improvements.png.webp?v=1.0"
    },
    {
        cat:"Beauty & Personal Care",
        img:"https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/beauty-&-personal-care.png.webp?v=1.0"
    },
    {
        cat:"Sports & Tools",
        img:"https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/sports-&-tools.png.webp?v=1.0"
    },
    {
        cat:"Luggage & Travel Gear",
        img:"https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/luggage-&-travel-gear.png.webp?v=1.0"
    },
    {
        cat:"Office Products",
        img:"https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/office-products.png.webp?v=1.0"
    },
    {
        cat:"Automotive",
        img:"https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/automotive.png.webp?v=1.0"
    },
    {
        cat:"Baby & Toddler",
        img:"https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/baby-&-toddler.png.webp?v=1.0"
    }
    ];
    
    var parent1=document.getElementById("parent");

    for(var i=0; i<6; i++){
       
    
    var div=document.createElement("div");
  
    div.className="main";
    var div1=document.createElement("div");
    div1.id="sec";
    
    var p=document.createElement("p");
    var p1=document.createElement("p");
    p1.id="d";
    div1.append(p,p1);
    var figure=document.createElement("figure");
    var img=document.createElement("img");
    img.src=category[i].img;
    img.style.minWidth="50%"
    figure.append(img);
    div.append(div1,figure);
    parent1.append(div);
    
    p.textContent=category[i].cat;
    p1.textContent=">";
   

    }
     
        var j=1; k=7;
           let interval=setInterval(function (){
         
              parent1.innerHTML=null;
        for(i=j; i<k; i++){
       
          
       var div=document.createElement("div");
       div.className="main";
       var div1=document.createElement("div");
       div1.id="sec";
       
       var p=document.createElement("p");
       var p1=document.createElement("p");
       p1.id="d";
       div1.append(p,p1);
       var figure=document.createElement("figure");
       var img=document.createElement("img");
       img.src=category[i].img;
       img.style.minWidth="50%"
       figure.append(img);
       div.append(div1,figure);
       parent1.append(div);
   
       p.textContent=category[i].cat;
       p1.textContent=">";
   
        }

        j++;
        k++;
        if(k==11){
            k=7; j=1;
        }
   
           },3000);
  


        var proDiv=document.getElementById("product")
        var products =[{
    img:"https://m.media-amazon.com/images/I/714R9IgysZL._AC_SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/714R9IgysZL._AC_SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/71F1JolGgtL._AC_SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/71EKFyTxoXL._AC_SL1500_.jpg",
    desc:"Hyjoy 9 Inch Android Tablet, Quad-Core 2Gb RAM 32GB ROM IPS HD Display 4000mAh Tape-C Tablets",
    price:8562,
    category:"phones",
    description:"[High-performance Tablet PC] Runs on Android 10.0 operating system, and has 2GB RAM & 32GB ROM (4-128GB Micro SD Card support). 9 inch screen supports 1280*800 pixels,32-bit Quad-Core Processor (up to 1.6GHz) offers strong performance.[High-performance Processor] The Quad-core processor enables an impressive gaming and multimedia experience. The 9-inch tablet computer runs on android 10.0 operating system, and with a 4000mAh battery and low power consumption CPU, can enjoy up to 6 hours of mixed use.[Clear and bright IPS display] Uses a 1280*800 full HD IPS display with vivid colors and improved viewing angle. The feature that automatically adjusts Reading mode optimizes the backlight to reduce eye fatigue.[Dual Camera and Dual Box Speakers] Android tablet With Front 2.0 MP and rear 5.0 MP cameras. Uses dual box speakers, allowing for higher volume and sound quality and also reducing distortion for better listening experience.【Fast and Powerful Processor】 Blackview tablet Tab8E is Octa-Core Precessor and Android 10 system, 3GB RAM and 1.6Ghz spreadtrum, Running Speed Increased by 30%.【Brighter Display you got】This 10.1 inch tablet uses vivid 1920p full HD IPS display, is 20% brighter than previous generation.【13MP+5MP Dual Cameras, Enjoy it】 Dual 13MP + 5MP cameras, you can have richer colors and more refined picture quality, leaving you with beautiful moments in life.【Portable Dual Speakers Tablet for Kids】The 10.1 inch tablet comes with dual front box speakers,bring the immersive experience, producing high-quality, and richer sound around the room.【Long-lasting Tablet】Equipped with 6580mAh built-in rechargeable battery, enables 6-8 hours mixed-use battery life--Blackview Tab 8E is the best android tablet for kids and family."
},
  {
    img:"https://m.media-amazon.com/images/I/81+Qa8MUwDL._AC_SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/81RObFM197L._AC_SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/81AI1IrKawL._AC_SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/81WPPmP+4mL._AC_SL1500_.jpg",
    desc:"Ninja BL770 Mega Kitchen System and Blender with Total Crushing Pitcher, Food Processor Bowl, Dough Blade, to Go Cups, 1500-Watt Base, Black",
    price:16649,
    category:"Electronics & Appliances",
    description:"The Ninja mega kitchen system comes packed with 1500 watts of power to handle all of your drink and meal making needs. The XL 72 oz. blender pitcher features total crushing technology to blast through ice and frozen fruit. Two 16 oz. Nutri Ninja Cups with to go lids are perfect for creating personalized, nutrient rich drinks to take on the go. The 8 Cup food Processor bowl comes equipped with a chopping blade for perfect, even results and a dough blade that can mix up to 2 lbs. Of dough in 30 seconds.SPEND LESS TIME ON PREP IN THE KITCHEN: Food processor makes quick, easy work of common kitchen prep work like shredding cheese, slicing veggies and pureeing pestos and dips. 8 CUP CAPACITY: The 8 cup bowl is large enough to handle most jobs but small enough for easy storage. LARGE FEED CHUTE: Can fit large foods like a whole block of cheese for quick, easy processing and less prep time. VERSATILITY OF A FOOD PROCESSOR, FOOD CHOPPER AND VEGETABLE CHOPPER: Reversible disc slices and shreds, while the stainless steel s-blade chops, mixes and purees.2 SPEEDS PLUS PULSE AND 450 WATTS OF POWER: Food processor features low and high speeds plus pulse for the control you need for a variety of recipes.DISHWASHER SAFE PARTS: Dishwasher safe blades, bowl and lid make cleanup easy. Parts are BPA-free in food zones.",
},
  {
    img:"https://m.media-amazon.com/images/I/71IVTMa5JQL._AC_SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/71zXBIJxn1L._AC_SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/71Fk27QuZqL._AC_SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/71U2-M4R9lL._AC_SL1500_.jpg",
    desc:"Lenovo IdeaPad 1 14 14.0\" Laptop, 14.0\" HD (1366 x 768) Display, Intel Celeron N4020 Processor, 4GB DDR4 RAM, 64 GB SSD Storage, Intel UHD Graphics 600, Win 10 in S Mode, 81VU0079US, Ice Blue",
    price:23468,
    category:"laptop",
    description:"Capacity:14 The Lenovo IdeaPad™ 1 is your daily computing companion. Not only does this affordable laptop deliver amazing performance with an Intel® Celeron® processor, but it also features 164 GB M.2 PCIe SSD storage and a 14-inch HD display for great productivity. Browse the internet, stream your favorite shows, chat with family, or get work done on this reliable notebook computer. With a stylish Ice Blue case, this everyday laptop is easy to use and durable, with long battery life to let you handle daily tasks easily. Great for students, travelers, and those who like to work from home or the local coffee shop, the IdeaPad 1 is lightweight at just over 3 lbs and is less than 1 inch thick, so it's easy to slip into your Lenovo laptop backpack or carrying sleeve. Plus, with up to 8 hours of battery life, you can stay productive no matter where you are! You'll stay connected with integrated WiFi and Bluetooth® while on the go.【Memory & Storage】8GB high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once. Hard Drive is 256GB PCIe Solid State Drive which allows to fast bootup and data transfer【Processor】10th Gen Intel Core i3-10110U 2.10GHz Dual-Core Processor (4MB Intel Smart Cache, up to 4.10GHz), Intel UHD Graphics【Screen】15.6\" HD touch screen (1366 x 768) Display【Ports】2 x USB 3.0, 1 x USB 2.0, 1 x HDMI, 1 x Combination Audio Jack, 1 x Multi-format SD Media Card Reader, Wireless-AC + Bluetooth Combo【Operating System】 Windows 10 Home 64-bit" 
},
  {
    img:"https://m.media-amazon.com/images/I/51tvu13LblL._SL1000_.jpg",
    img1:"https://m.media-amazon.com/images/I/81JsJ0xluvL._SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/81WklWuPW9L._SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/81j70DHYFrL._SL1500_.jpg",
    desc:"Tea Tree Special Shampoo, For All Hair Types",
    price:3611,
    category:"skin",
    description:"Tea Tree Special Shampoo, For All Hair Types,Dandruff shampoos, Fresh beauty, Shampoo brands, Shampoo for dandruff, Shampoo for all hair types, Best shampoo for itchy scalp Soften, hydrate and transport hair to the tropics with this nourishing coconut milk shampoo A tantalizing blend with coconut milk, coconut oil & egg white protein, it helps strengthen strands TRANSPORT HAIR TO THE TROPICS: This 25.4-fluid ounce bottle of OGX Nourishing + Coconut Milk Shampoo helps strengthen and hydrate hair, leaving it looking glowing, healthy and beautiful with every wash NOURISH, STRENGTHEN and LOCK IN MOISTURE: Suitable for all hair types and textures, this creamy nourishing shampoo leaves hair with super shine and added moisture that won't weigh down your tresses HAIR CARE INSPIRED BY NATURE: The deeply nourishing blend contains coconut oil, which helps add lustrous shine and softness to hair, coconut milk to keep hair strong and smooth and whipped egg white protein, for smooth and healthy looking hair IRRESISTIBLY DELICIOUS SCENT: The creamy coconut, white peach and shea butter scent leaves locks with an irresistibly good smell every time you lather up Plus the sulfate-free surfactant hair care system is paraben-free and gentle on your tresses"
},
  {
    img:"https://m.media-amazon.com/images/I/71+OqjluYGL._AC_UL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/71680bLF9yL._AC_UL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/71lROWPMaNL._AC_UL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/71sFwuZoG3L._AC_UL1500_.jpg",
    desc:"adidas Men's Grand Court Sneaker",
    category:"Sports & Tools",
    price:2541,
    description: "These men's adidas shoes have a clean and contemporary design with the DNA of '70s-era tennis trainers. Soft suede overlays and adidas-print laces bring the vintage vibes. Plush cushioning keeps you comfortable all day.Explore urban environments in modern style. These men's shoes have a premium knit upper with sleek details riding on a speedy-looking sculpted midsole. The running-inspired shoes feature the comfort of pillow-soft cushioning and a sock-like fit.100% Other fibers Imported Synthetic sole Shaft measures approximately low-top from arch Platform measures approximately .75 inches Boot opening measures approximately 0-3 inches around adidas quality Imported by adidas"
},
  {
    img:"https://m.media-amazon.com/images/I/91FQlLNf+dL._AC_SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/812S1mxqHKL._AC_SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/81ulhwqBSQL._AC_SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/61qfWJNWmML._AC_SL1500_.jpg",
    desc:"AInIYIKE TM-2110 Conference USB Microphone for Computer Desktop and Laptop with 360° / 20' Long Pick Up Range Compatible with Windows and Mac for Dictation, Recording, YouTube, Conference Call, Skype",
    category:"phones",
    price:3110,
    description: "Omnidirectional Microphone - It is not a Speaker or Speakerphone, it is a condenser microphone. The microphone has an omnidirectional pickup pattern with a pickup distance of 11.5 ft, making it easy to capture the most subtle sounds from 360° directions and transmit the sound more loud and clear. Participants can hear each other without raising their voices. Made for Conferences - This microphone is perfect for small or medium meetings over an internet network by using Skype/GoToMeeting/WebEx/Hangouts/Fuze/VoIP/Zoom and other softwares. You can also use it for court reports, seminars, remote training, business negotiations, video chats, etc. Plug & Play, No Drivers Required - The microphone is compatible with all operating systems - both Windows and macOS. You just need to plug the microphone to start recording. If there is no response after inserting the mic, please go to the microphone setting of your computer and select the mic as the INPUT device. Convenient Mute Button - Quickly mute/unmute your microphone. The built-in blue indicator light for checking whether the USB microphone is working. Well Designed Cable, Durable - The microphone is constructed of sturdy and durable metal material and the base is fitted with an anti-slip mat which keeps it stable on desktop during use. It is small, convenient and does not require much space when in use. Connected with a 1.8m nylon shielded wire, it effectively eliminates signal interferences to achieve the best recording results."
    },
  {
    img:"https://m.media-amazon.com/images/I/71Bd6+BQQnL._SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/81lnbAxwe2L._SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/81e0c6DN6RL._SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/81ULS+Lr8SL._SL1500_.jpg",
    desc:"Neutrogena Hydro Boost Hyaluronic Acid Hydrating Water Gel Daily Face Moisturizer for Dry Skin, Oil-Free, Non-Comedogenic Face Lotion, 1.7 fl. oz",
    category:"skin",
    price:1931,
    description: "Use Neutrogena Hydro Boost Hydrating Water Gel Moisturizer to instantly quench dry skin and boost's skin's hydration level. This oil-free face lotion quenches dry skin to keep it looking smooth, supple, and hydrated day after day. The unique water gel formula absorbs quickly like a gel, but has the long-lasting, intense moisturizing power of a cream. This daily gel moisturizer is formulated with hyaluronic acid, which is naturally found in the skin. Hyaluronic acid, a hydrator found naturally in the skin, attracts moisture and locks it in. The non-comedogenic gel facial moisturizer can be worn under makeup and leaves your skin more supple and smooth. Add this hyaluronic acid moisturizer to your at-home hydrating self care routine [ HYALURONIC ACID MOISTURIZER ] With hyaluronic acid, ceramides and MVE technology for 24 hour hydration. Rich, velvety texture that leaves skin feeling smooth, it is absorbed quickly for softened skin without greasy, sticky, feel. [ ESSENTIAL CERAMIDES ] Ceramides are found naturally in the skin and make up 50% of the lipids in the skin barrier. All CeraVe products are formulated with three essential ceramides (1, 3, 6-II) to help restore and maintain the skin’s natural barrier.[ DRY SKIN RELIEF ] A deficiency of ceramides in skin can often be associated with dry skin, which can feel itchy and look flaky. CeraVe Moisturizing Cream was shown to increase the skin's level of ceramides after 4 weeks. [ DERMATOLOGIST RECOMMENDED ] CeraVe Skincare is developed with dermatologists and has products suitable for dry skin, sensitive skin, oily skin, acne-prone, and more. [ GENTLE DAILY MOISTURIZER ] For face and body or can be used as a hand cream for dry skin relief. Holds National Eczema Association (NEA) Seal of Acceptance. Fragrance free, paraben free, allergy-tested, and non-comedogenic."
},
  {
    img:"https://m.media-amazon.com/images/I/81U00QvXleL._AC_SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/81bwPQhKbAL._AC_SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/91foDBBI89L._AC_SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/513wSx2C2eL._SS400_.jpg",
    desc:"Horizon Fitness T101 Treadmill Series, Bluetooth Enabled, Folding Treadmills, Upgrade to The T202 or T303 for Larger Motor, app Integration, and Longer Deck",
    category:"Sports & Tools",
    price:59444,
    description: "Keep your workouts interesting with Bluetooth connectivity and a variety of workout programs. Effortlessly store between uses with the one-button Hydraulic feather light TM folding technology. Feel light on your feet thanks to the high-quality motor that recalibrates with each footfall. This means the motor can run at lower RPMs to minimize noise and enhance durability. The T101 has won numerous awards for quality and reliability, so you can be confident this is a Treadmill you'll enjoy for years to come.3-Zone variable response cushioning Feather light foldingBluetooth enabled.Deck Thickness:0.7 inch Built-in speakers, energy saver mode, fan, tablet rack, water bottle holder 10 speed keys & 10 incline keys, quick program keys, Durable, 2.5 CHP motor runs at lower RPMs to minimize noise and increase efficiency"
  },
  {
    img:"https://m.media-amazon.com/images/I/91UGkZmARtL._AC_SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/81B+2KfDihL._AC_SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/91TC5qmT93S._AC_SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/81CHtQK5YSS._AC_SL1500_.jpg",
    desc:"Serta Rane Collection Convertible Sofa, L66.1 x W33.1 x H29.5, Charcoal",
    price:19366,
    category: "Home Goods",
    description: "The Serta Rane Convertible Sofa is a designer piece that will enhance any decorating style or taste. We spend a lot of time shopping for furniture because what we have in our homes is a reflection of us—which is why you'll love this ultra-chic sofa and lounger. Modern lines elegantly detail this sofa, which converts into a lounger or a bed with a few simple steps. The Rane has a retro look with a cool, mod vibe. The high-density foam cushions are thick and comfy for hours of enjoyment on family movie nights. The springs and pocket coils are strong enough for regular household use. Beauty, comfort, and functionality are housed in a durable wood frame for years of use and pleasure. This Rane sofa is perfect for a first apartment. If you need furnishings for your first apartment, this comfortable couch is practical and beautiful. It's a Serta-comfortable sleeper sofa for overnight guests. Whether you're sitting or sleeping, you'll be doing it on a Serta! Everything you need to put the Rane sofa together is included, and you won't need extra tools for assembly. The Rane sofa is versatile enough to complement any style and is a tasteful focal piece for any living area. For over 90 years, Serta has been synonymous with comfort and craftsmanship in the production of mattresses, and that tradition continues with our living area offerings.COMFORT: Serta, the first name in comfort, makes Serta-comfortable, sensibly priced, elegant living area seating. The contemporary, convertible Rane sofa provides premium comfort and style. You'll enjoy the Rane for years. BEAUTY: This futuristic, convertible sofa has a sleek silhouette with high-density foam, tufted seat and back, and modern chrome legs. This beautiful and versatile sofa is easy to assemble with the tools included.SPECIFICATIONS: This convertible sofa is made from premium-quality polyester and has a solid hardwood frame construction. The sofa measures 66.1\" W x 33.1\" D x 29.5\" H. The bed measures 66.1\" W x 37.6\" D x 15.1\" H.  CARE INSTRUCTIONS: Vacuum occasionally, and use the soft brush attachment to remove particles. Spot clean prior to a full clean. Use a dry cloth with soap and water, and apply pressure using circular motions; avoid harsh chemicals to treat. CONVERTIBLE: The back easily folds down to lounge for casual moments. When it's time to sleep, fully recline it to a Serta-comfortable bed. It also has Serta’s Finger Guard protection to avoid injury."
},
  {
    img:"https://m.media-amazon.com/images/I/81C4-5U-nLS._AC_SL1108_.jpg",
    img1:"https://m.media-amazon.com/images/I/81QV2yn-P1L._AC_SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/81PUtbcWD5L._AC_SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/81W0djc5wUL._AC_SL1370_.jpg",
    desc:"Heroad Brand Contact Paper for Cabinets Walls Countertops Realistic Wood Contact Paper Decorative Wood Wallpaper Shiplap Boards Self Adhesive Removable Wallpaper Peel and Stick Wallpaper 17.7\"x78.7",
    price:929,
    category: "Home Goods",
    description: "Heroad Brand Contact Paper for Cabinets Walls Countertops Realistic Wood Contact Paper Decorative Wood Wallpaper Shiplap Boards Self Adhesive Removable Wallpaper Peel and Stick Wallpaper 17.7\"x78.7 BRAND--Since 2018, HEROAD brand was specially created for WOOD GRAIN series wallpapers. HOW MANY ROLLS TO BUY--We will calculate for you and recommend you the most economical purchase plan such as what size to buy and how many rolls to buy. Just email us or inquire by asking a question. DIMENSIONS--17.7” x 78.7”/Roll（In other words,1.47’ x 6.5’/Roll ), it covers 9.5 sq.ft per roll. Width of the wood planks: 2.4”; Length of the repeat pattern: 18”. DESIGN & PATTERNS--With an independent design team, we provide hundreds of wallpaper patterns. Please visit the Heroad Store or search “heroad wallpaper” to find more patterns. FEATURES--Faux vinyl/pvc material. Self adhesive, easy to apply, no need to use extra glue. Waterproof (but not for bathroom use). Indoor use, ideal for most smooth flat surfaces such as walls, furniture,etc."
 },
  {
    img:"https://m.media-amazon.com/images/I/41+zYPmPktS._SS400_.jpg",
    img1:"https://m.media-amazon.com/images/I/713Wiae86BS._AC_SL1221_.jpg",
    img2:"https://m.media-amazon.com/images/I/81yaU8LWNoS._AC_SL1095_.jpg",
    img3:"https://m.media-amazon.com/images/I/61RkppqIKQS._AC_SL1007_.jpg",
    desc:"ESOW Garden Tool Set, 3 Piece Cast-Aluminum Heavy Duty Gardening Kit Includes Hand Trowel, Transplant Trowel and Cultivator Hand Rake with Soft Rubberized Non-Slip Ergonomic Handle, Garden Gifts",
    price:2185,
    category: "Tools & Home Improvements",
    description: "ESOW Garden Tool Set, 3 Piece Cast-Aluminum Heavy Duty Gardening Kit Includes Hand Trowel, Transplant Trowel and Cultivator Hand Rake with Soft Rubberized Non-Slip Ergonomic Handle, Garden [3 PIECE GARDENING SET]: Traditional Set Built To Last. Ideal for a variety of tasks including pruning, digging, weeding, loosening soil, aerating, transplanting, etc. [COMFORTABLE HANDLES]: Ergonomical and soft-grip handle, which made of High Quality TPR material that reduces the pressure on the wrist and hand. Reduce hand pain and fatigue while digging, weeding, planting and cutting. Also there are suitable for large or small sized hands. More labor saving and more comfortable in long-term grip and use. A hole at the top of each handle for clutter-free storage [QUALITY HEADS]: Heavy duty Cast-aluminum high hardness, durable, not easy to rust and broken. Polished cast-aluminum blades and tips are shiny, rust-proof, extremely sturdy and easy to clean. Full-size adult gardening tools use advanced alloy materials to effectively withstand the harsh surface conditions.    [GREAT GIFT with GIFT BOX PACKAGING]: Environmentally-friendly paper material packaging boxes can be recycled to reduce environmental pollution. Durable top-quality and good looking, ESOW 3-piece garden tool serves as a perfect gift for gardening love, the ideal gift for loved ones, family, friends, and respected colleagues"  
},
  {
    img:"https://m.media-amazon.com/images/I/81ZhiqfR74L._AC_SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/717eog9Q-KL._AC_SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/61X++miIT4L._AC_SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/71-Xd54vmeL._AC_SL1500_.jpg",
    desc:"FALIDI Bonsai Wire and Bonsai Tool Kit - 5 Roll Tree Training Wires 164 Feet Total with Bonsai Wire Cutter，Anodized Aluminum Wire 1mm/1.5mm/2.0 mm Training Wire，for Bonzai Trees Indoor",
    price:1566,
    category: "Tools & Home Improvements",
    description: "Color:5 Rolls，164 Feet Total    FEATURES:    Material: Anodized Aluminum    Diameter: 1.0 mm, 1.5 mm, 2.0 mm.    5 Rolls，164 Feet Total, Each Roll 32.8 Feet.        Bonsai Wire Kit Package Included:    1x Bonsai Wire Cutter for Bonsai Tree Training Wires    1x Ø1.0mm Green Bonsai Wire    1x Ø1.0mm Black Bonsai Wire    1x Ø1.0mm Brown Bonsai Wire    1x Ø1.5mm Black Bonsai Wire    1x Ø2.0mm Black Bonsai Wire    RELIABLE QUALITY: High-quality aluminum, with colorful protective paint, can prevent rust, easy to shape and bend by hand, easy to cut with wire cutters.    TRAINING WIRE SIZE: 32.8 feet per roll, 5 rolls, total length 164 feet, three sizes of wires are 1mm, 1.5mm and 2mm to meet your needs, and a cord cutter is included for free.    SCOPE OF APPLICATION: Very suitable for bonsai training such as bonsai tools, hand-made, jewelry making, etc., suitable for beginners bonsai trainers and experienced bonsai artists    BONSAI WIRE FEATURES: These aluminum bonsai cultivation wires can be bent repeatedly, are not easy to rust, are not easy to break, and can be reused. They are better than other copper or iron wires. The 1mm thick metal wire coil can be hidden between plants.    ENJOY LIFE: Training Wire can not only be used for potted plants or plant decoration, but also can be hand-made to cultivate your hands-on ability and the ability to produce beautiful objects. Together with your children, it can also cultivate parent-child relationships and children's hands-on ability."  
},
  {
    img:"https://m.media-amazon.com/images/I/910p7eZ543L._AC_SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/91aXpyIw8BL._AC_SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/91q6G8IMlML._AC_SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/91yR4wmQQ8L._AC_SL1500_.jpg",
    desc:"Samsonite Omni PC Hardside Expandable Luggage with Spinner Wheels, Black, Carry-On 20-Inch",
    price:10379,
    category: "Luggage & Travel Gear",
    description: "Size:Carry-On 20-Inch  |  Color:Black    Introducing a line built to take the harshest travel elements Omni PC combines scratch resistant textures with the lightest 100% polycarbonate construction, ensuring your luggage looks as great on the 100th trip as it does on the 1st. This lightweight line offers heavyweight protection riding on effortless 360 spinner wheels. Don't pull your case; let Omni PC roll comfortably beside you on your journey. Design includes expansion for added capacity when needed. TSA locks ensure your belongings arrive safely to your destination. Extremely lightweight and visually impactful, this collection takes 100% polycarbonate design to the next level. Hardside Care: To clean hardside luggage, we recommend using a gentle soap and warm water, rinsing well. If you would like to wax the case after cleaning, any good silicone-base automobile or furniture polish will preserve the luster and add resistance to the covering. We do NOT recommend, however, that you try to clean the luggage with a combination cleaner-polish. Shell material is made of injection molded polycarbonate, a highly impact-resistant plastic that is strong and lightweight.20\" SPINNER LUGGAGE maximizes your packing power and meets most carry-on size restrictions for those traveling domestically and looking to stay light    PACKING Dimensions: 19\" x 14.5\" x 9.5\", Overall Dimensions: 22\" x 15\" x 9.5\", Weight: 6.81 lbs.    MICRO-DIAMOND POLYCARBONATE texture is extremely scratch-resistant, keeping cases beautiful trip after trip    SIDE-MOUNTED TSA LOCKS act to deter theft, ensuring that only you or a TSA agent have easy access to your belongings when traveling    FOUR, MULTI-DIRECTIONAL OVERSIZED SPINNER WHEELS for effortless mobility, re-engineered lightweight    BOOK OPENING CASE with mesh divider and cross straps in main compartment with a zipped modesty pocket    EXPANSION to allow you to pack more items and compression keeps clothing neatly pressed    PUSH-BUTTON locking handles provides easy maneuverability when extended out from the suitcase, and stores neatly inside when not in use"  
},
  {
    img:"https://m.media-amazon.com/images/I/61lj20HGaTL._AC_SL1000_.jpg",
    img1:"https://m.media-amazon.com/images/I/61AtF2yWHVL._AC_SL1000_.jpg",
    img2:"https://m.media-amazon.com/images/I/71dzehxs2HL._AC_SL1000_.jpg",
    img3:"https://m.media-amazon.com/images/I/617Dv+nYdWL._AC_SL1000_.jpg",
    desc:"TSA Approved Cable Luggage Locks, Re-settable Combination with Alloy Body",
    price:2289,
    category: "Luggage & Travel Gear",
    description: "MOST DURABLE TSA RECOGNIZED AND ACCEPTED LOCK. Forge locks are designed from the ground up to be the toughest luggage locks around. Our special alloy lock bodies, tightly braided and sheathed steel cables, hardened steel cable lock ends as well as patented internal mechanisms can take such a pounding that we back our product up with an unconditional lifetime guarantee. If you can find a way to break these locks, we’ll gladly refund or replace them.    EASY TO SET 3 DIGIT COMBINATION. Our combination locks have an easy to use lever mechanism to set the combination. Simply set the locks to the factory default combination of 0-0-0, flip the lever with a pen and enter your personal combination. The combination can also be changed as many times as you like. Never worry about accidently changing your lock to the wrong combination or your combination being changed during rough handling.    SECURITY WITH THE FLEXIBILITY OF A CABLE LOCK. Cable locks can handle situations that normal lock shackles simply can’t. Our lock’s cable is thin enough to thread through all standard sized zippers and hard case lock holes but strong enough to protect your belongings. At a length of 4 in from end to end and an internal looped length of 1.5 in when locked, our cable offers the flexibility to secure nearly any suitcase, hard case, gun case, etc. on the market.    ALWAYS RELOCKED, ALWAYS PROTECTED. Most TSA locks on the market do not need to be re-locked by a TSA agent after their inspection is completed. With our TSA luggage lock, the agent has to re-lock your suitcase to remove their key. With Forge you never worry about your suitcase locks being left open again.    MANY USES WITH LOTS OF VARIETY. Forge travel locks can be used on a wide variety of items besides suitcases or luggage. These locks can be used on a briefcase, gym locker, purse, backpack or laptop bag."  
},
  {
    img:"https://i5.walmartimages.com/asr/88c4906f-0c30-40c7-aef6-b67ec3fbbdf0.85f44ef61cc777e88292ab6faaa7c402.jpeg",
    img1:"https://i5.walmartimages.com/asr/5ef9ad56-41b4-48cb-90f1-d4e5898ce942.1456cc1ae82d3b25845b438d2a7cc502.jpeg",
    img2:"https://i5.walmartimages.com/asr/f394ecee-09dd-4852-9d06-c4f066b6098c.50f0a7b2bb1bdaf2c484d8c7319ad360.jpeg",
    img3:"https://i5.walmartimages.com/asr/352ac4a9-5460-4539-9bcc-3e4796bac0f3.df199fc14458cdc4a3ddd47b0e5ee2a9.jpeg",
    desc:"High Back Executive Chair 130kg Capacity Extra Padded Ergonomic Office Chair with Massage PU Leather Recliner Chair with Footstool Swivel Computer Desk Chair for Home Office Furniture",
    price:17093,
    category: "Office Products",
    description: "Quality high back reclining chair with large padded seat and ergonomic design to provide extra comfort and lumbar support    Backrest reclines up to 130° (locking at any angle up to that point) and features three different massage modes at 2 points for additional relaxation    Armrest and leg rest are well-padded and chair height can be easily adjusted to maximize comfort    Five universal wheels allow chair to move smoothly and silently up to 360° with no damage to floors    This high back reclining chair is designed to provide you with the extra cushion and lumbar support you need to be comfortable as you work, game, or just relax. The padded backrest has two massage points that work at three different modes to provide you with just the right additional measure of rejuvenation and the padded arm and leg rests maximize your pleasure. The five universal wheels roll smoothly across the floor, allowing you to move around without resistance or fear of damage to your flooring. Once you experience the comfort of this chair, you’ll never need another!        Features:        Adjustable high back chair with large padded seat and reclining backrest    Backrest reclines up to 130° and features 2 embedded motors that provide 3 enjoyable massage modes.    Padded armrest and leg rest    Durable PU leather covering    Steel base stand    Specifications:    Material: PVC    Seat Size (LxW): 54 x 54 cm    Back Size (WxH): 51 x 76 cm    Seat Height from the Ground: 41-49 cm    Armrest Length: 45 cm    Diameter of Foot: 70 cm    Recommended Max User Weight: 130 kg        Note: Be careful when removing inner and outer packaging."  
},
  {
    img:"https://m.media-amazon.com/images/I/515jon9c3PL._AC_SL1000_.jpg",
    img1:"https://m.media-amazon.com/images/I/81lEw-HfRFL._AC_SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/71R0z4uMyxL._AC_SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/718g1zsBVoL._AC_SL1500_.jpg",
    desc:"Kyocera 1102R92US0 Model ECOSYS M5521CDW Multifunctional Printer; Up to 21 PPM, 1200 Dpi Printing Quality, Mobile Printing Support, Direct Printing from and Scanning to USB Flash Memory",
    price: 49893,
    category: "Office Products",
    description: "Kyocera 1102R92US0 ECOSYS M5521CDW Multifunctional Printer; Up To 21 PPM, 1200 DPI Printing Quality, Mobile Printing Support, Direct Printing From and Scanning To USB Flash Memory    Key Features Up to 21 pages per minute in color and b/w 1200 dpi printing quality Wi-Fi and Wi-Fi Direct as standard Mobile printing support including AirPrint, Mopria, KYOCERA Mobile Print Print, copy, scan and fax functionality as standard Direct printing from and scanning to USB flash memory Compact design with low-noise printing Exceptionally low printing costs in its class Specifications Technology: KYOCERA ECOSYS, Color Laser General Type: Color Multifunctional Printer Engine speed: Up to 21 pages per minute in color and b/w Resolution: 1,200 x 1,200 dpi print at reduced speed, multibit technology for print quality of up to 9,600 x 600 dpi (print), 600 x 600 dpi, 256 greyscales per colour (scan/copy) Warm-up time: Approximately 32 seconds or less from power on Time to first print: Approximately 12.5 seconds or less Time to first copy: Approximately 12 seconds or less General memory: Standard 512 MB, max. 1536 MB Standard Interface: USB 2.0 (Hi-Speed), USB Host Interface, Gigabit Ethernet (10BaseT/100BaseTX/1000BaseT), Wireless LAN Dimensions (W x D x H): 417 x 429 x 495 mm Weight: Approx. 57.7 Pounds Power consumption: Printing: 345 W, Ready mode: 41 W, Sleep-mode: 1 W Up To 21 Pages Per Minute In Color And B/WWi-Fi And Wi-Fi Direct As StandardMobile printing support including AirPrint, Mopria, KYOCERA Mobile PrintPrint, Copy, Scan And Fax Functionality As StandardDirect Printing From And Scanning To USB Flash MemoryUp To 21 Pages Per Minute In Color And B/WWi-Fi And Wi-Fi Direct As StandardMobile printing support including AirPrint, Mopria, KYOCERA Mobile PrintPrint, Copy, Scan And Fax Functionality As StandardDirect Printing From And Scanning To USB Flash Memory" 
 },  {
    img:"https://m.media-amazon.com/images/I/81qCkfR+m+L._AC_SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/819E38Zb7cL._AC_SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/81IkUq81MrL._AC_SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/81Z0--o5BtL._AC_SL1500_.jpg",
    desc:"Set of 4 SunF Power.I ATV UTV all-terrain Tires 25x8-12 Front & 25x10-12 Rear, 6 PR, Tubeless A033",
    price: 25732,
    category: "Automotive",
    description: "Set of 4 SunF Power.I ATV UTV all-terrain Tires 25x8-12 Front & 25x10-12 Rear, 6 PR, Tubeless A033 Front Size: 25x8-12 - Rear Size: 25x10-12 | Wheel (Rim) Diameter: Front 12 in - Rear 12 in    Directional angled knobby tread design great in most terrain with high performance on trails and suitable for desert, mud, dirt and rock applications. Features premium rubber in our hard compound to withstand the harshest racing conditions. A perfect replacement tire for your quad ATV, UTV, Go Kart, Golf Cart or Lawn Mower.    Heavy 6 ply rated construction resists punctures and abrasions.    Lug depth and pattern offers enhanced skid and traction control, great in cross country or desert conditions. Aggressive shoulder knobs provide superb side bite and traction with added protection to rim and sidewall. Trully a great ALL TERRAIN tire at an affordable price .    Rim(s) NOT included. Prior to purchase, please check the size of the original tire on your vehicle to ensure the size of the tire to be purchased is correct." 
 },  
 {
    img:"https://m.media-amazon.com/images/I/71w9xtilL6L._AC_SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/81Yc-NDfVgL._AC_SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/81Wl06HKqmL._AC_SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/81-OqMPH8iL._AC_SL1500_.jpg",
    desc:"Portable Car Vacuum Cleaner: High Power Handheld Vacuum w/LED Light -110W 12v Best Car & Auto Accessories Kit for Detailing and Cleaning Car Interior - 16 Foot Cable",
    price: 3110,
    category: "Automotive",
    description: "THE ULTIMATE HIGH POWER: We achieved a new high standard in car cleaning with our improved Portable Car Vacuum Cleaner. Upgrades include: 110W suction power & 9.17 Amps, a sleek design with integrated LED light and a washable double filter    WHEN FUNCTIONAL MEETS DESIGN: Created with a “smart” flat bottom body, our small, handheld vacuum can glide smoothly on any surface of your car. More so, it comes with a protective lid to keep the trash in & a transparent container so you’ll know when to empty it    NO MESS IS TOO BIG FOR ThisWorx: Our wet & dry mini vacuum does magic against any kind of dirt, from dust, mud or food crumbs to even spilled liquids, ashes or pet hair. Plug it in your 12V car’s lighter port and use the 16ft power cord to cover any area of your car.    A CLEANING SET MADE FOR RIDE SHARING: Any driver will simply love this hand vacuum and all it’s accessories:3 different all purpose nozzles, a carrying bag for easy storage and a filter cleaning brush.    ThisWorx REALLY WORKS: We’re absolutely sure our hand-held vacuum will revolutionize your car cleaning habits! But, just in case you ever have an issue with it, our Customer Support team is ready to assist you with no question asked replacements." 
},  
{
    img:"https://m.media-amazon.com/images/I/81g5ls7JhTL._SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/71sloWA4I0L._SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/613KlflDtuL._SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/81jcOChMamL._SL1500_.jpg",
    desc:"Infant Optics DXR-8 Video Baby Monitor with Interchangeable Optical Lens",
    price: 15467,
    category: "Baby & Toddler",
    description: "The Infant Optics DXR-8 video baby monitor has a long track record as a monitor that you can trust. Its compact size strikes a perfect balance between performance and versatility, for being a small and light enough monitor to carry around the house, whilst offer stunning video and audio quality. If you are looking for a baby monitor with camera and audio, the DXR-8 is the trusty monitor that will provide you and your baby that peace of mind. The DXR-8 is a video baby monitor with camera lenses options. Swap between normal, zoom, and wide angle (sold separately) lens to suit your camera placement needs. Take zoom to the next level by using the zoom lens and digital zoom together. The DXR-8 baby monitor video and audio feed is transmitted via a secure internal 2.4GHz channel with FHSS technology. Unlike internet-enabled baby monitors, no information is shared or communicated through the internet on the DXR-8 video baby monitor, meaning your privacy of you and your baby will not be compromised. At Infant Optics, we are the baby monitor specialists where we never stop refining the firmware and software on existing baby monitor models like the DXR-8. We listen to our customers and incorporate changes to improve user experience. Our goal is to create the best baby monitor possible.2020 Award Winner: Babylist Best Baby Monitors Of 2020 *(Awarded On January 8, 2020)    Perfect Size & Weight Ratio - No Large Batteries To Power Energy-Hungry Large Screens. The Dxr-8 Is Light-Weight And Portable, Designed For True Mobility Around The House. 10-Hr Battery Life On Power-Saving Mode, 6-Hr With Screen On.Care & Cleaning: Spot or Wipe Clean    Full Viewing Control - The Dxr-8 Is A Baby Monitor With Camera Features Such As Pan/Tilt/Digital Zoom And Interchangeable Lens. Fit The Zoom Lens To See Even Closer, Or Zoom Out With The Wide Angle Lens. Expandable Up To 4 Cameras    Robust And Mature Hardware - The Dxr-8 Is Fine Tuned And Refined Over Years Of Iteration From Feedback Of Real Users. Trusted By Over A Million Parents, Our Award Winning Monitor Is Backed By Vigorous Testing And Quality Control    Range Up to 700 feet (line of sight, no obstruction)"  
},
  {   
       img:"https://m.media-amazon.com/images/I/81rGP94pHfL._SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/91QIEy3QxKL._SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/91+XO9QiSWL._SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/81ozgV3p3EL._SL1500_.jpg",
    desc:"Graco Glider LX Baby Swing",
    price: 9719,
    category: "Baby & Toddler",
    description: "Color:Affinia  |  Style:Glider LX    The Graco Glider LX Baby Swing is a unique gliding swing that soothes with the same gentle motion you use when cuddling and comforting baby in your nursery glider. The swing’s plush, roomy seat with removable infant head and body supports and adjustable recline keep baby cozy, while music keeps baby entertained. Additional features including adjustable gliding speeds, 2-speed vibration, and an overhead toybar help further soothe baby. Soothes with the same gentle motion you use when cuddling and comforting baby in your nursery glider    6 gliding speeds allow you to find the right pace to suit baby's mood    Roomy seat with plush head and body supports and adjustable recline for baby's comfort    Compact frame designed to fit anywhere in the home    10 classic melodies and 5 nature sounds will delight and amuse your little one"  
},

{
    img:"https://m.media-amazon.com/images/I/51L3GFbMQHS._AC_SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/61nRuc+DzGS._AC_SL1500_.jpg",
    img2:"https://m.media-amazon.com/images/I/61W38-j-Y+S._AC_SL1500_.jpg",
    img3:"https://m.media-amazon.com/images/I/71UYxapgfXS._AC_SL1500_.jpg",
    desc:"Portable Charger 36800mAh, Power Bank with Tri-Outport & Dual Inport (2.1A USB-C Input and Micro USB Input) External Battery Pack Compatible with iPhone 12/12Pro/11,Galaxy S20 Tablet etc[2021 Version]",
    price:1120,
    category:"phones",
    description: "Portable Charger 36800mAh, Power Bank with Tri-Outport & Dual Inport (2.1A USB-C Input and Micro USB Input) External Battery Pack Compatible with iPhone 12/12Pro/11,Galaxy S20 Tablet etc[2021 Version]    36800mAh Ultra-high Capacity: [2021 Version] 36800mAh power bank with ultra-high capacity can charging for iphone 12 /11 above 6 times, Samsung Galaxy S20 above 5 times. Keep Your phone running all day. Without extra worry about low phone battery. Ideal to take it for play game, trip and listen music.Power Bank with Tri-Output & Dual Input : With 2.1A 3 USB Output ports , you can charge 3 devices simultaneously. Dual Inport - 2.1A USB C Input, 2.1 A Micro USB Input. power bank can be full charged around 10 hours by usb-c input. [USB C Cable not be included; USB-C Input Only]Super Safety - Intelligent Controlling IC: Pxwaxpy Power bank bulit-in Intelliegent Controlling IC can effectly prevent your power bank overcharge, overvoltage, overcurrent and short circuit. you can get more convenient and happy from this high quality power bank.Universal Compatibility & Smart LED Indicator: Pxwaxpy USB Portable Charger widely compatible with iphone, Samsung Galaxy, Pixel smartphone and smaller devices such as bluetooth earbuds, fitness tracker, smartwatch ect. Used Smart LED Indicators tracking remaining power left (25%-50%-75%-100%).Input and output status, you need not guessing whether need to charge it or not"
      },
    {
      img:"https://m.media-amazon.com/images/I/71XOSLT4fHL._AC_SL1500_.jpg",
      img1:"https://m.media-amazon.com/images/I/81oeWOdrofL._AC_SL1500_.jpg",
      img2:"https://m.media-amazon.com/images/I/210xtrLzEUL._SS400_.jpg",
      img3:"https://m.media-amazon.com/images/I/81oeWOdrofL._AC_SL1500_.jpg",
      desc:"Wyze Labs Expandable Storage 32GB MicroSDHC Card Class 10, Black - WYZEMSD32C10",
      price:1562,
      category:"phones",
      description: "Maximize your Wyze Cam’s potential with continuous recording and time-lapse video. Wyze Labs was created with the mission of making high quality, easy-to-use, affordable smart home technology accessible to everyone. We believe big things come in small packages - that’s why we created an affordable, easy-to-use smart home camera that can help you solve life’s mysteries, big and small. So you can be everywhere. And watch everything.      Class 10 and UHS-1 (U1)Media storage: ~2, 880 minutes (48 hours) of HD video, ~10, 080 minutes (168 hours) of SD video, and ~4, 200 16MP photos based on internal testing resultsRead speed: 90MB/s and write speed: 20MB/sMaximizes Wyze Cam functionality with continuous recording and time-lapse video and enables video to continue to record even if Wi-Fi connection is interrupted.Compatible with Wyze Cam, Wyze Cam pan, as well as non-Wyze devices for local storage"  
        },
    
      {
        img:"https://m.media-amazon.com/images/I/71ebeKbvufS._AC_SL1500_.jpg",
        img1:"https://m.media-amazon.com/images/I/61N7CZ4NPMS._AC_SL1500_.jpg",
        img2:"https://m.media-amazon.com/images/I/71zymmJ4xfS._AC_SL1500_.jpg",
        img3:"https://m.media-amazon.com/images/I/713JmxT7DpS._AC_SL1500_.jpg",
        desc:"BLU G50 | 2021 | All Day Battery | Unlocked | 5.5” HD+ Display | 32 GB | 13MP Camera | US Version | | Red",
        price:9015,
        category:"phones",
        description: "Awesome design with a metallic coating that is both sexy and attractive. The G50 is the perfect smartphone to show the world what fabulous design is.5.5” HD+ 18:9 Curved Glass Display        13MP Main Camera with LED Flash + 8M Front Selfie Camera        32GB Internal Memory 2GB RAM Micro SD up to 64GB; 1.6GHz Octa-Core Processor with IMG 8322 CPU        4,000mAh Battery with Type C, Android 10 and Fingerprint Senor        4G LTE (1/2/3/4/5/7/12/17/28) 3G: (850/900/1700/1900/2100): US compatibility with GSM Networks including, T-Mobile, Metro PCS, and others. (Not compatible with new AT&T or Cricket activations or with CDMA Networks like Verizon, Sprint, and Boost Mobile)"    
          },
        {
          img:"https://m.media-amazon.com/images/I/71ouXIR8m+L._AC_SL1500_.jpg",
          img1:"https://m.media-amazon.com/images/I/711D-uvZRhL._AC_SL1500_.jpg",
          img2:"https://m.media-amazon.com/images/I/61wLLPLLJIL._AC_SL1500_.jpg",
          img3:"https://m.media-amazon.com/images/I/81fgR0nttVL._AC_SL1500_.jpg",
          desc:"SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 30X Space Zoom Night Mode, Cloud Lavender",
          price:54901,
          category:"phones",
          description: "With a Triple pro-grade camera, smooth 120Hz refresh rate display, and an all-day intelligent battery¹ that charges up in minutes, the Samsung Galaxy S20 FE 5G² delivers outstanding innovation. The Triple-lens camera system will not only take bright and high quality images and videos, but can also zoom in from afar, thanks to the 30x Space Zoom. The single take AI mode will let you capture multiple images and videos with just a touch of a button. Shooting at night? No problem. With the help of Night Mode, the Galaxy S20 FE 5G phone can capture crystal-clear images without flash. The Samsung Galaxy S20 FE 5G series is tailor-made for those who want the latest technology without compromise. Choose from a wide range of six colorful hues in a sleek matte finish.¹Battery power consumption depends on usage patterns and results may vary. ²5G speeds vary and require optimal network and connection (factors include frequency, bandwidth, congestion).PRO-GRADE CAMERA: Features high-powered pro lenses for beautiful photographs in any light with 3X optical zoom.          30X SPACE ZOOM: Zoom in close from afar or magnify details of something nearby with the power of 30X Space Zoom.          NIGHT MODE: Capture crisp images and vibrant videos with Night Mode and capture high-quality content in low light.          SINGLE-TAKE AI: One tap of the screen captures multiple images and videos all at once.          POWER OF 5G: Get next-level power with Samsung Galaxy 5G: more sharing, more gaming, and more experiences.          COLORS TO SUIT YOUR STYLE: Choose from six colorful hues in a sleek matte finish."
                  },
        {
          img:"https://m.media-amazon.com/images/I/61E7LOjFlkL._AC_SL1500_.jpg",
          img1:"https://m.media-amazon.com/images/I/71pykbbj+xL._AC_SL1500_.jpg",
          img2:"https://m.media-amazon.com/images/I/714vXhcLvPL._AC_SL1500_.jpg",
          img3:"https://m.media-amazon.com/images/I/714dlzzhtsL._AC_SL1500_.jpg",
          desc:"YOSUDA Magnetic Rowing Machine 350 LB Weight Capacity - Foldable Rower for Home Use with LCD Monitor, Tablet Holder and Comfortable Seat Cushion",
          price:27643,
          category:"cardio",
          description: "【Minutes Assembly and Save 60% Space】Easy to assemble with only 10 screws in 20 minutes. Two bigger wheels help you to move this rower easily. Stored dimensions when folded: 28.7''L 19.3''W.          【Choose YOSUDA】Design and produce top-quality exercise machines for home use for 20 years.YOSUDA has worked with professional European engineers and served more than 1,000,000 families. All our products are full of praise.We promise free return and refund within one month, two years for replacement parts and all messages will get responses within 24 hours.          【Super Quiet Rowers】Magnetic resistance system create an unbelievably smooth and nearly silent rowing, YOSUDA rowing exercise machine is very suitable for indoor exercise. It will NEVER disturb the families or roommates and virtually no maintenance requested.          【Full-Body Muscle Workout】According to scientific reports,rowing machines engages 90% muscle groups;work legs, core and arms with a smooth, high calorie-burning motion. Perfect for rehabilitative treatment,weight-loss,body-shape,strength training ,etc.          【Sufficient Resistance for all Fitness Levels】Our rower machine is equipped with a 10lbs flywheel and 8 level resistance,which provides double resistance levels than the ordinary rowing machine. All stages exerciser can get efficient exercise with different resistance, no matter you are beginner or professionals.          【Support 350 lb & 6'6''in Height】Our rowing mahcines are made of heavy-duty commercial quality steel,which is very sturdy and durable.The 49.2-inch slide length fits almost all users. The ergonomic seat is very comfortable and soft.          【Large Monitor and Tablet Holder】The easy-to-read LCD monitor clearly displays your distance,rowing time, count, total count and calories. You can put the phone or Ipad on the holder to enjoy the videos or music."
                  },
          {
            img:"https://m.media-amazon.com/images/I/71+n2a6veJL._AC_SL1500_.jpg",
            img1:"https://m.media-amazon.com/images/I/816jd8zm8EL._AC_SL1500_.jpg",
            img2:"https://m.media-amazon.com/images/I/816Zti75k9L._AC_SL1500_.jpg",
            img3:"https://m.media-amazon.com/images/I/71znfJuAoSL._AC_SL1500_.jpg",
            desc:"Stamina Body Trac Glider 1050 Rowing Machine",
            price:14014,
            category:"cardio",
            description: "Perfect for the fit-focused who have more motivation than workout space, the Stamina BodyTrac Glider is the compact, portable rowing machine that fits into any area and easily stands on end for storing between workouts. The BodyTrac Glider features full-range-of-motion rowing arms to allow a natural rowing movement, optimizing the proven benefits rowing provides the entire body. Because rowing is an incredibly efficient, low-impact aerobic exercise that naturally targets major muscle groups, the 23.5\" x 46\" BodyTrac Glider lets you strengthen and tighten your back, legs, arms, abdominals and glutes using a single machine.            Lasting Comfort for Longer Workouts            The BodyTrac Glider is designed to maximize your short-term results while also supporting your long-term goals. So you can earn noticeable results now, the glider is built for comfort during longer routines. The ball-bearing roller system and adjustable hydraulic cylinder resistance arms allow smooth, low-impact movements that mimic rowing on the water. And the combination of a padded, molded seat and steel frame with aluminum center beam offers a stable, comfortable workout for years to come.                        Multi-function Monitor for Motivation            To help you remain motivated, Stamina equips the BodyTrac Glider with a multi-function fitness monitor that tracks your current workout time, stroke count and calories burned as well as total strokes accumulated (all time), letting you track your progress toward fitness goals. Select Scan Mode to rotate among the functions, displaying each progress counter for six seconds. As convenient as the monitor is, given that rowing is one of the most efficient exercises for strengthening muscles, increasing metabolism, and burning calories & fat, your favorite progress tracker may just prove to be your own mirror.                        Do you have limited workout space but plenty of motivation? Turn to the Stamina Body Trac Glider rowing machine, which offers a compact footprint of only 23.5 inches wide by 46 inches long, but offers the same terrific workout performance as machines twice its size. The Body Trac Glider is outfitted with a tough steel frame and an aluminum center beam that's designed to withstand years of use. More significantly, the machine's ball-bearing roller system and adjustable cylinder resistance arms mimic the smooth motion of rowing on the water. And because rowing is widely recognized as one of the best all-around activities for cardiovascular fitness and strength, the Body Trac Glider makes an ideal workout accessory for anyone who wants to get in tip-top shape.                                                The Body Trac Glider folds up for easy storage in a closet. Rowing provides an efficient, effective, low-impact workout that utilizes all the major muscle groups, including the back, legs, arms, abdominals and buttocks. It is also one of the best exercises for building a strong back, as well as one of the most effective low-impact aerobic exercises for increasing your metabolism. As a result, you can efficiently burn calories and fat without impacting your joints. In addition, the rower includes a multifunction fitness monitor that tracks your workout time, stroke count, and calories burned during your workout, along with the total strokes you've accumulated since owing the machine. The monitor displays each data point for six seconds before rotating to the next."
          },
          {
            img:"https://m.media-amazon.com/images/I/71f6o1BCTiL._AC_SL1500_.jpg",
            img1:"https://m.media-amazon.com/images/I/71sPkkeB0SS._AC_SL1500_.jpg",
            img2:"https://m.media-amazon.com/images/I/71hamZ-ZPCS._AC_SL1500_.jpg",
            img3:"https://m.media-amazon.com/images/I/71ZzaspP0yS._AC_SL1500_.jpg",
            desc:"Exercise Bike, DMASUN Indoor Cycling Bike Stationary, Comfortable Seat Cushion, Multi - grips Handlebar, Heavy Flywheel Upgraded Version (Black)",
            price:29914,
            category:"cardio",
            description: "BEST SPINNING BIKE: Compared with other exercise bikes, it has bigger flywheel weight and higher quality heavy steel(We spend more on the cost of this exercise bike), which shows it will be more stable and secure. DMASUN bike weighs 95 lbs, which is 20 lbs heavier than other bikes. And every sport bike has 138 tests before it leaves the factory. High quality requirements run through the whole production line. What you need is a long-lasting exercise bike, not one that only lasts for a month.            PERFECT DESIGN: Well-known design team, innovative design from the perspective of fashion home, sports aesthetics, human engineering, This cycling bike has a fashionable appearance, multiple handles, comfortable touch, adjustable resistance, make this exercise bike meet the needs of beginners to professionals. Not only a fitness product, but also a modern home aesthetic art.            HEALTHY CHOICES: The updated DMASUN exercise bike adopts magnet resistance. Compared with wool felt brake pads, there will be no friction and debris during exercise, and reduce the annoyance of frequent replacement of brake pads. We also adjusted the distance between the seat and the handlebar, which is more friendly to people of different heights, and the ergonomic triangular structure makes exercise easier.            EXERCISE DATA MONITORING: The Digital Monitor will real-timely track and record your exercise time, speed, distance, calories, and pulse, so that you can know your progress and adjust your exercise plan in time. Hand Pulse Handle with pre-assembled exercise monitor, real-time know that your heart rate changes with the rhythm of exercise."
                      },
            {
              img:"https://i5.walmartimages.com/asr/4352a217-9d72-4ae5-a9b4-e2cc066fc2ef_1.d867d19f257572de9573cfae28677666.jpeg",
              img1:"https://i5.walmartimages.com/asr/43dacb97-4cc6-4dc7-bad9-489b00f4ae1d_1.7b5aa579dfd5c2804789ad0c85f91f7b.jpeg",
              img2:"https://i5.walmartimages.com/asr/242c5368-3aca-43b2-ae68-d47e1aa30bb5_1.6482acad0f94eb8b8ebfb84a0ee6a9b2.jpeg",
              img3:"https://i5.walmartimages.com/asr/741a237e-df09-4b81-afda-d09e237e53c4_1.e791199f9250bb24d128728290256759.jpeg",
              desc:"Ancheer Bluetooth Wifi+12 Running Program 3.0hp Electric Folding Treadmill 8.6MPH&230LB With LCD Display and Manual Incline App control/Heart Rate Sensor",
              price:49139,
              category:"cardio",
              description: "Easy assembly: 95% had been assembled, only need to put screws on.              Auto lubrication system.Hi-Fi MP3 Speaker, listen to music when running.              Maximum User Weight:230lb,Manual Incline: 2 Manual incline levels (3% and 5%) and twelve pre-set.              Blue-Tinted LCD display: Helps you keep track of a number of functions including speed, distance, heart rate, calorie---【Bluetooth APP Control】:Make Your Running Time Smart. G-Fit APP control treadmill will be your personal daily trainer. Gaining control of G-Fit APP along with all of its privileges, you can EASILY detect and optimize your physical health.              ---【Two-position Incline】: With a maximum speed of 8.6MPH(note:treadmill show KPH)2 manual incline levels (3% and 5%) and twelve pre-set programmes,there are many options for a varied workout. More incline, more calories burn.                            ---【Low Noise】: Driven by a delicate motor working stably at extreme silence and low power-consumption.Workout upstairs, sleep downstairs.                            ---【Heavy-duty Construction】: Frame is made of high quality steel,silicone damping design to greatly disperse the shock from running board and effectively protect your ankle and knee joint that gives you excellent experience of running.                            ---【Warranty】: US STOCK, 230LBs maximum user weight. 2 Years for frame & 1 Years for motor & Friendly Customer Service. (Treadmill passed CE, ROHS,CB,EN957,IEC certifications by SGS.)"
            },
            {
              img:"https://m.media-amazon.com/images/I/71fpYAPvK+L._SL1500_.jpg",
              img1:"https://m.media-amazon.com/images/I/81D16+xR+YL._SL1500_.jpg",
              img2:"https://m.media-amazon.com/images/I/816wbiM+zkL._SL1500_.jpg",
              img3:"https://m.media-amazon.com/images/I/81IPw6jDOsL._SL1500_.jpg",
              desc:"Aveeno Daily Moisturizing Body Lotion with Soothing Oat and Rich Emollients to Nourish Dry Skin, Gentle & Fragrance-Free Lotion is Non-Greasy & Non-Comedogenic, 18 Fl Oz",
              price:1174,
              category:"skin",
              description: "Aveeno Daily Moisturizing Body Lotion with Soothing Oat and Rich Emollients to Nourish Dry Skin, Gentle & Fragrance-Free Lotion is Non-Greasy & Non-Comedogenic, 18 Fl Oz Aveeno Daily Moisturizing Body Lotion helps improve the health of your dry skin in one day. Formulated with soothing oatmeal and rich emollients, the fragrance-free lotion is clinically shown to help moisturize and relieve dryness. This daily body lotion replenishes moisture for softer and smoother skin. The unique oatmeal formula absorbs quickly, leaving your skin soft, beautiful and healthy-looking. From the dermatologist-recommended brand, this nourishing lotion for dry skin is fragrance-free, non-greasy, non-comedogenic, and gentle enough for daily use as part of a regular skincare and beauty routine.Fluoride free.18-fluid ounce pump bottle of Aveeno Daily Moisturizing Body Lotion to moisturize dry skin for a full 24 hours              Nourishing lotion contains a unique soothing oatmeal formula that absorbs quickly, leaving your skin soft, beautiful and healthy-looking              Clinically proven and award winning fragrance-free daily lotion for dry skin locks in moisture and improves skin's health in just 1 day              Gentle moisturizing lotion works to help prevent, protect, and nourish dry skin. It replenishes moisture for softer and smoother skin              Lotion is fragrance-free, non-greasy, non-comedogenic, and gentle enough for daily use as part of a regular beauty and skincare routine From Aveeno, a dermatologist recommended brand for over 65 years"         
                 },
              {
                img:"https://m.media-amazon.com/images/I/81cquXZsI8L._SL1500_.jpg",
                img1:"https://m.media-amazon.com/images/I/81moBQVN84L._SL1500_.jpg",
                img2:"https://m.media-amazon.com/images/I/71lwXniuK8L._SL1500_.jpg",
                img3:"https://m.media-amazon.com/images/I/81V2BoLM56L._SL1500_.jpg",
                desc:"OGX Radiant Glow + Argan Oil of Morocco Extra Hydrating Body Lotion for Dry Skin, Nourishing Creamy Body & Hand Cream for Silky Soft Skin, Paraben-Free, Sulfated-Surfactants Free, 19.5 fl oz",
                price:984,
                category:"skin",
                description: "Style:Body Lotion  Give skin a soft radiant glow as you moisturize with this argan oil of Morocco hydrating body lotion for dry skin This moisturizing creamy body & hand lotion leaves skin feeling nourished & smooth.Give skin a soft radiant glow as you moisturize with this argan oil of Morocco hydrating body lotion for dry skin. This moisturizing creamy body and hand lotion leaves skin feeling nourished and smooth                GET HYDRATED, GLOWING SKIN: The 195-ounce bottle of OGX Radiant Glow, Argan Oil of Morocco Extra Hydrating Body Lotion for dry skin helps hydrate skin, giving it a beautiful radiant glow                SOFT, SEDUCTIVE, MOISTURIZED: This moisturizing body cream nourishes to help restore thirsty skin, drenching it with hydration for a soft, radiant glow                SKINCARE INSPIRED BY NATURE: The precious radiance-enhancing blend of this creamy hand and body lotion is formulated with water based silk proteins and rich cold-pressed Moroccan argan oil                NON-HARSH and NOURISHING: Free from parabens, and sulfated surfactants, the hydrating body lotion is gentle and nourishing on all skin types, but ideal for dry skin For use, massage the ultra hydrating lotion generously all over body day and night"              
            },
              {
                img:"https://m.media-amazon.com/images/I/71FWrH69CpL._SL1500_.jpg",
                img1:"https://m.media-amazon.com/images/I/810iUGDnONL._SL1500_.jpg",
                img2:"https://m.media-amazon.com/images/I/81qcVMULnZL._SL1500_.jpg",
                img3:"https://m.media-amazon.com/images/I/81s78Y2QdFL._SL1500_.jpg",
                desc:"L'Oreal Paris Skincare Collagen Face Moisturizer, Day and Night Cream, Anti-Aging Face, Neck and Chest Cream to smooth skin and reduce wrinkles, 1.7 oz",    
                price:1201,  
                category:"skin",                
                description: "A dose of intense hydration and natural Collagen in Collagen Filler Moisture Day Lotion and Day/Night Cream is essential for younger-looking skin. Rich moisture instantly restores skin's cushion and bounce. Over time, the powerful natural Collagen helps fill in lines and wrinkles, leaving your skin smooth and plump. Use it for a complete collagen-infused skincare regimen. In just 4 weeks 78% of women saw filled in wrinkles*. *Based on a consumer evaluation of 50 women. • Skin-Plumping Collagen • Intense Hydration • Smooths Wrinkles • Dermatologist-tested for gentleness Every night, smooth gently over the entire face after cleansing. For external use only. Avoid contact with eyes. Discontinue use if signs of irritation or rash appear. Keep out of sight of children.Day and night face moisturizer: provides skin with a daily dose of intense hydration that helps to fill in the appearance of lines and wrinkles and helps restore moisture for smoother, plumper skin                This lightweight, non-greasy moisturizer delivers hydration and moisture to all skin types, including sensitive skin and absorbs quickly without leaving a sticky film, for smoother, nourished, younger-looking skin                Proven results: Overnight, skin is nourished with moisture; In 1 week of using this face moisturizer skin feels smoother and in 4 weeks of use, wrinkles appear more filled in                Replenish skin with Collagen: Gift your skin a daily dose of hydration from L'Oreal Paris anti-aging skin care, whether face lotion, night eye creams, or moisturizers with SPF, they provide your skin essential moisture to keep skin healthy                Kickstart your routine; First cleanse with Revitalift Derm Intensives 3.5 percent Pure Glycolic Acid Gel Facial Cleanser, treat under eye with Eye Defense Eye Cream and hydrate day and night with Collagen Moisture Filler Moisturizer"              },
                {
                  img:"https://m.media-amazon.com/images/I/81+-TaapVUL._SL1500_.jpg",
                  img1:"https://m.media-amazon.com/images/I/61zycRbiB0L._SL1500_.jpg",
                  img2:"https://m.media-amazon.com/images/I/81uFe1dqMKL._SL1500_.jpg",
                  img3:"https://m.media-amazon.com/images/I/71fbbHdy0YL._SL1500_.jpg",
                  desc:"Olay Regenerist Advanced Anti-Aging Pore Scrub Cleanser (5.0 Oz) and Micro-Sculpting Face Moisturizer Cream (1.7 Oz) Skin Care Gift Set",
                  price:2365,
                  category:"skin",
                  description: "Style:Advanced Anti Aging Skin Care                  Ready to give as a Valentines gift or to treat yourself to a rejuvenating spa-like treatment at home, this duo pack is invigorated with two anti-aging powerhouses in one set. Our Olay Regenerist Detoxifying Pore Scrub Cleanser and Olay Regenerist Micro-Sculpting Cream help provide visible results for brighter skin and reduced appearance of wrinkles starting on day 1. The anti-aging face cleanser with exfoliants deep cleans and gently exfoliates dead skin cells for spa-like prep for daily skincare. Skin is immediately smooth and refreshed. Micro-sculpting cream completes the treatment with a unique, moisture-binding formula with Amino-Peptide Complex II that instantly plumps and lifts skin cells. The advanced formula delivers anti-aging ingredients 10 layers deep into the skin's surface to correct the look of deep wrinkles and improve skin's texture and elasticity. It's the perfect way to achieve fully hydrated, ageless skin.Detoxify & restore skin with our Face Wash Regenerist Advanced Anti-Aging Duo Pack                  All the anti-aging benefits of the Olay Regenerist system in a convenient set with full-size products                  Deep clean & detoxify to reveal smooth skin with Olay Regenerist Detoxifying Pore Scrub Cleanser                  Take charge with Olay Regenerist Micro-Sculpting Face Moisturizer Cream for visible wrinkle results day 1                  Luxurious skincare infused with Hyaluronic Acid, Amino-Peptide Complex II & Niacinamide (Vitamin B3)"
                },
                {
                  img:"https://m.media-amazon.com/images/I/71z09hwuAnS._AC_SL1500_.jpg",
                  img1:"https://m.media-amazon.com/images/I/61QNhYyH0pL._AC_SL1500_.jpg",
                  img2:"https://m.media-amazon.com/images/I/81W8QhdHahS._AC_SL1500_.jpg",
                  img3:"https://m.media-amazon.com/images/I/81nGxM47NjL._AC_SL1500_.jpg",
                  desc:"Newest Lenovo V15 IIL Business Laptop Computer, 15.6\" FHD Display, 10th Gen Quad-Core Intel i5-1035G1, 12GB DDR4 RAM, 256GB PCIe NVMe SSD, WiFi, HD Webcam, HDMI, Windows 10 Pro, GalliumPi Accessories",
                  price:66258,
                  category:"laptop",
                  description: "We sell computers with upgraded configurations. If the computer has modifications (listed above), then the manufacturer box is opened for it to be tested and inspected and to install the upgrades to achieve the specifications as advertised. If no modifications are listed, the item is unopened and untested. Defects & blemishes are significantly reduced by our in-depth inspection & testing.                  Processor:                  10th Generation Intel Core i5-1035G1 Processor (1.0 GHz up to 3.6 GHz, 4 Cores, 8 Threads, 6MB Intel Smart Cache)                                    Display:                 15.6\" Full HD 1920 x 1080 Anti-Glare TN 220 nits Widescreen Display                                    Hard Drive:                  Upgraded to 256GB PCIe NVMe SSD                                    Memory:                  Upgraded to 12GB DDR4 SDRAM                                    Graphics:                  Intel UHD Graphics                                    Operating system:                  Windows 10 Pro 64-Bit 【10th Generation Intel Core i5-1035G1】High-performance 10th Generation Intel Core i5-1035G1 processor runs from 1.0 GHz up to 3.6 GHz, 4 Cores, 8 Threads, 6MB Intel Smart Cache.                  【15.6\" FHD Display】15.6\" Full HD 1920 x 1080 TN 220nits Anti-Glare Widescreen Display, Intel UHD Graphics. Yield vivid colors and clarity, with narrow side bezels to enhance the view.                  【Upgraded to 12GB DDR4 SDRAM ‖ 256GB PCIe NVMe SSD】Substantial high-bandwidth RAM is ready to run powerful programs with efficient multitasking. Fast SSD storage boost productivity. Massive amounts of storage and advanced communication power smoothly run your games and photo/video-editing applications.                  【Sleek Visuals】The contemporary design gives the laptop a premium look and feel, with a slim body that travels well when you're not in the office.                  【Features and Accessories】2 USB 3.1, 1 USB 2.0, HDMI, WiFi 5, Bluetooth 5, HD Camera, Dual Stereo Speakers, Windows 10 Pro, GalliumPi MousePad."            
                      },
                  {
                    img:"https://m.media-amazon.com/images/I/7113CFr3y9L._AC_SL1500_.jpg",
                    img1:"https://m.media-amazon.com/images/I/71zhXAPVI7L._AC_SL1500_.jpg",
                    img2:"https://m.media-amazon.com/images/I/71AuAdTMd7L._AC_SL1500_.jpg",
                    img3:"https://m.media-amazon.com/images/I/714s27cTqVL._AC_SL1500_.jpg",
                    desc:"2021 Newest HP Notebook 15 Laptop, 15.6\" Full HD Screen, Intel Celeron N4020 Processor, 8GB RAM, 128GB SSD, 1-Year Microsoft Office 365, HDMI, RJ-45, Type-C, HDMI, Webcam, Windows 10 Home, Black",
                    price:39364,
                    category:"laptop",
                    description: "Capacity:8GB RAM | 128GB SSD                    The premium HP laptop, with powerful computing and connectivity features, is built for speed, multitasking and collaboration. Sleek, small, durable, the high performing PC delivers unparalleled results and snappy experience for intensive applications or everyday tasks at work, school or life. Super thin and light for easy portability                                        Processor                    Intel Celeron N4020 (1.1 GHz base frequency, up to 2.8 GHz burst frequency, 4 MB L2 cache, 2 cores)                                        Memory                    8GB DDR4 RAM invigorates powerful multitasking and seamless experience                                        Hard Drive                    128GB SSD (15x faster than HDD, ample storage) delivers instant boot-up, fast data access                                        Display & Graphics                    15.6\" diagonal, FHD (1920 x 1080), IPS, micro-edge, anti-glare, 250 nits, 45% NTSC                                        Operating System                    Windows 10 Home - perfect for business/education                                        Ports                    1 x SuperSpeed USB Type-C 5Gbps signaling rate | 2 x SuperSpeed USB Type-A 5Gbps signaling rate- Quick data transfer (Data transfer only)                    HDMI - connect to HDTV or monitor                    Headphone/Microphone combo jack - true sound quality                    1 x multi-format SD media card readerPremium Features                    Realtek RTL8821CE 802.11a/b/g/n/ac (1x1) Wi-Fi and Bluetooth 4.2 combo                    Webcam: HP True Vision 720p HD camera with integrated dual array digital microphones. Ready for video chat, teleconference, online class"
                  },
                  {
                    img:"https://m.media-amazon.com/images/I/61lOCikvuXL._AC_SL1500_.jpg",
                    img1:"https://m.media-amazon.com/images/I/61F6h+iYUsL._AC_SL1500_.jpg",
                    img2:"https://m.media-amazon.com/images/I/61ryOug8uyL._AC_SL1500_.jpg",
                    img3:"https://m.media-amazon.com/images/I/61j71+1HI3L._AC_SL1500_.jpg",
                    desc:"2021 Dell Inspiron 15.6\" Laptop Intel Pentium N5030,Upto 3.1GHz 16GB RAM&1TB SSD",
                    price: 33171,
                    category:"laptop",
                    description: "Graphic Card:Intel UHD Graphics 600 with shared graphics memory                    Backlit Keyboard:No                                        Media drive: Memory card reader                                        Optical Drive: No DVD-RW                                        Built-in HD webcam with microphone: YES                                        Wireless connectivity:Intel Wi-Fi 6 2x2 (Gig+) and Bluetooth                                        Weight(pounds):3.91 pounds                                        Battery:3-Cell, 42 WHr, Integrated battery                                        Dimension(inches):14.33\" x 9.8\" x 0.71\"                                        Color:BlackEquipped with Intel Core i7-9750H Processor, FX505 is able to play the latest games and multitask With ease. FX505 uses high-frequency DDR4 2400MHz RAM to ensure smooth performance. FX505 features one of the fastest Wi-Fi standards available — The latest Intel 802.11AC Wave 2 boasts data transfer rates of up to an incredible 1.7Gbps. To top it all off, it's red-backlit gaming keyboard is rated at 20-million keystroke durability. The actual transfer speed of USB 3.0, 3.1 (Gen 1 and 2), and/or Type-C will vary depending on many factors including the processing speed of the host device, file attributes and other factors related to system configuration and your operating environment. 15.6” IPS level FHD display"             
                         },
                    {
                      img:"https://i5.walmartimages.com/asr/85548b28-447a-4f2b-bea8-220f1c2983e2.cefe077451ac73cd77e70e2a96d50db9.jpeg",
                      img1:"https://i5.walmartimages.com/asr/d08a8e01-47d2-44f3-8fa9-358c34edb04c.7a3cb2258578d1865d2cb9f62dcf9945.png",
                      img2:"https://i5.walmartimages.com/asr/b7e6316d-9de2-414a-adcf-78a8ac57dbce.4f253ac1e57ae1615f11b5e128886a0f.jpeg",
                      img3:"https://i5.walmartimages.com/asr/ab822ae5-aec1-4d3c-a89f-e42c67bcae8e.187da81415ca67fafd2043ea45eee8b6.jpeg",
                      desc:"Gateway 14.1\" Ultra Slim Notebook, FHD, Intel® Core™ i3-1115G4, Dual Core, 128GB SSD, 4GB RAM, Tuned by THX™ Audio, Fingerprint Scanner, 1.0MP Webcam, HDMI, Cortana, Windows 10 S, Green",
                      price:33684,
                      category:"laptop",
                      description: "The 14.1” Ultra Slim Notebook from Gateway is the ultimate portable notebook that brings crystal-clear picture for all of your tasks. You’re guaranteed to experience clarity with a 14.1” LCD IPS Display and precision touchpad. The computer is powered by a 11th Gen Intel® Core™ i3-1115G4 Processor and has 4 GB memory RAM.Windows 10 Home (S mode)                      11th Gen Intel® Core™ i3-1115G4 Processor (1.2GHz, Up to 4.10 GHz, 6M Cache)                      14.1” LCD IPS Display, (1920 x 1080)                      Precision Touchpad                      Tuned by THX™ Audio                      128 GB Solid State Drive                      4 GB Memory (RAM)                      Built-in Fingerprint Scanner (Windows Hello)                      1.0 MP Front-Facing Camera                      Up to 8.5 hours of battery life                      Micro SD Slot x 1 (Up to 512 GB)                      HDMI Output x 1                      USB Type-C (Data transfer only) x 1                      USB 3.0 x 2                      Built-in Stereo Speakers x 2                      Bluetooth 5.1                      Built-in Microphone                      Product Dimensions: 13.1” x 8.9” x 0.8”                      Weight:  3.5 lbs.                      Free Upgrade to Windows 11 when available "                    
                  }
 ];
        function showproduct(products){
        products.forEach(function(item){

        var div=document.createElement("div");
        var figure=document.createElement("figure");
        
        var img=document.createElement("img");
        img.onclick=function (){
        showDetail(item)
        };
        figure.append(img);
        img.src=item.img;
        // var price=document.createElement("p");
        // price.textContent=item.price;
        var prod_name=document.createElement('p')
        prod_name.id="desc";
        prod_name.textContent=item.desc;

        let add=document.createElement("button");
        

        add.onclick=function (){
        addtocart(item)
        };

        div.append(add,figure, prod_name);
       
        proDiv.append(div)
       
        })
    }
showproduct(products);

if(localStorage.getItem("ubuy")===null){
  localStorage.setItem("ubuy",JSON.stringify([]));
  
}
function addtocart(p){
var ubuyStorage=JSON.parse(localStorage.getItem("ubuy"));
ubuyStorage.push(p);
localStorage.setItem("ubuy",JSON.stringify(ubuyStorage));
console.log(ubuyStorage)
}

if(localStorage.getItem("ubuyitem")===null){
  localStorage.setItem("ubuyitem",JSON.stringify([]));
  
}
function showDetail(i){
 var detailDisplay=JSON.parse(localStorage.getItem("ubuyitem"));
 detailDisplay=i;
 localStorage.setItem("ubuyitem",JSON.stringify(detailDisplay));
 console.log(detailDisplay);
 location.href="showdetail.html";
}


function cat(show){
         if(show=="phone"){
            var newArray = products.filter(function (el) {
        return el.category == "phones";
});
            }
            else if(show=="laptop"){
            var newArray = products.filter(function (el) {
        return el.category == "laptop";
});
            }

            if(show=="skin"){
            var newArray = products.filter(function (el) {
        return el.category == "skin";
});
            }

            if(show=="cardio"){
            var newArray = products.filter(function (el) {
        return el.category == "cardio";
});
            }
        if(localStorage.getItem("category"===null)){
            localStorage.setItem("category",JSON.stringify([]));
        }
        var ar=JSON.parse(localStorage.getItem("category"));
        ar=newArray;
        localStorage.setItem("category",JSON.stringify(ar));
        location.href="category.html";
}



var cart=JSON.parse(localStorage.getItem("ubuyCart"));
var sup=document.getElementById("number");
        sup.textContent=cart.length;



        function signin(e){

        e.preventDefault();
        var search=document.getElementById("global").value;
        var searchArr=[];
    if(localStorage.getItem("search"===null)){
            localStorage.setItem("search",JSON.stringify([]));
        }
            for(var i=0; i<products.length; i++){
                if(products[i].description.includes(search)||products[i].desc.includes(search)){
                    searchArr.push(products[i]);
                }
            }
console.log(searchArr)
var ar1=JSON.parse(localStorage.getItem("search"));
        ar1=searchArr;
        localStorage.setItem("search",JSON.stringify(ar1));
        location.href="search.html";
            }