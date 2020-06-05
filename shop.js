const AllClothes = new Array();

function makeClothes(type, color, sex, size){
    return {
        type,
        color,
        sex,
        size
    }
}
function render(filter = 'all'){
    document.getElementById('items').innerHTML = "";
    for(clothes of AllClothes){
        if(filter === clothes.type || filter === clothes.color || filter === "all"){
            // 상품을 담을 
            const article = document.createElement('article');
            article.setAttribute("class" , "item");
            article.setAttribute("type", clothes.type);
            article.setAttribute("color", clothes.color);

            // 상품 이미지와 설명 
            const img = document.createElement('img');
            const imgName = clothes.color+'_'+clothes.type;
            img.alt = imgName;
            img.src = 'imgs/'+imgName+'.png';
            article.appendChild(img);
            
            const span = document.createElement('span');
            span.innerHTML = clothes.sex+', '+clothes.size+' size';

            article.appendChild(img);
            article.appendChild(span);
            // item table 안에 tr 넣기 
            document.getElementById("items").appendChild(article);
        }
    }
}
function init(){
    AllClothes.push(makeClothes('p', 'blue', 'female', 'large'));
    AllClothes.push(makeClothes('p', 'pink', 'male', 'small'));
    AllClothes.push(makeClothes('p', 'yellow', 'female', 'medium'));
    AllClothes.push(makeClothes('s', 'blue', 'male', 'large'));
    AllClothes.push(makeClothes('s', 'pink', 'female', 'small'));
    AllClothes.push(makeClothes('s', 'yellow', 'male','medium'));
    AllClothes.push(makeClothes('t', 'blue', 'female','medium'));
    AllClothes.push(makeClothes('t', 'pink', 'male', 'small'));
    AllClothes.push(makeClothes('t', 'yellow', 'female', 'large'));
    render();
}
init();

function filterClick(e){
    if(e.target.getAttribute('key') === null){
        render();
    }else{
        const filter = e.target.getAttribute('key');
        console.log(`filter:${filter}`);
        render(filter);
    }
} 

document.querySelectorAll('button').forEach(button => button.addEventListener('click', filterClick));
document.getElementById("logo").addEventListener('click', filterClick);