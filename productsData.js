// Product Data
const products = [
    {
        id: "overlay1",
        title: "Neon Pulse Overlay Pack",
        price: 9.99,
        comparePrice: 16.00,
        images: [
            "https://public-files.gumroad.com/rhvs93padzn48bkkj8127ivyecgb",
            "https://public-files.gumroad.com/cki4i0a02glmkbp8owgx233x1sdl",
            "https://public-files.gumroad.com/rsnemtt7rsxfq9sjyxin5o4m0lb5"
        ],
        description: "The Neon Pulse Overlay Pack brings an electrifying aesthetic to your stream, complete with dynamic alerts, animated scenes, and modular layout options. Perfect for tech streamers and gamers who want to stand out.",
        platforms: ["Twitch", "Kick", "YouTube", "Facebook"],
        software: ["OBS", "Streamlabs", "StreamElements"],
        category: "Stream Overlays",
        bestSeller: true,
        dateAdded: "2025-08-01",
        purchaseLink: "https://streamoverlayspro.gumroad.com/l/neon-core-overlay?wanted=true"
    },
    {
        id: "overlay2",
        title: "Minimalist Studio Pack",
        price: 18.00,
        comparePrice: 28.00,
        images: [
            "https://placehold.co/600x400/10b981/white?text=Minimalist+1",
            "https://placehold.co/600x400/059669/white?text=Minimalist+2",
            "https://placehold.co/600x400/34d399/white?text=Preview"
        ],
        description: "Clean, professional overlays designed for creators who want to focus on content without distractions. Features elegant typography and subtle animations.",
        platforms: ["Twitch", "YouTube"],
        software: ["OBS", "Streamlabs"],
        category: "Stream Overlays",
        bestSeller: true,
        dateAdded: "2025-06-28",
        purchaseLink: "https://example.com/purchase/overlay2"
    },
    {
        id: "overlay3",
        title: "Retro Gaming Collection",
        price: 12.00,
        comparePrice: 20.00,
        images: [
            "https://placehold.co/600x400/f97316/white?text=Retro+1",
            "https://placehold.co/600x400/ea580c/white?text=Retro+2",
            "https://placehold.co/600x400/fb923c/white?text=Preview"
        ],
        description: "Bring back the nostalgia with our vibrant retro gaming overlays perfect for classic game streams. Includes CRT effects and pixel art elements.",
        platforms: ["Twitch", "Kick"],
        software: ["StreamElements", "OBS"],
        category: "Stream Overlays",
        bestSeller: true,
        dateAdded: "2025-07-03",
        purchaseLink: "https://example.com/purchase/overlay3"
    },
    {
        id: "overlay4",
        title: "Cyberpunk Alert Bundle",
        price: 16.00,
        comparePrice: 26.00,
        images: [
            "https://placehold.co/600x400/8b5cf6/white?text=Cyberpunk+1",
            "https://placehold.co/600x400/a855f7/white?text=Cyberpunk+2",
            "https://placehold.co/600x400/c084fc/white?text=Preview"
        ],
        description: "Futuristic alerts and notifications with glitch effects and neon lighting. Includes follower alerts, donation notifications, and subscription messages.",
        platforms: ["Twitch", "YouTube", "Facebook"],
        software: ["Streamlabs", "StreamElements"],
        category: "Stream Alerts",
        bestSeller: true,
        dateAdded: "2025-06-30",
        purchaseLink: "https://example.com/purchase/overlay4"
    },
    {
        id: "overlay5",
        title: "Chat Box Pro",
        price: 8.00,
        comparePrice: 15.00,
        images: [
            "https://placehold.co/600x400/06b6d4/white?text=Chat+1",
            "https://placehold.co/600x400/0891b2/white?text=Chat+2",
            "https://placehold.co/600x400/0ea5e9/white?text=Preview"
        ],
        description: "Modern chat box designs with customizable themes and animations. Supports Twitch, YouTube, and Facebook chat integrations.",
        platforms: ["Twitch", "Kick", "YouTube"],
        software: ["OBS", "StreamElements"],
        category: "Chat Box Overlays",
        bestSeller: true,
        dateAdded: "2025-07-02",
        purchaseLink: "https://example.com/purchase/overlay5"
    },
    {
        id: "overlay6",
        title: "Premium Stream Suite",
        price: 25.00,
        comparePrice: 40.00,
        images: [
            "https://placehold.co/600x400/ec4899/white?text=Premium+1",
            "https://placehold.co/600x400/d946ef/white?text=Premium+2",
            "https://placehold.co/600x400/a855f7/white?text=Preview"
        ],
        description: "Complete stream package with overlays, alerts, and widgets for a cohesive look. Everything you need to professionalize your stream in one pack.",
        platforms: ["Twitch", "YouTube", "Facebook", "Kick"],
        software: ["OBS", "Streamlabs", "StreamElements"],
        category: "Stream Overlays",
        bestSeller: true,
        dateAdded: "2025-06-29",
        purchaseLink: "https://example.com/purchase/overlay6"
    },
	{
        id: "overlay7",
        title: "Premium Stream Suite",
        price: 25.00,
        comparePrice: 40.00,
        images: [
            "https://placehold.co/600x400/ec4899/white?text=Premium+1",
            "https://placehold.co/600x400/d946ef/white?text=Premium+2",
            "https://placehold.co/600x400/a855f7/white?text=Preview"
        ],
        description: "Complete stream package with overlays, alerts, and widgets for a cohesive look. Everything you need to professionalize your stream in one pack.",
        platforms: ["Twitch", "YouTube", "Facebook", "Kick"],
        software: ["OBS", "Streamlabs", "StreamElements"],
        category: "Stream Overlays",
        bestSeller: true,
        dateAdded: "2025-06-29",
        purchaseLink: "https://example.com/purchase/overlay6"
    },
	{
        id: "overlay8",
        title: "Premium Stream Suite",
        price: 25.00,
        comparePrice: 40.00,
        images: [
            "https://placehold.co/600x400/ec4899/white?text=Premium+1",
            "https://placehold.co/600x400/d946ef/white?text=Premium+2",
            "https://placehold.co/600x400/a855f7/white?text=Preview"
        ],
        description: "Complete stream package with overlays, alerts, and widgets for a cohesive look. Everything you need to professionalize your stream in one pack.",
        platforms: ["Twitch", "YouTube", "Facebook", "Kick"],
        software: ["OBS", "Streamlabs", "StreamElements"],
        category: "Stream Overlays",
        bestSeller: true,
        dateAdded: "2025-06-29",
        purchaseLink: "https://example.com/purchase/overlay6"
    },
	{
        id: "overlay9",
        title: "Premium Stream Suite",
        price: 25.00,
        comparePrice: 40.00,
        images: [
            "https://placehold.co/600x400/ec4899/white?text=Premium+1",
            "https://placehold.co/600x400/d946ef/white?text=Premium+2",
            "https://placehold.co/600x400/a855f7/white?text=Preview"
        ],
        description: "Complete stream package with overlays, alerts, and widgets for a cohesive look. Everything you need to professionalize your stream in one pack.",
        platforms: ["Twitch", "YouTube", "Facebook", "Kick"],
        software: ["OBS", "Streamlabs", "StreamElements"],
        category: "Stream Overlays",
        bestSeller: true,
        dateAdded: "2025-06-29",
        purchaseLink: "https://example.com/purchase/overlay6"
    }
];

