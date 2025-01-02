import{NextApiRequest,NextApiResponse} from "next";
export default function handler(req: NextApiRequest,res:NextApiResponse){
    const menuItems=[
        {id:1,label:"Home",icon:"FaHome",route: "/"},
        {id:2,label:"Trips",icon:"FaMapMarketAlt",route: "/trips"},
        {id:3,label:"Trucks",icon:"FaTruck",route: "/trucks"},
        {id:4,label:"Users",icon:"FaUser",route: "/users"},  
        {id:5,label:"Notifications",icon:"FaBell",route: "/notifications"},

    ];
    res.status(200).json(menuItems);
}