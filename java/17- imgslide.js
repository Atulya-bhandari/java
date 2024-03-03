const img_array=['redTree.jpg','dear.jpg','tiger.jpg','moose.jpg','fox.jpg']

const array_length=img_array.length
let i=0


const next=()=>{
        i++
        i=i%array_length
        document.querySelector('img').src=`img/${img_array[i]}`
    }


const  prev=()=>{
    i--
    if(i<0){
        i=array_length-1
    }
    document.querySelector('img').src=`img/${img_array[i]}`
}






