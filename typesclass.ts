class Box{
 private length:number;
 private width:number;
 private height:number;

constructor(length:number,width:number,height:number){
    this.length=length;
    this.width=width;
    this.height=height;
}

findvolume=():number=>{
    console.log(this.length*this.width*this.height);
    return this.length*this.width*this.height;}

}




let box1=new Box(2,3,4);



//access modifiers


