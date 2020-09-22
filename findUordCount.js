
    let data = {
        uniqueWordCount:{

        },
        set newWord(word){
            let hasKeys = Object.keys(this.uniqueWordCount).indexOf(word) > -1;
            if(hasKeys)
            this.uniqueWordCount[word] = this.uniqueWordCount[word]+1;
            else {
                this.uniqueWordCount[word] = 1;
            }
        },
        set text(p){
            p.replace(/(\w+)/ig, (found) => {
                this.newWord = found;
            });
        }
    };
    
    data.text = `my simple JavaScript library, called FuncJS has a function called "count()" which does exactly what it's called — count words.

    For example, say that you have a string full of words, you can simply place it in between the function brackets, like this:
    
    count("How many words are in this string?");
    and then call the function, which will then return the number of words. Also, this function is designed to ignore any amount of whitespace, thus giving an accurate result.
    
    To learn more about this function, please read the documentation at http://docs.funcjs.webege.com/count().html and the download link for FuncJS is also on the page.
    
    Hope this helps anyone wanting to do this! :)`;

console.log(data.uniqueWordCount);