// Testimonial Data
const testimonials = [
    {
        text: "These overlays completely transformed my stream! My viewers constantly ask where I got them. The setup was incredibly easy.",
        author: "Alex Streamer, Twitch Partner",
        rating: 5
    },
    {
        text: "I've tried many overlay services, but StreamPro stands out with their attention to detail and responsive customer support.",
        author: "Jamie Content, YouTube Creator",
        rating: 5
    },
    {
        text: "The customization options allowed me to create a unique brand identity that perfectly matches my content style.",
        author: "Taylor Live, Kick Streamer",
        rating: 4
    },
    {
        text: "As a new streamer, I was intimidated by overlays until I found StreamPro. Their beginner-friendly designs got me started quickly!",
        author: "Morgan Games, Twitch Affiliate",
        rating: 5
    },
    {
        text: "The quality and performance of these overlays are unmatched. My stream runs smoothly even with all the animations.",
        author: "Casey Stream, YouTube Gaming",
        rating: 5
    }
];

// FAQ Data
const faqData = {
    payment: [
        {
            question: "What payment methods are available?",
            answer: "We accept all major debit & credit cards through Stripe. We also accept payments through PayPal."
        },
        {
            question: "Will I get a receipt for my purchase?",
            answer: "Yes, upon purchasing your graphics, you will receive an email with a detailed receipt of your purchase. If you are not seeing the email it may be in your spam folder. To ensure that you continue to receive our emails, we kindly request that you mark our emails as 'Not Spam'. If you for some reason do not receive this email, feel free to email us at support@streamoverlayspro.com"
        },
        {
            question: "What currency will I be charged in?",
            answer: "You will be charged in your local currency—USD, EUR, or GBP—based on your country. Prices may appear in USD, but at checkout, you’ll be redirected to Gumroad, where you’ll be charged in your country’s currency."
        },
        {
            question: "Having trouble checking out?",
            answer: "Double check that your payment information was entered in correctly. If everything looks correct try again in a few minutes. If you are still having issues please try another method of payment."
        },
        {
            question: "Can I get a refund for my purchase?",
            answer: "All our premade designs are instantly downloadable, and once the purchase is completed, they are considered non-returnable and non-refundable. We recommend thoroughly reviewing the product details, specifications, and previews before making a purchase to ensure it aligns with your needs. If you have any questions or concerns about a specific design, we encourage you to contact our customer support team prior to completing your purchase."
        }
    ],
    delivery: [
        {
            question: "How Will My Order Be Delivered?",
            answer: "Products become available to download immediately after purchase by clicking the download button(s). The links are also sent to the email address that was used during checkout. If you don't see the email it might be in your spam folder. To ensure that you continue to receive our emails, we kindly request that you mark our emails as 'Not Spam'. Customized logos will be sent to your email in 1-3 business days after your order is placed."
        },
        {
            question: "I'm Having Problems With My Delivery",
            answer: "If you don't see the email it might be in your spam folder. To ensure that you continue to receive our emails, we kindly request that you mark our emails as 'Not Spam'. If you are still unable to locate the email, please let us know and we will resend the order email as soon as we can."
        }
    ],
    howto: [
        {
            question: "Having trouble uploading emotes/badges/overlay?",
            answer: "Our files come bundled in a zip file, which is like a digital folder that keeps everything together and makes it easier to download with a single file. To upload these files you will first need to extract the files from the zip file. Windows: Right click .zip file and select 'Extract All…' and select where to extract the files. Mac: Double click .zip file will extract the files to a new folder matching the zip files name."
        },
        {
            question: "How to upload Twitch emotes?",
            answer: "Here is our guide for uploading emotes to Twitch."
        },
        {
            question: "How to upload Twitch badges?",
            answer: "Here is our guide on uploading badges to Twitch."
        },
        {
            question: "How to upload Twitch panels?",
            answer: "Here is Twitch's guide on uploading panels."
        },
        {
            question: "How to resize emotes and badges?",
            answer: "You can use our free resize tool to resize emotes to badge size and vice-versa."
        },
        {
            question: "How do I setup/import a Twitch overlay?",
            answer: "How to Import Twitch overlay in OBS. How to Import Twitch overlay in StreamLabs."
        },
        {
            question: "How to change the color of my overlay in OBS / OBS Studio?",
            answer: "If you are using OBS, you can customize the color of our overlays by adding a filter to the source. Right-click on any of the graphics in the Sources panel. Select Filters in the menu – it's close to the bottom of the list. Then click the plus icon under 'Effect Filters' and add the 'Color Correction' filter. You can name this anything you'd like and click 'ok'. Within the filter, you will see a bunch of sliders that you can play around with, but the most important one will be the 'Hue Shift' slider. This is the one that will allow you to change the color of your overlay. Any changes you make are automatically saved. If you don't like the changes you have made, you can either click 'Default' to reset the filter or delete the filter altogether by clicking the trash can icon."
        }
    ],
    customs: [
        {
            question: "Customized Logos",
            answer: "Customized logo will be emailed to you within 3 business days. If you don't see the email it might be in your spam folder. To ensure that you continue to receive our emails, we kindly request that you mark our emails as 'Not Spam'."
        },
        {
            question: "Custom Designs",
			answer: "We’d love to bring your custom overlay vision to life! To request a custom design, please email us at <strong>support@streamoverlayspro.com</strong>.<br><br>To help us understand your request, include the following in your email:<ul><li>🎮 Your stream platform (Twitch, Kick, YouTube, etc.)</li><li>🎨 Preferred style or theme (e.g. neon, minimalist)</li><li>🖌️ Colors you like (or want to avoid)</li><li>📦 What you need (full package, alerts, webcam frame, etc.)</li><li>🔧 Inspiration links or references (if any)</li><li>📅 Deadline, if applicable</li></ul>We receive many requests and only take on a few at a time. The more details you share, the better!"
        },
        {
            question: "Not finding something you like?",
            answer: "You can request new designs or upvote existing ideas on our suggestions page. To make a suggestion scroll down to the bottom of the suggestions page and click the + sign to submit a new idea. Note: If it asks for an email you can just click the skip button."
        }
    ],
    license: [
        {
            question: "What kind of license do I get with my purchase?",
            answer: "All our products come with a personal license, which means you can use them on all your streaming, content creation or social media channels, but you cannot redistribute, modify, resell or manipulate the products. Our paid customizable logos may be utilized by the YouTuber/Streamer that purchased the design for merchandise creation for their channel/community, with no alterations permitted to the original design."
        }
    ]
};
