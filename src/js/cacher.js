var bool=true;
function cache(id, question){
    if(bool==true){
        document.getElementById(id).style.display='none';
        document.getElementById(question).classList.remove('question2');
        document.getElementById(question).classList.add('question');
        bool=false;
    }else{
        document.getElementById(id).style.display='flex';
        document.getElementById(question).classList.remove('question');
        document.getElementById(question).classList.add('question2');


        bool=true;
    }
}
cache('solution1');