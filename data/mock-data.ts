export interface Color {
    id: string;
    name: string;
    value: string;
  // You can add more properties as needed
}



// Sample mock data
const Colors: Color[] = [
  { id: "1", name: "red", value: "" },
  { id: "2", name: "blue", value: "" },
  { id: "3", name: "black",  value: "" },
  { id: "4", name: "gray",  value: "" },
   { id: "5", name: "white",  value: "" },
  // Add more color objects as needed
];

export { Colors };




export interface Memory {
    id: string;
    name: string;
    value: number;
  // You can add more properties as needed
}


// Sample mock data
const Memories: Memory[] = [
  { id: "1", name: "64GB", value: 64 },
  { id: "2", name: "128GB",value: 128 },
  { id: "3",name: "256GB", value: 256 },
  { id: "4", name: "512GB",value: 512 },
  // Add more color objects as needed
];
export { Memories };

