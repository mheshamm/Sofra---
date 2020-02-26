



    
    
    /*
        document.querySelector('#remove1').addEventListener('click' , function (){
            document.querySelector('#divpro1').style.display='none';
        })
        document.querySelector('#remove2').addEventListener('click' , function (){
            document.querySelector('#divpro2').style.display='none';
        })
        document.querySelector('#remove3').addEventListener('click' , function (){
            document.querySelector('#divpro3').style.display='none';
        })
        document.querySelector('#remove4').addEventListener('click' , function (){
            document.querySelector('#divpro4').style.display='none';
        })
        document.querySelector('#remove5').addEventListener('click' , function (){
            document.querySelector('#divpro5').style.display='none';
        })
        document.querySelector('#remove6').addEventListener('click' , function (){
            document.querySelector('#divpro6').style.display='none';
        })
        */
        
        var removeBtn = document.getElementsByClassName('remove');
        console.log(removeBtn);

        for (var i =0 ; i<removeBtn.length ; i++){
            var clicked = removeBtn[i];
            clicked.addEventListener('click' , function(event){
                var removeClick = event.target;
                removeClick.parentElement.parentElement.remove();
            })
        }

        var removeCart =document.getElementsByClassName('remove-cart');
        console.log(removeCart);
        
        for (var i=0 ; i<removeCart.length ; i++){
            
           var cartClick=removeCart[i];
           
            
            cartClick.addEventListener('click' , function(event){
               
                var cartClicked = event.target;
                cartClicked.parentElement.parentElement.remove();
                if(removeCart.length===0){
                    document.querySelector('.cart-empty').style.display='block';
        
                }
                
                })
                
                
                }

                
                
                
               
                
                
        

        function caret(){
            document.querySelector('.fa-caret-down').style.display='block';
        
        }
        function rem(){
            document.querySelector('.fa-caret-down').style.display='none';
        }

        var btnred = document.getElementsByClassName('as');
        
        document.querySelector('#add-proo').addEventListener('click' , function(){
            $(".add-product").show(); // hide()
            document.querySelector('.add-products').style.display='block';
            document.querySelector('.menu-rest').style.display='none';
            document.querySelector('.head-rest').style.display='none';
            document.getElementsByClassName("name")[0].value = '';
            document.getElementsByClassName("product-price")[0].value = '';
            document.getElementsByClassName("desc")[0].value = '';
            document.getElementsByClassName("time1")[0].value = '';
            document.querySelector('#real').value = '';
            document.querySelector("#btn-img").style.display='none';
            document.getElementById('add-picp').classList.remove('btn-cl');
            

            

            

            document.querySelector("#btn-img").setAttribute('src','');
        
            
        
        })
        
                document.getElementById('add-picp').addEventListener('click' , function(){
        
                    document.getElementById('real').click();
                    
                    
        
                })
                document.getElementById('real').addEventListener('change' , function(){
                    const file = this.files[0];
                    if (file){
                        const reader = new FileReader();
                        document.querySelector("#btn-img").style.display='block';
                        document.getElementById('add-picp').classList.add('btn-cl');
                        reader.addEventListener('load' , function(){
                            document.querySelector("#btn-img").setAttribute('src' , this.result);
                            
        
        
                        })
                        reader.readAsDataURL(file);
                        
                    }
                })
                
        
                
        
        
        
        
                
                document.getElementsByClassName('add-product-btn')[0].addEventListener('click' , addtopro)
                
                    
                
        
                function addtopro(event){
                    var addBtn = event.target;
                    
                    var mealName = document.getElementsByClassName("name")[0].value;
                    var mealPrice1 = document.getElementsByClassName("product-price")[0].value;
                    var descr = document.getElementsByClassName("desc")[0].value;
                    var time = document.getElementsByClassName("time")[0].value;

                    
                    // var image = document.querySelector('#real').value;
                    var image = document.querySelector("#btn-img").getAttribute('src');
                    
                     
                    
        
                    
                    console.log(mealPrice1);
                    
                    addtoProducts( mealName , mealPrice1 , descr , time , image );
                    
                    
                    
        
                } 
                function addtoProducts( mealName , mealPrice1 , descr , time , image ){
                    var Item = document.createElement('div');
                    var items = document.getElementById('productsss');
                    Item.classList.add("col-md-4");
                    Item.classList.add("col-sm-6");
                    Item.classList.add("col-xs-12");
                    Item.innerHTML=`
                    <div class="product" id="divpro1">
                        <div class="pro-img">
                            <img src="${image}">
                        </div>
                        <div class="pro-body">
                            <h2>${mealName}</h2>
                            <h6>${descr}</h6>
                            <span class="price-of"><i class="fas fa-money-bill"></i> ${mealPrice1} ريال</span>
                            <span class="time"><i class="fas fa-concierge-bell"></i> ${time} دقيقة</span>
                        </div>
                        <div class="btn-details">
                            <button>أضغط للتفاصيل</button>
                        </div>
                                    
                    </div>
                                
                    `;
                    items.append(Item);
                    document.querySelector('.add-products').style.display='none';
                    document.querySelector('.menu-rest').style.display='block';
                    document.querySelector('.head-rest').style.display='block';
                    
                    
                    
        
        
                }
        
/*
        for (var i =0 ; i<btnred.length ; i++){
            var clickedred = btnred[i];
            clickedred.style.backgroundColor ='white';
            clickedred.addEventListener('click' , function(event){
                var white = event.target;
                
                if (white.style.backgroundColor ==='white'){
                    white.style.backgroundColor ='rgb(34, 1, 24)';
                    

                }
                else{
                    white.style.backgroundColor ='white';
                }
                

            })
        }
        */
       
        /*
        document.querySelector("#addtocart").addEventListener('click' , addtoCart)
        
            
        

        function addtoCart(event){
            var addBtn = event.target;
            
            var mealName = document.getElementsByClassName("meal-name")[0].innerText;
            var mealPrice = document.getElementsByClassName("price1")[0].innerText;
            var storeName = document.getElementsByClassName("store-name")[0].innerText;
            var image = document.getElementsByClassName("mealimg")[0].src;
            console.log(mealPrice);
            addIntoCart(mealName , mealPrice ,storeName ,image);
            

        } 
        function addIntoCart(mealName , mealPrice ,storeName ,image){
            var cartItem = document.createElement('div');
            var cartitems = document.getElementById('cart-elements');
            cartItem.innerHTML = ` 
                    <div class="cart-item">
                        <div class="card-cart">
                        <div class="item-img">
                            <img src="imgs\cart-img.jpg "width="100%">
                        </div>
                        <div class="item-body">
                            <h2 class="name">بيف برجر 250 جرام</h2>
                            <h2 class="price">75 ريال</h2>
                            <h2 class="seller">Wild Burger</h2>
                            <span class="quantity"><h2 >الكمية</h2>
                                <select>
                                    <option value="">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </span>
                            
                        </div>
                    </div>
                        <button class="remove-cart"><i class="fas fa-times-circle"></i> مسح</button>
                    </div>
                ` ;
             
                cartitems.append(cartItem);

        }
        */


        
       function diva(){
        document.querySelector('#store').style.display='none';
        if( document.querySelector('#store').style.display==='none'){
            document.querySelector('#store').style.display='block';
        }
        else {
            document.querySelector('#store').style.display='none'
        }
}
        
   
       
        
    
    
        

      




    
    /*
document.querySelector('#remove5').addEventListener('click' , function (){
    document.querySelector('#divpro5').style.display='none';
})
document.querySelector('#remove5').addEventListener('click' , function (){
    document.querySelector('#divpro6').style.display='none';
})
*/


        
        
        


        