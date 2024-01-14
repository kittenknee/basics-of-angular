export interface locations{
    id: number;
    name: string;
    area: string;
    address: string;
    contact: string;
    map: string;    
}

export const Locations: locations[] = [
    { id: 1, name: "Glasgow", area: "Scotland", address: "KeyPoint Technologies (UK) Ltd. 1 Ainslie Road, Hillington Park, Glasgow G52 4RU, Scotland.", contact: "+44 (0)141 585 6492", map: "" },
    { id: 2, name: "Hyderabad", area: "India", address: "KeyPoint Technologies India Pvt Ltd. RAJAPRAASADAMU D.No. 1-55/4/RP/L2/W1, Level 2, Wing 2, Botanical Gardens Road, Kondapur, Hyderabad-500084.", contact: "+91 40 40337000", map: "" },
    { id: 3, name: "CA", area: "USA", address: "KeyPoint Technologies US Inc. 1551 McCarthy Blvd., Suite 117 Milpitas, CA - 95035, USA.", contact: "+1 650 282 5757", map: "" },
    { id: 4, name: "Seoul", area: "Korea", address: "KeyPoint Technologies. 16F, Dukmyung Bldg., 625, Teheran-ro, Gangnam-gu, Seoul, 06713, Korea.", contact: "+1 408 519 6014", map: "" }
]