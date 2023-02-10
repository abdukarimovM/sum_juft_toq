function toq_juft(num){
    juft = 0;
    toq = 0;
    for(let i = 1; i <= num; i++){
        if(i % 2 == 0){
            juft += i;
        }else{
            toq += i;
        }
    }
    console.log("Juft: ", juft);
    console.log("Toq: ", toq);
}

toq_juft(10)