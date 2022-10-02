// Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

// At long last, we need a way to unscramble what these pirates are saying.

// Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

// For example:

// grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
// Should return ["sport", "ports"].

// Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

// parameters: a strign - A array of strings
//result: The function is going to return the words that could posible be say by the pirate in the first parameter compare to the array of strings
// example:grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
// Should return ["sport", "ports"].
//psudocode:

function grabscrab(anagram, dictionary) {
        let ana ,
            dicti = [],
            obj = {};

    anagram.split("").forEach((e,i,a)=>{
        obj[e] = ++obj[e] || 1
    })
    ana = [Object.values(obj), Object.getOwnPropertyNames(obj).join("")]

    dictionary.forEach((e,i,a) =>{
        let split = e.split(""),
            caObj = {}
        split.forEach((n,u,r) =>{
            caObj[n] = ++caObj[n] || 1
        })
        dicti.push(Object.getOwnPropertyNames(caObj))
        dicti.push(Object.values(caObj))
        
        
    })

    //compare the strings with the original one 
    let number = 0,
        result = [];
    dicti.forEach((e,i,a)=>{
        for(let x = 0; x <= ana[1].length; x++){
            if(number === ana[1].length){
                result.push(e)
                number = 0
            }
            else if( e.findIndex(n => n === ana[1][x]) !== -1 && typeof a[i+1] === 'object' && a[i+1][e.findIndex(n => n = ana[1][x])] === ana[0][x]) number++
            else if(x == ana[1].length - 1) number = 0
            else  if (typeof e  === 'object') break
        }
        
    })
    return result
  }

  grabscrab( "ainstuomn", ["mountains", "hills", "mesa"])