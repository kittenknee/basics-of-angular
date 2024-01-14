export interface products_carousel{
    id: number;
    img_path: string;
    img_alt: string;
    subheading: string;
    heading: string;
    details: string;
    button: string;
    link: string;
}

export const ProductsCarousel: products_carousel[] = [
    { id: 1, img_path: "../assets/products_carousel/prod_car1.png", img_alt: "Cerina_Studio", subheading: "Innovate", heading: "Cerina Studio", details: "Cerina studio is a platform that paves a path to connect intelligent, human- centric and futuristic technologies and integrates interactive virtual assistants powered by conversational AI, Machine learning, NLP and deep learning development.", button: "Engage", link: "" },
    { id: 1, img_path: "../assets/products_carousel/prod_car2.png", img_alt: "Transflow", subheading: "AI Powered Innovations", heading: "Translation and Management System (TMS)", details: "We adopted a unique approach to project management. Transflow automates and centralizes entire localization workflow, right from quoting, job assignments, progress tracking, notifications, and maximises productivity.", button: "Expand", link: "" },
    { id: 1, img_path: "../assets/products_carousel/prod_car3.png", img_alt: "AI_Keyboard", subheading: "AI Powered Innovations", heading: "Xploree AI Keyboard", details: "Industry’s first AI powered multilingual keyboard application supports both Android and IOS which understands users’ intent and interests and recommends useful content in real time conversations known as Sentiment analysis.", button: "Discover", link: "" },
    { id: 1, img_path: "../assets/products_carousel/prod_car4.png", img_alt: "Infotainment_System", subheading: "AI Powered Infotainment Keyboard", heading: "Xploree Solutions For Infotainment Systems", details: "A smart virtual keyboard can be helpful in the car infotainment system by providing an easy and efficient way for the user to input text, such as for searching for destinations or entering a phone number for hands-free calling. It can also provide predictive text and autocomplete features to make the input process faster and more accurate.", button: "Infotainment", link: "" }
]