const palindromes = function (word) {
    /*let pal = "";
    let isPal = false;
    for(let i = word.length-1; i >= 0; i--){
        pal += word[i].toLowerCase();
        
    }

    if(!(/[a-zA-Z]/).test(pal[0])){
       
       pal += pal[0];
       pal = pal.replace(pal[0],'');
    
    }
    if(word[0].toUpperCase() === word[0]){
       pal = pal.replace(pal[0],pal[0].toUpperCase())

    }
       if(pal == word){
        return true;
       } else {
        return pal;
       }
    */

       let word2 = word;
    let pal = "";
    let j = 0;
    for(let i = word.length-1; i >= 0; i--){
        
       
            
            
     
          
          pal += word[i].toLowerCase();
           
         word2 = word2.toLowerCase();
      
    }
   pal = pal.replace(/[^A-Za-z0-9]/g, '');
   word2 = word2.replace(/[^A-Za-z0-9]/g, '');

    return  pal == word2;
    
};

// Do not edit below this line
module.exports = palindromes;
