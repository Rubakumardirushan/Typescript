interface Box{
    
    name:string;
findvolume:()=>number;
}
interface Infobox{
    length:number;
    width:number;
    height:number;
    

}


let findvolume=(info:Infobox)=>{
  
    return info.length*info.width*info.height;
}



let  findboxdeatils=(box1:Box)=>{

    console.log(box1.name);
    console.log(box1.findvolume());
    
}



findvolume({length:2,width:3,height:4});
findvolume({length:21,width:3,height:4});
findboxdeatils({name:'box1',findvolume: () => findvolume({ length: 2, width: 3, height: 4 })});