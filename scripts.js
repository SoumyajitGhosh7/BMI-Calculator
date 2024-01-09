let form=document.querySelector('form')
    form.addEventListener('submit',e=>{
        e.preventDefault();

        let h=document.querySelector('#height').value;
        let w=document.querySelector('#weight').value;
        h=parseInt(h);
        w=parseInt(w);
        let res=document.querySelector('#results');
        let newele=document.createElement('span');
        let val;
        if(h<=0 || h===''||isNaN(h)) {
            val="Enter a valid height";
        }else if(w<=0 || w===''||isNaN(w)) {
            val=`Enter a valid weight`;
        }else{
            val=(w/((h*h)/10000)).toFixed(2);
            let selectAns;
            if(val<18.6){
                selectAns=document.querySelector('#less');
            }else if(val>24.9){
                selectAns=document.querySelector('#high');
            }else{
                selectAns=document.querySelector('#normal');
            }
            selectAns.style.fontSize='xx-large';
            selectAns.style.color='white';
        }
        let text=document.createTextNode(val);
        newele.appendChild(text);
        res.appendChild(newele);
    })