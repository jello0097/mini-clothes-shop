class Clothes{
    constructor(color, sex, size){
        this.color = color;
        this.sex = sex;
        this.size = size; 
    }
    getType(){
        return this.constructor.name.toLowerCase();
    }
}
class Tshirt extends Clothes{}
class Pants extends Clothes{}
class Skirt extends Clothes{}

class Shop{
    items = new Array();
    constructor(){
        this.insert(new Pants('blue', 'female', 'large'));
        this.insert(new Pants('pink', 'male', 'small'));
        this.insert(new Pants('yellow', 'female', 'medium'));
        this.insert(new Tshirt('blue', 'male', 'large'));
        this.insert(new Tshirt('pink', 'female', 'small'));
        this.insert(new Tshirt('yellow', 'male','medium'));
        this.insert(new Skirt('blue', 'female','medium'));
        this.insert(new Skirt('pink', 'male', 'small'));
        this.insert(new Skirt('yellow', 'female', 'large'));       
    }
    insert(item){
        this.items.push(item);
    }
    render(kind=null, filter=null){
        console.log(`kind: ${kind}, filter: ${filter}`);
        document.getElementById('items').innerHTML = "";

        for(const item of this.items){
            const type = item.getType();
            const color = item.color;

            if(kind === "byType" && type != filter)
                continue;
            if(kind === "byColor" && color != filter)
                continue;

            const article = document.createElement('article');
            article.setAttribute("class" , "item");
            article.setAttribute("type", type);
            article.setAttribute("color", color);

            const img = document.createElement('img');
            const imgName = item.color+'_'+type.substr(0,1);
            img.alt = imgName;
            img.src = 'imgs/'+imgName+'.png';
            article.appendChild(img);
            
            const span = document.createElement('span');
            span.innerHTML = item.sex+', '+item.size+' size';

            article.appendChild(img);
            article.appendChild(span);
            
            document.getElementById("items").appendChild(article); 
        }
    }
}

const shop = new Shop();
shop.render();

function filterClick(e){    
    let kind = e.target.parentNode.getAttribute('id');
    let filter = e.target.getAttribute('key');
    shop.render(kind, filter);
} 

document.querySelectorAll('button').forEach(button => button.addEventListener('click', filterClick));